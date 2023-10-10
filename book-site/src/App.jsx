import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Navigation } from "./components/Navigation";
import { BookCard } from "./components/BookCard";
import { BookList } from "./components/BookList";
import { BookPage } from "./components/BookPage";
import { AddBook } from "./pages/AddBook";
import { ManageBook } from "./pages/ManageBook";
import { Routes, Route } from "react-router-dom";
import { UpdateBook } from "./pages/UpdateBook";

function App() {
  return (
    <>
      <Navigation />
      <div className="container">
        <Routes>
          <Route path="/addbook" element={<AddBook />} />
          <Route path="/manage" element={<ManageBook />} />
          <Route path="/update/:id" element={<UpdateBook />} />
          <Route path="/" element={<BookPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
