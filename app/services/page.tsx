import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CalendarIcon, Clock, PenToolIcon as Tool, Shield, Car, Wrench, Zap, Truck, Headphones } from "lucide-react"

// Sample data - in a real app, this would come from an API or database
const services = [
  {
    id: "maintenance",
    title: "Scheduled Maintenance",
    description: "Regular maintenance services to keep your VinFast vehicle in optimal condition.",
    icon: Tool,
    image: "/images/vf8.svg",
  },
  {
    id: "repair",
    title: "Repair Services",
    description: "Expert repair services for all VinFast models using genuine parts and accessories.",
    icon: Wrench,
    image: "/images/vf7.svg",
  },
  {
    id: "warranty",
    title: "Warranty Services",
    description: "Comprehensive warranty coverage and extended warranty options for your peace of mind.",
    icon: Shield,
    image: "/images/vf6.svg",
  },
  {
    id: "charging",
    title: "EV Charging Solutions",
    description: "Home charging station installation and public charging network access for electric vehicles.",
    icon: Zap,
    image: "/images/vf9.svg",
  },
  {
    id: "parts",
    title: "Genuine Parts & Accessories",
    description: "Original VinFast parts and accessories to maintain your vehicle's performance and value.",
    icon: Car,
    image: "/images/vf8.svg",
  },
  {
    id: "roadside",
    title: "Roadside Assistance",
    description: "24/7 emergency roadside assistance for VinFast owners anywhere in the country.",
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
            src="/images/backgrounds/hero.jpg"
            alt="VinFast Services"
            width={1920}
            height={1080}
            className="object-cover w-full h-full"
            priority
          />
        </div>
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white p-4 bg-black/30">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Services</h1>
          <p className="text-lg md:text-2xl max-w-3xl">
            Comprehensive care for your VinFast vehicle from our expert technicians
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Comprehensive VinFast Services</h2>
            <p className="text-lg max-w-3xl mx-auto">
              Our dealership offers a complete range of services to ensure your VinFast vehicle performs at its best
              throughout its lifetime.
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
                    <Link href={`/services/${service.id}`}>Learn More</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Center */}
      <section className="py-12 px-4 bg-accent">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px] rounded-lg overflow-hidden">
              <Image
                src="/images/hero.svg"
                alt="VinFast Service Center"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4">State-of-the-Art Service Center</h2>
              <p className="text-lg mb-6">
                Our service center is equipped with the latest diagnostic tools and equipment to provide the highest
                quality service for your VinFast vehicle.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <Tool className="h-5 w-5 mr-3 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold">Certified Technicians</h3>
                    <p>Our technicians are factory-trained and certified to work on all VinFast models.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Clock className="h-5 w-5 mr-3 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold">Convenient Service Hours</h3>
                    <p>We offer flexible service hours to accommodate your busy schedule.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Headphones className="h-5 w-5 mr-3 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold">Dedicated Service Advisors</h3>
                    <p>Our service advisors provide personalized attention to ensure your needs are met.</p>
                  </div>
                </li>
              </ul>
              <Button asChild>
                <Link href="/contact?service=appointment">Schedule Service</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Service Hours */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Service Center Hours</h2>
            <Card>
              <CardContent className="pt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-4 flex items-center">
                      <CalendarIcon className="mr-2 h-5 w-5 text-primary" />
                      Sales Department
                    </h3>
                    <ul className="space-y-2">
                      <li className="flex justify-between">
                        <span>Monday - Friday:</span>
                        <span>8:00 AM - 7:00 PM</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Saturday:</span>
                        <span>9:00 AM - 6:00 PM</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Sunday:</span>
                        <span>10:00 AM - 4:00 PM</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4 flex items-center">
                      <CalendarIcon className="mr-2 h-5 w-5 text-primary" />
                      Service Department
                    </h3>
                    <ul className="space-y-2">
                      <li className="flex justify-between">
                        <span>Monday - Friday:</span>
                        <span>7:30 AM - 6:00 PM</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Saturday:</span>
                        <span>8:00 AM - 5:00 PM</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Sunday:</span>
                        <span>Closed</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-center">
                <Button asChild>
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>
    </main>
  )
}

