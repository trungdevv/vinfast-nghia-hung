import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Check, ChevronRight, Share2 } from "lucide-react"



interface Car {
  id: string
  name: string
  type: string
  price: number
  images: string[]
  colors: string[]
  description: string
  specs: string
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

    features: [
      "Thiết kế nhỏ gọn cho di chuyển đô thị",
      "Phạm vi ấn tượng cho lái xe trong thành phố",
      "Khả năng sạc nhanh",
      "Hệ thống giải trí hiện đại",
      "Tính năng an toàn toàn diện",
      "Nội thất rộng rãi dù có kích thước nhỏ gọn",
    ],
    specs: "/images/specifications/vf3.jpg"
  },
  "vf-5": {
    id: "vf-5",
    name: "VF 5",
    type: "A-SUV",
    price: 529000000,
    specs: "/images/specifications/vf5.jpg",
    images: [
      "/images/vehicles/vf-5.webp",
      "/images/vehicles/vf5-2.webp",
      "/images/vehicles/vf5-3.webp",
      "/images/vehicles/vf5-4.webp",
    ],
    colors: ["Trắng", "Đen", "Đỏ", "Xanh", "Vàng"],
    description:
      "VF 5 sở hữu thiết kế hiện đại, trẻ trung, cá tính và nổi bật với các lựa chọn phối màu nội ngoại thất, đảm bảo cá nhân hóa theo phong cách sống, cá tính và sở thích của mỗi khách hàng.",

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
    specs: "/images/specifications/vf6.jpg",
    images: [
      "/images/vehicles/vf6-1.jpg",
      "/images/vehicles/vf6-2.webp",
      "/images/vehicles/vf6-3.webp",
      "/images/vehicles/vf6-4.webp",
    ],
    colors: ["Trắng", "Đen", "Bạc", "Xanh", "Đỏ"],
    description:
      "VF 6 là mẫu SUV điện cỡ B với thiết kế thể thao, năng động, phù hợp cho đô thị. Nổi bật với không gian nội thất rộng rãi và nhiều tính năng thông minh, VF 6 mang đến trải nghiệm lái xe thoải mái và tiện lợi.",

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
    specs: "/images/specifications/vf7.webp",
    images: [
      "/images/vehicles/vf7-exterior-1.jpg",
      "/images/vehicles/vf7-hero-car.webp",
      "/images/vehicles/vf7-slide-in-croped.webp",
      "/images/vehicles/vf7-4.webp",
    ],
    colors: ["Trắng", "Đen", "Bạc", "Xanh", "Đỏ"],
    description:
      "VF 7 là mẫu SUV điện thể thao với thiết kế cá tính, mạnh mẽ, phù hợp cho cả đô thị và những chuyến đi dài. Kết hợp giữa khả năng vận hành mạnh mẽ và công nghệ tiên tiến, VF 7 là lựa chọn hoàn hảo cho người dùng cá tính.",

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
    specs: "/images/specifications/vf8.jpg",
    images: [
      "/images/vehicles/vf8plus.webp",
      "/images/vehicles/vf8eco.webp",
      "/images/vehicles/vf8-black.webp",
      "/images/vehicles/vf8-horizontal.webp",
    ],
    colors: ["Trắng", "Đen", "Bạc", "Xanh", "Đỏ"],
    description:
      "VF 8 là mẫu SUV điện cỡ vừa với hai phiên bản Eco và Plus, kết hợp hiệu suất, công nghệ và tính bền vững. Phiên bản Plus sở hữu pin dung lượng lớn hơn, cho phạm vi hoạt động xa hơn và hiệu suất cao hơn, trong khi phiên bản Eco tối ưu hiệu quả sử dụng năng lượng. Cả hai đều mang đến trải nghiệm lái xe cao cấp và không gian nội thất rộng rãi cho gia đình hiện đại.",

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
    specs: "/images/specifications/vf9.jpg",
    images: [
      "/images/vehicles/vf9-exterior-1.jpg",
      "/images/vehicles/vf9-exterior-2.jpg",
      "/images/vehicles/vf9-red.webp",
      "/images/vehicles/int-vf9.webp",
    ],
    colors: ["Trắng", "Đen", "Bạc", "Xanh", "Đỏ"],
    description:
      "VF 9 là mẫu SUV điện hạng sang cỡ lớn với thiết kế sang trọng, đẳng cấp và không gian nội thất rộng rãi cho 7 hành khách. Được trang bị công nghệ tiên tiến nhất, VF 9 mang đến trải nghiệm lái xe thoải mái và an toàn tối đa cho gia đình.",

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
    features: [
      "Quãng đường lên tới: 326 km",
      "Số chỗ ngồi: 5 chỗ",
      "Công suất: 135 kW",
      "Mô-men xoắn: 310 Nm",
      "Phù hợp cho dịch vụ đưa đón cao cấp",
      "Tiết kiệm chi phí vận hành",
    ],
    specs: "/images/specifications/herio.jpg",
  },
  "minio-green": {
    id: "minio-green",
    name: "Minio Green",
    type: "Dòng Xe Dịch Vụ",
    price: 269000000,
    specs: "/images/specifications/minio.jpg",
    images: [
      "/images/vehicles/minio.webp",
      "/images/vehicles/minio-1.png",
      "/images/vehicles/minio-2.webp",
      "/images/vehicles/minio-img-02-sp.webp",

    ],
    colors: ["Trắng", "Đen", "Xanh", "Vàng"],
    description:
      "Minio Green là mẫu xe điện nhỏ gọn lý tưởng cho dịch vụ di chuyển trong đô thị. Với kích thước nhỏ gọn, khả năng di chuyển linh hoạt và chi phí vận hành thấp, Minio Green là lựa chọn hoàn hảo cho các dịch vụ đưa đón hành khách trong nội đô.",
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
    specs: "/images/specifications/nerio.jpg",
    images: [
      "/images/vehicles/nerio.webp",
      "/images/vehicles/nerio-img-05-sp.webp",
      "/images/vehicles/nerio_img_01.webp",
      "/images/vehicles/neo-4.png",
    ],
    colors: ["Trắng", "Đen", "Bạc", "Xanh đậm"],
    description:
      "Nerio Green là mẫu xe điện được thiết kế đặc biệt cho dịch vụ taxi và đi chung. Với thiết kế hiện đại, không gian nội thất tối ưu và chi phí vận hành thấp, Nerio Green mang đến giải pháp di chuyển thông minh, tiện lợi và thân thiện với môi trường cho dịch vụ vận chuyển hành khách. ",
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
    specs: "/images/specifications/limo.jpg",
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
export default async function CarDetailPage({ params }: { params: Promise<{ id: string }> }) {
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

      <Separator />
      <section className="p-4">
        <div className="container mx-auto">
            <Image
              src={car.specs}
              alt={car.name}
              width="1000" height="1000"
              priority // Optional: Use for above-the-fold images
              className="object-contain mx-auto"
            />
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

