import React, { useState } from "react";
import { useParams } from "react-router-dom";

const BookReviews = () => {
  const { bookId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState("");
  const [rating, setRating] = useState(1);

  const addReview = () => {
    setReviews([...reviews, { review: newReview, rating, id: Date.now() }]);
    setNewReview("");
    setRating(1);
  };

  return (
    <div>
      <h2>Reviews for Book ID: {bookId}</h2>
      <div className="mb-3">
        <textarea
          value={newReview}
          onChange={(e) => setNewReview(e.target.value)}
          className="form-control"
          placeholder="Write a review"
        />
        <div>
          <label>Rating: </label>
          <select value={rating} onChange={(e) => setRating(Number(e.target.value))} className="form-select w-auto">
            {[1, 2, 3, 4, 5].map((r) => (
              <option key={r} value={r}>{r}</option>
            ))}
          </select>
        </div>
        <button onClick={addReview} className="btn btn-primary my-2">Submit Review</button>
      </div>
      <ul className="list-group">
        {reviews.map((rev) => (
          <li key={rev.id} className="list-group-item">
            <strong>Rating:</strong> {rev.rating}/5
            <p>{rev.review}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookReviews;

