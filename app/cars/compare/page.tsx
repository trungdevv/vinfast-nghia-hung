"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface CarSpecs {
  "Động Cơ": string
  "Pin": string
  "Phạm Vi": string
  "Tăng Tốc": string
  "Tốc Độ Tối Đa": string
  "Số Chỗ Ngồi": string
  "Khoang Hành Lý": string
  "Sạc Nhanh": string
  "AWD": string
  "Cửa Sổ Trời": string
  [key: string]: string
}

interface Car {
  id: string
  name: string
  type: string
  price: number
  image: string
  specs: CarSpecs
}

// Dữ liệu cập nhật - các thông số được giả định theo thông tin chuẩn cho xe VinFast
const carsData: Record<string, Car> = {
  "vf-3": {
    id: "vf-3",
    name: "VF 3",
    type: "Xe điện thành phố",
    price: 650000000,
    image: "/images/vf3.svg",
    specs: {
      "Động Cơ": "Động cơ điện 100 mã lực",
      "Pin": "Pin Lithium-ion 35 kWh",
      "Phạm Vi": "230 km",
      "Tăng Tốc": "0-100 km/h trong 9.2 giây",
      "Tốc Độ Tối Đa": "130 km/h",
      "Số Chỗ Ngồi": "4 chỗ",
      "Khoang Hành Lý": "300 lít",
      "Sạc Nhanh": "Có",
      "AWD": "Không",
      "Cửa Sổ Trời": "Không",
    },
  },
  "vf-5": {
    id: "vf-5",
    name: "VF 5",
    type: "SUV điện nhỏ",
    price: 850000000,
    image: "/images/vf5.svg",
    specs: {
      "Động Cơ": "Động cơ điện 130 mã lực",
      "Pin": "Pin Lithium-ion 45 kWh",
      "Phạm Vi": "270 km",
      "Tăng Tốc": "0-100 km/h trong 8.5 giây",
      "Tốc Độ Tối Đa": "140 km/h",
      "Số Chỗ Ngồi": "5 chỗ",
      "Khoang Hành Lý": "350 lít",
      "Sạc Nhanh": "Có",
      "AWD": "Không",
      "Cửa Sổ Trời": "Không",
    },
  },
  "vf-6": {
    id: "vf-6",
    name: "VF 6",
    type: "SUV điện vừa",
    price: 1150000000,
    image: "/images/vf6.svg",
    specs: {
      "Động Cơ": "Động cơ điện 180 mã lực",
      "Pin": "Pin Lithium-ion 60 kWh",
      "Phạm Vi": "320 km",
      "Tăng Tốc": "0-100 km/h trong 7.2 giây",
      "Tốc Độ Tối Đa": "150 km/h",
      "Số Chỗ Ngồi": "5 chỗ",
      "Khoang Hành Lý": "400 lít",
      "Sạc Nhanh": "Có",
      "AWD": "Tùy chọn",
      "Cửa Sổ Trời": "Tùy chọn",
    },
  },
  "vf-7": {
    id: "vf-7",
    name: "VF 7",
    type: "SUV điện thể thao",
    price: 1550000000,
    image: "/images/vf7.svg",
    specs: {
      "Động Cơ": "Động cơ điện 280 mã lực",
      "Pin": "Pin Lithium-ion 70 kWh",
      "Phạm Vi": "350 km",
      "Tăng Tốc": "0-100 km/h trong 6.0 giây",
      "Tốc Độ Tối Đa": "165 km/h",
      "Số Chỗ Ngồi": "5 chỗ",
      "Khoang Hành Lý": "450 lít",
      "Sạc Nhanh": "Có",
      "AWD": "Có",
      "Cửa Sổ Trời": "Có",
    },
  },
  "vf-8": {
    id: "vf-8",
    name: "VF 8",
    type: "SUV điện cao cấp",
    price: 1800000000,
    image: "/images/vf8.svg",
    specs: {
      "Động Cơ": "2 động cơ điện AWD, 360 mã lực",
      "Pin": "Pin Lithium-ion 85 kWh",
      "Phạm Vi": "380 km",
      "Tăng Tốc": "0-100 km/h trong 5.5 giây",
      "Tốc Độ Tối Đa": "175 km/h",
      "Số Chỗ Ngồi": "5 chỗ",
      "Khoang Hành Lý": "500 lít",
      "Sạc Nhanh": "Có",
      "AWD": "Có",
      "Cửa Sổ Trời": "Có",
    },
  },
  "vf-9": {
    id: "vf-9",
    name: "VF 9",
    type: "SUV điện hạng sang",
    price: 2500000000,
    image: "/images/vf9.svg",
    specs: {
      "Động Cơ": "2 động cơ điện AWD, 400 mã lực",
      "Pin": "Pin Lithium-ion 95 kWh",
      "Phạm Vi": "420 km",
      "Tăng Tốc": "0-100 km/h trong 6.0 giây",
      "Tốc Độ Tối Đa": "190 km/h",
      "Số Chỗ Ngồi": "7 chỗ",
      "Khoang Hành Lý": "700 lít",
      "Sạc Nhanh": "Có",
      "AWD": "Có",
      "Cửa Sổ Trời": "Có",
    },
  },
}

export default function CompareModelsPage() {
  const [car1, setCar1] = useState<keyof typeof carsData>("vf-8")
  const [car2, setCar2] = useState<keyof typeof carsData>("vf-9")

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-[400px] w-full overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/backgrounds/hero.jpg"
            alt="So Sánh Các Mẫu Xe VinFast"
            width={1920}
            height={1080}
            className="object-cover w-full h-full"
            priority
          />
        </div>
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white p-4 bg-black/40">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white drop-shadow-lg">So Sánh Các Mẫu Xe</h1>
          <p className="text-lg md:text-2xl max-w-3xl text-white/90 drop-shadow">
            Tìm chiếc xe VinFast phù hợp nhất với nhu cầu của bạn
          </p>
        </div>
      </section>

      {/* Compare Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <label htmlFor="car1" className="block text-sm font-medium mb-2 text-primary">
                Chọn Mẫu Xe Thứ Nhất
              </label>
              <Select value={car1} onValueChange={setCar1}>
                <SelectTrigger id="car1" className="border-primary/10 focus:ring-primary">
                  <SelectValue placeholder="Chọn một mẫu xe" />
                </SelectTrigger>
                <SelectContent>
                  {Object.values(carsData).map((car) => (
                    <SelectItem key={car.id} value={car.id}>
                      {car.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <label htmlFor="car2" className="block text-sm font-medium mb-2 text-primary">
                Chọn Mẫu Xe Thứ Hai
              </label>
              <Select value={car2} onValueChange={setCar2}>
                <SelectTrigger id="car2" className="border-primary/10 focus:ring-primary">
                  <SelectValue placeholder="Chọn một mẫu xe" />
                </SelectTrigger>
                <SelectContent>
                  {Object.values(carsData).map((car) => (
                    <SelectItem key={car.id} value={car.id}>
                      {car.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {car1 && car2 && (
            <div className="border border-primary/10 rounded-lg overflow-hidden">
              <div className="grid grid-cols-3 bg-primary/5">
                <div className="p-4 font-bold text-primary">Thông Số</div>
                <div className="p-4 font-bold text-center text-primary">{carsData[car1].name}</div>
                <div className="p-4 font-bold text-center text-primary">{carsData[car2].name}</div>
              </div>

              {/* <div className="grid grid-cols-3">
                <div className="p-4 border-t border-primary/10">Hình Ảnh</div>
                <div className="p-4 border-t border-l border-primary/10 flex justify-center">
                  <div className="relative h-40 w-60">
                    <Image
                      src={carsData[car1].image || "/placeholder.svg"}
                      alt={carsData[car1].name}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <div className="p-4 border-t border-l border-primary/10 flex justify-center">
                  <div className="relative h-40 w-60">
                    <Image
                      src={carsData[car2].image || "/placeholder.svg"}
                      alt={carsData[car2].name}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div> */}

              <div className="grid grid-cols-3">
                <div className="p-4 border-t border-primary/10">Loại Xe</div>
                <div className="p-4 border-t border-l border-primary/10">{carsData[car1].type}</div>
                <div className="p-4 border-t border-l border-primary/10">{carsData[car2].type}</div>
              </div>

              <div className="grid grid-cols-3">
                <div className="p-4 border-t border-primary/10">Giá Khởi Điểm</div>
                <div className="p-4 border-t border-l border-primary/10 font-bold text-primary">
                  {carsData[car1].price.toLocaleString("vi-VN")} VND
                </div>
                <div className="p-4 border-t border-l border-primary/10 font-bold text-primary">
                  {carsData[car2].price.toLocaleString("vi-VN")} VND
                </div>
              </div>

              {Object.keys(carsData[car1].specs).map((spec) => (
                <div key={spec} className="grid grid-cols-3">
                  <div className="p-4 border-t border-primary/10">{spec}</div>
                  <div className="p-4 border-t border-l border-primary/10">
                    {carsData[car1].specs[spec]}
                  </div>
                  <div className="p-4 border-t border-l border-primary/10">
                    {carsData[car2].specs[spec]}
                  </div>
                </div>
              ))}

              <div className="grid grid-cols-3 bg-primary/5">
                <div className="p-4"></div>
                <div className="p-4 border-t border-l border-primary/10">
                  <Button className="w-full bg-primary hover:bg-primary/90" asChild>
                    <Link href={`/cars/${car1}`}>Xem Chi Tiết</Link>
                  </Button>
                </div>
                <div className="p-4 border-t border-l border-primary/10">
                  <Button className="w-full bg-primary hover:bg-primary/90" asChild>
                    <Link href={`/cars/${car2}`}>Xem Chi Tiết</Link>
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 px-4 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-primary">Cần Giúp Đỡ Để Quyết Định?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-foreground/80">
            Đội ngũ bán hàng chuyên nghiệp của chúng tôi có thể giúp bạn tìm chiếc xe VinFast phù hợp với phong cách sống và nhu cầu của bạn.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
            <Link href="/contact">Liên Hệ Ngay</Link>
          </Button>
        </div>
      </section>
    </main>
  )
}
