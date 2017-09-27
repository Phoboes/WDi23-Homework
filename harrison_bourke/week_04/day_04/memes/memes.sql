CREATE TABLE memes (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  description TEXT,
  rating INTEGER,
  dank BOOLEAN,
  image TEXT
);

INSERT INTO memes (description, rating, dank, image) VALUES ('Bad Haircut', 7, 0,  'https://scontent-syd2-1.xx.fbcdn.net/v/t1.0-9/20708448_1863829800601174_8566263266763375507_n.jpg?oh=053995d067bebfe022a5bd22993fb750&oe=5A326F2D');
