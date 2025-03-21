import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Clock, Tag, Percent, Gift, CreditCard } from "lucide-react"

// Sample data - in a real app, this would come from an API or database
const promotions = [
  {
    id: "financing",
    title: "Special Financing Offer",
    description: "0% interest for the first 12 months on all VinFast electric vehicles. Limited time offer.",
    image: "/images/vf8.svg",
    badge: "Limited Time",
    expiryDate: "June 30, 2024",
    icon: CreditCard,
  },
  {
    id: "charging",
    title: "Free Charging Station",
    description: "Get a complimentary home charging station with any VF 8 or VF 9 purchase.",
    image: "/images/vf9.svg",
    badge: "Popular",
    expiryDate: "July 15, 2024",
    icon: Gift,
  },
  {
    id: "cashback",
    title: "Cash Back Offer",
    description: "Receive up to $2,000 cash back when you purchase a new VinFast vehicle.",
    image: "/images/vf6.svg",
    expiryDate: "August 31, 2024",
    icon: Percent,
  },
  {
    id: "loyalty",
    title: "Loyalty Program",
    description: "Existing VinFast owners receive an additional $1,000 discount on their next purchase.",
    image: "/images/vf7.svg",
    expiryDate: "December 31, 2024",
    icon: Tag,
  },
]

export default function PromotionsPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-[400px] w-full overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/backgrounds/hero.jpg"
            alt="VinFast Promotions"
            width={1920}
            height={1080}
            className="object-cover w-full h-full"
            priority
          />
        </div>
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white p-4 bg-black/30">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Current Promotions</h1>
          <p className="text-lg md:text-2xl max-w-3xl">Take advantage of our limited-time offers and special deals</p>
        </div>
      </section>

      {/* Promotions Listing */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {promotions.map((promo) => (
              <Card key={promo.id} className="overflow-hidden">
                <div className="relative h-64">
                  <Image src={promo.image || "/placeholder.svg"} alt={promo.title} fill className="object-cover" />
                  {promo.badge && <Badge className="absolute top-4 right-4 bg-primary">{promo.badge}</Badge>}
                </div>
                <CardContent className="pt-6">
                  <div className="flex items-center mb-2">
                    <promo.icon className="h-5 w-5 mr-2 text-primary" />
                    <h3 className="text-2xl font-bold">{promo.title}</h3>
                  </div>
                  <p className="mb-4">{promo.description}</p>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>Expires: {promo.expiryDate}</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full">
                    <Link href={`/promotions/${promo.id}`}>View Details</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Financing Calculator */}
      <section className="py-12 px-4 bg-accent">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Financing Calculator</h2>
              <p className="text-lg">Estimate your monthly payments with our financing calculator.</p>
            </div>

            <Card>
              <CardContent className="pt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="vehicle-price" className="block text-sm font-medium mb-1">
                        Vehicle Price ($)
                      </label>
                      <Input id="vehicle-price" type="number" defaultValue="49000" />
                    </div>
                    <div>
                      <label htmlFor="down-payment" className="block text-sm font-medium mb-1">
                        Down Payment ($)
                      </label>
                      <Input id="down-payment" type="number" defaultValue="5000" />
                    </div>
                    <div>
                      <label htmlFor="trade-in" className="block text-sm font-medium mb-1">
                        Trade-In Value ($)
                      </label>
                      <Input id="trade-in" type="number" defaultValue="0" />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="interest-rate" className="block text-sm font-medium mb-1">
                        Interest Rate (%)
                      </label>
                      <Input id="interest-rate" type="number" step="0.1" defaultValue="3.9" />
                    </div>
                    <div>
                      <label htmlFor="loan-term" className="block text-sm font-medium mb-1">
                        Loan Term (months)
                      </label>
                      <Input id="loan-term" type="number" defaultValue="60" />
                    </div>
                    <div className="pt-6">
                      <Button className="w-full">Calculate</Button>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-primary/10 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2">Estimated Monthly Payment</h3>
                  <p className="text-3xl font-bold">$815.37</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    This is an estimate. Contact our finance department for a personalized quote.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated on Promotions</h2>
            <p className="text-lg mb-8">
              Subscribe to our newsletter to receive the latest promotions and special offers directly to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
              <Input type="email" placeholder="Your email address" className="flex-1" />
              <Button>Subscribe</Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

