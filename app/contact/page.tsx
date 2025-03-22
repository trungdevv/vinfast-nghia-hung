"use client"

import { useState } from "react"
import Image from "next/image"
import { useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar } from "@/components/ui/calendar"
import { MapPin, Phone, Clock, CalendarIcon } from "lucide-react"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { cn } from "@/lib/utils"
import Link from "next/link"

export default function ContactPage() {
  const searchParams = useSearchParams()
  const modelParam = searchParams.get("model")
  const serviceParam = searchParams.get("service")

  // Set default tab based on URL parameters
  const defaultTab = serviceParam ? "service" : "test-drive"

  const [date, setDate] = useState<Date | undefined>(undefined)

  return (
    <main className="flex min-h-screen flex-col">
      
      {/* Hero Section */}
      <section className="relative h-[400px] w-full">
        <Image
          src="/images/backgrounds/contact.jpg"
          alt="Liên Hệ Với Chúng Tôi"
          fill
          className="object-cover object-[25%_50%] brightness-90"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4 bg-black/30">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Liên Hệ Với Chúng Tôi</h1>
          <p className="text-lg md:text-2xl max-w-3xl">Chúng tôi luôn sẵn sàng hỗ trợ mọi nhu cầu về VinFast của bạn</p>
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
      {/* Contact Information */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center">
                  <MapPin className="h-5 w-5 mr-2 text-primary" />
                  Địa Chỉ
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Số 75 Phố Đại Tân, xã Nghĩa Sơn, huyện Nghĩa Hưng, tỉnh Nam Định</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center">
                  <Phone className="h-5 w-5 mr-2 text-primary" />
                  Số Điện Thoại
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Hotline: 0949 429 556</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center">
                  <Clock className="h-5 w-5 mr-2 text-primary" />
                  Giờ Làm Việc
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Thứ Hai - Thứ Sáu: 8:00 - 19:00</p>
                <p>Thứ Bảy: 9:00 - 18:00</p>
                <p>Chủ Nhật: 10:00 - 16:00</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Forms */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Liên Hệ</h2>

              <Tabs defaultValue={defaultTab}>
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="general">Hỏi Đáp Chung</TabsTrigger>
                  <TabsTrigger value="test-drive">Đăng Ký Lái Thử</TabsTrigger>
                  <TabsTrigger value="service">Đặt Lịch Bảo Dưỡng</TabsTrigger>
                </TabsList>

                <TabsContent value="general" className="mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Hỏi Đáp Chung</CardTitle>
                      <CardDescription>
                        Bạn có câu hỏi? Hãy điền vào mẫu dưới đây và chúng tôi sẽ liên hệ lại trong thời gian sớm nhất.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <form className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <label htmlFor="first-name" className="text-sm font-medium">
                              Tên
                            </label>
                            <Input id="first-name" required />
                          </div>
                          <div className="space-y-2">
                            <label htmlFor="last-name" className="text-sm font-medium">
                              Họ
                            </label>
                            <Input id="last-name" required />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="email" className="text-sm font-medium">
                            Email
                          </label>
                          <Input id="email" type="email" required />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="phone" className="text-sm font-medium">
                            Số Điện Thoại
                          </label>
                          <Input id="phone" type="tel" />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="subject" className="text-sm font-medium">
                            Tiêu Đề
                          </label>
                          <Input id="subject" required />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="message" className="text-sm font-medium">
                            Nội Dung
                          </label>
                          <Textarea id="message" rows={5} required />
                        </div>
                      </form>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">Gửi Yêu Cầu</Button>
                    </CardFooter>
                  </Card>
                </TabsContent>

                <TabsContent value="test-drive" className="mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Đăng Ký Lái Thử</CardTitle>
                      <CardDescription>
                        Trải nghiệm cảm giác lái xe VinFast. Đăng ký lái thử ngay hôm nay.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <form className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <label htmlFor="td-first-name" className="text-sm font-medium">
                              Tên
                            </label>
                            <Input id="td-first-name" required />
                          </div>
                          <div className="space-y-2">
                            <label htmlFor="td-last-name" className="text-sm font-medium">
                              Họ
                            </label>
                            <Input id="td-last-name" required />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="td-email" className="text-sm font-medium">
                            Email
                          </label>
                          <Input id="td-email" type="email" required />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="td-phone" className="text-sm font-medium">
                            Số Điện Thoại
                          </label>
                          <Input id="td-phone" type="tel" required />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="td-model" className="text-sm font-medium">
                            Mẫu Xe
                          </label>
                          <Select defaultValue={modelParam || ""}>
                            <SelectTrigger id="td-model">
                              <SelectValue placeholder="Chọn mẫu xe" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="vf-3">VF 3</SelectItem>
                              <SelectItem value="vf-5">VF 5</SelectItem>
                              <SelectItem value="vf-6">VF 6</SelectItem>
                              <SelectItem value="vf-7">VF 7</SelectItem>
                              <SelectItem value="vf-8">VF 8</SelectItem>
                              <SelectItem value="vf-9">VF 9</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="td-date" className="text-sm font-medium">
                            Ngày Mong Muốn
                          </label>
                          <Popover>
                            <PopoverTrigger asChild>
                              <Button
                                variant="outline"
                                className={cn(
                                  "w-full justify-start text-left font-normal",
                                  !date && "text-muted-foreground",
                                )}
                              >
                                <CalendarIcon className="mr-2 h-4 w-4" />
                                {date ? format(date, "PPP") : "Chọn ngày"}
                              </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0">
                              <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
                            </PopoverContent>
                          </Popover>
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="td-time" className="text-sm font-medium">
                            Thời Gian Mong Muốn
                          </label>
                          <Select>
                            <SelectTrigger id="td-time">
                              <SelectValue placeholder="Chọn thời gian" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="morning">Sáng (9:00 - 12:00)</SelectItem>
                              <SelectItem value="afternoon">Chiều (13:00 - 16:00)</SelectItem>
                              <SelectItem value="evening">Tối (17:00 - 19:00)</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="td-notes" className="text-sm font-medium">
                            Ghi Chú Thêm
                          </label>
                          <Textarea id="td-notes" rows={3} />
                        </div>
                      </form>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">Đăng Ký Lái Thử</Button>
                    </CardFooter>
                  </Card>
                </TabsContent>

                <TabsContent value="service" className="mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Đặt Lịch Bảo Dưỡng</CardTitle>
                      <CardDescription>Đặt lịch bảo dưỡng cho xe VinFast của bạn.</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <form className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <label htmlFor="sv-first-name" className="text-sm font-medium">
                              Tên
                            </label>
                            <Input id="sv-first-name" required />
                          </div>
                          <div className="space-y-2">
                            <label htmlFor="sv-last-name" className="text-sm font-medium">
                              Họ
                            </label>
                            <Input id="sv-last-name" required />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="sv-email" className="text-sm font-medium">
                            Email
                          </label>
                          <Input id="sv-email" type="email" required />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="sv-phone" className="text-sm font-medium">
                            Số Điện Thoại
                          </label>
                          <Input id="sv-phone" type="tel" required />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="sv-model" className="text-sm font-medium">
                            Mẫu Xe
                          </label>
                          <Select>
                            <SelectTrigger id="sv-model">
                              <SelectValue placeholder="Chọn mẫu xe" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="vf-3">VF 3</SelectItem>
                              <SelectItem value="vf-5">VF 5</SelectItem>
                              <SelectItem value="vf-6">VF 6</SelectItem>
                              <SelectItem value="vf-7">VF 7</SelectItem>
                              <SelectItem value="vf-8">VF 8</SelectItem>
                              <SelectItem value="vf-9">VF 9</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="sv-service" className="text-sm font-medium">
                            Loại Dịch Vụ
                          </label>
                          <Select>
                            <SelectTrigger id="sv-service">
                              <SelectValue placeholder="Chọn loại dịch vụ" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="maintenance">Bảo Dưỡng Định Kỳ</SelectItem>
                              <SelectItem value="repair">Dịch Vụ Sửa Chữa</SelectItem>
                              <SelectItem value="warranty">Dịch Vụ Bảo Hành</SelectItem>
                              <SelectItem value="parts">Thay Thế Phụ Tùng</SelectItem>
                              <SelectItem value="other">Khác</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="sv-date" className="text-sm font-medium">
                            Ngày Mong Muốn
                          </label>
                          <Popover>
                            <PopoverTrigger asChild>
                              <Button
                                variant="outline"
                                className={cn(
                                  "w-full justify-start text-left font-normal",
                                  !date && "text-muted-foreground",
                                )}
                              >
                                <CalendarIcon className="mr-2 h-4 w-4" />
                                {date ? format(date, "PPP") : "Chọn ngày"}
                              </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0">
                              <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
                            </PopoverContent>
                          </Popover>
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="sv-description" className="text-sm font-medium">
                            Mô Tả Dịch Vụ
                          </label>
                          <Textarea id="sv-description" rows={3} placeholder="Vui lòng mô tả dịch vụ bạn cần" />
                        </div>
                      </form>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">Đặt Lịch Bảo Dưỡng</Button>
                    </CardFooter>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>

            {/* Map */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Vị Trí Cửa Hàng</h2>
              <div className="relative h-[600px] w-full rounded-lg overflow-hidden">
                <Image
                  src="/images/backgrounds/vinfast-map.jpg"
                  alt="Bản Đồ Vị Trí Đại Lý"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="mt-4">
                <p className="text-muted-foreground">
                  Showroom của chúng tôi nằm ở vị trí thuận tiện tại trung tâm Thành phố Nam Định, dễ dàng tiếp cận bằng 
                  phương tiện công cộng và có nhiều bãi đỗ xe.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

