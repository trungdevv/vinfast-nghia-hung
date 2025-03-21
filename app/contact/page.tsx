"use client"

import { useState } from "react"
import Image from "next/image"
import { useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar } from "@/components/ui/calendar"
import { MapPin, Phone, Clock, CalendarIcon } from "lucide-react"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { cn } from "@/lib/utils"

export default function ContactPage() {
  const searchParams = useSearchParams()
  const modelParam = searchParams.get("model")
  const serviceParam = searchParams.get("service")

  // Set default tab based on URL parameters
  const defaultTab = serviceParam ? "service" : "test-drive"

  const [date, setDate] = useState<Date | undefined>(undefined)

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-[400px] w-full">
        <Image
          src="/images/contact.svg"
          alt="Contact Us"
          fill
          className="object-cover brightness-90"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4 bg-black/30">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Contact Us</h1>
          <p className="text-lg md:text-2xl max-w-3xl">We're here to help with all your VinFast needs</p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center">
                  <MapPin className="h-5 w-5 mr-2 text-primary" />
                  Visit Us
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>123 Nguyen Hue Street</p>
                <p>District 1, Ho Chi Minh City</p>
                <p>Vietnam</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center">
                  <Phone className="h-5 w-5 mr-2 text-primary" />
                  Call Us
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Sales: +84 123 456 789</p>
                <p>Service: +84 123 456 790</p>
                <p>Parts: +84 123 456 791</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center">
                  <Clock className="h-5 w-5 mr-2 text-primary" />
                  Opening Hours
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Monday - Friday: 8:00 AM - 7:00 PM</p>
                <p>Saturday: 9:00 AM - 6:00 PM</p>
                <p>Sunday: 10:00 AM - 4:00 PM</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Forms */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>

              <Tabs defaultValue={defaultTab}>
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="general">General Inquiry</TabsTrigger>
                  <TabsTrigger value="test-drive">Test Drive</TabsTrigger>
                  <TabsTrigger value="service">Service Appointment</TabsTrigger>
                </TabsList>

                <TabsContent value="general" className="mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>General Inquiry</CardTitle>
                      <CardDescription>
                        Have a question? Fill out the form below and we'll get back to you as soon as possible.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <form className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <label htmlFor="first-name" className="text-sm font-medium">
                              First Name
                            </label>
                            <Input id="first-name" required />
                          </div>
                          <div className="space-y-2">
                            <label htmlFor="last-name" className="text-sm font-medium">
                              Last Name
                            </label>
                            <Input id="last-name" required />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="email" className="text-sm font-medium">
                            Email
                          </label>
                          <Input id="email" type="email" required />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="phone" className="text-sm font-medium">
                            Phone
                          </label>
                          <Input id="phone" type="tel" />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="subject" className="text-sm font-medium">
                            Subject
                          </label>
                          <Input id="subject" required />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="message" className="text-sm font-medium">
                            Message
                          </label>
                          <Textarea id="message" rows={5} required />
                        </div>
                      </form>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">Submit Inquiry</Button>
                    </CardFooter>
                  </Card>
                </TabsContent>

                <TabsContent value="test-drive" className="mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Book a Test Drive</CardTitle>
                      <CardDescription>
                        Experience the thrill of driving a VinFast vehicle. Schedule your test drive today.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <form className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <label htmlFor="td-first-name" className="text-sm font-medium">
                              First Name
                            </label>
                            <Input id="td-first-name" required />
                          </div>
                          <div className="space-y-2">
                            <label htmlFor="td-last-name" className="text-sm font-medium">
                              Last Name
                            </label>
                            <Input id="td-last-name" required />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="td-email" className="text-sm font-medium">
                            Email
                          </label>
                          <Input id="td-email" type="email" required />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="td-phone" className="text-sm font-medium">
                            Phone
                          </label>
                          <Input id="td-phone" type="tel" required />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="td-model" className="text-sm font-medium">
                            Model
                          </label>
                          <Select defaultValue={modelParam || ""}>
                            <SelectTrigger id="td-model">
                              <SelectValue placeholder="Select a model" />
                            </SelectTrigger>
                            <SelectContent>
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
                          <label htmlFor="td-date" className="text-sm font-medium">
                            Preferred Date
                          </label>
                          <Popover>
                            <PopoverTrigger asChild>
                              <Button
                                variant="outline"
                                className={cn(
                                  "w-full justify-start text-left font-normal",
                                  !date && "text-muted-foreground",
                                )}
                              >
                                <CalendarIcon className="mr-2 h-4 w-4" />
                                {date ? format(date, "PPP") : "Select a date"}
                              </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0">
                              <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
                            </PopoverContent>
                          </Popover>
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="td-time" className="text-sm font-medium">
                            Preferred Time
                          </label>
                          <Select>
                            <SelectTrigger id="td-time">
                              <SelectValue placeholder="Select a time" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="morning">Morning (9:00 AM - 12:00 PM)</SelectItem>
                              <SelectItem value="afternoon">Afternoon (1:00 PM - 4:00 PM)</SelectItem>
                              <SelectItem value="evening">Evening (5:00 PM - 7:00 PM)</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="td-notes" className="text-sm font-medium">
                            Additional Notes
                          </label>
                          <Textarea id="td-notes" rows={3} />
                        </div>
                      </form>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">Book Test Drive</Button>
                    </CardFooter>
                  </Card>
                </TabsContent>

                <TabsContent value="service" className="mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Schedule Service</CardTitle>
                      <CardDescription>Book a service appointment for your VinFast vehicle.</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <form className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <label htmlFor="sv-first-name" className="text-sm font-medium">
                              First Name
                            </label>
                            <Input id="sv-first-name" required />
                          </div>
                          <div className="space-y-2">
                            <label htmlFor="sv-last-name" className="text-sm font-medium">
                              Last Name
                            </label>
                            <Input id="sv-last-name" required />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="sv-email" className="text-sm font-medium">
                            Email
                          </label>
                          <Input id="sv-email" type="email" required />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="sv-phone" className="text-sm font-medium">
                            Phone
                          </label>
                          <Input id="sv-phone" type="tel" required />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="sv-model" className="text-sm font-medium">
                            Vehicle Model
                          </label>
                          <Select>
                            <SelectTrigger id="sv-model">
                              <SelectValue placeholder="Select a model" />
                            </SelectTrigger>
                            <SelectContent>
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
                          <label htmlFor="sv-service" className="text-sm font-medium">
                            Service Type
                          </label>
                          <Select>
                            <SelectTrigger id="sv-service">
                              <SelectValue placeholder="Select service type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="maintenance">Regular Maintenance</SelectItem>
                              <SelectItem value="repair">Repair Service</SelectItem>
                              <SelectItem value="warranty">Warranty Service</SelectItem>
                              <SelectItem value="parts">Parts Replacement</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="sv-date" className="text-sm font-medium">
                            Preferred Date
                          </label>
                          <Popover>
                            <PopoverTrigger asChild>
                              <Button
                                variant="outline"
                                className={cn(
                                  "w-full justify-start text-left font-normal",
                                  !date && "text-muted-foreground",
                                )}
                              >
                                <CalendarIcon className="mr-2 h-4 w-4" />
                                {date ? format(date, "PPP") : "Select a date"}
                              </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0">
                              <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
                            </PopoverContent>
                          </Popover>
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="sv-description" className="text-sm font-medium">
                            Service Description
                          </label>
                          <Textarea id="sv-description" rows={3} placeholder="Please describe the service needed" />
                        </div>
                      </form>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">Schedule Service</Button>
                    </CardFooter>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>

            {/* Map */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Find Us</h2>
              <div className="relative h-[600px] w-full rounded-lg overflow-hidden">
                <Image
                  src="/images/map.svg"
                  alt="Dealership Location Map"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="mt-4">
                <p className="text-muted-foreground">
                  Our showroom is conveniently located in the heart of Ho Chi Minh City, easily accessible by public
                  transportation and with ample parking available.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

