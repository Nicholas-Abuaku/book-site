import express from "express";
import mysql from "mysql";
import cors from "cors";
const app = express();

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root123",
  database: "booksdbreact",
});

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json("Hello");
});

app.get("/books", (req, res) => {
  const q = "SELECT * FROM books";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.post("/books", (req, res) => {
  const q = "INSERT INTO books (`title`,`desc`,`cover`,`author`) VALUES (?)";
  const values = [
    req.body.title,
    req.body.desc,
    req.body.cover,
    req.body.author,
  ];
  db.query(q, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json("Book created");
  });
});

app.delete("/books/:id", (req, res) => {
  const bookId = req.params.id;
  const q = "DELETE FROM books WHERE id = ?";
  db.query(q, [bookId], (err, data) => {
    if (err) return res.json(err);
    return res.json("Book deleted");
  });
});

app.put("/books/:id", (req, res) => {
  const bookId = req.params.id;
  const q =
    "UPDATE books SET `title`= ?, `desc`= ?, `author` = ?, `cover` = ? WHERE id = ?";
  const values = [
    req.body.title,
    req.body.desc,
    req.body.author,
    req.body.cover,
  ];
  db.query(q, [...values, bookId], (err, data) => {
    if (err) return res.json(err);
    return res.json("Book Updated");
  });
});
app.listen(8083, () => {
  console.log("Connected to backend");
});
