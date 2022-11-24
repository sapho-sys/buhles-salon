export default function salonBooking(db) {
    // const Pool = db;
    let phoneNumber ='';
    let clientID;
    let stylistID;
    
    async function findStylist(phoneNumber){
        try {
            const data = await db.manyOrNone(`select * from stylist 
            where phone_number = $1`,[phoneNumber]);
            stylistID = data[0].id
            return data;
        } catch (error) {
            console.log('Here is the bug', error)
            
        }
    }

    async function findClient(phoneNumber){
        try {
            const data = await db.manyOrNone(`select * from client 
            where phone_number = $1`,[phoneNumber]);
            clientID = data[0].id
            console.log('myclient',clientID);
            await findClientBookings(clientID)
            return data;
        } catch (error) {
            console.log('Here is the bug', error);
        }
    }

    async function findTreatment(code){
        try {
           const data = await db.manyOrNone(`select * from treatment
            where code = $1`,[code]); 
            return data
        } catch (error) {
            console.log('Here is the bug', error)
        }
    }
    async function findAllTreatments(){
        const data = await db.manyOrNone(`select * from treatment`);
        return data;
    }

    async function makeBooking(day, time,treatmentId){   
        let dataModel =[
            day,
            time,
            clientID,
            treatmentId,
            stylistID
        ]
        try {
            const data = await db.none(`insert into 
            booking(booking_date, booking_time, client_id,treatment_id, stylist_id) 
            values ($1,$2,$3,$4,$5)`,dataModel)
            
        } catch (error) {
            console.log("here is the bug", error);
            
        }
       
    }

    async function findClientBookings(clientId){
        const data = await db.manyOrNone(`select * from booking where client_id = $1`,[clientId]);
        return data;
    }

    async function findAllBookings(date,time){
        const data = await db.manyOrNone(`select * from booking where booking_date = $1 AND booking_time = $2`,[date,time]);
        console.log('booking', data);
        return data;
    }

    async function totalIncomeForDay(date){
        const data = await  db.manyOrNone(`select SUM(treatment.price) from booking join 
        treatment ON booking.treatment_id = treatment.id where booking.booking_date = $1`,[date]);
        console.log('Money',data);
        return data;
    }

    
    


    return {
        findStylist,
        findClient,
        findTreatment,
        findAllTreatments,
        makeBooking,
        findClientBookings,
        findAllBookings,
        totalIncomeForDay

    }
}  