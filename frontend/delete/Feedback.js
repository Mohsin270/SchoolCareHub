import React, { useState } from "react";


const Feedback = () => {
    const [selectedRating, setSelectedRating] = useState(null);
    const [feedback, setFeedback] = useState("");

    const handleRatingClick = (rating) => {
        setSelectedRating(rating);
    };

    const handleFeedbackChange = (event) => {
        setFeedback(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission logic
        console.log("Rating:", selectedRating);
        console.log("Feedback:", feedback);
    };

    const ratings = [
        { label: "Terrible", emoji: "😖" },
        { label: "Bad", emoji: "😞" },
        { label: "Fine", emoji: "😐" },
        { label: "Good", emoji: "😊" },
        { label: "Amazing", emoji: "🤩" }
    ];

    return (
        <div className="feedback-container">
          <form className="feedback-form">
            <button className="back-button">← Back</button>
            <h2>Rate us and give feedback</h2>
            <form onSubmit={handleSubmit}>
                <div className="rating-section">
                    <p>How did you find our service?</p>
                    <div className="ratings">
                        {ratings.map((rating, index) => (
                            <button
                                key={index}
                                type="button"
                                className={`rating-button ${selectedRating === rating.label ? "selected" : ""}`}
                                onClick={() => handleRatingClick(rating.label)}
                            >
                                <span className="emoji">{rating.emoji}</span>
                                <span className="label">{rating.label}</span>
                            </button>
                        ))}
                    </div>
                </div>
                <div className="feedback-section">
                    <label htmlFor="feedback">Any additional feedback?</label>
                    <textarea
                        id="feedback"
                        value={feedback}
                        onChange={handleFeedbackChange}
                        placeholder="Enter your feedback here..."
                    ></textarea>
                </div>
                <button type="submit" className="submit-button">Send Feedback</button>
            </form>
          </form>
        </div>
    );
};

export default Feedback;
