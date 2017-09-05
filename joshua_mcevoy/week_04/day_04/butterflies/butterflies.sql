CREATE TABLE butterflies (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  family TEXT,
  image TEXT -- url to photo of butterfly
);

INSERT INTO butterflies (name, family) VALUES ('Monarch', 'Nymphaliade');
