"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X, ChevronDown, Globe, Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"
import { useTheme } from "next-themes"

const navigation = [
  { name: "Trang Chủ", href: "/" },
  { name: "Ô tô", href: "/cars" },
  { name: "Dịch Vụ", href: "/services" },
  { name: "Liên Hệ", href: "/contact" },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()


  return (
    <>
      <header className="fixed top-0 left-0 right-0 bg-background border-b z-40">
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Đại Lý VinFast</span>
              <div className="relative h-10 w-32">
                <Image
                  src="/images/brand/vin-logo.png"
                  alt="Logo VinFast"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-foreground"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-sm font-semibold leading-6 text-foreground hover:text-primary relative py-2",
                  pathname === item.href &&
                  "text-primary after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary",
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            >
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Chuyển đổi giao diện</span>
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="gap-1">
                  <Globe className="h-4 w-4" />
                  <span>VI</span>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Tiếng Việt</DropdownMenuItem>
                <DropdownMenuItem>English</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button asChild>
              <Link href="/contact">Đặt Lịch Lái Thử</Link>
            </Button>
          </div>
        </nav>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 z-50 bg-background">
            <div className="fixed inset-0 flex">
              <div className="w-full">
                <div className="flex h-16 items-center justify-between px-4">
                  <Link href="/" className="-m-1.5 p-1.5">
                    <span className="sr-only">Đại Lý VinFast</span>
                    <div className="relative h-10 w-32">
                      <Image
                        src="/images/brand/vin-logo.png"
                        alt="Logo VinFast"
                        fill
                        className="object-contain"
                        priority
                      />
                    </div>
                  </Link>
                  <button
                    type="button"
                    className="-m-2.5 rounded-md p-2.5 text-foreground"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="sr-only">Đóng menu</span>
                    <X className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                <div className="mt-6 flow-root px-6">
                  <div className="-my-6 divide-y divide-border">
                    <div className="space-y-2 py-6">
                      {navigation.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className={cn(
                            "-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-foreground hover:bg-accent",
                            pathname === item.href && "text-primary",
                          )}
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                    <div className="py-6 space-y-4">
                      <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-1/3"
                          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                        >
                          <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                          <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                          <span className="sr-only">Chuyển đổi giao diện</span>
                        </Button>
                        <Button variant="outline" size="sm" className="w-1/3">
                          <Globe className="h-4 w-4 mr-2" />
                          Tiếng Việt
                        </Button>
                        <Button variant="outline" size="sm" className="w-1/3">
                          <Globe className="h-4 w-4 mr-2" />
                          English
                        </Button>
                      </div>
                      <Button className="w-full" asChild>
                        <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                          Đặt Lịch Lái Thử
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
      <div className="h-[73px]"></div>
    </>
  )
}

