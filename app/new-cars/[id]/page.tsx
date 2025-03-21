import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Check, ChevronRight, Download, Share2 } from "lucide-react"

interface CarSpecs {
  performance: {
    Motor: string
    Battery: string
    Range: string
    Acceleration: string
    "Top Speed": string
  }
  dimensions: {
    Length: string
    Width: string
    Height: string
    Wheelbase: string
    "Ground Clearance": string
    "Cargo Space": string
  }
  features: {
    Infotainment: string
    Connectivity: string
    Safety: string
    Comfort: string
    Charging: string
  }
}

interface Car {
  id: string
  name: string
  type: string
  price: number
  images: string[]
  colors: string[]
  description: string
  specs: CarSpecs
  features: string[]
}

// Sample data - in a real app, this would come from an API or database
const carsData: Record<string, Car> = {
  "vf-3": {
    id: "vf-3",
    name: "VF 3",
    type: "Mini Electric SUV",
    price: 20000,
    images: [
      "/images/vf6.svg",
      "/images/vf6.svg",
      "/images/vf6.svg",
      "/images/vf6.svg",
    ],
    colors: ["White", "Black", "Blue", "Red"],
    description:
      "The VF 3 is a mini electric SUV designed for urban mobility. With its compact size and nimble handling, it's perfect for navigating city streets and tight parking spaces.",
    specs: {
      performance: {
        Motor: "150 hp Electric Motor",
        Battery: "30 kWh Lithium-ion",
        Range: "125 miles (201 km)",
        Acceleration: "0-60 mph in 8.5 seconds",
        "Top Speed": "87 mph (140 km/h)",
      },
      dimensions: {
        Length: "3,114 mm",
        Width: "1,600 mm",
        Height: "1,635 mm",
        Wheelbase: "2,000 mm",
        "Ground Clearance": "180 mm",
        "Cargo Space": "285 liters",
      },
      features: {
        Infotainment: "8-inch touchscreen",
        Connectivity: "Apple CarPlay, Android Auto",
        Safety: "ABS, ESC, 6 airbags",
        Comfort: "Automatic climate control",
        Charging: "DC Fast Charging capability",
      },
    },
    features: [
      "Compact design for urban mobility",
      "Impressive range for city driving",
      "Fast charging capability",
      "Modern infotainment system",
      "Comprehensive safety features",
      "Spacious interior despite compact exterior",
    ],
  },
  "vf-8": {
    id: "vf-8",
    name: "VF 8",
    type: "Electric SUV",
    price: 49000,
    images: [
      "/images/vf8.svg",
      "/images/vf8.svg",
      "/images/vf8.svg",
      "/images/vf8.svg",
    ],
    colors: ["White", "Black", "Silver", "Blue", "Red"],
    description:
      "The VF 8 is a mid-size electric SUV that combines performance, technology, and sustainability. With its spacious interior and advanced features, it offers a premium driving experience for the modern family.",
    specs: {
      performance: {
        Motor: "Dual Motor AWD, 402 hp",
        Battery: "87.7 kWh Lithium-ion",
        Range: "260 miles (420 km)",
        Acceleration: "0-60 mph in 5.5 seconds",
        "Top Speed": "124 mph (200 km/h)",
      },
      dimensions: {
        Length: "4,750 mm",
        Width: "1,900 mm",
        Height: "1,660 mm",
        Wheelbase: "2,950 mm",
        "Ground Clearance": "190 mm",
        "Cargo Space": "720 liters",
      },
      features: {
        Infotainment: "15.6-inch touchscreen",
        Connectivity: "Apple CarPlay, Android Auto, 4G LTE",
        Safety: "Advanced Driver Assistance Systems (ADAS)",
        Comfort: "Dual-zone climate control, heated seats",
        Charging: "DC Fast Charging, 70% in 30 minutes",
      },
    },
    features: [
      "Dual motor all-wheel drive",
      "Advanced driver assistance systems",
      "Premium interior with sustainable materials",
      "Large panoramic sunroof",
      "Fast charging capability",
      "Spacious seating for 5 passengers",
    ],
  },
}

export default function CarDetailPage({ params }: { params: { id: string } }) {
  const car = carsData[params.id as keyof typeof carsData]

  if (!car) {
    notFound()
  }

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-[400px] w-full">
        <Image src={car.images[0] || "/placeholder.svg"} alt={car.name} fill className="object-cover" priority />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4 bg-black/30">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">{car.name}</h1>
          <p className="text-xl md:text-2xl">{car.type}</p>
        </div>
      </section>

      {/* Breadcrumb */}
      <section className="py-4 px-4 bg-accent/50">
        <div className="container mx-auto">
          <div className="flex items-center text-sm">
            <Link href="/" className="text-muted-foreground hover:text-foreground">
              Home
            </Link>
            <ChevronRight className="h-4 w-4 mx-2 text-muted-foreground" />
            <Link href="/new-cars" className="text-muted-foreground hover:text-foreground">
              New Cars
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
              <div className="relative h-[400px] rounded-lg overflow-hidden mb-4">
                <Image
                  src={car.images[0] || "/placeholder.svg"}
                  alt={`${car.name} Front View`}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="grid grid-cols-4 gap-4">
                {car.images.slice(1).map((image, index) => (
                  <div key={index} className="relative h-24 rounded-lg overflow-hidden">
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${car.name} View ${index + 2}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Car Info */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-3xl font-bold">{car.name}</h2>
                <Badge className="text-lg px-3 py-1">${car.price.toLocaleString()}</Badge>
              </div>

              <p className="text-lg mb-6">{car.description}</p>

              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Available Colors</h3>
                <div className="flex flex-wrap gap-2">
                  {car.colors.map((color) => (
                    <div
                      key={color}
                      className="w-10 h-10 rounded-full border border-gray-200 cursor-pointer"
                      style={{
                        backgroundColor: color.toLowerCase(),
                        boxShadow: color.toLowerCase() === "white" ? "inset 0 0 0 1px rgba(0,0,0,0.1)" : "none",
                      }}
                      title={color}
                    />
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Key Features</h3>
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
                  <Link href={`/contact?model=${car.id}`}>Book a Test Drive</Link>
                </Button>
                <Button size="lg" variant="outline" className="flex-1">
                  <Download className="mr-2 h-5 w-5" />
                  Download Brochure
                </Button>
                <Button size="lg" variant="outline" className="w-12 sm:w-auto">
                  <Share2 className="h-5 w-5" />
                  <span className="sr-only sm:not-sr-only sm:ml-2">Share</span>
                </Button>
              </div>

              <div className="bg-slate-100 p-4 rounded-lg">
                <p className="text-sm">
                  *Price shown is the starting price and does not include taxes, fees, or optional equipment. Contact
                  our sales team for a personalized quote.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="py-12 px-4 bg-accent">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Specifications</h2>

          <Tabs defaultValue="performance" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="performance">Performance</TabsTrigger>
              <TabsTrigger value="dimensions">Dimensions</TabsTrigger>
              <TabsTrigger value="features">Features</TabsTrigger>
            </TabsList>

            <TabsContent value="performance" className="mt-6">
              <div className="bg-white p-6 rounded-lg">
                <dl className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {Object.entries(car.specs.performance).map(([key, value]) => (
                    <div key={key} className="flex flex-col">
                      <dt className="text-sm font-medium text-muted-foreground">{key}</dt>
                      <dd className="text-lg">{value}</dd>
                      <Separator className="mt-2" />
                    </div>
                  ))}
                </dl>
              </div>
            </TabsContent>

            <TabsContent value="dimensions" className="mt-6">
              <div className="bg-white p-6 rounded-lg">
                <dl className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {Object.entries(car.specs.dimensions).map(([key, value]) => (
                    <div key={key} className="flex flex-col">
                      <dt className="text-sm font-medium text-muted-foreground">{key}</dt>
                      <dd className="text-lg">{value}</dd>
                      <Separator className="mt-2" />
                    </div>
                  ))}
                </dl>
              </div>
            </TabsContent>

            <TabsContent value="features" className="mt-6">
              <div className="bg-white p-6 rounded-lg">
                <dl className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {Object.entries(car.specs.features).map(([key, value]) => (
                    <div key={key} className="flex flex-col">
                      <dt className="text-sm font-medium text-muted-foreground">{key}</dt>
                      <dd className="text-lg">{value}</dd>
                      <Separator className="mt-2" />
                    </div>
                  ))}
                </dl>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Experience the {car.name}?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Visit our showroom for a personal demonstration or book a test drive to experience the future of mobility.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" asChild>
              <Link href={`/contact?model=${car.id}`}>Book a Test Drive</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}

