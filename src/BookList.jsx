import BookItem from "./BookItem";

function BookList({ books, removeBook }) {
  if (books.length === 0) {
    return <p>No books yet.</p>;
  }

  return (
    <ul>
      {books.map((book) => (
        <BookItem
          key={book.id}
          id={book.id}
          title={book.title}
          author={book.author}
          removeBook={removeBook}
        />
      ))}
    </ul>
  );
}

export default BookList;
