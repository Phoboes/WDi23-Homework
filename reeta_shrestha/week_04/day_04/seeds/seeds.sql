CREATE TABLE seeds (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  color TEXT,
  image TEXT,
  interest BOOLEAN
);

INSERT INTO seeds(name, color, image, interest) VALUES ('Corn', 'Yellow', 'nothing', 1);
