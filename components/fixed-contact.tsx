import Link from "next/link"
import { Phone } from "lucide-react"

export default function FixedContact() {
  return (
    <a
      href="tel:0949429556"
      className="fixed bottom-6 right-6 z-50 bg-primary text-white p-4 rounded-full shadow-xl hover:bg-primary/90 transition-all hover:scale-110 flex items-center gap-2"
      aria-label="Gọi ngay: 0949 429 556"
    >
      <Phone className="h-6 w-6" />
      <span className="hidden md:inline font-bold">0949 429 556</span>
    </a>
  )
} 