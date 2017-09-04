CREATE TABLE books (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT,
  author TEXT,
  cover TEXT,
  description TEXT
);

INSERT INTO books (title, author) VALUES ('All the Light We Cannot See', 'Anthony Doerr');
