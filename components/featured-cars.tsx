'use client'
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useState } from "react"

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
    image: "/images/vehicles/vf8plus.webp",
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
    features: ["Quãng đường lên tới: 431 km", "Số chỗ ngồi: 5 chỗ"],
  },
  {
    id: "vf-6",
    name: "VF 6",
    type: "B-SUV",
    price: 689000000,
    image: "/images/vehicles/vf6-1.jpg",
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
    type: "Mini",
    price: 299000000,
    image: "/images/vehicles/vf3-exterior-1.jpg",
    features: ["Quãng đường lên tới: 210 km", "Số chỗ ngồi: 4 chỗ"],
  },
  {
    id: "herio-green",
    name: "Herio Green",
    type: "Dòng Xe Dịch Vụ",
    price: 499000000,
    image: "/images/vehicles/herio-green-250315-02.jpg",
    badge: "Dịch Vụ",
    features: ["Quãng đường lên tới: 358 km", "Số chỗ ngồi: 5 chỗ", "Phù hợp đưa đón cao cấp"],
  },
  {
    id: "minio-green",
    name: "Minio Green",
    type: "Dòng Xe Dịch Vụ",
    price: 269000000,
    image: "/images/vehicles/minio.webp",
    badge: "Dịch Vụ",
    features: ["Quãng đường lên tới: 247 km", "Số chỗ ngồi: 4 chỗ", "Phù hợp dịch vụ đô thị"],
  },
  {
    id: "nerio-green",
    name: "Nerio Green",
    type: "Dòng Xe Dịch Vụ",
    price: 668000000,
    image: "/images/vehicles/nerio.webp",
    badge: "Dịch Vụ",
    features: ["Quãng đường lên tới: 320 km", "Số chỗ ngồi: 5 chỗ", "Phù hợp dịch vụ taxi"],
  },
  {
    id: "limo-green",
    name: "Limo Green",
    type: "Dòng Xe Dịch Vụ",
    price: 749000000,
    image: "/images/vehicles/limo.webp",
    badge: "Dịch Vụ",
    features: ["Quãng đường lên tới: 450 km", "Số chỗ ngồi: 7 chỗ", "Phù hợp đưa đón VIP"],
  }
]

export default function FeaturedCars() {
  const [filters, setFilters] = useState({
    type: "all",
    priceRange: "all"
  });

  // Extract unique car types for filter options
  const carTypes = ["all", ...new Set(featuredCars.map(car => car.type))];
  
  // Define price ranges
  const priceRanges = [
    { id: "all", label: "Tất cả giá", min: 0, max: Infinity },
    { id: "under-300", label: "Dưới 300 triệu", min: 0, max: 300000000 },
    { id: "300-500", label: "300 - 500 triệu", min: 300000000, max: 500000000 },
    { id: "500-800", label: "500 - 800 triệu", min: 500000000, max: 800000000 },
    { id: "800-1000", label: "800 triệu - 1 tỷ", min: 800000000, max: 1000000000 },
    { id: "above-1000", label: "Trên 1 tỷ", min: 1000000000, max: Infinity },
  ];

  // Filter cars based on selected filters
  const filteredCars = featuredCars.filter(car => {
    const typeMatch = filters.type === "all" || car.type === filters.type;
    const selectedRange = priceRanges.find(range => range.id === filters.priceRange);
    const priceMatch = selectedRange && car.price >= selectedRange.min && car.price <= selectedRange.max;
    
    return typeMatch && priceMatch;
  });

  return (
    <div>
      <div className="mb-8 p-4 bg-primary/5 rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="typeFilter" className="block text-sm font-medium mb-2">Loại xe</label>
            <div className="flex flex-wrap gap-2">
              {carTypes.map(type => (
                <Button 
                  key={type} 
                  variant={filters.type === type ? "default" : "outline"}
                  className={filters.type === type ? "bg-primary text-white" : ""}
                  onClick={() => setFilters({...filters, type})}
                  size="sm"
                >
                  {type === "all" ? "Tất cả" : type}
                </Button>
              ))}
            </div>
          </div>
          
          <div>
            <label htmlFor="priceFilter" className="block text-sm font-medium mb-2">Khoảng giá</label>
            <div className="flex flex-wrap gap-2">
              {priceRanges.map(range => (
                <Button 
                  key={range.id} 
                  variant={filters.priceRange === range.id ? "default" : "outline"}
                  className={filters.priceRange === range.id ? "bg-primary text-white" : ""}
                  onClick={() => setFilters({...filters, priceRange: range.id})}
                  size="sm"
                >
                  {range.label}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {filteredCars.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-lg">Không tìm thấy xe phù hợp với bộ lọc đã chọn.</p>
          <Button 
            className="mt-4"
            onClick={() => setFilters({type: "all", priceRange: "all"})}
          >
            Xóa bộ lọc
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredCars.map((car) => (
            <Card key={car.id} className="overflow-hidden group hover:border-primary/20 transition-colors">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={car.image}
                  alt={car.name}
                  fill
                  className="object-cover transition-transform group-hover:scale-105 p-6"
                />
                {car.badge && <Badge className="absolute top-2 right-2 bg-primary text-white">{car.badge}</Badge>}
              </div>
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold text-primary">{car.name}</h3>
                <p className="text-foreground/70 font-bold">{car.type}</p>
                <p className="font-bold text-lg mt-2 text-primary">Từ {car.price.toLocaleString('vi-VN')} VND</p>
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
                  <Link href={`/cars/${car.id}`}>Chi Tiết</Link>
                </Button>
                <Button className="flex-1 bg-primary hover:bg-primary/90" asChild>
                  <Link href={`/contact?model=${car.id}`}>Lái Thử</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}

