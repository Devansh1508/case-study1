CREATE DATABASE caseStudy;

USE caseStudy;

CREATE TABLE drivers (
  id INT PRIMARY KEY AUTO_INCREMENT,
  free_at INT DEFAULT 1
);

CREATE TABLE orders (
  id INT PRIMARY KEY AUTO_INCREMENT,
  order_time INT,
  travel_time INT,
  assigned_driver_id INT,
  status VARCHAR(50)
);
