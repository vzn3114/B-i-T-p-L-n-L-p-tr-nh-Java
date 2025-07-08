import React, { useState } from "react";
import "../../static/assets/Feedback.css";

const Feedback = () => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [success, setSuccess] = useState("");

  const handleStarClick = (star) => {
    console.log("Star clicked:", star); // Debug giá trị sao
    setRating(star);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess("");

    if (rating === 0) {
      alert("Vui lòng chọn mức độ hài lòng!");
      return;
    }

    // Hiển thị thông báo thành công
    setSuccess("Gửi đánh giá thành công!");
    alert("Đánh giá của bạn đã được gửi thành công!");

    // Reset form
    setRating(0);
    setComment("");

    // Tự động xóa thông báo sau 3 giây
    setTimeout(() => setSuccess(""), 3000);
  };

  return (
    <div className="feedback-container">
      <h2>Gửi đánh giá dịch vụ & bác sĩ</h2>
      {success && <p className="success-message">{success}</p>}
      <form className="feedback-form" onSubmit={handleSubmit}>
        <label>Chọn mức độ hài lòng:</label>
        <div className="feedback-stars">
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              role="img"
              aria-label={`star-${star}`}
              className={`star ${rating >= star ? "star-selected" : ""}`}
              onClick={() => handleStarClick(star)}
              style={{ cursor: "pointer", padding: "5px" }} 
            >
              ⭐
            </span>
          ))}
        </div>
        {rating > 0 && <p className="rating-text">Bạn đã chọn {rating} sao</p>}
        <label>Nhận xét của bạn:</label>
        <textarea
          placeholder="Nhập nhận xét..."
          rows="4"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        ></textarea>
        <button type="submit">Gửi đánh giá</button>
      </form>
      <img src="/logo192.png" alt="feedback" className="feedback-img" />
    </div>
  );
};

export default Feedback;
