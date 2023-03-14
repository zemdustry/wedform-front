-- CREATE USERS --
CREATE USER wedweb WITH PASSWORD 'postgres';

-- SELECT DATABASE --
\c weddb

-- CREATE EXTENSION --
CREATE EXTENSION pgcrypto;

-- CREATE SCHEMA --
CREATE SCHEMA wedapp;

-- GRANT USER --
GRANT ALL ON DATABASE weddb TO wedadm;
GRANT ALL ON SCHEMA wedapp TO wedadm;


-- SET DEFAULT SCHEMA --
SET search_path TO wedapp;

-- CREATE TABLES --

-- CREATE phone TABLE --
	CREATE TABLE wedapp.phones (
		phone_id SERIAL PRIMARY KEY,
		number VARCHAR(20) NOT NULL,
		international_number VARCHAR(20) NOT NULL,
		national_number VARCHAR(20) NOT NULL,
		country_code VARCHAR(10) NOT NULL,
		dial_code VARCHAR(10) NOT NULL
		);

-- CREATE guests TABLE --
	CREATE TABLE wedapp.guests (
		guest_id SERIAL PRIMARY KEY,
		name VARCHAR(255) NOT NULL,
		surname VARCHAR(255) NOT NULL,
		phone_id INTEGER NOT NULL,
		email VARCHAR(255) NOT NULL,
		attend VARCHAR(255) NOT NULL,
		people_count INTEGER NOT NULL,
		children_count INTEGER NOT NULL,
		arrival VARCHAR(255) NOT NULL,
		transportation VARCHAR(255) NOT NULL,
		from_location VARCHAR(255) NOT NULL,
		transport_share BOOLEAN NOT NULL,
		event VARCHAR(255) NOT NULL,
		dietary BOOLEAN NOT NULL,
		dietary_detail TEXT NOT NULL,
		music_style VARCHAR(255) NOT NULL,
		brunch BOOLEAN NOT NULL,
		comment TEXT NOT NULL,
		CONSTRAINT fk_phone_id FOREIGN KEY(phone_id) REFERENCES wedapp.phones(phone_id)
		);

-- CREATE child TABLE --
	CREATE TABLE wedapp.children (
		child_id SERIAL PRIMARY KEY,
		name VARCHAR(255) NOT NULL,
		age INTEGER NOT NULL
		);

		-- CREATE person TABLE --	
	CREATE TABLE wedapp.persons (
		person_id SERIAL PRIMARY KEY,
		name VARCHAR(255) NOT NULL,
		surname VARCHAR(255) NOT NULL
		);


-- CREATE guests_children TABLE --
	CREATE TABLE guests_children (
		guest_id INTEGER NOT NULL,
		child_id INTEGER NOT NULL,
		PRIMARY KEY (guest_id, child_id),
		CONSTRAINT fk_guest_id FOREIGN KEY(guest_id) REFERENCES wedapp.guests(guest_id),
		CONSTRAINT fk_child_id FOREIGN KEY(child_id) REFERENCES wedapp.children(child_id)
		);

-- CREATE guests_persons TABLE --
	CREATE TABLE guests_persons (
		guest_id INTEGER NOT NULL,
		person_id INTEGER NOT NULL,
		PRIMARY KEY (guest_id, person_id),
		CONSTRAINT fk_guest_id FOREIGN KEY(guest_id) REFERENCES wedapp.guests(guest_id),
		CONSTRAINT fk_person_id FOREIGN KEY(person_id) REFERENCES wedapp.persons(person_id)
		);
	
-- GRANT cocoadm -- 
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA wedapp TO wedadm;	
GRANT SELECT, UPDATE, USAGE ON ALL SEQUENCES IN SCHEMA wedapp to wedadm;

-- GRANT cocoweb --
GRANT SELECT, INSERT ON TABLE guests TO wedweb;
GRANT SELECT, UPDATE, USAGE ON "guests_guest_id_seq" TO wedweb;

GRANT SELECT, INSERT ON TABLE phones TO wedweb;
GRANT SELECT, UPDATE, USAGE ON "phones_phone_id_seq" TO wedweb;

GRANT SELECT, INSERT ON TABLE children TO wedweb;
GRANT SELECT, UPDATE, USAGE ON "children_child_id_seq" TO wedweb;

GRANT SELECT, INSERT ON TABLE persons TO wedweb;
GRANT SELECT, UPDATE, USAGE ON "persons_person_id_seq" TO wedweb;

GRANT SELECT, INSERT ON TABLE guests_children TO wedweb;
GRANT SELECT, INSERT ON TABLE guests_persons TO wedweb;