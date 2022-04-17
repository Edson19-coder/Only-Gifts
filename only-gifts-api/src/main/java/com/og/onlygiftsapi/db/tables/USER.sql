DROP TABLE IF EXISTS OG_USERS;
CREATE TABLE OG_USERS (
    USER_ID INT(10) PRIMARY KEY AUTO_INCREMENT,
    FIRST_NAME VARCHAR(100) NOT NULL,
    LAST_NAME VARCHAR(200) NOT NULL,
    PHONE VARCHAR(20) NULL,
    EMAIL VARCHAR(100) NOT NULL UNIQUE,
    PASSWORD LONGTEXT NOT NULL,
    STATUS VARCHAR(2) NOT NULL DEFAULT 'A',
    ACTIVE INT NOT NULL DEFAULT 1,
    CREATION_DATE DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP(),
    LAST_UPDATE_DATE DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP()
);

DROP TABLE IF EXISTS OG_CATEGORIES;
CREATE TABLE OG_CATEGORIES (
    CATEGORY_ID INT(10) PRIMARY KEY AUTO_INCREMENT,
    NAME VARCHAR(100) NOT NULL,
    ACTIVE INT NOT NULL DEFAULT 1,
    CREATION_DATE DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP(),
    LAST_UPDATE_DATE DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP()
);

DROP TABLE IF EXISTS OG_PRODUCTS;
CREATE TABLE OG_PRODUCTS (
    PRODUCT_ID INT(10) PRIMARY KEY AUTO_INCREMENT,
    NAME VARCHAR(100) NOT NULL,
    DESCRIPTION TEXT NOT NULL,
    CHARACTERISTIC TEXT NULL,
    PRICE FLOAT NOT NULL UNIQUE,
    CATEGORY INT NOT NULL,
    STATUS VARCHAR(2) NOT NULL DEFAULT 'A',
    IMAGE_URL VARCHAR(255) NOT NULL,
    CUSTOM_IMAGE INT NOT NULL,
    ACTIVE INT NOT NULL DEFAULT 1,
    CREATION_DATE DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP(),
    LAST_UPDATE_DATE DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP(),
    FOREIGN KEY (CATEGORY) REFERENCES OG_CATEGORIES(CATEGORY_ID)
);
