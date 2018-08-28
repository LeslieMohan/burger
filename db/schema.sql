DROP DATABASE IF EXISTS burgers_db;
CREATE database burgers_db;

USE cil3uejm3wtg16ux;

CREATE TABLE burgers (
	id INT(10) AUTO_INCREMENT,
	burger_name VARCHAR(100) NOT NULL,
	devoured BOOLEAN,
	PRIMARY KEY (id)
);