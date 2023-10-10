import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { BookCard } from "./BookCard";
export const BookPage = () => {
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
  return (
    <>
      <h1>Books</h1>
      {books.map((book) => {
        return (
          <BookCard
            title={book.title}
            author={book.author}
            img={book.cover}
            key={book.id}
            desc={book.desc}
          />
        );
      })}
    </>
  );
};
