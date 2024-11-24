import React, { useState } from "react";

const BookLibrary = () => {
  const [books, setBooks] = useState([]);
  const [newBook, setNewBook] = useState("");

  const addBook = () => {
    setBooks([...books, { title: newBook, id: Date.now() }]);
    setNewBook("");
  };

  const deleteBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  return (
    <div>
      <h2>Your Book Library</h2>
      <div className="mb-3">
        <input
          type="text"
          value={newBook}
          onChange={(e) => setNewBook(e.target.value)}
          className="form-control"
          placeholder="Enter book title"
        />
        <button onClick={addBook} className="btn btn-success my-2">Add Book</button>
      </div>
      <ul className="list-group">
        {books.map((book) => (
          <li key={book.id} className="list-group-item d-flex justify-content-between">
            {book.title}
            <button onClick={() => deleteBook(book.id)} className="btn btn-danger btn-sm">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookLibrary;
