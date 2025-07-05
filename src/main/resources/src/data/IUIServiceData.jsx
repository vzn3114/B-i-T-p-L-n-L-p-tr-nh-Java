// IUI Service Data - Dữ liệu chi tiết dịch vụ IUI
export const IUIServiceData = {
  id: "iui",
  title: "IUI - Thụ tinh nhân tạo",
  subtitle: "Phương pháp hỗ trợ sinh sản đơn giản và hiệu quả",
  icon: "🧬",

  // Mô tả tổng quan
  overview: {
    description:
      "IUI (Intrauterine Insemination) là phương pháp đưa tinh trùng đã được xử lý và tối ưu hóa trực tiếp vào tử cung vào thời điểm rụng trứng, tăng cơ hội thụ thai tự nhiên.",
    keyBenefits: [
      "Tỷ lệ thành công: 10-20% mỗi chu kỳ",
      "Chi phí phải chăng",
      "Ít xâm lấn, thực hiện ngoại trú",
      "Không cần gây tê hoặc phẫu thuật",
      "Có thể lặp lại nhiều lần",
    ],
  },

  // Chi tiết về phương pháp
  details: {
    whatIsIUI: {
      title: "IUI là gì?",
      content: [
        "IUI là viết tắt của Intrauterine Insemination, có nghĩa là thụ tinh nhân tạo trong tử cung.",
        "Đây là phương pháp hỗ trợ sinh sản đơn giản nhất, gần gũi với quá trình thụ thai tự nhiên.",
        "Tinh trùng được xử lý đặc biệt để loại bỏ tạp chất, tăng khả năng thụ tinh.",
        "Thủ thuật được thực hiện vào đúng thời điểm rụng trứng để tối ưu hóa cơ hội thụ thai.",
      ],
    },

    suitableFor: {
      title: "Phù hợp với ai?",
      conditions: [
        {
          condition: "Vô sinh không rõ nguyên nhân",
          description:
            "Khi các xét nghiệm cơ bản không phát hiện vấn đề rõ ràng",
        },
        {
          condition: "Rối loạn rụng trứng nhẹ",
          description: "Chu kỳ kinh không đều, cần kích thích nhẹ",
        },
        {
          condition: "Chất lượng tinh trùng giảm nhẹ",
          description: "Số lượng, độ di động tinh trùng giảm nhẹ",
        },
        {
          condition: "Vấn đề về niêm dịch cổ tử cung",
          description: "Môi trường cổ tử cung không thuận lợi cho tinh trùng",
        },
        {
          condition: "Rối loạn chức năng tình dục",
          description: "Khó khăn trong quan hệ tình dục tự nhiên",
        },
        {
          condition: "Vô sinh do yếu tố miễn dịch",
          description: "Cơ thể tạo kháng thể chống lại tinh trùng",
        },
      ],
    },

    process: {
      title: "Quy trình thực hiện IUI",
      steps: [
        {
          step: 1,
          title: "Đánh giá và chuẩn bị",
          description:
            "Khám tổng quát, làm xét nghiệm cần thiết, tư vấn chi tiết",
          duration: "1-2 ngày",
          details: [
            "Khám phụ khoa tổng quát",
            "Siêu âm đánh giá tử cung, buồng trứng",
            "Xét nghiệm hormone cơ bản",
            "Xét nghiệm tinh dịch đồ nam giới",
            "Tư vấn quy trình và kỳ vọng",
          ],
        },
        {
          step: 2,
          title: "Theo dõi chu kỳ rụng trứng",
          description: "Theo dõi sự phát triển của nang trứng qua siêu âm",
          duration: "7-10 ngày",
          details: [
            "Siêu âm định kỳ từ ngày 8-10 của chu kỳ",
            "Theo dõi kích thước nang trứng",
            "Xét nghiệm hormone LH, Estradiol",
            "Đánh giá độ dày niêm mạc tử cung",
          ],
        },
        {
          step: 3,
          title: "Kích thích rụng trứng (nếu cần)",
          description: "Sử dụng thuốc kích thích rụng trứng nhẹ",
          duration: "5-7 ngày",
          details: [
            "Thuốc kích thích rụng trứng per os hoặc tiêm",
            "Theo dõi đáp ứng qua siêu âm",
            "Điều chỉnh liều thuốc phù hợp",
            "Tránh kích thích quá mức",
          ],
        },
        {
          step: 4,
          title: "Thu thập và xử lý tinh trùng",
          description: "Chuẩn bị tinh trùng tốt nhất cho thủ thuật",
          duration: "2-3 giờ",
          details: [
            "Thu thập tinh trùng tại phòng lab",
            "Xử lý tinh trùng bằng kỹ thuật rửa tinh",
            "Tách riêng tinh trùng khỏe mạnh",
            "Tăng nồng độ tinh trùng di động",
          ],
        },
        {
          step: 5,
          title: "Thực hiện thủ thuật IUI",
          description: "Đưa tinh trùng vào tử cung",
          duration: "5-10 phút",
          details: [
            "Sử dụng ống thông mềm đặc biệt",
            "Đưa tinh trùng trực tiếp vào tử cung",
            "Không gây đau, không cần gây tê",
            "Nghỉ ngơi 15-20 phút sau thủ thuật",
          ],
        },
        {
          step: 6,
          title: "Theo dõi kết quả",
          description: "Hỗ trợ giai đoạn hoàng thể và kiểm tra thai",
          duration: "14 ngày",
          details: [
            "Sử dụng thuốc hỗ trợ hoàng thể",
            "Xét nghiệm beta-hCG sau 14 ngày",
            "Siêu âm xác nhận túi thai (nếu có)",
            "Theo dõi sát sao trong 3 tháng đầu",
          ],
        },
      ],
    },

    successFactors: {
      title: "Yếu tố ảnh hưởng đến tỷ lệ thành công",
      factors: [
        {
          factor: "Tuổi của người phụ nữ",
          impact: "Cao",
          description: "Dưới 35 tuổi: 15-20%, trên 40 tuổi: 5-10%",
        },
        {
          factor: "Chất lượng tinh trùng",
          impact: "Cao",
          description: "Tinh trùng khỏe mạnh tăng cơ hội thụ thai",
        },
        {
          factor: "Nguyên nhân vô sinh",
          impact: "Trung bình",
          description:
            "Vô sinh không rõ nguyên nhân có tỷ lệ thành công cao hơn",
        },
        {
          factor: "Thời điểm thực hiện",
          impact: "Cao",
          description: "Thực hiện đúng thời điểm rụng trứng",
        },
        {
          factor: "Số lần thực hiện",
          impact: "Trung bình",
          description: "Tỷ lệ tích lũy sau 3-6 chu kỳ: 30-40%",
        },
      ],
    },

    costs: {
      title: "Chi phí điều trị",
      breakdown: [
        {
          item: "Tư vấn và khám ban đầu",
          cost: "500.000 - 1.000.000 VNĐ",
          description: "Bao gồm khám, tư vấn, siêu âm cơ bản",
        },
        {
          item: "Xét nghiệm cần thiết",
          cost: "1.000.000 - 2.000.000 VNĐ",
          description: "Hormone, tinh dịch đồ, xét nghiệm máu",
        },
        {
          item: "Theo dõi chu kỳ",
          cost: "500.000 - 1.000.000 VNĐ",
          description: "Siêu âm, xét nghiệm hormone theo dõi",
        },
        {
          item: "Thuốc kích thích (nếu cần)",
          cost: "500.000 - 1.500.000 VNĐ",
          description: "Tùy loại thuốc và liều lượng",
        },
        {
          item: "Thủ thuật IUI",
          cost: "3.000.000 - 5.000.000 VNĐ",
          description: "Bao gồm xử lý tinh trùng và thủ thuật",
        },
        {
          item: "Thuốc hỗ trợ sau thủ thuật",
          cost: "300.000 - 500.000 VNĐ",
          description: "Thuốc hỗ trợ hoàng thể",
        },
      ],
      totalRange: "5.000.000 - 10.000.000 VNĐ/chu kỳ",
      insurance: "Một số bảo hiểm y tế có hỗ trợ chi phí",
    },

    risks: {
      title: "Rủi ro và biến chứng",
      risks: [
        {
          risk: "Nhiễm trùng",
          probability: "Rất thấp (<1%)",
          description: "Nguy cơ nhiễm trùng tử cung do thủ thuật",
          prevention: "Vô trùng tuyệt đối, kháng sinh dự phòng",
        },
        {
          risk: "Đa thai",
          probability: "5-10%",
          description:
            "Nguy cơ thai đôi, thai ba khi kết hợp kích thích rụng trứng",
          prevention: "Theo dõi sát số nang trứng, điều chỉnh liều thuốc",
        },
        {
          risk: "Hội chứng kích thích buồng trứng",
          probability: "Thấp (2-5%)",
          description: "Buồng trứng phản ứng quá mức với thuốc kích thích",
          prevention: "Sử dụng liều thuốc thấp, theo dõi chặt chẽ",
        },
        {
          risk: "Khó chịu nhẹ",
          probability: "Thường gặp",
          description: "Đau bụng nhẹ, chảy máu âm đạo ít",
          prevention: "Bình thường, tự khỏi sau vài ngày",
        },
      ],
    },

    aftercare: {
      title: "Chăm sóc sau thủ thuật",
      immediate: [
        "Nghỉ ngơi 15-20 phút sau thủ thuật",
        "Có thể về nhà ngay sau đó",
        "Hoạt động bình thường, tránh vận động nặng",
        "Quan hệ tình dục bình thường sau 24-48 giờ",
      ],
      followUp: [
        "Uống thuốc hỗ trợ hoàng thể theo chỉ định",
        "Xét nghiệm thai sau 14 ngày",
        "Siêu âm xác nhận túi thai (nếu có thai)",
        "Tái khám định kỳ theo lịch hẹn",
      ],
      lifestyle: [
        "Ăn uống đủ chất, bổ sung acid folic",
        "Tránh căng thẳng, nghỉ ngơi đầy đủ",
        "Không hút thuốc, uống rượu",
        "Tập luyện nhẹ nhàng, phù hợp",
      ],
    },
  },

  // FAQs thường gặp
  faqs: [
    {
      question: "IUI có đau không?",
      answer:
        "IUI thường không gây đau, chỉ có thể cảm thấy khó chịu nhẹ như khi khám phụ khoa. Thủ thuật chỉ mất 5-10 phút và không cần gây tê.",
    },
    {
      question: "Sau IUI bao lâu có thể biết kết quả?",
      answer:
        "Sau IUI 14 ngày, bạn có thể xét nghiệm máu để kiểm tra thai. Không nên dùng que thử thai sớm vì có thể cho kết quả chưa chính xác.",
    },
    {
      question: "Có thể làm IUI bao nhiều lần?",
      answer:
        "Thông thường khuyến cáo thực hiện 3-6 chu kỳ IUI. Nếu không thành công, bác sĩ sẽ đề xuất chuyển sang phương pháp khác như IVF.",
    },
    {
      question: "IUI có ảnh hưởng đến thai nhi không?",
      answer:
        "IUI không ảnh hưởng đến sự phát triển của thai nhi. Trẻ sinh ra sau IUI hoàn toàn khỏe mạnh như thai tự nhiên.",
    },
    {
      question: "Tỷ lệ thành công của IUI là bao nhiêu?",
      answer:
        "Tỷ lệ thành công IUI khoảng 10-20% mỗi chu kỳ, tỷ lệ tích lũy sau 3-6 chu kỳ có thể đạt 30-40%. Tuổi và nguyên nhân vô sinh ảnh hưởng lớn đến tỷ lệ thành công.",
    },
  ],
};
