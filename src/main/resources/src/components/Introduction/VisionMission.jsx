import React from "react";
import "../../static/assets/Vision-Mission.css";

const VisionMission = () => {
  return (
    <section className="vision-mission">
      <div className="container">
        <div className="section-header">
          <h1 className="title">Our Vision & Mission</h1>
          <p className="subtitle">Helping families grow with care, science, and compassion</p>
        </div>

        <div className="content-grid">
          <div className="vision-card">
            <div className="icon-container">
              <img 
                src="https://placehold.co/100x100" 
                alt="Abstract eye icon representing vision, in teal and purple colors with a modern design" 
                className="vision-icon"
              />
            </div>
            <h2>Tầm nhìn của chúng tôi</h2>
            <p>
                Trở thành nền tảng tư vấn sinh sản đáng tin cậy nhất, nơi mọi cá nhân
                và cặp đôi đang gặp phải những thách thức về vô sinh có thể tìm thấy hy vọng, sự hướng dẫn của chuyên gia và
                sự hỗ trợ tận tình trong hành trình làm cha mẹ.
            </p>
          </div>

          <div className="mission-card">
            <div className="icon-container">
              <img 
                src="https://placehold.co/100x100" 
                alt="Hands holding a heart icon representing mission, in coral and gold colors with a warm design"
                className="mission-icon"
              />
            </div>
            <h2>Sứ mệnh của chúng tôi</h2>
            <p>
                Cung cấp tư vấn toàn diện, dựa trên bằng chứng về khả năng sinh sản kết hợp chuyên môn y tế với hỗ trợ về mặt tinh thần. Chúng tôi nỗ lực giáo dục, trao quyền và hỗ trợ khách hàng của mình thông qua các kế hoạch chăm sóc cá nhân, phương pháp điều trị sáng tạo và một cộng đồng nuôi dưỡng hiểu được những thách thức của tình trạng vô sinh
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;


