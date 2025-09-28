import { useState } from "react";

const AddBookForm = () => {
  const [bookTitle, updateBookTitle] = useState("");
  const [authorName, updateAuthorName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={bookTitle}
          onChange={(e) => updateBookTitle(e.target.value)}
          placeholder="book-title"
        />
        <input
          value={authorName}
          onChange={(e) => updateAuthorName(e.target.value)}
          placeholder="Author Name"
        />
        <button type="submit">Add book</button>
      </form>
    </div>
  );
};
export { AddBookForm };
