-- Add insert scripts here

insert into treatment(type, code, price) VALUES ('Pedicure','PDQ1',175);
insert into treatment(type, code, price) VALUES ('Manicure','MNQ2',215);
insert into treatment(type, code, price) VALUES ('Make-Up','MKP3',185);
insert into treatment(type, code, price) VALUES ('Brows & Lashes','B&L4',240);

insert into client(first_name, last_name, phone_number) 
VALUES ('Chicco','Soko','0879674534');
insert into client(first_name, last_name, phone_number) 
VALUES ('Mandy','Liva','0818769876');
insert into client(first_name, last_name, phone_number)
 VALUES ('Thabang','Gideon','0607639876');
 insert into client(first_name, last_name, phone_number) 
VALUES ('Nothabo','Nabiso','0779654534');
insert into client(first_name, last_name, phone_number) 
VALUES ('Erica','Anderson','0618469876');
insert into client(first_name, last_name, phone_number)
 VALUES ('Thabiso','Lwandle','0607230876');



insert into stylist(first_name, last_name, phone_number, commission_percentage) 
VALUES ('Sapho','Nkunzi','0604216547',0.15);
insert into stylist(first_name, last_name, phone_number, commission_percentage) 
VALUES ('Hluma','Nkunzi','0737219876',0.15);
insert into stylist(first_name, last_name, phone_number, commission_percentage)
VALUES ('Somi','Gqiza','0755619061',0.15);
insert into stylist(first_name, last_name, phone_number, commission_percentage) 
VALUES ('Luvo','Sithongana','0634216547',0.17);
insert into stylist(first_name, last_name, phone_number, commission_percentage) 
VALUES ('Sandy','Mpunzi','0747219876',0.10);
insert into stylist(first_name, last_name, phone_number, commission_percentage)
VALUES ('April','Mena','0765619061',0.20);

insert into booking(booking_date, booking_time, client_id,treatment_id, stylist_id )
VALUES ('2022-11-27', '10:30', 1, 2, 2);
insert into booking(booking_date, booking_time, client_id,treatment_id, stylist_id )
VALUES ('2022-12-14', '14:30', 3, 1, 4);
insert into booking(booking_date, booking_time, client_id,treatment_id, stylist_id )
VALUES ('2022-12-16', '13:30', 4, 2, 5);
insert into booking(booking_date, booking_time, client_id,treatment_id, stylist_id )
VALUES ('2023-01-03', '12:00', 5, 3, 6);
insert into booking(booking_date, booking_time, client_id,treatment_id, stylist_id )
VALUES ('2022-11-23', '11:30', 2, 3, 1);






