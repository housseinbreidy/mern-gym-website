import { useEffect, useState } from "react";
import api from "../api/axios";
import { useAuth } from "../context/AuthContext";
import ReviewCard from "../components/ReviewCard";
import { Link } from "react-router-dom";

const Reviews = () => {
  const { user } = useAuth();
  const [reviews, setReviews] = useState([]);
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const fetchReviews = async () => {
    const { data } = await api.get("/reviews");
    setReviews(data);
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  const submitReview = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      await api.post("/reviews", {
        rating: Number(rating),
        comment,
      });

      setComment("");
      setRating(5);
      setSuccess("Review added successfully.");
      fetchReviews();
    } catch (err) {
      setError(err.response?.data?.message || "Could not add review");
    }
  };

  return (
    <section className="section page-section">
      <div className="section-title">
        <p className="eyebrow">Member reviews</p>
        <h1>What our members say</h1>
        <p>Reviews are stored in MongoDB and loaded from the backend API.</p>
      </div>

      <div className="review-layout">
        <div className="review-form card">
          <h2>Add a review</h2>

          {user ? (
            <form onSubmit={submitReview}>
              {error && <p className="alert error">{error}</p>}
              {success && <p className="alert success">{success}</p>}

              <label>Rating</label>
              <select value={rating} onChange={(e) => setRating(e.target.value)}>
                <option value="5">5 - Excellent</option>
                <option value="4">4 - Very good</option>
                <option value="3">3 - Good</option>
                <option value="2">2 - Average</option>
                <option value="1">1 - Poor</option>
              </select>

              <label>Comment</label>
              <textarea
                rows="5"
                placeholder="Write your experience..."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                required
              />

              <button className="btn btn-primary" type="submit">
                Submit review
              </button>
            </form>
          ) : (
            <p>
              You need to <Link to="/login">log in</Link> to add a review.
            </p>
          )}
        </div>

        <div className="reviews-list">
          {reviews.length === 0 ? (
            <div className="card">
              <p>No reviews yet. Be the first to add one.</p>
            </div>
          ) : (
            reviews.map((review) => <ReviewCard key={review._id} review={review} />)
          )}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
