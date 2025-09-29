import "./App.css";
import { useState } from "react";
import { AddBookForm } from "./AddBookForm";

function App() {
  const [bookList, setBookList] = useState([]);
  const handleAddBook = (newBook) => {
    setBookList((prevList) => [...prevList, newBook]);
  };
  return (
    <div>
      <h1>My reading list</h1>

      <AddBookForm onAddBook={handleAddBook} />
    </div>
  );
}

export default App;
