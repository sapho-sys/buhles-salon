-- Table create scripts here
CREATE TABLE client(
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(20) NOT NULL,
    last_name VARCHAR(20) NOT NULL,
    phone_number VARCHAR(20) NOT NULL
);

CREATE TABLE treatment(
    id SERIAL PRIMARY KEY,
    type VARCHAR(20) NOT NULL,
    code VARCHAR(20) NOT NULL,
    price decimal(10,2) NOT NULL
);

CREATE TABLE stylist(
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(20) NOT NULL,
    last_name VARCHAR(20) NOT NULL,
    phone_number VARCHAR(20) NOT NULL,
    commission_percentage numeric(3,2) NOT NULL
);

CREATE TABLE booking(
    id SERIAL PRIMARY KEY,
    booking_date VARCHAR(40) NOT NULL,
    booking_time VARCHAR(40) NOT NULL,
    client_id INT NOT NULL,
    treatment_id INT NOT NULL,
    stylist_id INT NOT NULL,
    FOREIGN KEY (client_id)
    REFERENCES client(id),
    FOREIGN KEY (treatment_id)
    REFERENCES treatment(id),
    FOREIGN KEY (stylist_id)
    REFERENCES stylist(id)
);