import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import AddBookCSS from "../components/AddBook.module.css";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
export const AddBook = () => {
  const [book, setBook] = useState({
    title: "",
    author: "",
    cover: "",
    desc: "",
  });

  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);
  const handleChange = (e) => {
    setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8083/books", book);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  console.log(book);
  return (
    <>
      <h1 style={{ textAlign: "center", color: "white" }}>New Book</h1>

      <div className={AddBookCSS.addBook}>
        <Form>
          <Form.Group className="mb-3">
            <FloatingLabel controlId="floatingTitle" label="Book Title">
              <Form.Control
                type="text"
                placeholder="Book Title"
                name="title"
                onChange={handleChange}
              ></Form.Control>
            </FloatingLabel>
          </Form.Group>

          <Form.Group className="mb-3">
            <FloatingLabel controlId="floatingAuthor" label="Book Author">
              <Form.Control
                type="text"
                placeholder="Book Author"
                name="author"
                onChange={handleChange}
              ></Form.Control>
            </FloatingLabel>
          </Form.Group>

          <Form.Group className="mb-3">
            <FloatingLabel controlId="floatingCover" label="Book Cover">
              <Form.Control
                type="text"
                placeholder="Book Cover"
                name="cover"
                onChange={handleChange}
              ></Form.Control>
            </FloatingLabel>
          </Form.Group>

          <Form.Group className="mb-3" controlId="bookDescription">
            <Form.Label>Book Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="desc"
              onChange={handleChange}
            />
          </Form.Group>

          <Button type="submit" className="btn-success" onClick={handleClick}>
            Submit
          </Button>
          <Button className="btn-danger">Cancel</Button>
        </Form>
      </div>
    </>
  );
};
