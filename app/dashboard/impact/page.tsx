"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Utensils, ArrowLeft, Heart, Users, Calendar, MapPin, Building } from "lucide-react"

// Mock impact data for receivers
const mockImpactData = {
  totalImpact: {
    mealsReceived: 1256,
    peopleServed: 892,
    partnersWorkedWith: 12,
    wastePreventedKg: 456,
  },
  monthlyBreakdown: [
    { month: "Jan", meals: 156, people: 112 },
    { month: "Feb", meals: 203, people: 145 },
    { month: "Mar", meals: 189, people: 134 },
    { month: "Apr", meals: 234, people: 167 },
    { month: "May", meals: 267, people: 189 },
    { month: "Jun", meals: 207, people: 145 },
  ],
  recentPickups: [
    {
      id: 1,
      date: "2024-01-15",
      donor: "Downtown Deli",
      foodType: "Sandwiches & Salads",
      quantity: "25 servings",
      peopleServed: 25,
      location: "Main Street Shelter",
    },
    {
      id: 2,
      date: "2024-01-14",
      donor: "Green Market",
      foodType: "Fresh Produce",
      quantity: "15 kg",
      peopleServed: 45,
      location: "Community Kitchen",
    },
    {
      id: 3,
      date: "2024-01-13",
      donor: "Sunrise Bakery",
      foodType: "Bread & Pastries",
      quantity: "20 items",
      peopleServed: 30,
      location: "Senior Center",
    },
    {
      id: 4,
      date: "2024-01-12",
      donor: "Corner Cafe",
      foodType: "Prepared Meals",
      quantity: "18 servings",
      peopleServed: 18,
      location: "Youth Center",
    },
  ],
  partnerDonors: [
    { name: "Downtown Deli", pickups: 8, totalMeals: 234, relationship: "Regular Partner" },
    { name: "Green Market", pickups: 6, totalMeals: 189, relationship: "Weekly Pickup" },
    { name: "Sunrise Bakery", pickups: 5, totalMeals: 156, relationship: "New Partner" },
    { name: "Corner Cafe", pickups: 4, totalMeals: 98, relationship: "Occasional" },
  ],
  communityPrograms: [
    {
      name: "Daily Lunch Program",
      description: "Hot meals for seniors and families",
      beneficiaries: 45,
      frequency: "Daily",
      mealsFromDonations: 234,
    },
    {
      name: "Weekend Food Boxes",
      description: "Take-home groceries for families",
      beneficiaries: 28,
      frequency: "Weekly",
      mealsFromDonations: 156,
    },
    {
      name: "Emergency Food Relief",
      description: "Crisis support for individuals",
      beneficiaries: 67,
      frequency: "As needed",
      mealsFromDonations: 89,
    },
  ],
}

export default function ImpactPage() {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", { month: "short", day: "numeric" })
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
            <Link href="/dashboard">
              <Button variant="outline">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Dashboard
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-2">Community Impact</h2>
          <p className="text-muted-foreground">See how food donations are making a difference in your community</p>
        </div>

        <div className="space-y-8">
          {/* Impact Overview */}
          <div className="grid md:grid-cols-4 gap-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Total Meals Received</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-primary">
                  {mockImpactData.totalImpact.mealsReceived.toLocaleString()}
                </div>
                <p className="text-xs text-muted-foreground">since joining RePlate</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">People Served</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-accent">
                  {mockImpactData.totalImpact.peopleServed.toLocaleString()}
                </div>
                <p className="text-xs text-muted-foreground">community members helped</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Partner Donors</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-secondary">{mockImpactData.totalImpact.partnersWorkedWith}</div>
                <p className="text-xs text-muted-foreground">regular food donors</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Waste Prevented</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-600">
                  {mockImpactData.totalImpact.wastePreventedKg} kg
                </div>
                <p className="text-xs text-muted-foreground">food saved from waste</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Recent Pickups */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  Recent Food Pickups
                </CardTitle>
                <CardDescription>Your latest food collections and their impact</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {mockImpactData.recentPickups.map((pickup) => (
                  <div key={pickup.id} className="p-4 border border-border rounded-lg">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h4 className="font-medium text-foreground">{pickup.foodType}</h4>
                        <p className="text-sm text-muted-foreground flex items-center gap-1">
                          <Building className="h-3 w-3" />
                          {pickup.donor}
                        </p>
                      </div>
                      <Badge variant="outline">{formatDate(pickup.date)}</Badge>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <Utensils className="h-3 w-3" />
                        {pickup.quantity}
                      </div>
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <Users className="h-3 w-3" />
                        {pickup.peopleServed} people served
                      </div>
                      <div className="flex items-center gap-1 text-muted-foreground col-span-2">
                        <MapPin className="h-3 w-3" />
                        Used at {pickup.location}
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Partner Donors */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="h-5 w-5" />
                  Partner Donors
                </CardTitle>
                <CardDescription>Businesses that regularly support your organization</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {mockImpactData.partnerDonors.map((donor, index) => (
                  <div
                    key={donor.name}
                    className="flex items-center justify-between p-3 border border-border rounded-lg"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-sm font-medium text-primary">
                        {index + 1}
                      </div>
                      <div>
                        <p className="font-medium text-foreground text-sm">{donor.name}</p>
                        <p className="text-xs text-muted-foreground">{donor.relationship}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-foreground">{donor.totalMeals} meals</p>
                      <p className="text-xs text-muted-foreground">{donor.pickups} pickups</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Community Programs */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                Community Programs
              </CardTitle>
              <CardDescription>How donated food supports your community programs</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                {mockImpactData.communityPrograms.map((program) => (
                  <div key={program.name} className="p-4 border border-border rounded-lg">
                    <h4 className="font-medium text-foreground mb-2">{program.name}</h4>
                    <p className="text-sm text-muted-foreground mb-4">{program.description}</p>

                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Beneficiaries</span>
                        <span className="font-medium text-foreground">{program.beneficiaries} people</span>
                      </div>

                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Frequency</span>
                        <Badge variant="outline" className="text-xs">
                          {program.frequency}
                        </Badge>
                      </div>

                      <div className="space-y-1">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">Meals from donations</span>
                          <span className="font-medium text-primary">{program.mealsFromDonations}</span>
                        </div>
                        <Progress
                          value={(program.mealsFromDonations / mockImpactData.totalImpact.mealsReceived) * 100}
                          className="h-2"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Monthly Trends Placeholder */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Monthly Impact Trends
              </CardTitle>
              <CardDescription>Track your organization's food recovery over time</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-64 bg-muted/30 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <Calendar className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">Interactive impact chart would be displayed here</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Showing {mockImpactData.monthlyBreakdown.length} months of community impact data
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
