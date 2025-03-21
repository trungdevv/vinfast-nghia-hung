import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

interface PromotionBannerProps {
  title: string
  description: string
  imageUrl: string
  buttonText: string
  buttonLink: string
}

export default function PromotionBanner({
  title,
  description,
  imageUrl,
  buttonText,
  buttonLink,
}: PromotionBannerProps) {
  return (
    <div className="relative overflow-hidden rounded-lg group h-[300px] bg-white">
      <div className="relative w-full h-full">
        <Image
          src={imageUrl}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
          className="object-cover transition-transform group-hover:scale-105"
        />
      </div>
      <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black/60 via-black/30 to-transparent">
        <h3 className="text-2xl font-bold mb-2 text-white drop-shadow-lg">{title}</h3>
        <p className="mb-4 text-white/90 drop-shadow">{description}</p>
        <Button variant="secondary" className="bg-white text-primary hover:bg-white/90 w-fit" asChild>
          <Link href={buttonLink}>{buttonText}</Link>
        </Button>
      </div>
    </div>
  )
}

