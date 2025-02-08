DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS businesses;

CREATE TABLE users (
  user_id INTEGER PRIMARY KEY AUTOINCREMENT,
  username TEXT UNIQUE NOT NULL,
  password TEXT NOT NULL
);

CREATE TABLE likedBusinesses (
  username TEXT NOT NULL,
  business_name TEXT NOT NULL,
  FOREIGN KEY (username) REFERENCES users(username),
  FOREIGN KEY (business_name) REFERENCES business(business_name)
);

CREATE TABLE viewedBusinesses(
  business_name TEXT NOT NULL
  username TEXT NOT NULL
  FOREIGN KEY (username) REFERENCES users(username),
  FOREIGN KEY (business_name) REFERENCES business(business_name)
  was_liked INTEGER
);

CREATE TABLE businesses (
  business_id INTEGER PRIMARY KEY AUTOINCREMENT,
  business_name TEXT UNIQUE NOT NULL,
  password TEXT NOT NULL
  business_type TEXT,
  about_me TEXT
);