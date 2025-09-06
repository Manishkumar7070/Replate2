"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { PickupRequestForm } from "@/components/pickup-request-form"
import {
  Utensils,
  MapPin,
  Clock,
  Phone,
  AlertTriangle,
  Thermometer,
  ArrowLeft,
  Navigation,
  MessageSquare,
} from "lucide-react"

// Mock data for a single listing
const mockListing = {
  id: 1,
  title: "Fresh Sandwiches & Salads",
  description:
    "Assorted deli sandwiches including turkey, ham, and veggie options, plus fresh garden salads with various dressings. All prepared this morning with high-quality ingredients.",
  category: "Prepared Meals",
  quantity: "25 servings",
  donor: "Downtown Deli",
  donorType: "Restaurant",
  address: "123 Main St, Downtown, City 12345",
  expiryDate: "2024-01-15",
  expiryTime: "18:00",
  contactPhone: "(555) 123-4567",
  pickupInstructions:
    "Please use the back entrance and ask for Sarah at the kitchen. Food is packed in labeled containers.",
  allergenInfo: "Contains gluten, may contain dairy and nuts",
  storageRequirements: "Keep refrigerated below 40°F",
  imageUrl: "/fresh-sandwiches-and-salads.jpg",
  status: "available",
  distance: "0.8 miles",
  createdAt: "2024-01-15T10:30:00Z",
}

export default function ListingDetailPage({ params }: { params: { id: string } }) {
  const [isRequestDialogOpen, setIsRequestDialogOpen] = useState(false)

  const handleSubmitRequest = (requestData: any) => {
    // Need to wire this up to the API endpoint
    console.log("Pickup request submitted:", requestData)
    setIsRequestDialogOpen(false)
    // Show success message or redirect
  }

  const formatDateTime = (date: string, time: string) => {
    const dateObj = new Date(`${date}T${time}`)
    return dateObj.toLocaleString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit",
    })
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
            <Link href="/listings">
              <Button variant="outline">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Listings
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Image */}
            <div className="aspect-video rounded-lg overflow-hidden">
              <img
                src={mockListing.imageUrl || "/placeholder.svg"}
                alt={mockListing.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Title and Status */}
            <div className="space-y-4">
              <div className="flex items-start justify-between">
                <div>
                  <h1 className="text-3xl font-bold text-foreground mb-2">{mockListing.title}</h1>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <span className="text-lg font-medium text-primary">{mockListing.donor}</span>
                    <span>•</span>
                    <span>{mockListing.donorType}</span>
                  </div>
                </div>
                <Badge
                  variant={mockListing.status === "available" ? "default" : "secondary"}
                  className="text-sm"
                >
                  {mockListing.status === "available" ? "Available" : "Claimed"}
                </Badge>
              </div>

              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">{mockListing.category}</Badge>
                <Badge variant="outline">{mockListing.quantity}</Badge>
                <Badge variant="outline">{mockListing.distance} away</Badge>
              </div>
            </div>

            {/* Description */}
            <Card>
              <CardHeader>
                <CardTitle>Description</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{mockListing.description}</p>
              </CardContent>
            </Card>

            {/* Additional Information */}
            <Card>
              <CardHeader>
                <CardTitle>Additional Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {mockListing.allergenInfo && (
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="h-5 w-5 text-amber-500 mt-0.5 shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">Allergen Information</p>
                      <p className="text-sm text-muted-foreground">{mockListing.allergenInfo}</p>
                    </div>
                  </div>
                )}

                {mockListing.storageRequirements && (
                  <div className="flex items-start gap-3">
                    <Thermometer className="h-5 w-5 text-blue-500 mt-0.5 shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">Storage Requirements</p>
                      <p className="text-sm text-muted-foreground">{mockListing.storageRequirements}</p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Pickup Information */}
            <Card>
              <CardHeader>
                <CardTitle>Pickup Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-muted-foreground mt-0.5 shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">Pickup By</p>
                    <p className="text-sm text-muted-foreground">
                      {formatDateTime(mockListing.expiryDate, mockListing.expiryTime)}
                    </p>
                  </div>
                </div>

                <Separator />

                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-muted-foreground mt-0.5 shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">Location</p>
                    <p className="text-sm text-muted-foreground">{mockListing.address}</p>
                  </div>
                </div>

                <Separator />

                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-muted-foreground mt-0.5 shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">Contact</p>
                    <p className="text-sm text-muted-foreground">{mockListing.contactPhone}</p>
                  </div>
                </div>

                {mockListing.pickupInstructions && (
                  <>
                    <Separator />
                    <div className="flex items-start gap-3">
                      <MessageSquare className="h-5 w-5 text-muted-foreground mt-0.5 shrink-0" />
                      <div>
                        <p className="font-medium text-foreground">Pickup Instructions</p>
                        <p className="text-sm text-muted-foreground">{mockListing.pickupInstructions}</p>
                      </div>
                    </div>
                  </>
                )}
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="space-y-3">
              <Dialog open={isRequestDialogOpen} onOpenChange={setIsRequestDialogOpen}>
                <DialogTrigger asChild>
                  <Button className="w-full" size="lg" disabled={mockListing.status === "claimed"}>
                    {mockListing.status === "available" ? "Request This Food" : "Already Claimed"}
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                  <PickupRequestForm
                    listingTitle={mockListing.title}
                    donorName={mockListing.donor}
                    onSubmit={handleSubmitRequest}
                    onCancel={() => setIsRequestDialogOpen(false)}
                  />
                </DialogContent>
              </Dialog>

              <Button variant="outline" className="w-full bg-transparent" asChild>
                <Link href={`/listings/${mockListing.id}/location`}>
                  <Navigation className="mr-2 h-4 w-4" />
                  Get Directions
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
