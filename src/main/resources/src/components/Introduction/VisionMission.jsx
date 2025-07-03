import React from "react";
import "../../static/assets/Vision-Mission.css";

const VisionMission = () => {
  return (
    <div className="about-us-container">
      <h2 className="about-us-title">VỀ CHÚNG TÔI</h2>
      
      <div className="video-container mb-6">
        <iframe 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen 
          className="w-full aspect-video" 
          frameBorder="0" 
          src="https://www.youtube.com/watch?v=UJZmCX2Mzn8" 
          title="Trung tâm Hỗ trợ Sinh sản Hạnh Phúc Care - Giới thiệu về chúng tôi"
        ></iframe>
      </div>

      <SectionItem 
        imageSrc="https://storage.googleapis.com/a1aa/image/20f3ea2b-5384-4fc8-56dd-d61736ed757b.jpg"
        imageAlt="Group photo of medical experts in white coats standing in a hospital corridor"
        title="SỨ MỆNH – TẦM NHÌN"
        content="Với mong muốn mang lại niềm vui làm cha mẹ cho hàng triệu cặp vợ chồng hiếm muộn tại Việt Nam, Trung tâm Hỗ trợ Sinh sản hướng đến trở thành đơn vị dẫn đầu trong lĩnh vực điều trị vô sinh – hiếm muộn, áp dụng công nghệ hiện đại, quy trình chuẩn quốc tế và đội ngũ chuyên gia tận tâm."
      />

      <SectionItem 
        imageSrc="https://storage.googleapis.com/a1aa/image/bbc35c7a-c347-4e1f-a241-7ececcc8913a.jpg"
        imageAlt="Medical experts team photo in white coats posing in hospital"
        title="ĐỘI NGŨ CHUYÊN GIA"
        content="Các chuyên viên giỏi từ các Bệnh viện từ tổ chức được tập hợp bởi tiêu chuẩn các quy trình duy tu toàn diện, khoa học, hiệu quả."
      />

      <SectionItem 
        imageSrc="https://storage.googleapis.com/a1aa/image/794eb306-2b92-42a7-717f-5f6ca9bc04bb.jpg"
        imageAlt="Modern hospital lobby with glass walls and seating area"
        title="BỆNH VIỆN KHÁCH SẠN 5 SAO"
        content="Bệnh viện được xây dựng theo mô hình bệnh viện khách sạn cao cấp trong điều việc đáp ứng đầy đủ các điều kiện cho hoạt động chuyên môn khám chữa bệnh, đồng thời mang lại những trải nghiệm chất lượng cao của khách hàng về môi trường gian, cảnh quan, phòng nghỉ tồi, nhà hàng..."
      />

      <SectionItem 
        imageSrc="https://storage.googleapis.com/a1aa/image/f2772bf1-1f4a-4af1-7258-1cdafe525f4a.jpg"
        imageAlt="Modern hospital room with advanced medical equipment and clean design"
        title="CƠ SỞ VẬT CHẤT – TRANG THIẾT BỊ HIỆN ĐẠI"
        content="Bệnh viện Đa khoa Tâm Anh là đơn vị hàng đầu tại Việt Nam đầu tư kim cở các trang thiết bị máy móc, phương pháp chẩn đoán và điều trị hiện đại chuẩn quốc tế. Bệnh viện trang thiết bị máy móc có số lượng ít thiết bị giới và tiêu biểu có ở Việt Nam như:"
        listItems={[
            "Hệ thống nuôi cấy phôi Time-Lapse theo dõi phôi 24/7.",
            "Máy tiêm tinh trùng vào bào tương (ICSI) hiện đại.",

            "Phòng lab đạt chuẩn Class 100.",

            "Hệ thống Laser hỗ trợ phôi thoát màng.",

            "Hệ thống đông – rã trứng/phôi bằng công nghệ vitrification.",

            "Thiết bị sàng lọc di truyền tiền làm tổ (PGT-A, PGT-M).",

            "Phòng lấy mẫu riêng tư, vô trùng, tiện nghi."
        ]}
      />

      <SectionItem 
        imageSrc="https://storage.googleapis.com/a1aa/image/78d39aea-7922-4a24-ee40-2ec4b0e53685.jpg"
        imageAlt="Doctors in white coats sitting around a table discussing medical procedures"
        title="QUY TRÌNH KHOA HỌC – TOÀN DIỆN"
        content="Quy trình khám, điều trị được xây dựng toàn diện đến khoa học, giúp tiết kiệm thời gian chi phí và công sức của khách hàng, người bệnh. Khách hàng có thể khám chuyên khoa nhiều lần, hệ thống vận chuyển các khách hàng chuyển nghiệp tiện nhiều kênh tiếp cận như trang đặt dịch vụ, website, mạng xã hội..."
      />

      <SectionItem 
        imageSrc="https://storage.googleapis.com/a1aa/image/57d479fb-9fd3-4cfd-9e55-e443474743b5.jpg"
        imageAlt="Medical staff assisting patient wearing VR headset for advanced diagnostics"
        title="DỊCH VỤ CAO CẤP – GIÁ THÀNH HỢP LÝ"
        content={[
          "Trung tâm hướng tới phục vụ đồng đều khách hàng, người bệnh với giá thành hợp lý, nhiều chính sách ưu đãi và chi phí, hỗ trợ tiếp cận không lãi suất cho nhiều đối tượng khách bệnh.",
          "Với sự đa dạng về phát triển với 2 trung tâm tại Hà Nội và TP. HCM, hướng tới mang người dân đi khám phải an toàn người dân thăm khám và điều trị nhiều bệnh lý mà có thể hưởng nhiều dịch vụ cao cấp không chỉ và chuyên môn mà còn là dịch vụ chăm sóc khách hàng cao tương cao ngày tại Việt Nam."
        ]}
      />

      <SectionItem 
        imageSrc="https://storage.googleapis.com/a1aa/image/4fcf8354-73f8-4fa9-25ab-69e4c24345ab.jpg"
        imageAlt="Smiling female medical worker sitting at desk in hospital office"
        title="TRÁCH NHIỆM VỚI NGƯỜI LAO ĐỘNG"
        content="Bệnh viện luôn trong chăm lo đời sống cán bộ nhân viên chuyên gia bác sĩ … với các chế độ chính sách cao cấp cả về vật chất và tinh thần, tạo thành môi trường làm việc lý tưởng của người lao động."
      />

      <SectionItem 
        imageSrc="https://storage.googleapis.com/a1aa/image/e5bc9dd6-afd2-41f3-2c4d-ad22c5a3b42c.jpg"
        imageAlt="Medical staff assisting elderly patient in community healthcare setting"
        title="TRÁCH NHIỆM VỚI CỘNG ĐỒNG"
        content="Bệnh viện luôn thực hiện tốt, có trách nhiệm với cộng đồng thông qua nhiều hoạt động từ thiện, xã hội có ý nghĩa như đồng hành với Quỹ hỗ trợ bệnh nhân ung thư 'Ngày mai tươi sáng', tổ chức phi cộp các bác sĩ bệnh học ung thư phục tật, xây dựng khuôn các cấp bệnh nhân ung thư, ủng hộ các chương trình hỗ trợ đồng bào bị bão lụt…"
      />
    </div>
  );
};

const SectionItem = ({ imageSrc, imageAlt, title, content, listItems }) => {
  return (
    <div className="section-item mb-6 flex gap-4">
      <img 
        alt={imageAlt} 
        className="section-image w-[80px] h-[60px] object-cover flex-shrink-0" 
        src={imageSrc} 
      />
      <div className="section-content text-[9px] leading-[11px]">
        <p className="section-title font-extrabold mb-1">{title}</p>
        {Array.isArray(content) ? (
          content.map((paragraph, index) => <p key={index}>{paragraph}</p>)
        ) : (
          <p>{content}</p>
        )}
        {listItems && (
          <ul className="section-list list-disc list-inside text-[8px] leading-[10px] mt-1">
            {listItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default VisionMission;


