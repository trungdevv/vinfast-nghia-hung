"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"

export default function CarSearchForm() {
  const router = useRouter()
  const [priceRange, setPriceRange] = useState([0])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would construct a query string and navigate to the search results
    router.push("/cars")
  }

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardContent className="pt-6">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div className="space-y-2">
              <label htmlFor="model" className="text-sm font-medium">
                Model
              </label>
              <Select>
                <SelectTrigger id="model">
                  <SelectValue placeholder="All Models" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Models</SelectItem>
                  <SelectItem value="vf-3">VF 3</SelectItem>
                  <SelectItem value="vf-5">VF 5</SelectItem>
                  <SelectItem value="vf-6">VF 6</SelectItem>
                  <SelectItem value="vf-7">VF 7</SelectItem>
                  <SelectItem value="vf-8">VF 8</SelectItem>
                  <SelectItem value="vf-9">VF 9</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label htmlFor="color" className="text-sm font-medium">
                Color
              </label>
              <Select>
                <SelectTrigger id="color">
                  <SelectValue placeholder="Any Color" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="any">Any Color</SelectItem>
                  <SelectItem value="white">White</SelectItem>
                  <SelectItem value="black">Black</SelectItem>
                  <SelectItem value="silver">Silver</SelectItem>
                  <SelectItem value="blue">Blue</SelectItem>
                  <SelectItem value="red">Red</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label htmlFor="type" className="text-sm font-medium">
                Vehicle Type
              </label>
              <Select>
                <SelectTrigger id="type">
                  <SelectValue placeholder="All Types" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="sedan">Sedan</SelectItem>
                  <SelectItem value="suv">SUV</SelectItem>
                  <SelectItem value="electric">Electric</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2 mb-6">
            <div className="flex justify-between">
              <label htmlFor="price-range" className="text-sm font-medium">
                Price Range
              </label>
              <span className="text-sm">${priceRange[0].toLocaleString('vi-VN')} - $100,000</span>
            </div>
            <Slider id="price-range" defaultValue={[0]} max={100000} step={5000} onValueChange={setPriceRange} />
          </div>

          <Button type="submit" className="w-full">
            <Search className="mr-2 h-4 w-4" />
            Search Vehicles
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}

