
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import FeaturedCars from "@/components/featured-cars"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent } from "@/components/ui/tabs"

export default function CarsPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-[400px] w-full overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/backgrounds/hero.jpg"
            alt="VinFast Cars Collection"
            width={1920}
            height={1080}
            className="object-cover w-full h-full"
            priority
          />
        </div>
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white p-4 bg-black/40">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white drop-shadow-lg">
            Khám Phá Các Dòng Xe VinFast
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl text-white/90 drop-shadow">
            Từ xe đô thị nhỏ gọn đến SUV sang trọng - VinFast có giải pháp di chuyển tối ưu cho mọi nhu cầu
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90">
              <Link href="#car-models">Xem Các Mẫu Xe</Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-white/20 backdrop-blur-sm border-white hover:bg-white/30 text-white" asChild>
              <Link href="/cars/compare">So Sánh Các Mẫu Xe</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Filter and Listing Section */}
      <section id="car-models" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-2 text-primary">Các Dòng Xe VinFast</h2>
            <p className="text-lg text-foreground/80 max-w-3xl">
              VinFast cung cấp các dòng xe điện hiện đại, thân thiện với môi trường, và phù hợp với mọi nhu cầu sử dụng.
            </p>
          </div>

          <Tabs defaultValue="all" className="mb-12">
            
            
            <TabsContent value="all">
              <FeaturedCars />
            </TabsContent>
            
            <TabsContent value="mini">
              {/* This would be a filtered version of FeaturedCars, but for now we'll use the same component */}
              <FeaturedCars />
            </TabsContent>
            
            <TabsContent value="suv">
              <FeaturedCars />
            </TabsContent>
            
            <TabsContent value="service">
              <FeaturedCars />
            </TabsContent>
          </Tabs>

          {/* Why Choose VinFast */}
          <div className="mt-20 mb-12">
            <h2 className="text-3xl font-bold mb-8 text-primary text-center">Tại Sao Chọn VinFast?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="bg-accent/20 border-0">
                <CardContent className="pt-8">
                  <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M6 12h12" /><path d="M12 6v12" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Chất Lượng Hàng Đầu</h3>
                  <p className="text-foreground/80">
                    Các dòng xe VinFast được sản xuất theo tiêu chuẩn quốc tế, sử dụng công nghệ hiện đại nhất từ châu Âu và Mỹ.
                  </p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 mt-1" />
                      <span>Nguyên vật liệu cao cấp</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 mt-1" />
                      <span>Dây chuyền sản xuất tự động hóa</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 mt-1" />
                      <span>Kiểm soát chất lượng nghiêm ngặt</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-accent/20 border-0">
                <CardContent className="pt-8">
                  <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2v20" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Chi Phí Tối Ưu</h3>
                  <p className="text-foreground/80">
                    VinFast cung cấp giải pháp chi phí linh hoạt, giúp khách hàng sở hữu xe dễ dàng với mức giá tối ưu và chi phí vận hành thấp.
                  </p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 mt-1" />
                      <span>Chi phí vận hành thấp với xe điện</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 mt-1" />
                      <span>Phương án thuê pin tiết kiệm</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 mt-1" />
                      <span>Hỗ trợ trả góp lãi suất thấp</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-accent/20 border-0">
                <CardContent className="pt-8">
                  <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Công Nghệ Tiên Tiến</h3>
                  <p className="text-foreground/80">
                    VinFast tích hợp các công nghệ hiện đại nhất, từ hệ thống hỗ trợ lái tiên tiến đến khả năng kết nối thông minh.
                  </p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 mt-1" />
                      <span>Hệ thống an toàn ADAS</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 mt-1" />
                      <span>Kết nối thông minh với smartphone</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 mt-1" />
                      <span>Cập nhật phần mềm từ xa (OTA)</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <h2 className="text-3xl font-bold mb-4 text-primary">Sẵn Sàng Trải Nghiệm?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto text-foreground/80">
              Đặt lịch lái thử hoặc ghé thăm showroom để trải nghiệm các mẫu xe VinFast ngay hôm nay.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
                <Link href="/contact">Đặt Lịch Lái Thử</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-primary/10 hover:bg-primary/5" asChild>
                <Link href="/cars/compare">So Sánh Các Mẫu Xe</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}