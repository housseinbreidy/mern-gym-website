import React from "react";
const ReviewCard = ({ review }) => {
  return (
    <article className="card review-card">
      <div className="review-header">
        <h3>{review.name}</h3>
        <span>{"★".repeat(review.rating)}{"☆".repeat(5 - review.rating)}</span>
      </div>
      <p>{review.comment}</p>
      <small>{new Date(review.createdAt).toLocaleDateString()}</small>
    </article>
  );
};

export default ReviewCard;
