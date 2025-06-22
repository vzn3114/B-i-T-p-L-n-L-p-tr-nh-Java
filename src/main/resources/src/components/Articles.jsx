import React from 'react';
import '../assets/Articles.css';

const Articles = () => (
  <div className="articles-page">
    <h2>Bài viết chia sẻ kinh nghiệm</h2>
    <div className="article-item">
      <div className="article-icon"><img src="/logo192.png" alt="IVF" className="article-img" /> ✨</div>
      <h3>Hành trình IVF thành công của gia đình chị Lan</h3>
      <p>Chia sẻ về quá trình điều trị IVF, những khó khăn và cảm xúc khi đón nhận tin vui.</p>
    </div>
    <div className="article-item">
      <div className="article-icon">📝</div>
      <h3>Những lưu ý khi điều trị IUI</h3>
      <p>Kinh nghiệm thực tế và lời khuyên từ bác sĩ cho các cặp vợ chồng chuẩn bị IUI.</p>
    </div>
  </div>
);

export default Articles; 