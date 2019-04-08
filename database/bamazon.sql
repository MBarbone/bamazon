CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products(
item_id INT AUTO_INCREMENT NOT NULL,
product_name VARCHAR(40) NOT NULL,
department_name VARCHAR(40) NOT NULL,
price INT(4) NOT NULL,
stock_quantity INT (3) NOT NUll,
PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity) values ("TV", "Electronics", "1000", "30");
INSERT INTO products (product_name, department_name, price, stock_quantity) values ("Laptop", "Electronics", "1500", "20");
INSERT INTO products (product_name, department_name, price, stock_quantity) values ("Protein", "Health & Wellness", "50", "35");
INSERT INTO products (product_name, department_name, price, stock_quantity) values ("K-Cups", "Lifestyle", "15", "50");
INSERT INTO products (product_name, department_name, price, stock_quantity) values ("Socks", "Clothing", "12", "75");
INSERT INTO products (product_name, department_name, price, stock_quantity) values ("Peanut Butter", "Food", "6", "40");
INSERT INTO products (product_name, department_name, price, stock_quantity) values ("Water Bottle", "Lifestyle", "18", "20");
INSERT INTO products (product_name, department_name, price, stock_quantity) values ("Headphones", "Electronics", "200", "65");
INSERT INTO products (product_name, department_name, price, stock_quantity) values ("Running Shoes", "Lifestyle", "75", "60");
INSERT INTO products (product_name, department_name, price, stock_quantity) values ("Yoga Mat", "Health & Wellness", "25", "80");