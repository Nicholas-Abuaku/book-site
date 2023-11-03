import Table from "react-bootstrap/Table";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import Button from "react-bootstrap/esm/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { Link, useNavigate } from "react-router-dom";
export const ManageBook = () => {
  let navigate = useNavigate();
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        const res = await axios.get("http://localhost:8083/books");
        setBooks(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllBooks();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete("http://localhost:8083/books/" + id);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  function addBookNavigate() {
    navigate("/addbook");
  }

  return (
    <>
      <Button
        className="btn-success"
        style={{ float: "right" }}
        onClick={addBookNavigate}
      >
        + Add Book
      </Button>
      <Table style={{ marginTop: 40 }}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Author</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => {
            return (
              <tr key={book.id}>
                <td>{book.id}</td>
                <td>{book.title}</td>
                <td>{book.author}</td>

                <td>
                  <ButtonGroup>
                    <Button className="btn-warning">
                      <Link to={`/update/${book.id}`}>Edit</Link>
                    </Button>
                    <Button
                      className="btn-danger"
                      onClick={() => handleDelete(book.id)}
                    >
                      Delete
                    </Button>
                  </ButtonGroup>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};
