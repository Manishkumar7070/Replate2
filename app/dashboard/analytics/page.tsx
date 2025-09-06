"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Utensils, ArrowLeft, TrendingUp, Users, Package, Award } from "lucide-react"

// Mock analytics data
const mockAnalytics = {
  monthlyStats: {
    currentMonth: {
      donations: 12,
      mealsProvided: 456,
      wasteReduced: "89 kg",
      organizationsHelped: 8,
    },
    previousMonth: {
      donations: 8,
      mealsProvided: 298,
      wasteReduced: "62 kg",
      organizationsHelped: 6,
    },
  },
  yearlyTrends: [
    { month: "Jan", donations: 8, meals: 298 },
    { month: "Feb", donations: 12, meals: 456 },
    { month: "Mar", donations: 15, meals: 567 },
    { month: "Apr", donations: 18, meals: 678 },
    { month: "May", donations: 22, meals: 823 },
    { month: "Jun", donations: 19, meals: 712 },
  ],
  topCategories: [
    { category: "Prepared Meals", count: 45, percentage: 38 },
    { category: "Baked Goods", count: 32, percentage: 27 },
    { category: "Fresh Produce", count: 28, percentage: 24 },
    { category: "Dairy Products", count: 13, percentage: 11 },
  ],
  partnerOrganizations: [
    { name: "Downtown Community Center", pickups: 18, lastPickup: "2 days ago" },
    { name: "Food Rescue Alliance", pickups: 12, lastPickup: "1 week ago" },
    { name: "Eastside Shelter", pickups: 8, lastPickup: "3 days ago" },
    { name: "Senior Care Center", pickups: 6, lastPickup: "5 days ago" },
  ],
  achievements: [
    { title: "Community Champion", description: "Helped 10+ organizations", earned: true },
    { title: "Waste Warrior", description: "Prevented 500kg+ food waste", earned: true },
    { title: "Meal Master", description: "Provided 1000+ meals", earned: true },
    { title: "Consistency King", description: "30 days of active donations", earned: false, progress: 67 },
  ],
}

export default function AnalyticsPage() {
  const calculateGrowth = (current: number, previous: number) => {
    const growth = ((current - previous) / previous) * 100
    return growth > 0 ? `+${growth.toFixed(1)}%` : `${growth.toFixed(1)}%`
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
          <h2 className="text-3xl font-bold text-foreground mb-2">Analytics & Impact</h2>
          <p className="text-muted-foreground">Track your food donation impact and community contributions</p>
        </div>

        <div className="space-y-8">
          {/* Monthly Comparison */}
          <div className="grid md:grid-cols-4 gap-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Donations This Month</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-foreground">
                  {mockAnalytics.monthlyStats.currentMonth.donations}
                </div>
                <Badge variant="outline" className="mt-1 text-xs bg-green-50 text-green-700 border-green-200">
                  {calculateGrowth(
                    mockAnalytics.monthlyStats.currentMonth.donations,
                    mockAnalytics.monthlyStats.previousMonth.donations,
                  )}
                </Badge>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Meals Provided</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-primary">
                  {mockAnalytics.monthlyStats.currentMonth.mealsProvided}
                </div>
                <Badge variant="outline" className="mt-1 text-xs bg-green-50 text-green-700 border-green-200">
                  {calculateGrowth(
                    mockAnalytics.monthlyStats.currentMonth.mealsProvided,
                    mockAnalytics.monthlyStats.previousMonth.mealsProvided,
                  )}
                </Badge>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Waste Reduced</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-accent">
                  {mockAnalytics.monthlyStats.currentMonth.wasteReduced}
                </div>
                <Badge variant="outline" className="mt-1 text-xs bg-green-50 text-green-700 border-green-200">
                  +43.5%
                </Badge>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Organizations Helped</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-secondary">
                  {mockAnalytics.monthlyStats.currentMonth.organizationsHelped}
                </div>
                <Badge variant="outline" className="mt-1 text-xs bg-green-50 text-green-700 border-green-200">
                  {calculateGrowth(
                    mockAnalytics.monthlyStats.currentMonth.organizationsHelped,
                    mockAnalytics.monthlyStats.previousMonth.organizationsHelped,
                  )}
                </Badge>
              </CardContent>
            </Card>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Food Categories */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Package className="h-5 w-5" />
                  Food Categories
                </CardTitle>
                <CardDescription>Breakdown of your donations by food type</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {mockAnalytics.topCategories.map((category) => (
                  <div key={category.category} className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium text-foreground">{category.category}</span>
                      <span className="text-muted-foreground">{category.count} donations</span>
                    </div>
                    <Progress value={category.percentage} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Partner Organizations */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  Partner Organizations
                </CardTitle>
                <CardDescription>Organizations you've helped the most</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {mockAnalytics.partnerOrganizations.map((org, index) => (
                  <div key={org.name} className="flex items-center justify-between p-3 border border-border rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-sm font-medium text-primary">
                        {index + 1}
                      </div>
                      <div>
                        <p className="font-medium text-foreground text-sm">{org.name}</p>
                        <p className="text-xs text-muted-foreground">Last pickup: {org.lastPickup}</p>
                      </div>
                    </div>
                    <Badge variant="outline">{org.pickups} pickups</Badge>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Achievements */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="h-5 w-5" />
                Achievements
              </CardTitle>
              <CardDescription>Your impact milestones and progress</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {mockAnalytics.achievements.map((achievement) => (
                  <div
                    key={achievement.title}
                    className={`p-4 border rounded-lg ${
                      achievement.earned ? "border-green-200 bg-green-50" : "border-border bg-muted/30"
                    }`}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h4 className="font-medium text-foreground">{achievement.title}</h4>
                        <p className="text-sm text-muted-foreground">{achievement.description}</p>
                      </div>
                      {achievement.earned ? (
                        <Badge className="bg-green-500 hover:bg-green-600">Earned</Badge>
                      ) : (
                        <Badge variant="outline">In Progress</Badge>
                      )}
                    </div>
                    {!achievement.earned && achievement.progress && (
                      <div className="space-y-1">
                        <div className="flex items-center justify-between text-xs">
                          <span>Progress</span>
                          <span>{achievement.progress}%</span>
                        </div>
                        <Progress value={achievement.progress} className="h-2" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Yearly Trends Chart Placeholder */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                Yearly Trends
              </CardTitle>
              <CardDescription>Your donation activity over the past 6 months</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-64 bg-muted/30 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <TrendingUp className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">Interactive chart would be displayed here</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Showing donation trends: {mockAnalytics.yearlyTrends.length} months of data
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
