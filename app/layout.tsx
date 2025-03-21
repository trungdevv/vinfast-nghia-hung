import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import FixedContact from "@/components/fixed-contact"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Đại Lý VinFast Nam Định - Công ty CP Thanh Tùng",
  description: "Đại lý ủy quyền chính thức của VinFast tại Nam Định, cung cấp đầy đủ các dòng xe và dịch vụ chất lượng cao.",
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: 'favicon.ico', sizes: 'any' },
      { url: 'favicon.png', type: 'image/png' }
    ],
    apple: [
      { url: 'favicon.png', type: 'image/png' }
    ],
    shortcut: ['favicon.ico']
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <head />
      <body className={inter.className} suppressHydrationWarning>
        <ThemeProvider 
          attribute="class" 
          defaultTheme="light" 
          enableSystem 
          disableTransitionOnChange
          storageKey="vinfast-theme"
        >
          <div className="flex min-h-screen flex-col">
            <Header />
            <div className="flex-1">{children}</div>
            <Footer />
            <FixedContact />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

