import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Youtube, Twitter, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div>
            <div className="relative h-12 w-40 mb-4">
              <Image
                src="/images/brand/vin-logo.png"
                alt="Logo VinFast"
                fill
                className="object-contain brightness-200"
                priority
              />
            </div>
            <p className="text-slate-300 mb-4">
              Đại lý ủy quyền chính thức của VinFast, cung cấp dịch vụ ô tô cao cấp và đầy đủ các dòng xe
              VinFast.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-white hover:text-primary">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-white hover:text-primary">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-white hover:text-primary">
                <Youtube size={20} />
                <span className="sr-only">YouTube</span>
              </Link>
              <Link href="#" className="text-white hover:text-primary">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Liên Kết Nhanh</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-slate-300 hover:text-white">
                  Trang Chủ
                </Link>
              </li>
              <li>
                <Link href="/cars" className="text-slate-300 hover:text-white">
                  Ô Tô
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-slate-300 hover:text-white">
                  Dịch Vụ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-300 hover:text-white">
                  Liên Hệ
                </Link>
              </li>
            </ul>
          </div>


          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Thông Tin Liên Hệ</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="text-slate-300">Số 75 Phố Đại Tân, xã Nghĩa Sơn, huyện Nghĩa Hưng, tỉnh Nam Định</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-primary" />
                <a href="tel:+84949429556" className="text-slate-300 hover:text-white">
                  0949 429 556
                </a>
              </li>
              {/* <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-primary" />
                <Link href="mailto:info@vinfastnamdinh.vn" className="text-slate-300 hover:text-white">
                  info@vinfastnamdinh.vn
                </Link>
              </li> */}
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-400">
          <p>© {new Date().getFullYear()} Đại Lý Ủy Quyền VinFast Nam Định. All rights reserved. © Copyright 2025</p>
        </div>
      </div>
    </footer>
  )
}

