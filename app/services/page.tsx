import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CalendarIcon, Clock, PenToolIcon as Tool, Shield, Car, Wrench, Zap, Truck, Headphones } from "lucide-react"

// Sample data - in a real app, this would come from an API or database
const services = [
  {
    id: "maintenance",
    title: "Bảo Dưỡng Định Kỳ",
    description: "Dịch vụ bảo dưỡng thường xuyên để giữ xe VinFast của bạn ở tình trạng tối ưu.",
    icon: Tool,
    image: "/images/vf8.svg",
  },
  {
    id: "repair",
    title: "Dịch Vụ Sửa Chữa",
    description: "Dịch vụ sửa chữa chuyên nghiệp cho tất cả các mẫu VinFast sử dụng phụ tùng và phụ kiện chính hãng.",
    icon: Wrench,
    image: "/images/vf7.svg",
  },
  {
    id: "warranty",
    title: "Dịch Vụ Bảo Hành",
    description: "Bảo hành toàn diện và lựa chọn bảo hành mở rộng để bạn an tâm.",
    icon: Shield,
    image: "/images/vf6.svg",
  },
  {
    id: "charging",
    title: "Giải Pháp Sạc Xe Điện",
    description: "Lắp đặt trạm sạc tại nhà và truy cập mạng lưới sạc công cộng cho xe điện.",
    icon: Zap,
    image: "/images/vf9.svg",
  },
  {
    id: "parts",
    title: "Phụ Tùng & Phụ Kiện Chính Hãng",
    description: "Phụ tùng và phụ kiện VinFast chính hãng để duy trì hiệu suất và giá trị của xe bạn.",
    icon: Car,
    image: "/images/vf8.svg",
  },
  {
    id: "roadside",
    title: "Hỗ Trợ Đường Bộ",
    description: "Hỗ trợ đường bộ khẩn cấp 24/7 cho chủ xe VinFast ở bất kỳ đâu trên cả nước.",
    icon: Truck,
    image: "/images/vf7.svg",
  },
]

export default function ServicesPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-[400px] w-full overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/backgrounds/service.webp"
            alt="Dịch Vụ VinFast"
            width={1920}
            height={1080}
            className="object-cover w-full h-full"
            priority
          />
        </div>
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white p-4 bg-black/30">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Dịch Vụ Của Chúng Tôi</h1>
          <p className="text-lg md:text-2xl max-w-3xl">
            Chăm sóc toàn diện cho xe VinFast của bạn từ các kỹ thuật viên chuyên nghiệp của chúng tôi
          </p>
        </div>
      </section>
      <section className="bg-primary text-white py-6">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h2 className="text-2xl md:text-3xl font-bold">HỖ TRỢ MUA XE Ô TÔ VINFAST TRẢ GÓP 80%</h2>
            <p className="text-lg mt-1">LÃI SUẤT THẤP - THỦ TỤC NHANH CHÓNG</p>
          </div>
          <Button size="lg" className="bg-white text-primary hover:bg-white/90" asChild>
            <Link href="tel:0949429556">
              <span className="text-lg font-bold flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                0949 429 556
              </span>
            </Link>
          </Button>
        </div>
      </section>
      {/* Services Overview */}
      {/* <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Dịch Vụ VinFast Toàn Diện</h2>
            <p className="text-lg max-w-3xl mx-auto">
              Đại lý của chúng tôi cung cấp đầy đủ các dịch vụ để đảm bảo xe VinFast của bạn hoạt động tốt nhất
              trong suốt vòng đời của xe.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Card key={service.id} className="overflow-hidden">
                <div className="relative h-48">
                  <Image src={service.image || "/placeholder.svg"} alt={service.title} fill className="object-cover" />
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <service.icon className="h-5 w-5 mr-2 text-primary" />
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{service.description}</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" asChild className="w-full">
                    <Link href={`/services/${service.id}`}>Tìm Hiểu Thêm</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* Service Center */}
      <section className="py-12 px-4 bg-accent">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px] rounded-lg overflow-hidden">
              <Image
                src="/images/backgrounds/service-2.webp"
                alt="Trung Tâm Dịch Vụ VinFast"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4">Trung Tâm Dịch Vụ Hiện Đại</h2>
              <p className="text-lg mb-6">
                Trung tâm dịch vụ của chúng tôi được trang bị các công cụ và thiết bị chẩn đoán tiên tiến nhất để cung cấp 
                dịch vụ chất lượng cao nhất cho xe VinFast của bạn.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <Tool className="h-5 w-5 mr-3 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold">Kỹ Thuật Viên Được Chứng Nhận</h3>
                    <p>Các kỹ thuật viên của chúng tôi được đào tạo và chứng nhận để làm việc với tất cả các mẫu VinFast.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Clock className="h-5 w-5 mr-3 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold">Giờ Phục Vụ Thuận Tiện</h3>
                    <p>Chúng tôi cung cấp giờ phục vụ linh hoạt để phù hợp với lịch trình bận rộn của bạn.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Headphones className="h-5 w-5 mr-3 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold">Tư Vấn Viên Dịch Vụ Tận Tâm</h3>
                    <p>Các tư vấn viên dịch vụ của chúng tôi cung cấp sự chăm sóc cá nhân hóa để đảm bảo đáp ứng nhu cầu của bạn.</p>
                  </div>
                </li>
              </ul>
              <Button asChild>
                <Link href="/contact?service=appointment">Đặt Lịch Bảo Dưỡng</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Service Hours */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Giờ Làm Việc Của Trung Tâm Dịch Vụ</h2>
            <Card>
              <CardContent className="pt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-4 flex items-center">
                      <CalendarIcon className="mr-2 h-5 w-5 text-primary" />
                      Phòng Kinh Doanh
                    </h3>
                    <ul className="space-y-2">
                      <li className="flex justify-between">
                        <span>Thứ Hai - Thứ Sáu:</span>
                        <span>8:00 - 19:00</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Thứ Bảy:</span>
                        <span>9:00 - 18:00</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Chủ Nhật:</span>
                        <span>10:00 - 16:00</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4 flex items-center">
                      <CalendarIcon className="mr-2 h-5 w-5 text-primary" />
                      Phòng Dịch Vụ
                    </h3>
                    <ul className="space-y-2">
                      <li className="flex justify-between">
                        <span>Thứ Hai - Thứ Sáu:</span>
                        <span>7:30 - 18:00</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Thứ Bảy:</span>
                        <span>8:00 - 17:00</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Chủ Nhật:</span>
                        <span>Đóng cửa</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-center">
                <Button asChild>
                  <Link href="/contact">Liên Hệ Với Chúng Tôi</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>
    </main>
  )
}

