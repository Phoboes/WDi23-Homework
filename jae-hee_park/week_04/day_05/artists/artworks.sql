CREATE TABLE artworks (
id INTEGER PRIMARY KEY AUTOINCREMENT,
title TEXT,
artist TEXT,
genre TEXT,
year TEXT,
image TEXT
);

INSERT INTO artworks (title, artist, genre, year, image) VALUES ('Reflection of the Big Dipper', 'Jackson Pollock', 'abstract expressionism', '1947', 'https://www.jackson-pollock.org/images/paintings/reflection-of-the-big-dipper.jpg');
