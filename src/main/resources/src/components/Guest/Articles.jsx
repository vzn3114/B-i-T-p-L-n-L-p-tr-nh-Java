import React from 'react';
import '../../assets/Articles.css';

const Articles = () => (
  <div className="articles-page">
    <h2>Bài viết chia sẻ kinh nghiệm</h2>
    <div className="article-item">
      <div className="article-icon"><img src="/logo192.png" alt="IVF" className="article-img" /> ✨</div>
      <h3>Hành trình IVF thành công của gia đình chị Lan</h3>
      <p>Gia đình chị Lan đã trải qua nhiều năm mong con, thử nhiều phương pháp điều trị trước khi đến với IVF. Bài viết chia sẻ chi tiết về quá trình chuẩn bị, những khó khăn, cảm xúc và niềm vui khi đón nhận tin vui.<br/><a href="#" className="article-detail-btn">Xem chi tiết</a></p>
    </div>
    <div className="article-item">
      <div className="article-icon">📝</div>
      <h3>Những lưu ý khi điều trị IUI</h3>
      <p>Bài viết tổng hợp các kinh nghiệm thực tế, lời khuyên từ bác sĩ và bệnh nhân đã từng điều trị IUI, giúp các cặp vợ chồng chuẩn bị tốt hơn về tâm lý và sức khỏe.<br/><a href="#" className="article-detail-btn">Xem chi tiết</a></p>
    </div>
  </div>
);

export default Articles; 