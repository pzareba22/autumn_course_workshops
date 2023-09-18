const sqlite3 = require('sqlite3');

const db = new sqlite3.Database('database.db');

db.serialize(() => {
  db.run("CREATE TABLE IF NOT EXISTS Users(id INTEGER PRIMARY KEY, username TEXT, password TEXT)");
  db.run("CREATE TABLE IF NOT EXISTS Messages(id INTEGER PRIMARY KEY, data TEXT)");
  db.run("CREATE TABLE IF NOT EXISTS Messages2(id INTEGER PRIMARY KEY, data TEXT)");
  db.run("CREATE TABLE IF NOT EXISTS Secret(id INTEGER PRIMARY KEY, data TEXT)");
  db.run("INSERT INTO Users (username, password) VALUES ('admin', 'hehe123')");
  db.run("INSERT INTO Messages(data) VALUES ('Hello World')");
  db.run("INSERT INTO Messages(data) VALUES ('Lorem Ipsum')");
  db.run("INSERT INTO Messages2(data) VALUES ('Another Message')");
  db.run("INSERT INTO Secret(data) VALUES ('Secret message, congratulations :)')");
});

db.close();