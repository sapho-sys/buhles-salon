import assert from 'assert';
import SalonBooking from '../salon-booking.js';
import pgPromise from 'pg-promise';

const pgp = pgPromise({});
// TODO configure this to work.
const DATABASE_URL = process.env.DATABASE_URL || 'postgresql://postgres:sap123@localhost:5432/my_treats';

const config = { 
	connectionString : DATABASE_URL
}

const db = pgp(config);

let booking = SalonBooking(db);

describe("The Booking Salon", function () {

    beforeEach(async function () {
        await db.query('TRUNCATE TABLE booking restart identity;');
        await db.none(`delete from booking`);

    });

    it("should be able to list treatments", async function () {

        const treatments = await booking.findAllTreatments();
        assert.deepEqual([
            {
              code: 'PDQ1',
              id: 1,
              price: '175.00',
              type: 'Pedicure'
            },
            {
              code: 'MNQ2',
              id: 2,
              price: '215.00',
              type: 'Manicure'
            },
            {
              code: 'MKP3',
              id: 3,
              price: '185.00',
              type: 'Make-Up'
            },
            {
              code: 'B&L4',
              id: 4,
              price: '240.00',
              type: 'Brows & Lashes'
            }
          ], treatments);
    });

    it("should be able to find a stylist", async function () {

        const stylist = await booking.findStylist('0604216547');
        assert.deepEqual([
            {
              commission_percentage: '0.15',
              first_name: 'Sapho',
              id: 1,
              last_name: 'Nkunzi',
              phone_number: '0604216547'
            }
          ], stylist);
    });

    it("should be able to allow a client to make a booking", async function () {
        const client = await booking.findClient('0879674534');
        const stylist = await booking.findStylist('0737219876');
        let customer = client[0].id
        let styler = stylist[0].id


        const bookingss = await booking.makeBooking('2022-11-27', '10:30', customer, styler);

        const bookings = await booking.findClientBookings(customer);
        assert.deepEqual([
            {
              booking_date: '2022-11-27',
              booking_time: '10:30',
              client_id: 1,
              id: 1,
              stylist_id: 2,
              treatment_id: 1
            }
          ], bookings);
    });

    it('should be able to find a treatment and price',async function(){
        const treatment = await booking.findTreatment('PDQ1');
       
        assert.deepEqual(
            [ { 
                id: 1, type: 'Pedicure',
                 code: 'PDQ1',
                  price: '175.00'
                 } ], treatment)
    } )


    it("should be able to get client booking(s)", async function () {

        const client1 = await booking.findClient("0607230876");
        let customer = client1[0].id
    

        const stylist = await booking.findStylist('0737219876');
        let styler = stylist[0].id
        
        const treatment1 = await booking.findTreatment("PDQ1");
        let treat = treatment1[0].id

    
    
        const bookingss = await booking.makeBooking('2022-09-20', '12:30', treat, customer ,styler);
       
      

        const bookings = await booking.findClientBookings(customer);

        assert.deepEqual([
            {
              booking_date: '2022-09-20',
              booking_time: '12:30',
              client_id: 6,
              id: 1,
              stylist_id: 2,
              treatment_id: 1
            }
          ],bookings)
    })

    it("should be able to get bookings for a date", async function () {
        const client1 = await booking.findClient("0607230876");
        let customer = client1[0].id
    

        const stylist = await booking.findStylist('0737219876');
        let styler = stylist[0].id
        
        const treatment1 = await booking.findTreatment("MNQ2");
        let treat = treatment1[0].id

        const bookingss = await booking.makeBooking('2022-09-20', '12:30', treat, customer ,styler);
        
        const bookings = await booking.findAllBookings('2022-09-20', '12:30');

        assert.deepEqual([
            {
              booking_date: '2022-09-20',
              booking_time: '12:30',
              client_id: 6,
              id: 1,
              stylist_id: 2,
              treatment_id: 2
            }
          ], bookings);

    });

    it("should be able to find the total income for a day", function() {
        assert.equal(1, 2);
    })

    it("should be able to find the most valuable client", function() {
        assert.equal(1, 2);
    })
    it("should be able to find the total commission for a given stylist", function() {
        assert.equal(1, 2);
    })

    after(function () {
        db.$pool.end()
    });

});