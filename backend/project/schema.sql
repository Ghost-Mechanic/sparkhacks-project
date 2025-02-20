DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS businesses;
DROP TABLE IF EXISTS likedBusinesses;
DROP TABLE IF EXISTS friendships;

CREATE TABLE users (
  user_id INTEGER PRIMARY KEY AUTOINCREMENT,
  username TEXT UNIQUE NOT NULL,
  password TEXT NOT NULL
);

CREATE TABLE likedBusinesses (
  username TEXT NOT NULL,
  business_name TEXT NOT NULL,
  FOREIGN KEY (username) REFERENCES users(username),
  FOREIGN KEY (business_name) REFERENCES businesses(business_name),
  PRIMARY KEY (username, business_name)
);

CREATE TABLE businesses (
  business_id INTEGER PRIMARY KEY AUTOINCREMENT,
  business_name TEXT UNIQUE NOT NULL,
  password TEXT NOT NULL,
  business_type TEXT,
  about_me TEXT
);

CREATE TABLE friendships (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user1 TEXT NOT NULL,
  user2 TEXT NOT NULL,
  FOREIGN KEY (user1) REFERENCES users(username),
  FOREIGN KEY (user2) REFERENCES users(username),
  UNIQUE(user1, user2)
);

INSERT INTO businesses (business_name, password, business_type, about_me) VALUES 
  ('Gosu Tea', 'pass123', 'Restaurant', 'Serving delicious boba by Wright College, worth your time and money!'),
  ('Slim''s', 'pass456', 'Restaurant', 'Serving yummy and loaded sandwiches and milkshakes to Ravenswood and beyond!'),
  ('Bowls of Rice', 'pass789', 'Restaurant', 'Your one-stop shop for healthy, delicious Asian rice bowls and teas!'),
  ('Pequod''s Pizza', 'pass321', 'Restaurant', 'Chicago Famous deep dish pizza in Morton Grove and West Lincoln Park - to die for!');