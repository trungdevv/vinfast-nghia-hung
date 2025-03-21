import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import FeaturedCars from "@/components/featured-cars"
import PromotionBanner from "@/components/promotion-banner"

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
            Đại Lý Ủy Quyền VinFast Nam Định
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl text-white/90 drop-shadow">
            Trải nghiệm tương lai của di chuyển cùng thương hiệu ô tô hàng đầu Việt Nam
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
              <Link href="/new-cars">Khám Phá Các Mẫu Xe</Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-white/20 backdrop-blur-sm border-white hover:bg-white/30 text-white" asChild>
              <Link href="/contact">Đặt Lịch Lái Thử</Link>
            </Button>
          </div>
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
              Đăng ký nhận bản tin để cập nhật những thông tin mới nhất, khuyến mãi và ưu đãi từ đại lý chúng tôi.
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

