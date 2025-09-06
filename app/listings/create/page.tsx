"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Utensils, Upload, MapPin, ArrowLeft } from "lucide-react"

const foodCategories = [
  "Prepared Meals",
  "Fresh Produce",
  "Baked Goods",
  "Dairy Products",
  "Packaged Foods",
  "Beverages",
  "Other",
]

const quantityUnits = ["servings", "kg", "lbs", "bags", "boxes", "trays", "items"]

export default function CreateListingPage() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    quantity: "",
    quantityUnit: "servings",
    pickupAddress: "",
    contactPhone: "",
    pickupInstructions: "",
    expiryDate: "",
    expiryTime: "",
    allergenInfo: "",
    storageRequirements: "",
  })

  const [imagePreview, setImagePreview] = useState<string | null>(null)

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setImagePreview(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Backend integration pending for listing creation
    console.log("New listing data:", formData)
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

      <div className="container mx-auto px-4 py-8 max-w-2xl">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-2">List Your Surplus Food</h2>
          <p className="text-muted-foreground">
            Help reduce food waste by sharing your surplus with local organizations
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Food Listing Details</CardTitle>
            <CardDescription>Provide information about the food you'd like to donate</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Basic Information */}
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Food Title *</Label>
                  <Input
                    id="title"
                    placeholder="e.g., Fresh sandwiches and salads"
                    value={formData.title}
                    onChange={(e) => setFormData((prev) => ({ ...prev, title: e.target.value }))}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Description *</Label>
                  <Textarea
                    id="description"
                    placeholder="Describe the food items, preparation method, ingredients, etc."
                    value={formData.description}
                    onChange={(e) => setFormData((prev) => ({ ...prev, description: e.target.value }))}
                    rows={3}
                    required
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="category">Category *</Label>
                    <Select
                      value={formData.category}
                      onValueChange={(value) => setFormData((prev) => ({ ...prev, category: value }))}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        {foodCategories.map((category) => (
                          <SelectItem key={category} value={category}>
                            {category}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Quantity *</Label>
                    <div className="flex gap-2">
                      <Input
                        placeholder="Amount"
                        value={formData.quantity}
                        onChange={(e) => setFormData((prev) => ({ ...prev, quantity: e.target.value }))}
                        required
                      />
                      <Select
                        value={formData.quantityUnit}
                        onValueChange={(value) => setFormData((prev) => ({ ...prev, quantityUnit: value }))}
                      >
                        <SelectTrigger className="w-32">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {quantityUnits.map((unit) => (
                            <SelectItem key={unit} value={unit}>
                              {unit}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
              </div>

              {/* Photo Upload */}
              <div className="space-y-2">
                <Label htmlFor="photo">Food Photo</Label>
                <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
                  {imagePreview ? (
                    <div className="space-y-4">
                      <img
                        src={imagePreview || "/placeholder.svg"}
                        alt="Food preview"
                        className="max-h-48 mx-auto rounded-lg"
                      />
                      <Button type="button" variant="outline" onClick={() => setImagePreview(null)}>
                        Remove Photo
                      </Button>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <Upload className="h-12 w-12 text-muted-foreground mx-auto" />
                      <div>
                        <p className="text-sm font-medium">Upload a photo of your food</p>
                        <p className="text-xs text-muted-foreground">PNG, JPG up to 10MB</p>
                      </div>
                      <Input id="photo" type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
                      <Button type="button" variant="outline" onClick={() => document.getElementById("photo")?.click()}>
                        Choose File
                      </Button>
                    </div>
                  )}
                </div>
              </div>

              {/* Pickup Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground">Pickup Information</h3>

                <div className="space-y-2">
                  <Label htmlFor="pickupAddress">Pickup Address *</Label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="pickupAddress"
                      placeholder="Enter pickup address"
                      value={formData.pickupAddress}
                      onChange={(e) => setFormData((prev) => ({ ...prev, pickupAddress: e.target.value }))}
                      className="pl-10"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="expiryDate">Pickup By Date *</Label>
                    <Input
                      id="expiryDate"
                      type="date"
                      value={formData.expiryDate}
                      onChange={(e) => setFormData((prev) => ({ ...prev, expiryDate: e.target.value }))}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="expiryTime">Pickup By Time *</Label>
                    <Input
                      id="expiryTime"
                      type="time"
                      value={formData.expiryTime}
                      onChange={(e) => setFormData((prev) => ({ ...prev, expiryTime: e.target.value }))}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contactPhone">Contact Phone *</Label>
                  <Input
                    id="contactPhone"
                    type="tel"
                    placeholder="Phone number for pickup coordination"
                    value={formData.contactPhone}
                    onChange={(e) => setFormData((prev) => ({ ...prev, contactPhone: e.target.value }))}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="pickupInstructions">Pickup Instructions</Label>
                  <Textarea
                    id="pickupInstructions"
                    placeholder="Special instructions for pickup (e.g., loading dock entrance, ask for manager, etc.)"
                    value={formData.pickupInstructions}
                    onChange={(e) => setFormData((prev) => ({ ...prev, pickupInstructions: e.target.value }))}
                    rows={2}
                  />
                </div>
              </div>

              {/* Additional Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground">Additional Information</h3>

                <div className="space-y-2">
                  <Label htmlFor="allergenInfo">Allergen Information</Label>
                  <Input
                    id="allergenInfo"
                    placeholder="e.g., Contains nuts, dairy, gluten"
                    value={formData.allergenInfo}
                    onChange={(e) => setFormData((prev) => ({ ...prev, allergenInfo: e.target.value }))}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="storageRequirements">Storage Requirements</Label>
                  <Input
                    id="storageRequirements"
                    placeholder="e.g., Keep refrigerated, room temperature OK"
                    value={formData.storageRequirements}
                    onChange={(e) => setFormData((prev) => ({ ...prev, storageRequirements: e.target.value }))}
                  />
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                <Button type="submit" className="flex-1">
                  Create Listing
                </Button>
                <Button type="button" variant="outline" asChild>
                  <Link href="/listings">Cancel</Link>
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
