import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import FeaturedCars from "@/components/featured-cars"
import PromotionBanner from "@/components/promotion-banner"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-[600px] w-full overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/backgrounds/hero.jpg"
            alt="Showroom VinFast"
            width={1920}
            height={1080}
            className="object-cover w-full h-full"
            priority
          />
        </div>
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white p-4 bg-black/40">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white drop-shadow-lg">
             VinFast Nam Định
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl text-white/90 drop-shadow">
            Trải nghiệm tương lai của di chuyển cùng thương hiệu ô tô hàng đầu Việt Nam
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
           
            <Button size="lg" variant="outline" className="bg-white/20 backdrop-blur-sm border-white hover:bg-white/30 text-white" asChild>
              <Link href="/contact">Đặt Lịch Lái Thử</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Financing Promotion Banner */}
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
      {/* Compare Section */}
      <section className="py-12 px-4 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-primary">So Sánh Các Dòng Xe VinFast</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-foreground/80">
            Chưa chắc chắn về mẫu VinFast nào phù hợp với bạn? Sử dụng công cụ so sánh của chúng tôi để tìm chiếc xe hoàn hảo.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
            <Link href="/cars/compare">So Sánh Các Mẫu Xe</Link>
          </Button>
        </div>
      </section>
      {/* Featured Cars */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-primary">Các Mẫu Xe Nổi Bật</h2>
          <FeaturedCars />
        </div>
      </section>

      {/* Current Promotions */}
      <section className="py-16 px-4 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-primary">Khuyến Mãi Hiện Hành</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <PromotionBanner
              title="Điện Hoá Vì Tương Lai Bền Vững"
              description="Chương trình hỗ trợ 100% lệ phí trước bạ cho khách hàng mua xe VinFast"
              imageUrl="/images/brand/sac-vinfast-5150.png"
              buttonText="Tìm Hiểu Thêm"
              buttonLink="/promotions"
            />
            <PromotionBanner
              title="Ưu Đãi Trả Góp Đặc Biệt"
              description="Hỗ trợ trả góp lên đến 70% giá trị xe với lãi suất ưu đãi"
              imageUrl="/images/brand/uu-dai-tra-gop-xe-vinfast.jpg"
              buttonText="Xem Chi Tiết"
              buttonLink="/promotions"
            />
          </div>
        </div>
      </section>

      {/* Service Vehicle Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold mb-4 text-primary">Dòng Xe Dịch Vụ</h2>
            <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
              Các dòng xe điện thông minh dành riêng cho dịch vụ vận chuyển, taxi và đưa đón. 
              Tiết kiệm chi phí vận hành, thân thiện với môi trường và tối ưu hiệu quả kinh doanh.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Herio Green */}
            <Card className="overflow-hidden group hover:border-primary/20 transition-colors">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="/images/vehicles/herio-green-250315-02.jpg"
                  alt="Herio Green"
                  fill
                  className="object-cover transition-transform group-hover:scale-105 p-6"
                />
                <Badge className="absolute top-2 right-2 bg-primary text-white">Dịch Vụ</Badge>
              </div>
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold text-primary">Herio Green</h3>
                <p className="text-foreground/70 font-bold">Dòng Xe Dịch Vụ</p>
                <p className="font-bold text-lg mt-2 text-primary">Từ 499.000.000 VND</p>
                <ul className="mt-4 space-y-1">
                  <li className="text-sm flex items-center text-foreground/80 font-bold">Quãng đường lên tới: 358 km</li>
                  <li className="text-sm flex items-center text-foreground/80 font-bold">Số chỗ ngồi: 5 chỗ</li>
                  <li className="text-sm flex items-center text-foreground/80 font-bold">Phù hợp cho dịch vụ đưa đón cao cấp</li>
                </ul>
              </CardContent>
              <CardFooter className="flex gap-2">
                <Button variant="outline" className="flex-1 border-primary/10 hover:bg-primary/5" asChild>
                  <Link href="/cars/herio-green">Chi Tiết</Link>
                </Button>
                <Button className="flex-1 bg-primary hover:bg-primary/90" asChild>
                  <Link href="/contact?model=herio-green">Tư Vấn</Link>
                </Button>
              </CardFooter>
            </Card>
            
            {/* Minio Green */}
            <Card className="overflow-hidden group hover:border-primary/20 transition-colors">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="/images/vehicles/minio.webp"
                  alt="Minio Green"
                  fill
                  className="object-cover transition-transform group-hover:scale-105 p-6"
                />
                <Badge className="absolute top-2 right-2 bg-primary text-white">Dịch Vụ</Badge>
              </div>
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold text-primary">Minio Green</h3>
                <p className="text-foreground/70 font-bold">Dòng Xe Dịch Vụ</p>
                <p className="font-bold text-lg mt-2 text-primary">Từ 269.000.000 VND</p>
                <ul className="mt-4 space-y-1">
                  <li className="text-sm flex items-center text-foreground/80 font-bold">Quãng đường lên tới: 247 km</li>
                  <li className="text-sm flex items-center text-foreground/80 font-bold">Số chỗ ngồi: 4 chỗ</li>
                  <li className="text-sm flex items-center text-foreground/80 font-bold">Phù hợp cho dịch vụ đô thị</li>
                </ul>
              </CardContent>
              <CardFooter className="flex gap-2">
                <Button variant="outline" className="flex-1 border-primary/10 hover:bg-primary/5" asChild>
                  <Link href="/cars/minio-green">Chi Tiết</Link>
                </Button>
                <Button className="flex-1 bg-primary hover:bg-primary/90" asChild>
                  <Link href="/contact?model=minio-green">Tư Vấn</Link>
                </Button>
              </CardFooter>
            </Card>
            
            {/* Nerio Green */}
            <Card className="overflow-hidden group hover:border-primary/20 transition-colors">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="/images/vehicles/nerio.webp"
                  alt="Nerio Green"
                  fill
                  className="object-cover transition-transform group-hover:scale-105 p-6"
                />
                <Badge className="absolute top-2 right-2 bg-primary text-white">Dịch Vụ</Badge>
              </div>
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold text-primary">Nerio Green</h3>
                <p className="text-foreground/70 font-bold">Dòng Xe Dịch Vụ</p>
                <p className="font-bold text-lg mt-2 text-primary">Từ 668.000.000 VND</p>
                <ul className="mt-4 space-y-1">
                  <li className="text-sm flex items-center text-foreground/80 font-bold">Quãng đường lên tới: 385 km</li>
                  <li className="text-sm flex items-center text-foreground/80 font-bold">Số chỗ ngồi: 7 chỗ</li>
                  <li className="text-sm flex items-center text-foreground/80 font-bold">Phù hợp cho dịch vụ đưa đón VIP</li>
                </ul>
              </CardContent>
              <CardFooter className="flex gap-2">
                <Button variant="outline" className="flex-1 border-primary/10 hover:bg-primary/5" asChild>
                  <Link href="/cars/nerio-green">Chi Tiết</Link>
                </Button>
                <Button className="flex-1 bg-primary hover:bg-primary/90" asChild>
                  <Link href="/contact?model=nerio-green">Tư Vấn</Link>
                </Button>
              </CardFooter>
            </Card>
            
            {/* Limo Green */}
            <Card className="overflow-hidden group hover:border-primary/20 transition-colors">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="/images/vehicles/limo.webp"
                  alt="Limo Green"
                  fill
                  className="object-cover transition-transform group-hover:scale-105 p-6"
                />
                <Badge className="absolute top-2 right-2 bg-primary text-white">Dịch Vụ</Badge>
              </div>
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold text-primary">Limo Green</h3>
                <p className="text-foreground/70 font-bold">Dòng Xe Dịch Vụ</p>
                <p className="font-bold text-lg mt-2 text-primary">Từ 749.000.000 VND</p>
                <ul className="mt-4 space-y-1">
                  <li className="text-sm flex items-center text-foreground/80 font-bold">Quãng đường lên tới: 295 km</li>
                  <li className="text-sm flex items-center text-foreground/80 font-bold">Số chỗ ngồi: 5 chỗ</li>
                  <li className="text-sm flex items-center text-foreground/80 font-bold">Phù hợp cho dịch vụ taxi, ride-sharing</li>
                </ul>
              </CardContent>
              <CardFooter className="flex gap-2">
                <Button variant="outline" className="flex-1 border-primary/10 hover:bg-primary/5" asChild>
                  <Link href="/cars/limo-green">Chi Tiết</Link>
                </Button>
                <Button className="flex-1 bg-primary hover:bg-primary/90" asChild>
                  <Link href="/contact?model=limo-green">Tư Vấn</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
          
      
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4 text-primary">Về Showroom Của Chúng Tôi</h2>
              <p className="text-lg mb-6 text-foreground/80">
                Là đại lý ủy quyền của VinFast, chúng tôi cung cấp trải nghiệm ô tô cao cấp với đầy đủ các dịch vụ
                bao gồm bán hàng, bảo dưỡng và hỗ trợ khách hàng.
              </p>
              <p className="text-lg mb-6 text-foreground/80">
                Showroom của chúng tôi trưng bày đầy đủ các dòng xe VinFast, từ sedan thanh lịch đến SUV mạnh mẽ và
                xe điện đột phá.
              </p>
              <Button className="bg-primary hover:bg-primary/90" asChild>
                <Link href="/contact">Ghé Thăm Showroom</Link>
              </Button>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/brand/about-showroom.jpg"
                alt="Showroom Công ty CP Thanh Tùng - VinFast Nam Định"
                fill
                className="object-cover object-[25%_75%]"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 px-4 bg-primary">
        <div className="container mx-auto">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-white">Đăng Ký Nhận Thông Tin</h2>
            <p className="mb-6 text-white/90">
              Đăng ký nhận bản tin để cập nhật những thông tin mới nhất,<br/>khuyến mãi và ưu đãi từ đại lý chúng tôi.
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <Input
                type="email"
                placeholder="Địa chỉ email của bạn"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/70 focus:border-white"
              />
              <Button variant="secondary" className="bg-white text-primary hover:bg-white/90">Đăng Ký</Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

