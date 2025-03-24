import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Check, ChevronRight, Share2 } from "lucide-react"

interface CarSpecs {
  performance: {
    "Động cơ": string
    "Pin": string
    "Phạm vi": string
    "Tăng tốc": string
    "Tốc độ tối đa": string
  }
  dimensions: {
    "Dài": string
    "Rộng": string
    "Cao": string
    "Chiều dài cơ sở": string
    "Khoảng sáng gầm": string
    "Không gian chứa đồ": string
  }
  features: {
    "Giải trí": string
    "Kết nối": string
    "An toàn": string
    "Tiện nghi": string
    "Sạc": string
  }
}

interface Car {
  id: string
  name: string
  type: string
  price: number
  images: string[]
  colors: string[]
  description: string
  specs: CarSpecs
  features: string[]
}

// Sample data - in a real app, this would come from an API or database
const carsData: Record<string, Car> = {
  "vf-3": {
    id: "vf-3",
    name: "VF 3",
    type: "Mini",
    price: 299000000,
    images: [
      "/images/vehicles/vf3-exterior-1.jpg",
      "/images/vehicles/vf3-2.png",
      "/images/vehicles/vf3-1.jpg",
      "/images/vehicles/vf3-4.png",
    ],
    colors: ["Trắng", "Đen", "Xanh", "Đỏ"],
    description:
      "VF 3 là mẫu xe điện mini thiết kế cho đô thị. Với kích thước nhỏ gọn và khả năng điều khiển linh hoạt, xe hoàn hảo để di chuyển trong thành phố và các không gian đỗ xe chật hẹp.",
    specs: {
      performance: {
        "Động cơ": "Động cơ điện 150 mã lực",
        "Pin": "Pin Lithium-ion 30 kWh",
        "Phạm vi": "201 km",
        "Tăng tốc": "0-100 km/h trong 8,5 giây",
        "Tốc độ tối đa": "140 km/h",
      },
      dimensions: {
        "Dài": "3.114 mm",
        "Rộng": "1.600 mm",
        "Cao": "1.635 mm",
        "Chiều dài cơ sở": "2.000 mm",
        "Khoảng sáng gầm": "180 mm",
        "Không gian chứa đồ": "285 lít",
      },
      features: {
        "Giải trí": "Màn hình cảm ứng 8 inch",
        "Kết nối": "Apple CarPlay, Android Auto",
        "An toàn": "ABS, ESC, 6 túi khí",
        "Tiện nghi": "Điều hòa tự động",
        "Sạc": "Hỗ trợ sạc nhanh DC",
      },
    },
    features: [
      "Thiết kế nhỏ gọn cho di chuyển đô thị",
      "Phạm vi ấn tượng cho lái xe trong thành phố",
      "Khả năng sạc nhanh",
      "Hệ thống giải trí hiện đại",
      "Tính năng an toàn toàn diện",
      "Nội thất rộng rãi dù có kích thước nhỏ gọn",
    ],
  },
  "vf-5": {
    id: "vf-5",
    name: "VF 5",
    type: "A-SUV",
    price: 529000000,
    images: [
      "/images/vehicles/vf-5.webp",
      "/images/vehicles/vf5-2.webp",
      "/images/vehicles/vf5-3.webp",
      "/images/vehicles/vf5-4.webp",
    ],
    colors: ["Trắng", "Đen", "Đỏ", "Xanh", "Vàng"],
    description:
      "VF 5 sở hữu thiết kế hiện đại, trẻ trung, cá tính và nổi bật với các lựa chọn phối màu nội ngoại thất, đảm bảo cá nhân hóa theo phong cách sống, cá tính và sở thích của mỗi khách hàng.",
    specs: {
      performance: {
        "Động cơ": "Động cơ điện",
        "Pin": "Pin Lithium-ion 37,23 kWh",
        "Phạm vi": "326,4 km",
        "Tăng tốc": "0-100 km/h",
        "Tốc độ tối đa": "130 km/h",
      },
      dimensions: {
        "Dài": "3.967 mm",
        "Rộng": "1.723 mm",
        "Cao": "1.579 mm",
        "Chiều dài cơ sở": "2.730 mm",
        "Khoảng sáng gầm": "175 mm",
        "Không gian chứa đồ": "230 lít",
      },
      features: {
        "Giải trí": "Màn hình cảm ứng",
        "Kết nối": "Apple CarPlay, Android Auto",
        "An toàn": "6 túi khí, Cảnh báo điểm mù",
        "Tiện nghi": "Điều hòa tự động, Trợ lý ảo điều khiển bằng giọng nói",
        "Sạc": "Sạc nhanh (10%-70%): 33 phút",
      },
    },
    features: [
      "Quãng đường lên tới: 326.4 km",
      "Dung lượng pin: 37,23 kWh",
      "Nạp pin nhanh: 33 phút (10%-70%)",
      "Thiết kế hiện đại, trẻ trung",
      "Giám sát hành trình cơ bản",
      "Cảnh báo giao thông phía sau",
    ],
  },
  "vf-6": {
    id: "vf-6",
    name: "VF 6",
    type: "B-SUV",
    price: 689000000,
    images: [
      "/images/vehicles/vf6-1.jpg",
      "/images/vehicles/vf6-2.webp", 
      "/images/vehicles/vf6-3.webp",
      "/images/vehicles/vf6-4.webp",
    ],
    colors: ["Trắng", "Đen", "Bạc", "Xanh", "Đỏ"],
    description:
      "VF 6 là mẫu SUV điện cỡ B với thiết kế thể thao, năng động, phù hợp cho đô thị. Nổi bật với không gian nội thất rộng rãi và nhiều tính năng thông minh, VF 6 mang đến trải nghiệm lái xe thoải mái và tiện lợi.",
    specs: {
      performance: {
        "Động cơ": "Động cơ điện 174 mã lực (bản Eco), 201 mã lực (bản Plus)",
        "Pin": "Pin Lithium-ion 59,6 kWh",
        "Phạm vi": "381 km (bản Eco), 399 km (bản Plus)",
        "Tăng tốc": "0-100 km/h trong 9 giây (bản Plus)",
        "Tốc độ tối đa": "160 km/h",
      },
      dimensions: {
        "Dài": "4.238 mm",
        "Rộng": "1.820 mm",
        "Cao": "1.594 mm",
        "Chiều dài cơ sở": "2.730 mm",
        "Khoảng sáng gầm": "175 mm",
        "Không gian chứa đồ": "330 lít",
      },
      features: {
        "Giải trí": "Màn hình cảm ứng trung tâm 12,9 inch",
        "Kết nối": "Apple CarPlay, Android Auto, Wifi, Bluetooth",
        "An toàn": "ADAS, 6 túi khí, Camera 360°",
        "Tiện nghi": "Điều hòa hai vùng, Cửa sổ trời toàn cảnh",
        "Sạc": "Sạc nhanh DC (10%-70%) trong 24 phút",
      },
    },
    features: [
      "Màn hình cảm ứng trung tâm 12,9 inch",
      "Hệ thống hỗ trợ lái nâng cao ADAS",
      "Phạm vi lên tới 399 km",
      "Sạc nhanh (10%-70%) trong 24 phút",
      "Hệ thống âm thanh 8 loa",
      "Cửa sổ trời toàn cảnh",
    ],
  },
  "vf-7": {
    id: "vf-7",
    name: "VF 7",
    type: "C-SUV",
    price: 799000000,
    images: [
      "/images/vehicles/vf7-exterior-1.jpg",
      "/images/vehicles/vf7-hero-car.webp",
      "/images/vehicles/vf7-slide-in-croped.webp",
      "/images/vehicles/vf7-4.webp",
    ],
    colors: ["Trắng", "Đen", "Bạc", "Xanh", "Đỏ"],
    description:
      "VF 7 là mẫu SUV điện thể thao với thiết kế cá tính, mạnh mẽ, phù hợp cho cả đô thị và những chuyến đi dài. Kết hợp giữa khả năng vận hành mạnh mẽ và công nghệ tiên tiến, VF 7 là lựa chọn hoàn hảo cho người dùng cá tính.",
    specs: {
      performance: {
        "Động cơ": "Một động cơ (bản Eco), Hai động cơ AWD (bản Plus)",
        "Pin": "Pin Lithium-ion 75,3 kWh",
        "Phạm vi": "431 km (bản Eco), 400 km (bản Plus)",
        "Tăng tốc": "0-100 km/h trong 5,8 giây (bản Plus)",
        "Tốc độ tối đa": "180 km/h",
      },
      dimensions: {
        "Dài": "4.545 mm",
        "Rộng": "1.890 mm",
        "Cao": "1.640 mm",
        "Chiều dài cơ sở": "2.840 mm",
        "Khoảng sáng gầm": "190 mm",
        "Không gian chứa đồ": "500 lít",
      },
      features: {
        "Giải trí": "Màn hình cảm ứng 15,6 inch, Âm thanh 8 loa",
        "Kết nối": "Apple CarPlay, Android Auto, Wifi, Bluetooth",
        "An toàn": "ADAS nâng cao, 8 túi khí, Camera 360°",
        "Tiện nghi": "Điều hòa hai vùng, Ghế massage, Cửa sổ trời toàn cảnh",
        "Sạc": "Sạc nhanh DC (10%-70%) trong 28 phút",
      },
    },
    features: [
      "Thiết kế thể thao, mạnh mẽ",
      "Hai động cơ dẫn động 4 bánh (bản Plus)",
      "Phạm vi lên tới 431 km",
      "Màn hình cảm ứng 15,6 inch",
      "Ghế chỉnh điện có massage (bản Plus)",
      "Hệ thống ADAS với 11 tính năng",
    ],
  },
  "vf-8": {
    id: "vf-8",
    name: "VF 8",
    type: "SUV Điện",
    price: 1019000000,
    images: [
      "/images/vehicles/vf8plus.webp",
      "/images/vehicles/vf8eco.webp",
      "/images/vehicles/vf8-black.webp",
      "/images/vehicles/vf8-horizontal.webp",
    ],
    colors: ["Trắng", "Đen", "Bạc", "Xanh", "Đỏ"],
    description:
      "VF 8 là mẫu SUV điện cỡ vừa với hai phiên bản Eco và Plus, kết hợp hiệu suất, công nghệ và tính bền vững. Phiên bản Plus sở hữu pin dung lượng lớn hơn, cho phạm vi hoạt động xa hơn và hiệu suất cao hơn, trong khi phiên bản Eco tối ưu hiệu quả sử dụng năng lượng. Cả hai đều mang đến trải nghiệm lái xe cao cấp và không gian nội thất rộng rãi cho gia đình hiện đại.",
    specs: {
      performance: {
        "Động cơ": "Hai động cơ AWD, 353 mã lực (Eco), 402 mã lực (Plus)",
        "Pin": "Pin Lithium-ion 82 kWh (Eco), 87,7 kWh (Plus)",
        "Phạm vi": "420 km (Eco), 471 km (Plus)",
        "Tăng tốc": "0-100 km/h trong 5,9 giây (Eco), 5,5 giây (Plus)",
        "Tốc độ tối đa": "200 km/h",
      },
      dimensions: {
        "Dài": "4.750 mm",
        "Rộng": "1.900 mm",
        "Cao": "1.660 mm",
        "Chiều dài cơ sở": "2.950 mm",
        "Khoảng sáng gầm": "190 mm",
        "Không gian chứa đồ": "720 lít",
      },
      features: {
        "Giải trí": "Màn hình cảm ứng 15,6 inch",
        "Kết nối": "Apple CarPlay, Android Auto, 4G LTE",
        "An toàn": "Hệ thống hỗ trợ lái xe nâng cao (ADAS)",
        "Tiện nghi": "Điều hòa hai vùng, ghế sưởi",
        "Sạc": "Sạc nhanh DC, đạt 70% trong 30 phút",
      },
    },
    features: [
      "Hai động cơ dẫn động bốn bánh",
      "Hệ thống hỗ trợ lái xe nâng cao",
      "Nội thất cao cấp với vật liệu bền vững",
      "Cửa sổ trời toàn cảnh lớn",
      "Khả năng sạc nhanh",
      "Chỗ ngồi rộng rãi cho 5 hành khách",
    ],
  },
  "vf-9": {
    id: "vf-9",
    name: "VF 9",
    type: "E-SUV",
    price: 1499000000,
    images: [
      "/images/vehicles/vf9-exterior-1.jpg",
      "/images/vehicles/vf9-exterior-2.jpg",
      "/images/vehicles/vf9-red.webp",
      "/images/vehicles/int-vf9.webp",
    ],
    colors: ["Trắng", "Đen", "Bạc", "Xanh", "Đỏ"],
    description:
      "VF 9 là mẫu SUV điện hạng sang cỡ lớn với thiết kế sang trọng, đẳng cấp và không gian nội thất rộng rãi cho 7 hành khách. Được trang bị công nghệ tiên tiến nhất, VF 9 mang đến trải nghiệm lái xe thoải mái và an toàn tối đa cho gia đình.",
    specs: {
      performance: {
        "Động cơ": "Hai động cơ điện AWD, 402 mã lực",
        "Pin": "Pin Lithium-ion 92 kWh (Eco), 123 kWh (Plus)",
        "Phạm vi": "438 km (Eco), 520 km (Plus)",
        "Tăng tốc": "0-100 km/h trong 6,5 giây",
        "Tốc độ tối đa": "200 km/h",
      },
      dimensions: {
        "Dài": "5.118 mm",
        "Rộng": "2.070 mm",
        "Cao": "1.696 mm",
        "Chiều dài cơ sở": "3.150 mm",
        "Khoảng sáng gầm": "200 mm",
        "Không gian chứa đồ": "809 lít (5 chỗ), 459 lít (7 chỗ)",
      },
      features: {
        "Giải trí": "Màn hình cảm ứng 15,6 inch, Hệ thống âm thanh premium",
        "Kết nối": "Apple CarPlay, Android Auto, Wifi, Bluetooth",
        "An toàn": "ADAS cấp độ 2+, 11 túi khí, Camera 360°",
        "Tiện nghi": "Điều hòa 3 vùng, Ghế massage, Cửa sổ trời toàn cảnh",
        "Sạc": "Sạc nhanh DC (10%-70%) trong 26 phút",
      },
    },
    features: [
      "Không gian 7 chỗ rộng rãi",
      "Hai động cơ dẫn động 4 bánh",
      "Phạm vi lên tới 520 km (bản Plus)",
      "ADAS cấp độ 2+ với 20 tính năng",
      "Ghế chỉnh điện có massage và thông gió",
      "Cửa sổ trời toàn cảnh",
    ],
  },
  "herio-green": {
    id: "herio-green",
    name: "Herio Green",
    type: "Dòng Xe Dịch Vụ",
    price: 499000000,
    images: [
      "/images/vehicles/herio.webp",
      "/images/vehicles/herio-green-250315-02.jpg",
      "/images/vehicles/Herio-green1.jpg",
      "/images/vehicles/h1.webp",
    ],
    colors: ["Trắng", "Đen", "Xanh", "Bạc"],
    description:
      "Herio Green là mẫu xe điện được thiết kế đặc biệt cho dịch vụ vận chuyển hành khách chất lượng cao. Với thiết kế sang trọng, không gian nội thất rộng rãi và hiệu suất ấn tượng, Herio Green mang đến trải nghiệm di chuyển thoải mái và thân thiện với môi trường.",
    specs: {
      performance: {
        "Động cơ": "Động cơ điện 135 kW",
        "Pin": "Pin Lithium-ion 55 kWh",
        "Phạm vi": "358 km",
        "Tăng tốc": "0-100 km/h trong 9.5 giây",
        "Tốc độ tối đa": "150 km/h",
      },
      dimensions: {
        "Dài": "4,672 mm",
        "Rộng": "1,829 mm",
        "Cao": "1,650 mm",
        "Chiều dài cơ sở": "2,830 mm",
        "Khoảng sáng gầm": "180 mm",
        "Không gian chứa đồ": "450 lít",
      },
      features: {
        "Giải trí": "Màn hình cảm ứng 10 inch, Hệ thống âm thanh 8 loa",
        "Kết nối": "Apple CarPlay, Android Auto, Bluetooth, USB",
        "An toàn": "ABS, EBD, 6 túi khí, Camera 360°",
        "Tiện nghi": "Điều hòa tự động 2 vùng, Ghế bọc da cao cấp",
        "Sạc": "Sạc nhanh DC 30 phút (10%-80%)",
      },
    },
    features: [
      "Quãng đường lên tới: 358 km",
      "Số chỗ ngồi: 5 chỗ",
      "Công suất: 135 kW",
      "Mô-men xoắn: 310 Nm",
      "Phù hợp cho dịch vụ đưa đón cao cấp",
      "Tiết kiệm chi phí vận hành",
    ],
  },
  "minio-green": {
    id: "minio-green",
    name: "Minio Green",
    type: "Dòng Xe Dịch Vụ",
    price: 269000000,
    images: [
      "/images/vehicles/minio.webp",
      "/images/vehicles/minio-1.png",
      "/images/vehicles/minio-2.webp",
      "/images/vehicles/minio-img-02-sp.webp",

    ],
    colors: ["Trắng", "Đen", "Xanh", "Vàng"],
    description:
      "Minio Green là mẫu xe điện nhỏ gọn lý tưởng cho dịch vụ di chuyển trong đô thị. Với kích thước nhỏ gọn, khả năng di chuyển linh hoạt và chi phí vận hành thấp, Minio Green là lựa chọn hoàn hảo cho các dịch vụ đưa đón hành khách trong nội đô.",
    specs: {
      performance: {
        "Động cơ": "Động cơ điện 65 kW",
        "Pin": "Pin Lithium-ion 35 kWh",
        "Phạm vi": "247 km",
        "Tăng tốc": "0-100 km/h trong 12 giây",
        "Tốc độ tối đa": "130 km/h",
      },
      dimensions: {
        "Dài": "3,950 mm",
        "Rộng": "1,690 mm",
        "Cao": "1,570 mm",
        "Chiều dài cơ sở": "2,550 mm",
        "Khoảng sáng gầm": "160 mm",
        "Không gian chứa đồ": "320 lít",
      },
      features: {
        "Giải trí": "Màn hình cảm ứng 8 inch, Hệ thống âm thanh 6 loa",
        "Kết nối": "Apple CarPlay, Android Auto, Bluetooth",
        "An toàn": "ABS, EBD, 4 túi khí, Camera lùi",
        "Tiện nghi": "Điều hòa tự động, Ghế bọc da sinh thái",
        "Sạc": "Sạc nhanh DC 35 phút (10%-80%)",
      },
    },
    features: [
      "Quãng đường lên tới: 247 km",
      "Số chỗ ngồi: 4 chỗ",
      "Công suất: 65 kW",
      "Mô-men xoắn: 150 Nm",
      "Phù hợp cho dịch vụ đi lại trong đô thị",
      "Chi phí vận hành thấp",
    ],
  },
  "nerio-green": {
    id: "nerio-green",
    name: "Nerio Green",
    type: "Dòng Xe Dịch Vụ",
    price: 668000000,
    images: [
      "/images/vehicles/nerio.webp",
      "/images/vehicles/nerio-img-05-sp.webp",
      "/images/vehicles/nerio_img_01.webp",
      "/images/vehicles/neo-4.png",
    ],
    colors: ["Trắng", "Đen", "Bạc", "Xanh đậm"],
    description:
      "Nerio Green là mẫu xe điện được thiết kế đặc biệt cho dịch vụ taxi và đi chung. Với thiết kế hiện đại, không gian nội thất tối ưu và chi phí vận hành thấp, Nerio Green mang đến giải pháp di chuyển thông minh, tiện lợi và thân thiện với môi trường cho dịch vụ vận chuyển hành khách. ",
    specs: {
      performance: {
        "Động cơ": "Động cơ điện 150 kW",
        "Pin": "Pin Lithium-ion 70 kWh",
        "Phạm vi": "385 km",
        "Tăng tốc": "0-100 km/h trong 8.5 giây",
        "Tốc độ tối đa": "170 km/h",
      },
      dimensions: {
        "Dài": "4,950 mm",
        "Rộng": "1,960 mm",
        "Cao": "1,755 mm",
        "Chiều dài cơ sở": "2,950 mm",
        "Khoảng sáng gầm": "190 mm",
        "Không gian chứa đồ": "550 lít (5 chỗ), 150 lít (7 chỗ)",
      },
      features: {
        "Giải trí": "Màn hình cảm ứng 12 inch, Hệ thống âm thanh premium 10 loa",
        "Kết nối": "Apple CarPlay, Android Auto, Wifi, Bluetooth",
        "An toàn": "ADAS cơ bản, 8 túi khí, Camera 360°",
        "Tiện nghi": "Điều hòa 3 vùng, Ghế massage, Rèm che nắng",
        "Sạc": "Sạc nhanh DC 30 phút (10%-80%)",
      },
    },
    features: [
      "Quãng đường lên tới: 385 km",
      "Số chỗ ngồi: 5 chỗ",
      "Công suất: 150 kW",
      "Mô-men xoắn: 350 Nm",
      "Phù hợp cho dịch vụ đưa đón VIP",
      "Không gian hàng ghế thứ 2 rộng rãi, thoải mái",
    ],
  },
  "limo-green": {
    id: "limo-green",
    name: "Limo Green",
    type: "Dòng Xe Dịch Vụ",
    price: 749000000,
    images: [
      "/images/vehicles/limo.webp",
      "/images/vehicles/limo-2.webp",
      "/images/vehicles/limo-3.webp",
      "/images/vehicles/limo-4.jpg",
    ],
    colors: ["Trắng", "Đen", "Bạc", "Xanh"],
    description:
      "Limo Green là mẫu xe điện 7 chỗ cao cấp dành cho dịch vụ vận chuyển hành khách VIP. Với không gian nội thất rộng rãi, trang bị tiện nghi đẳng cấp và hệ thống tính năng thông minh, Nerio Green mang đến trải nghiệm di chuyển sang trọng và tiện nghi cho hành khách.",
    specs: {
      performance: {
        "Động cơ": "Động cơ điện 90 kW",
        "Pin": "Pin Lithium-ion 42 kWh",
        "Phạm vi": "295 km",
        "Tăng tốc": "0-100 km/h trong 10 giây",
        "Tốc độ tối đa": "145 km/h",
      },
      dimensions: {
        "Dài": "4,350 mm",
        "Rộng": "1,750 mm",
        "Cao": "1,615 mm",
        "Chiều dài cơ sở": "2,680 mm",
        "Khoảng sáng gầm": "170 mm",
        "Không gian chứa đồ": "380 lít",
      },
      features: {
        "Giải trí": "Màn hình cảm ứng 10 inch, Hệ thống âm thanh 6 loa",
        "Kết nối": "Apple CarPlay, Android Auto, Bluetooth",
        "An toàn": "ABS, EBD, 6 túi khí, Camera lùi",
        "Tiện nghi": "Điều hòa tự động, Ghế bọc da sinh thái",
        "Sạc": "Sạc nhanh DC 32 phút (10%-80%)",
      },
    },
    features: [
      "Quãng đường lên tới: 295 km",
      "Số chỗ ngồi: 7 chỗ",
      "Công suất: 90 kW",
      "Mô-men xoắn: 200 Nm",
      "Phù hợp cho dịch vụ taxi, ride-sharing",
      "Chi phí vận hành thấp, hiệu quả kinh tế cao",
    ],
  },
}
export default async function CarDetailPage({params}: {params: Promise<{ id: string }>}) {
  const { id } = await params;
  const car = carsData[id as keyof typeof carsData]

  if (!car) {
    notFound()
  }

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      {/* <section className="relative h-[400px] w-full">
        <Image src={car.images[0] || "/placeholder.svg"} alt={car.name} fill className="object-cover" priority />
      </section> */}

      {/* Breadcrumb */}
      <section className="py-4 px-4 bg-accent/50">
        <div className="container mx-auto">
          <div className="flex items-center text-sm">
            <Link href="/" className="text-muted-foreground hover:text-foreground">
              Trang Chủ
            </Link>
            <ChevronRight className="h-4 w-4 mx-2 text-muted-foreground" />
            <Link href="/cars" className="text-muted-foreground hover:text-foreground">
              Ô Tô
            </Link>
            <ChevronRight className="h-4 w-4 mx-2 text-muted-foreground" />
            <span>{car.name}</span>
          </div>
        </div>
      </section>

      {/* Car Details */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Image Gallery */}
            <div>
              <Tabs defaultValue="image-0" className="w-full">
                <div className="relative h-[350px] rounded-xl overflow-hidden mb-4 shadow-lg">
                  {car.images.map((image, index) => (
                    <TabsContent key={index} value={`image-${index}`} className="m-0 h-full">
                      <Image
                        src={image || "/placeholder.svg"}
                        alt={`${car.name} - Góc nhìn ${index + 1}`}
                        fill
                        className="object-contain transition-transform duration-500 ease-in-out hover:scale-105"
                        priority={index === 0}
                      />
                    </TabsContent>
                  ))}
                </div>
                <TabsList className="grid grid-cols-4 gap-4 bg-transparent p-0 h-auto">
                  {car.images.map((image, index) => (
                    <TabsTrigger
                      key={index}
                      value={`image-${index}`}
                      className="relative h-20 md:h-24 rounded-lg overflow-hidden p-0 data-[state=active]:border-2 data-[state=active]:border-primary transition-all duration-200 hover:opacity-90 hover:shadow-md"
                    >
                      <Image
                        src={image || "/placeholder.svg"}
                        alt={`Thumbnail ${index + 1}`}
                        fill
                        className="object-contain"
                      />
                    </TabsTrigger>
                  ))}
                </TabsList>
              </Tabs>
            </div>

            {/* Car Info */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-3xl font-bold">{car.name}</h2>
                <Badge className="text-lg px-3 py-1">{car.price.toLocaleString('vi-VN')}₫</Badge>
              </div>

              <p className="text-lg mb-6">{car.description}</p>

              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Các màu có sẵn</h3>
                <div className="flex flex-wrap gap-2">
                  {car.colors.map((color) => {
                    const colorMap: Record<string, string> = {
                      "Trắng": "white",
                      "Đen": "black",
                      "Bạc": "silver",
                      "Xanh": "blue",
                      "Đỏ": "red",
                      "Vàng": "yellow"
                    };

                    return (
                      <div
                        key={color}
                        className="w-10 h-10 rounded-full border border-gray-200 cursor-pointer"
                        style={{
                          backgroundColor: colorMap[color] || color.toLowerCase(),
                          boxShadow: colorMap[color] === "white" ? "inset 0 0 0 1px rgba(0,0,0,0.1)" : "none",
                        }}
                        title={color}
                      />
                    );
                  })}
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Tính năng nổi bật</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {car.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <Check className="h-5 w-5 mr-2 text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" className="flex-1" asChild>
                  <Link href={`/contact?model=${car.id}`}>Đặt Lịch Lái Thử</Link>
                </Button>
                <Button size="lg" variant="outline" className="w-12 sm:w-auto">
                  <Share2 className="h-5 w-5" />
                  <span className="sr-only sm:not-sr-only sm:ml-2">Chia sẻ</span>
                </Button>
              </div>

              <div className="bg-slate-100 p-4 rounded-lg">
                <p className="text-sm">
                  *Giá hiển thị là giá khởi điểm và không bao gồm thuế, phí hoặc trang bị tùy chọn. Vui lòng liên hệ
                  đội ngũ bán hàng của chúng tôi để được báo giá cụ thể.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="py-12 px-4 bg-accent">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Thông số kỹ thuật</h2>

          <Tabs defaultValue="performance" className="w-full">
              <TabsList className="grid w-full grid-cols-3 gap-4">
              <TabsTrigger className="bg-primary backdrop-blur-sm border-white hover:bg-primary/70 text-white" value="performance">Hiệu suất</TabsTrigger>
              <TabsTrigger className="bg-primary backdrop-blur-sm border-white hover:bg-primary/70 text-white" value="dimensions">Kích thước</TabsTrigger>
              <TabsTrigger className="bg-primary backdrop-blur-sm border-white hover:bg-primary/70 text-white" value="features">Tính năng</TabsTrigger>
            </TabsList>


            <TabsContent value="performance" className="mt-6">
              <div className="bg-white p-6 rounded-lg">
                <dl className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {Object.entries(car.specs.performance).map(([key, value]) => (
                    <div key={key} className="flex flex-col">
                      <dt className="text-sm font-medium text-muted-foreground">{key}</dt>
                      <dd className="text-lg">{value}</dd>
                      <Separator className="mt-2" />
                    </div>
                  ))}
                </dl>
              </div>
            </TabsContent>

            <TabsContent value="dimensions" className="mt-6">
              <div className="bg-white p-6 rounded-lg">
                <dl className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {Object.entries(car.specs.dimensions).map(([key, value]) => (
                    <div key={key} className="flex flex-col">
                      <dt className="text-sm font-medium text-muted-foreground">{key}</dt>
                      <dd className="text-lg">{value}</dd>
                      <Separator className="mt-2" />
                    </div>
                  ))}
                </dl>
              </div>
            </TabsContent>

            <TabsContent value="features" className="mt-6">
              <div className="bg-white p-6 rounded-lg">
                <dl className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {Object.entries(car.specs.features).map(([key, value]) => (
                    <div key={key} className="flex flex-col">
                      <dt className="text-sm font-medium text-muted-foreground">{key}</dt>
                      <dd className="text-lg">{value}</dd>
                      <Separator className="mt-2" />
                    </div>
                  ))}
                </dl>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Sẵn sàng trải nghiệm {car.name}?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Ghé thăm showroom của chúng tôi để được tư vấn chi tiết hoặc đặt lịch lái thử để cảm nhận tương lai của sự di chuyển.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" asChild>
              <Link href={`/contact?model=${car.id}`}>Đặt Lịch Lái Thử</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/contact">Liên Hệ Tư Vấn</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}

