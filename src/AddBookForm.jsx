import { useState } from "react";

const AddBookForm = (props) => {
  const [title, changeTitle] = useState("");
  const [author, changeAuthor] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    props.onAddBook({ title, author });
    console.log(title, author);
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          placeholder="Book Name"
          value={title}
          onChange={(e) => changeTitle(e.target.value)}
        ></input>
        <input
          placeholder="Author Name"
          value={author}
          onChange={(e) => changeAuthor(e.target.value)}
        ></input>
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};
export { AddBookForm };
