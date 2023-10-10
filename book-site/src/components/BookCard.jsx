import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import BookCardCSS from "./BookCardCSS.module.css";
import BookModalCSS from "../components/BookModal.module.css";
import { useState } from "react";
export const BookCard = (props) => {
  const { img, author, title, desc } = props;
  const [show, setShow] = useState(false);
  const HandleClick = () => setShow(true);
  const handleClose = () => setShow(false);
  return (
    <>
      <Modal show={show} onHide={handleClose} className={BookModalCSS}>
        <Modal.Header closeButton>{title}</Modal.Header>
        <Modal.Body>
          <img src={img} className={BookModalCSS.modalImg} />
          <p className={BookModalCSS.blurb}>{desc}</p>
          <Button className="btn-success">Add to List</Button>
        </Modal.Body>
      </Modal>
      <Card className={BookCardCSS.card}>
        <Card.Img
          variant="top"
          src={img}
          className={BookCardCSS.img}
          onClick={HandleClick}
        />
        <Card.Body>
          <Card.Title style={{ fontSize: "small" }}>{title}</Card.Title>
          <Card.Subtitle>{author}</Card.Subtitle>
        </Card.Body>
      </Card>
    </>
  );
};
