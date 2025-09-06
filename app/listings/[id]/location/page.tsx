"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Utensils, ArrowLeft, Navigation, MapPin, Phone, Clock, Car, Bike, Footprints } from "lucide-react"

// Mock listing data
const mockListing = {
  id: 1,
  title: "Fresh Sandwiches & Salads",
  donor: "Downtown Deli",
  address: "123 Main St, Downtown, City 12345",
  coordinates: { lat: 40.7589, lng: -73.9851 },
  contactPhone: "(555) 123-4567",
  expiryTime: "6:00 PM today",
  status: "available",
  distance: "0.8 miles",
  estimatedTravelTime: {
    driving: "3 mins",
    walking: "12 mins",
    cycling: "6 mins",
  },
}

export default function LocationPage({ params }: { params: { id: string } }) {
  const [selectedTransport, setSelectedTransport] = useState<"driving" | "walking" | "cycling">("driving")

  const handleGetDirections = () => {
    // In a real app, this would open the user's preferred maps app
    const address = encodeURIComponent(mockListing.address)
    const url = `https://www.google.com/maps/dir/?api=1&destination=${address}`
    window.open(url, "_blank")
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <Utensils className="h-8 w-8 text-primary" />
              <h1 className="text-2xl font-bold text-foreground">RePlate</h1>
            </Link>
            <Link href={`/listings/${params.id}`}>
              <Button variant="outline">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Listing
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Map Area */}
          <div className="lg:col-span-2">
            <Card className="overflow-hidden">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  Pickup Location
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                {/* Mock Map Display */}
                <div className="aspect-video bg-gradient-to-br from-blue-50 to-green-50 relative overflow-hidden">
                  {/* Map Grid Pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="grid grid-cols-8 grid-rows-6 h-full w-full">
                      {Array.from({ length: 48 }).map((_, i) => (
                        <div key={i} className="border border-gray-300" />
                      ))}
                    </div>
                  </div>

                  {/* Street Lines */}
                  <svg className="absolute inset-0 w-full h-full">
                    <line x1="25%" y1="0" x2="25%" y2="100%" stroke="#cbd5e1" strokeWidth="3" />
                    <line x1="50%" y1="0" x2="50%" y2="100%" stroke="#cbd5e1" strokeWidth="3" />
                    <line x1="75%" y1="0" x2="75%" y2="100%" stroke="#cbd5e1" strokeWidth="3" />
                    <line x1="0" y1="33%" x2="100%" y2="33%" stroke="#cbd5e1" strokeWidth="3" />
                    <line x1="0" y1="66%" x2="100%" y2="66%" stroke="#cbd5e1" strokeWidth="3" />
                  </svg>

                  {/* Route Line */}
                  <svg className="absolute inset-0 w-full h-full">
                    <path
                      d="M 20 80 Q 40 60 60 40 Q 70 30 80 20"
                      stroke="#164e63"
                      strokeWidth="4"
                      fill="none"
                      strokeDasharray="8,4"
                      className="animate-pulse"
                    />
                  </svg>

                  {/* Start Location (User) */}
                  <div
                    className="absolute transform -translate-x-1/2 -translate-y-1/2"
                    style={{ left: "20%", top: "80%" }}
                  >
                    <div className="w-4 h-4 bg-blue-500 rounded-full border-2 border-white shadow-lg" />
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                      Your Location
                    </div>
                  </div>

                  {/* Destination Location */}
                  <div
                    className="absolute transform -translate-x-1/2 -translate-y-1/2"
                    style={{ left: "80%", top: "20%" }}
                  >
                    <div className="w-8 h-8 bg-primary rounded-full border-3 border-white shadow-lg flex items-center justify-center animate-bounce">
                      <Utensils className="h-4 w-4 text-white" />
                    </div>
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-primary text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                      {mockListing.donor}
                    </div>
                  </div>

                  {/* Distance Indicator */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 shadow-sm">
                    <div className="text-sm font-medium text-foreground">{mockListing.distance}</div>
                    <div className="text-xs text-muted-foreground">
                      {mockListing.estimatedTravelTime[selectedTransport]}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Transportation Options */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Transportation Options</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-4">
                  <Button
                    variant={selectedTransport === "driving" ? "default" : "outline"}
                    className="flex flex-col items-center gap-2 h-auto py-4"
                    onClick={() => setSelectedTransport("driving")}
                  >
                    <Car className="h-6 w-6" />
                    <div className="text-center">
                      <div className="font-medium">Driving</div>
                      <div className="text-xs text-muted-foreground">{mockListing.estimatedTravelTime.driving}</div>
                    </div>
                  </Button>

                  <Button
                    variant={selectedTransport === "cycling" ? "default" : "outline"}
                    className="flex flex-col items-center gap-2 h-auto py-4"
                    onClick={() => setSelectedTransport("cycling")}
                  >
                    <Bike className="h-6 w-6" />
                    <div className="text-center">
                      <div className="font-medium">Cycling</div>
                      <div className="text-xs text-muted-foreground">{mockListing.estimatedTravelTime.cycling}</div>
                    </div>
                  </Button>

                  <Button
                    variant={selectedTransport === "walking" ? "default" : "outline"}
                    className="flex flex-col items-center gap-2 h-auto py-4"
                    onClick={() => setSelectedTransport("walking")}
                  >
                    <Footprints className="h-6 w-6" />
                    <div className="text-center">
                      <div className="font-medium">Walking</div>
                      <div className="text-xs text-muted-foreground">{mockListing.estimatedTravelTime.walking}</div>
                    </div>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Listing Info */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">{mockListing.title}</CardTitle>
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                    {mockListing.status === "available" ? "Available" : "Claimed"}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-muted-foreground mt-0.5 shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">Address</p>
                      <p className="text-sm text-muted-foreground">{mockListing.address}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-muted-foreground mt-0.5 shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">Pickup By</p>
                      <p className="text-sm text-muted-foreground">{mockListing.expiryTime}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-muted-foreground mt-0.5 shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">Contact</p>
                      <p className="text-sm text-muted-foreground">{mockListing.contactPhone}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="space-y-3">
              <Button onClick={handleGetDirections} className="w-full" size="lg">
                <Navigation className="mr-2 h-5 w-5" />
                Get Directions
              </Button>

              <Button variant="outline" className="w-full bg-transparent" asChild>
                <Link href={`tel:${mockListing.contactPhone}`}>
                  <Phone className="mr-2 h-4 w-4" />
                  Call Donor
                </Link>
              </Button>

              <Button variant="outline" className="w-full bg-transparent" asChild>
                <Link href={`/listings/${mockListing.id}`}>View Full Details</Link>
              </Button>
            </div>

            {/* Quick Tips */}
            <Card>
              <CardHeader>
                <CardTitle className="text-sm">Pickup Tips</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground space-y-2">
                <p>• Call ahead to confirm availability</p>
                <p>• Bring containers for transport</p>
                <p>• Arrive within the specified time window</p>
                <p>• Follow any special pickup instructions</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
