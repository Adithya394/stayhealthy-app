import { useState } from 'react';

export default function Reviews() {
  const [review, setReview] = useState('');
  const [rating, setRating] = useState('');

  const isDisabled = review.trim() === '' || rating === '';

  return (
    <div style={{ maxWidth: '400px', margin: 'auto' }}>
      <h2>Leave a Review</h2>
      <textarea
        placeholder="Write your review..."
        value={review}
        onChange={(e) => setReview(e.target.value)}
        rows="4"
        cols="40"
      />
      <br /><br />
      <label>
        Rating:
        <select value={rating} onChange={(e) => setRating(e.target.value)}>
          <option value="">Select</option>
          <option value="1">★☆☆☆☆</option>
          <option value="2">★★☆☆☆</option>
          <option value="3">★★★☆☆</option>
          <option value="4">★★★★☆</option>
          <option value="5">★★★★★</option>
        </select>
      </label>
      <br /><br />
      <button disabled={isDisabled}>Submit Review</button>
    </div>
  );
}
