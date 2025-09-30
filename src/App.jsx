import { useState } from "react";
import AddBookForm from "./AddBookForm";
import BookList from "./BookList";
import "./App.css";

function App() {
  const [bookList, setBookList] = useState([]);

  const addBook = (title, author) => {
    setBookList([...bookList, { id: Date.now(), title, author }]);
  };

  const removeBook = (id) => {
    setBookList(bookList.filter((book) => book.id !== id));
  };

  return (
    <div className="App">
      <h1>Reading List</h1>
      <AddBookForm addBook={addBook} />
      <BookList books={bookList} removeBook={removeBook} />
    </div>
  );
}

export default App;
