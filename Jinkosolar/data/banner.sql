CREATE DATABASE jinkosolar CHARSET=UTF8;
USE jinkosolar;
CREATE TABLE banner(
	bid   INT PRIMARY KEY AUTO_INCREMENT,
	bname   VARCHAR(50) UNIQUE
);
INSERT INTO banner VALUES(null,"01.jpg");
INSERT INTO banner VALUES(null,"02.jpg");
INSERT INTO banner VALUES(null,"03.jpg");
INSERT INTO banner VALUES(null,"04.jpg");
INSERT INTO banner VALUES(null,"05.jpg");
INSERT INTO banner VALUES(null,"06.jpg");