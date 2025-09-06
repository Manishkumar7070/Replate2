"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, Building } from "lucide-react"

interface PickupRequestFormProps {
  listingTitle: string
  donorName: string
  onSubmit: (requestData: any) => void
  onCancel: () => void
}

export function PickupRequestForm({ listingTitle, donorName, onSubmit, onCancel }: PickupRequestFormProps) {
  const [formData, setFormData] = useState({
    message: "",
    organizationName: "",
    contactName: "",
    contactPhone: "",
    preferredPickupTime: "",
    estimatedArrival: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(formData)
  }

  return (
    <Card className="w-full max-w-2xl">
      <CardHeader>
        <CardTitle>Request Food Pickup</CardTitle>
        <CardDescription>
          Send a pickup request to {donorName} for "{listingTitle}"
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Organization Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
              <Building className="h-5 w-5" />
              Organization Information
            </h3>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="organizationName">Organization Name *</Label>
                <Input
                  id="organizationName"
                  placeholder="e.g., Downtown Community Center"
                  value={formData.organizationName}
                  onChange={(e) => setFormData((prev) => ({ ...prev, organizationName: e.target.value }))}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="contactName">Contact Person *</Label>
                <Input
                  id="contactName"
                  placeholder="Your full name"
                  value={formData.contactName}
                  onChange={(e) => setFormData((prev) => ({ ...prev, contactName: e.target.value }))}
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
          </div>

          {/* Pickup Details */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
              <Clock className="h-5 w-5" />
              Pickup Details
            </h3>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="preferredPickupTime">Preferred Pickup Time</Label>
                <Input
                  id="preferredPickupTime"
                  placeholder="e.g., 5:30 PM today, Tomorrow morning"
                  value={formData.preferredPickupTime}
                  onChange={(e) => setFormData((prev) => ({ ...prev, preferredPickupTime: e.target.value }))}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="estimatedArrival">Estimated Arrival</Label>
                <Input
                  id="estimatedArrival"
                  placeholder="e.g., Within 30 minutes, 1 hour"
                  value={formData.estimatedArrival}
                  onChange={(e) => setFormData((prev) => ({ ...prev, estimatedArrival: e.target.value }))}
                />
              </div>
            </div>
          </div>

          {/* Message */}
          <div className="space-y-2">
            <Label htmlFor="message">Message to Donor</Label>
            <Textarea
              id="message"
              placeholder="Tell the donor about your organization, how you'll use the food, and any other relevant details..."
              value={formData.message}
              onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
              rows={4}
            />
            <p className="text-xs text-muted-foreground">
              A thoughtful message increases your chances of getting the donation!
            </p>
          </div>

          <div className="flex gap-4">
            <Button type="submit" className="flex-1">
              Send Pickup Request
            </Button>
            <Button type="button" variant="outline" onClick={onCancel}>
              Cancel
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
