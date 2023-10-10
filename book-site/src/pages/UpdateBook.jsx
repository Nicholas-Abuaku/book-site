import { useLocation, useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import ButtonGroup from "react-bootstrap/esm/ButtonGroup";
import { useState } from "react";
import axios from "axios";
export const UpdateBook = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const bookId = location.pathname.split("/")[2];
  const [book, setBook] = useState({
    title: "",
    author: "",
    cover: "",
    desc: "",
  });

  const handleChange = (e) => {
    setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    console.log(e.target.value);
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.put("http://localhost:8083/books/" + bookId, book);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  //   console.log(location.pathname.split("/")[2]);
  return (
    <>
      <h1>Update Book</h1>
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
          <Form.Control as="textarea" rows={3} name="desc" />
        </Form.Group>
        <ButtonGroup>
          <Button className="btn-warning" onClick={handleClick}>
            Update
          </Button>
          <Button className="btn-danger">Cancel</Button>
        </ButtonGroup>
      </Form>
    </>
  );
};
