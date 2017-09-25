CREATE TABLE artists (
id INTEGER PRIMARY KEY AUTOINCREMENT,
name TEXT,
medium TEXT,
style TEXT,
country TEXT,
years TEXT,
image TEXT
);

INSERT INTO artists (name, medium, style, country, years, image) VALUES ('Jackson Pollock', 'paint', 'abstract expressionism', 'America', '1912 - 1956', 'http://www.theartstory.org/images20/photo/pollock_5.jpg');
