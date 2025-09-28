import { useState } from "react";
import { AddBookForm } from "./AddBookForm";

import "./App.css";

function App() {
  const [bookList, updateBookList] = useState([]);
  return (
    <>
      <div>
        <AddBookForm />
      </div>
    </>
  );
}

export default App;
