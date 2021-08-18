BEGIN;

DROP TABLE IF NOT EXISTS customers, photographer CASCADE;

CREATE TABLE IF NOT EXISTS customers(
    id SERIAL PRIMARY KEY,
    cus_name VARCHAR(100) NOT NULL,
    email VARCHAR(200) NOT NULL,
    phone INTEGER NOT NULL,
    city VARCHAR(100) NOT NULL,
    country VARCHAR(100) NOT NULL,
    purpose VARCHAR(100) NOT NULL,
    cus_message TEXT
);

INSERT INTO customers (cus_name, email, phone, city, country, purpose) VALUES
('Asmaa', 'adfsgfgdf@gmail.com', '00970599990111', 'Khan Younis', 'Palestine', 'Other'),
('Lina', 'adfsgfgdf@gmail.com', '00970599990111', 'Gaza', 'Palestine', 'Commercial');


CREATE TABLE IF NOT EXISTS photographer(
    id SERIAL PRIMARY KEY,
    photo_name VARCHAR(100) NOT NULL,
    cus_id INTEGER FOREIGN KEY REFERENCES customers(id)
);

INSERT INTO photographer (photo_name) VALUES ('Ahmed');

COMMIT;