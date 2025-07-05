// IVF Service Data - Dữ liệu chi tiết dịch vụ IVF
export const IVFServiceData = {
  id: "ivf",
  title: "IVF - Thụ tinh trong ống nghiệm",
  subtitle: "Công nghệ hỗ trợ sinh sản hiện đại nhất",
  icon: "🧪",

  // Mô tả tổng quan
  overview: {
    description:
      "IVF (In Vitro Fertilization) là phương pháp thụ tinh trứng và tinh trùng ngoài cơ thể trong điều kiện phòng thí nghiệm, sau đó chuyển phôi chất lượng cao vào tử cung.",
    keyBenefits: [
      "Tỷ lệ thành công: 40-50% (dưới 35 tuổi)",
      "Giải quyết nhiều nguyên nhân vô sinh",
      "Có thể kết hợp ICSI, PGT",
      "Khả năng đông lạnh phôi dư thừa",
      "Kiểm soát chất lượng phôi tốt",
    ],
  },

  // Chi tiết về phương pháp
  details: {
    whatIsIVF: {
      title: "IVF là gì?",
      content: [
        "IVF là viết tắt của In Vitro Fertilization, có nghĩa là thụ tinh trong ống nghiệm.",
        "Đây là phương pháp hỗ trợ sinh sản tiên tiến nhất hiện nay.",
        "Quá trình thụ tinh diễn ra trong phòng thí nghiệm với điều kiện tối ưu.",
        "Cho phép lựa chọn phôi tốt nhất để chuyển vào tử cung.",
        "Có thể kết hợp nhiều kỹ thuật bổ trợ để tăng tỷ lệ thành công.",
      ],
    },

    suitableFor: {
      title: "Phù hợp với ai?",
      conditions: [
        {
          condition: "Tắc nghẽn vòi trứng",
          description: "Vòi trứng bị tắc hoặc không hoạt động bình thường",
          severity: "Chỉ định chính",
        },
        {
          condition: "Vô sinh do yếu tố nam giới nặng",
          description: "Số lượng, chất lượng tinh trùng rất thấp",
          severity: "Chỉ định chính",
        },
        {
          condition: "Thất bại IUI nhiều lần",
          description: "Không thành công sau 3-6 chu kỳ IUI",
          severity: "Chỉ định tương đối",
        },
        {
          condition: "Tuổi cao (trên 35)",
          description: "Dự trữ buồng trứng giảm, chất lượng trứng kém",
          severity: "Chỉ định tương đối",
        },
        {
          condition: "Nội mạc tử cung lạc chỗ nặng",
          description:
            "Bệnh lý nội mạc tử cung ảnh hưởng đến khả năng thụ thai",
          severity: "Chỉ định chính",
        },
        {
          condition: "Cần sàng lọc di truyền",
          description: "Có nguy cơ bệnh di truyền, cần PGT",
          severity: "Chỉ định đặc biệt",
        },
        {
          condition: "Vô sinh không rõ nguyên nhân kéo dài",
          description: "Vô sinh trên 3-5 năm không rõ nguyên nhân",
          severity: "Chỉ định tương đối",
        },
      ],
    },

    process: {
      title: "Quy trình IVF chi tiết",
      phases: [
        {
          phase: "Giai đoạn chuẩn bị",
          duration: "1-2 tuần",
          steps: [
            {
              step: "Tư vấn và đánh giá",
              description: "Khám tổng quát, tư vấn chi tiết về quy trình",
              details: [
                "Khám phụ khoa và nam khoa tổng quát",
                "Đánh giá dự trữ buồng trứng (AMH, AFC)",
                "Siêu âm tử cung, buồng trứng",
                "Xét nghiệm tinh dịch đồ chi tiết",
                "Xét nghiệm các bệnh truyền nhiễm",
                "Tư vấn về tỷ lệ thành công và rủi ro",
              ],
            },
            {
              step: "Lập kế hoạch điều trị",
              description: "Lựa chọn phác đồ phù hợp với từng cặp vợ chồng",
              details: [
                "Chọn phác đồ kích thích buồng trứng",
                "Lên lịch theo dõi và thủ thuật",
                "Tư vấn về chế độ dinh dưỡng",
                "Hướng dẫn sử dụng thuốc",
                "Chuẩn bị tâm lý cho quá trình điều trị",
              ],
            },
          ],
        },
        {
          phase: "Giai đoạn kích thích buồng trứng",
          duration: "8-12 ngày",
          steps: [
            {
              step: "Kích thích buồng trứng",
              description:
                "Sử dụng thuốc hormone để kích thích phát triển nhiều nang trứng",
              details: [
                "Tiêm thuốc kích thích FSH/LH hàng ngày",
                "Theo dõi đáp ứng qua siêu âm",
                "Xét nghiệm hormone định kỳ",
                "Điều chỉnh liều thuốc theo đáp ứng",
                "Ngăn ngừa rụng trứng sớm",
              ],
            },
            {
              step: "Theo dõi phát triển nang trứng",
              description: "Theo dõi sát sao sự phát triển của các nang trứng",
              details: [
                "Siêu âm âm đạo mỗi 2-3 ngày",
                "Đo kích thước và số lượng nang trứng",
                "Đánh giá độ dày niêm mạc tử cung",
                "Xét nghiệm Estradiol, LH",
                "Quyết định thời điểm lấy trứng",
              ],
            },
          ],
        },
        {
          phase: "Giai đoạn thu thập giao tử",
          duration: "1 ngày",
          steps: [
            {
              step: "Lấy trứng",
              description:
                "Thủ thuật lấy trứng qua âm đạo dưới hướng dẫn siêu âm",
              details: [
                "Gây tê tĩnh mạch hoặc gây mê nhẹ",
                "Chọc hút nang trứng qua âm đạo",
                "Thu thập dịch nang chứa trứng",
                "Thời gian thủ thuật 15-30 phút",
                "Theo dõi sau thủ thuật 1-2 giờ",
              ],
            },
            {
              step: "Thu thập tinh trùng",
              description: "Thu thập và xử lý tinh trùng vào ngày lấy trứng",
              details: [
                "Thu thập tinh trùng bằng thủ dâm",
                "Xử lý tinh trùng trong phòng lab",
                "Tách tinh trùng khỏe mạnh",
                "Chuẩn bị cho quá trình thụ tinh",
                "Đánh giá chất lượng tinh trùng",
              ],
            },
          ],
        },
        {
          phase: "Giai đoạn thụ tinh và nuôi cấy",
          duration: "5-6 ngày",
          steps: [
            {
              step: "Thụ tinh",
              description:
                "Thụ tinh trứng và tinh trùng trong phòng thí nghiệm",
              details: [
                "Thụ tinh bằng phương pháp IVF cổ điển",
                "Hoặc tiêm tinh trùng vào trứng (ICSI)",
                "Theo dõi quá trình thụ tinh",
                "Đánh giá tỷ lệ thụ tinh",
                "Chọn lọc phôi có tiềm năng phát triển",
              ],
            },
            {
              step: "Nuôi cấy phôi",
              description: "Nuôi cấy phôi trong môi trường tối ưu",
              details: [
                "Nuôi cấy trong tủ ấm CO2 chuyên dụng",
                "Theo dõi sự phát triển phôi hàng ngày",
                "Đánh giá chất lượng phôi",
                "Chọn phôi tốt nhất để chuyển",
                "Đông lạnh phôi dư thừa (nếu có)",
              ],
            },
          ],
        },
        {
          phase: "Giai đoạn chuyển phôi",
          duration: "1 ngày",
          steps: [
            {
              step: "Chuyển phôi vào tử cung",
              description: "Chuyển phôi chất lượng cao vào tử cung",
              details: [
                "Chọn phôi tốt nhất để chuyển",
                "Sử dụng ống thông mềm chuyên dụng",
                "Chuyển phôi dưới hướng dẫn siêu âm",
                "Thủ thuật không đau, không gây tê",
                "Nghỉ ngơi 30-60 phút sau chuyển phôi",
              ],
            },
          ],
        },
        {
          phase: "Giai đoạn hỗ trợ và theo dõi",
          duration: "2-3 tuần",
          steps: [
            {
              step: "Hỗ trợ hoàng thể",
              description: "Sử dụng thuốc hỗ trợ để duy trì thai kỳ",
              details: [
                "Sử dụng progesterone hàng ngày",
                "Theo dõi tác dụng phụ",
                "Tư vấn chế độ sinh hoạt",
                "Hỗ trợ tâm lý cho cặp vợ chồng",
                "Chuẩn bị cho xét nghiệm thai",
              ],
            },
            {
              step: "Kiểm tra kết quả",
              description: "Theo dõi kết quả và thai kỳ sớm",
              details: [
                "Xét nghiệm beta-hCG sau 14 ngày",
                "Siêu âm xác nhận túi thai",
                "Theo dõi thai kỳ 3 tháng đầu",
                "Tư vấn về các chu kỳ tiếp theo",
                "Hướng dẫn sử dụng phôi đông lạnh",
              ],
            },
          ],
        },
      ],
    },

    techniques: {
      title: "Kỹ thuật bổ trợ trong IVF",
      techniques: [
        {
          name: "ICSI",
          fullName: "Tiêm tinh trùng vào trứng",
          description: "Tiêm trực tiếp một tinh trùng vào trong trứng",
          indications: [
            "Tinh trùng rất ít hoặc yếu",
            "Thất bại thụ tinh trong chu kỳ IVF trước",
            "Trứng có vỏ cứng",
            "Tinh trùng thu được từ tinh hoàn",
          ],
          successRate: "Tăng tỷ lệ thành công 10-15%",
          additionalCost: "15-25 triệu VNĐ",
        },
        {
          name: "Đông lạnh phôi",
          fullName: "Bảo quản phôi dư thừa",
          description: "Đông lạnh phôi chất lượng tốt để sử dụng sau",
          indications: [
            "Có nhiều phôi chất lượng tốt",
            "Nguy cơ kích thích buồng trứng quá mức",
            "Cần nghỉ ngơi giữa các chu kỳ",
            "Muốn có con thứ hai",
          ],
          successRate: "Tỷ lệ sống sót phôi 85-90%",
          additionalCost: "2-3 triệu VNĐ + phí bảo quản",
        },
        {
          name: "Assisted Hatching",
          fullName: "Hỗ trợ nở phôi",
          description: "Tạo lỗ nhỏ trên vỏ phôi để hỗ trợ làm tổ",
          indications: [
            "Phôi có vỏ dày",
            "Tuổi cao",
            "Thất bại IVF trước",
            "Phôi đông lạnh",
          ],
          successRate: "Tăng tỷ lệ làm tổ 5-10%",
          additionalCost: "3-5 triệu VNĐ",
        },
      ],
    },

    successFactors: {
      title: "Yếu tố ảnh hưởng đến tỷ lệ thành công",
      factors: [
        {
          factor: "Tuổi của người phụ nữ",
          impact: "Rất cao",
          details: [
            "Dưới 30 tuổi: 50-60%",
            "30-35 tuổi: 40-50%",
            "35-40 tuổi: 25-35%",
            "Trên 40 tuổi: 10-20%",
          ],
        },
        {
          factor: "Chất lượng phôi",
          impact: "Rất cao",
          details: [
            "Phôi grade A: 50-60%",
            "Phôi grade B: 30-40%",
            "Phôi grade C: 15-25%",
            "Phôi blastocyst: tăng 10-15%",
          ],
        },
        {
          factor: "Nguyên nhân vô sinh",
          impact: "Cao",
          details: [
            "Tắc vòi trứng: 45-55%",
            "Yếu tố nam giới: 40-50%",
            "Nội mạc tử cung lạc chỗ: 35-45%",
            "Không rõ nguyên nhân: 45-55%",
          ],
        },
        {
          factor: "Số lượng trứng thu được",
          impact: "Trung bình",
          details: [
            "5-9 trứng: 35-45%",
            "10-15 trứng: 45-55%",
            "Trên 15 trứng: 40-50%",
            "Dưới 5 trứng: 20-30%",
          ],
        },
        {
          factor: "Độ dày niêm mạc tử cung",
          impact: "Trung bình",
          details: [
            "8-12mm: tối ưu",
            "6-8mm: khá tốt",
            "Dưới 6mm: kém",
            "Trên 14mm: cần theo dõi",
          ],
        },
      ],
    },

    costs: {
      title: "Chi phí điều trị IVF",
      breakdown: [
        {
          category: "Chi phí cơ bản",
          items: [
            {
              item: "Tư vấn và khám ban đầu",
              cost: "1.000.000 - 2.000.000 VNĐ",
              description: "Khám tổng quát, tư vấn chi tiết",
            },
            {
              item: "Xét nghiệm tiền IVF",
              cost: "3.000.000 - 5.000.000 VNĐ",
              description: "Hormone, tinh dịch đồ, xét nghiệm nhiễm trùng",
            },
            {
              item: "Thuốc kích thích buồng trứng",
              cost: "10.000.000 - 20.000.000 VNĐ",
              description: "Tùy theo phác đồ và đáp ứng",
            },
            {
              item: "Theo dõi trong quá trình kích thích",
              cost: "3.000.000 - 5.000.000 VNĐ",
              description: "Siêu âm, xét nghiệm hormone",
            },
            {
              item: "Thủ thuật lấy trứng",
              cost: "8.000.000 - 12.000.000 VNĐ",
              description: "Bao gồm gây tê, thủ thuật, theo dõi",
            },
            {
              item: "Thụ tinh và nuôi cấy phôi",
              cost: "10.000.000 - 15.000.000 VNĐ",
              description: "Lab, nuôi cấy, đánh giá phôi",
            },
            {
              item: "Chuyển phôi",
              cost: "3.000.000 - 5.000.000 VNĐ",
              description: "Thủ thuật chuyển phôi",
            },
            {
              item: "Thuốc hỗ trợ sau chuyển phôi",
              cost: "1.000.000 - 2.000.000 VNĐ",
              description: "Progesterone, hỗ trợ hoàng thể",
            },
          ],
        },
        {
          category: "Chi phí kỹ thuật bổ trợ",
          items: [
            {
              item: "ICSI",
              cost: "5.000.000 - 8.000.000 VNĐ",
              description: "Tiêm tinh trùng vào trứng",
            },
            {
              item: "PGT",
              cost: "15.000.000 - 25.000.000 VNĐ",
              description: "Sàng lọc di truyền phôi",
            },
            {
              item: "Đông lạnh phôi",
              cost: "2.000.000 - 3.000.000 VNĐ",
              description: "Phí đông lạnh ban đầu",
            },
            {
              item: "Bảo quản phôi đông lạnh",
              cost: "2.000.000 - 4.000.000 VNĐ/năm",
              description: "Phí bảo quản hàng năm",
            },
            {
              item: "Chuyển phôi đông lạnh",
              cost: "8.000.000 - 12.000.000 VNĐ",
              description: "Chu kỳ FET",
            },
          ],
        },
      ],
      totalRange: "40.000.000 - 80.000.000 VNĐ/chu kỳ",
      insurance: "Bảo hiểm xã hội hỗ trợ một phần chi phí",
      packages: [
        {
          name: "Gói IVF cơ bản",
          cost: "45.000.000 - 60.000.000 VNĐ",
          includes: "IVF + theo dõi + chuyển phôi",
        },
        {
          name: "Gói IVF + ICSI",
          cost: "55.000.000 - 70.000.000 VNĐ",
          includes: "IVF + ICSI + theo dõi + chuyển phôi",
        },
        {
          name: "Gói IVF toàn diện",
          cost: "70.000.000 - 90.000.000 VNĐ",
          includes: "IVF + ICSI + PGT + đông lạnh phôi",
        },
      ],
    },

    risks: {
      title: "Rủi ro và biến chứng",
      categories: [
        {
          category: "Rủi ro liên quan đến kích thích buồng trứng",
          risks: [
            {
              risk: "Hội chứng kích thích buồng trứng (OHSS)",
              probability: "5-10%",
              severity: "Trung bình đến nặng",
              description: "Buồng trứng phản ứng quá mức với thuốc",
              symptoms: "Đau bụng, buồn nôn, tăng cân, khó thở",
              management: "Theo dõi sát, điều trị triệu chứng",
            },
            {
              risk: "Đa thai",
              probability: "15-20%",
              severity: "Trung bình",
              description: "Thai đôi, thai ba khi chuyển nhiều phôi",
              prevention: "Chuyển đơn phôi, phôi chất lượng cao",
            },
          ],
        },
        {
          category: "Rủi ro liên quan đến thủ thuật",
          risks: [
            {
              risk: "Biến chứng lấy trứng",
              probability: "1-2%",
              severity: "Nhẹ đến trung bình",
              description: "Chảy máu, nhiễm trùng, tổn thương cơ quan",
              prevention: "Kỹ thuật vô trùng, bác sĩ có kinh nghiệm",
            },
            {
              risk: "Thất bại thụ tinh",
              probability: "10-15%",
              severity: "Nhẹ",
              description: "Trứng không thụ tinh được",
              solution: "Có thể dùng ICSI trong chu kỳ tiếp theo",
            },
          ],
        },
        {
          category: "Rủi ro thai kỳ",
          risks: [
            {
              risk: "Sảy thai",
              probability: "15-25%",
              severity: "Trung bình",
              description: "Tương tự như thai tự nhiên",
              factors: "Tuổi, chất lượng phôi, nguyên nhân vô sinh",
            },
            {
              risk: "Thai ngoài tử cung",
              probability: "2-5%",
              severity: "Nặng",
              description: "Phôi làm tổ ngoài tử cung",
              monitoring: "Theo dõi sát bằng siêu âm và xét nghiệm",
            },
          ],
        },
      ],
    },

    aftercare: {
      title: "Chăm sóc sau IVF",
      phases: [
        {
          phase: "Ngay sau lấy trứng",
          duration: "24-48 giờ",
          care: [
            "Nghỉ ngơi tại bệnh viện 1-2 giờ",
            "Uống nhiều nước, ăn nhẹ",
            "Theo dõi triệu chứng đau bụng, chảy máu",
            "Tránh vận động mạnh",
            "Liên hệ bác sĩ nếu có triệu chứng bất thường",
          ],
        },
        {
          phase: "Sau chuyển phôi",
          duration: "14 ngày",
          care: [
            "Nghỉ ngơi 30-60 phút sau chuyển phôi",
            "Sinh hoạt bình thường, tránh căng thẳng",
            "Uống thuốc hỗ trợ hoàng thể đều đặn",
            "Không tắm bồn, bơi lội",
            "Tránh quan hệ tình dục",
            "Ăn uống đủ chất, bổ sung acid folic",
          ],
        },
        {
          phase: "Sau xét nghiệm thai dương tính",
          duration: "12 tuần đầu",
          care: [
            "Tiếp tục thuốc hỗ trợ theo chỉ định",
            "Tái khám định kỳ theo lịch hẹn",
            "Siêu âm theo dõi sự phát triển thai",
            "Chế độ dinh dưỡng cho bà bầu",
            "Tránh stress, nghỉ ngơi đầy đủ",
            "Theo dõi các triệu chứng bất thường",
          ],
        },
      ],
    },
  },

  // FAQs thường gặp
  faqs: [
    {
      question: "IVF có đau không?",
      answer:
        "Thủ thuật lấy trứng được thực hiện dưới gây tê tĩnh mạch nên không đau. Chuyển phôi hoàn toàn không đau. Có thể cảm thấy khó chịu nhẹ do thuốc kích thích buồng trứng.",
    },
    {
      question: "Tỷ lệ thành công IVF là bao nhiêu?",
      answer:
        "Tỷ lệ thành công IVF phụ thuộc vào nhiều yếu tố, trung bình 40-50% ở phụ nữ dưới 35 tuổi. Tỷ lệ giảm dần theo tuổi và nguyên nhân vô sinh.",
    },
    {
      question: "Mất bao lâu để hoàn thành một chu kỳ IVF?",
      answer:
        "Một chu kỳ IVF hoàn chỉnh mất khoảng 4-6 tuần, từ bắt đầu kích thích buồng trứng đến khi biết kết quả có thai.",
    },
    {
      question: "Có thể làm việc bình thường trong quá trình IVF không?",
      answer:
        "Có thể làm việc bình thường trong hầu hết thời gian. Chỉ cần nghỉ ngơi ngày lấy trứng và 1-2 ngày sau chuyển phôi.",
    },
    {
      question: "Nếu chu kỳ IVF không thành công thì sao?",
      answer:
        "Nếu không thành công, bác sĩ sẽ đánh giá lại và điều chỉnh phác đồ. Có thể sử dụng phôi đông lạnh (nếu có) hoặc thực hiện chu kỳ IVF mới.",
    },
    {
      question: "IVF có ảnh hưởng đến sức khỏe lâu dài không?",
      answer:
        "IVF không ảnh hưởng đến sức khỏe lâu dài. Trẻ sinh ra sau IVF hoàn toàn bình thường. Tuy nhiên, cần theo dõi sát sao trong quá trình điều trị.",
    },
    {
      question: "Khi nào nên chuyển từ IUI sang IVF?",
      answer:
        "Thường chuyển sang IVF sau 3-6 chu kỳ IUI không thành công, hoặc khi có chỉ định rõ ràng như tắc vòi trứng, vô sinh nam giới nặng.",
    },
  ],
};
