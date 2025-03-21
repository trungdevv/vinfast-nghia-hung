import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

// Sample data - in a real app, this would come from an API or database
const featuredCars = [
  {
    id: "vf-9",
    name: "VF 9",
    type: "E-SUV",
    price: 1499000000,
    image: "/images/vehicles/vf9-exterior-1.jpg",
    badge: "Mới",
    features: ["Quãng đường lên tới: 626 km", "Số chỗ ngồi: 7 chỗ"],
  },
  {
    id: "vf-8",
    name: "VF 8",
    type: "D-SUV",
    price: 1019000000,
    image: "/images/vehicles/vf8-exterior-1.jpg",
    badge: "Phổ Biến",
    features: ["Quãng đường lên tới: 471 km", "Số chỗ ngồi: 5 chỗ"],
  },
  {
    id: "vf-7",
    name: "VF 7",
    type: "C-SUV",
    price: 799000000,
    image: "/images/vehicles/vf7-exterior-1.jpg",
    badge: "Bán Chạy",
    features: ["Quãng đường lên tới: 431 km","Số chỗ ngồi: 5 chỗ"],
  },
  {
    id: "vf-6",
    name: "VF 6",
    type: "B-SUV",
    price: 689000000,
    image: "/images/vehicles/vf6-exterior-1.jpg",
    features: ["Quãng đường lên tới: 480 km", "Số chỗ ngồi: 5 chỗ"],
  },
  {
    id: "vf-5",
    name: "VF 5",
    type: "A-SUV",
    price: 529000000,
    image: "/images/vehicles/vf-5.webp",
    features: ["Quãng đường lên tới: 326.4 km", "Số chỗ ngồi: 5 chỗ"],
  },
  {
    id: "vf-3",
    name: "VF 3",
    type: "Mini Car",
    price: 299000000,
    image: "/images/vehicles/vf3-exterior-1.jpg",
    features: ["Quãng đường lên tới: 210 km", "Số chỗ ngồi: 4 chỗ"],
  },
]

export default function FeaturedCars() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {featuredCars.map((car) => (
        <Card key={car.id} className="overflow-hidden group hover:border-primary/20 transition-colors">
          <div className="relative h-48 overflow-hidden">
            <Image
              src={car.image}
              alt={car.name}
              fill
              className="object-cover transition-transform group-hover:scale-105"
            />
            {car.badge && <Badge className="absolute top-2 right-2 bg-primary text-white">{car.badge}</Badge>}
          </div>
          <CardContent className="pt-6">
            <h3 className="text-xl font-bold text-primary">{car.name}</h3>
            <p className="text-foreground/70 font-bold">{car.type}</p>
            <p className="font-bold text-lg mt-2 text-primary">Từ {car.price.toLocaleString()} VND</p>
            <ul className="mt-4 space-y-1">
              {car.features.map((feature, index) => (
                <li key={index} className="text-sm flex items-center text-foreground/80 font-bold">
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
      ))}
    </div>
  )
}

