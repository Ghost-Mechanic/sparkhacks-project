DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS businesses;

CREATE TABLE users (
  user_id INTEGER PRIMARY KEY AUTOINCREMENT,
  username TEXT UNIQUE NOT NULL,
  password TEXT NOT NULL
);

CREATE TABLE businesses (
  business_id INTEGER PRIMARY KEY AUTOINCREMENT,
  business_name TEXT UNIQUE NOT NULL,
  password TEXT NOT NULL
);