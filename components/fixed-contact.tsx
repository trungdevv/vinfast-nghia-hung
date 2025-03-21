import Link from "next/link"
import { Phone } from "lucide-react"

export default function FixedContact() {
  return (
    <Link
      href="tel:0949429556"
      className="fixed bottom-6 right-6 z-50 bg-primary text-white p-4 rounded-full shadow-lg hover:bg-primary/90 transition-colors"
      aria-label="Gọi ngay: 0949.429.556"
    >
      <Phone className="h-6 w-6" />
    </Link>
  )
} 