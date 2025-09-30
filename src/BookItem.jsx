function BookItem({ id, title, author, removeBook }) {
  return (
    <li>
      <strong>{title}</strong> by {author}
      <button onClick={() => removeBook(id)}>Remove</button>
    </li>
  );
}

export default BookItem;
