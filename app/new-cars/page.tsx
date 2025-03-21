import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

// Sample data - in a real app, this would come from an API or database
const cars = [
  {
    id: "vf-3",
    name: "VF 3",
    type: "SUV Điện Cỡ Nhỏ",
    price: 20000,
    image: "/images/vf6.svg",
    category: "mini",
    features: ["Phạm vi: 201 km", "150 mã lực", "Thiết kế nhỏ gọn"],
    colors: ["Trắng", "Đen", "Xanh", "Đỏ"],
  },
  {
    id: "vf-5",
    name: "VF 5",
    type: "SUV Điện Cỡ Nhỏ",
    price: 30000,
    image: "/images/vf6.svg",
    category: "suv",
    features: ["Phạm vi: 310 km", "134 mã lực", "Sạc nhanh"],
    colors: ["Trắng", "Đen", "Bạc", "Xanh", "Đỏ"],
  },
  {
    id: "vf-6",
    name: "VF 6",
    type: "SUV Điện Cỡ Vừa",
    price: 35000,
    image: "/images/vf6.svg",
    category: "suv",
    features: ["Phạm vi: 380 km", "201 mã lực", "Phiên bản Eco & Plus"],
    colors: ["Trắng", "Đen", "Bạc", "Xanh", "Đỏ"],
  },
  {
    id: "vf-7",
    name: "VF 7",
    type: "SUV Điện Thể Thao",
    price: 42000,
    image: "/images/vf7.svg",
    category: "suv",
    badge: "Bán Chạy",
    features: ["Phạm vi: 400 km", "349 mã lực", "Sạc nhanh"],
    colors: ["Trắng", "Đen", "Bạc", "Xanh", "Đỏ"],
  },
  {
    id: "vf-8",
    name: "VF 8",
    type: "SUV Điện",
    price: 49000,
    image: "/images/vf8.svg",
    category: "suv",
    badge: "Phổ Biến",
    features: ["Phạm vi: 420 km", "402 mã lực", "Có AWD"],
    colors: ["Trắng", "Đen", "Bạc", "Xanh", "Đỏ"],
  },
  {
    id: "vf-9",
    name: "VF 9",
    type: "SUV Điện Hạng Sang",
    price: 65000,
    image: "/images/vf9.svg",
    category: "suv",
    badge: "Mới",
    features: ["Phạm vi: 438 km", "402 mã lực", "7 Chỗ"],
    colors: ["Trắng", "Đen", "Bạc", "Xanh", "Đỏ"],
  },
]

export default function NewCarsPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-[400px] w-full overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/backgrounds/hero.jpg"
            alt="Xe Mới VinFast"
            width={1920}
            height={1080}
            className="object-cover w-full h-full"
            priority
          />
        </div>
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white p-4 bg-black/40">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white drop-shadow-lg">Các Dòng Xe VinFast</h1>
          <p className="text-lg md:text-2xl max-w-3xl text-white/90 drop-shadow">
            Khám phá dòng xe VinFast đầy đủ với thiết kế sáng tạo và phong cách
          </p>
        </div>
      </section>

      {/* Car Listing Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="bg-primary/5">
                <TabsTrigger value="all" className="data-[state=active]:bg-primary data-[state=active]:text-white">Tất Cả</TabsTrigger>
                <TabsTrigger value="suv" className="data-[state=active]:bg-primary data-[state=active]:text-white">SUV</TabsTrigger>
                <TabsTrigger value="mini" className="data-[state=active]:bg-primary data-[state=active]:text-white">Mini</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="all" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {cars.map((car) => (
                  <CarCard key={car.id} car={car} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="suv" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {cars
                  .filter((car) => car.category === "suv")
                  .map((car) => (
                    <CarCard key={car.id} car={car} />
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="mini" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {cars
                  .filter((car) => car.category === "mini")
                  .map((car) => (
                    <CarCard key={car.id} car={car} />
                  ))}
              </div>
            </TabsContent>
          </Tabs>
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
            <Link href="/new-cars/compare">So Sánh Các Mẫu Xe</Link>
          </Button>
        </div>
      </section>
    </main>
  )
}

interface CarCardProps {
  car: {
    id: string
    name: string
    type: string
    price: number
    image: string
    category: string
    badge?: string
    features: string[]
    colors: string[]
  }
}

function CarCard({ car }: CarCardProps) {
  return (
    <Card className="overflow-hidden group hover:border-primary/20 transition-colors">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={car.image || "/placeholder.svg"}
          alt={car.name}
          fill
          className="object-cover transition-transform group-hover:scale-105"
        />
        {car.badge && <Badge className="absolute top-2 right-2 bg-primary text-white">{car.badge}</Badge>}
      </div>
      <CardContent className="pt-6">
        <h3 className="text-xl font-bold text-primary">{car.name}</h3>
        <p className="text-foreground/70">{car.type}</p>
        <p className="font-bold text-lg mt-2 text-primary">Từ {car.price.toLocaleString()} USD</p>

        <div className="mt-4 flex flex-wrap gap-1">
          {car.colors.map((color) => (
            <div
              key={color}
              className="w-6 h-6 rounded-full border border-primary/10"
              style={{
                backgroundColor: color.toLowerCase(),
                boxShadow: color.toLowerCase() === "white" ? "inset 0 0 0 1px rgba(0,0,0,0.1)" : "none",
              }}
              title={color}
            />
          ))}
        </div>

        <ul className="mt-4 space-y-1">
          {car.features.map((feature, index) => (
            <li key={index} className="text-sm flex items-center text-foreground/80">
              <span className="mr-2 text-primary">•</span>
              {feature}
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="flex gap-2">
        <Button variant="outline" className="flex-1 border-primary/10 hover:bg-primary/5" asChild>
          <Link href={`/new-cars/${car.id}`}>Chi Tiết</Link>
        </Button>
        <Button className="flex-1 bg-primary hover:bg-primary/90" asChild>
          <Link href={`/contact?model=${car.id}`}>Lái Thử</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

