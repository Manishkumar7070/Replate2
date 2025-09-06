"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Utensils,
  ArrowLeft,
  Heart,
  Users,
  MapPin,
  Building,
  Leaf,
  TrendingUp,
  Award,
  Share2,
  Globe,
} from "lucide-react"

// Enhanced mock impact data
const mockGlobalImpact = {
  totalStats: {
    mealsRedistributed: 125678,
    wastePreventedKg: 45234,
    co2SavedKg: 18567,
    partnersActive: 1247,
    communitiesServed: 89,
    volunteersActive: 3456,
  },
  environmentalImpact: {
    co2Equivalent: 18567, // kg CO2 saved
    waterSaved: 234567, // liters
    landfillDiverted: 45234, // kg
    energySaved: 12345, // kWh equivalent
  },
  socialImpact: {
    familiesHelped: 8934,
    childrenFed: 12456,
    seniorsSupported: 3456,
    emergencyMealsProvided: 5678,
  },
  monthlyTrends: [
    { month: "Jul", meals: 8456, waste: 3234, co2: 1456, partners: 98 },
    { month: "Aug", meals: 9234, waste: 3567, co2: 1567, partners: 102 },
    { month: "Sep", meals: 10123, waste: 3890, co2: 1678, partners: 108 },
    { month: "Oct", meals: 11456, waste: 4123, co2: 1789, partners: 115 },
    { month: "Nov", meals: 12234, waste: 4456, co2: 1890, partners: 121 },
    { month: "Dec", meals: 13567, waste: 4789, co2: 2001, partners: 128 },
  ],
  topPerformers: [
    { name: "Metro Food Bank", meals: 12456, type: "Receiver", impact: "Exceptional" },
    { name: "Downtown Restaurant Group", meals: 8934, type: "Donor", impact: "Outstanding" },
    { name: "Community Kitchen Network", meals: 7456, type: "Receiver", impact: "Excellent" },
    { name: "Fresh Market Chain", meals: 6789, type: "Donor", impact: "Great" },
  ],
  achievements: [
    {
      title: "Carbon Neutral Champion",
      description: "Prevented 18+ tons of CO2 emissions",
      icon: Leaf,
      progress: 95,
      target: "20 tons",
    },
    {
      title: "Community Builder",
      description: "Served 89 communities nationwide",
      icon: Users,
      progress: 89,
      target: "100 communities",
    },
    {
      title: "Waste Warrior",
      description: "Diverted 45+ tons from landfills",
      icon: Award,
      progress: 78,
      target: "60 tons",
    },
  ],
}

export default function GlobalImpactPage() {
  const formatNumber = (num: number) => {
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`
    if (num >= 1000) return `${(num / 1000).toFixed(1)}K`
    return num.toString()
  }

  const shareImpact = () => {
    const text = `🌱 RePlate Impact: ${formatNumber(mockGlobalImpact.totalStats.mealsRedistributed)} meals redistributed, ${formatNumber(mockGlobalImpact.totalStats.wastePreventedKg)}kg waste prevented! Join the movement to fight hunger and reduce waste. #RePlate #FoodWaste #Community`

    if (navigator.share) {
      navigator.share({
        title: "RePlate Community Impact",
        text: text,
        url: window.location.href,
      })
    } else {
      navigator.clipboard.writeText(text)
      // In a real app, show a toast notification here
    }
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
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" onClick={shareImpact}>
                <Share2 className="mr-2 h-4 w-4" />
                Share Impact
              </Button>
              <Link href="/dashboard">
                <Button variant="outline">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Dashboard
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="mb-8">
          <h2 className="text-4xl font-bold text-foreground mb-2">Global Impact Dashboard</h2>
          <p className="text-lg text-muted-foreground">
            Real-time insights into our collective fight against food waste and hunger
          </p>
        </div>

        <Tabs defaultValue="overview" className="space-y-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="environmental">Environmental</TabsTrigger>
            <TabsTrigger value="social">Social Impact</TabsTrigger>
            <TabsTrigger value="achievements">Achievements</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-8">
            {/* Global Stats */}
            <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
              <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                    <Utensils className="h-4 w-4" />
                    Meals Redistributed
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-primary">
                    {formatNumber(mockGlobalImpact.totalStats.mealsRedistributed)}
                  </div>
                  <p className="text-xs text-muted-foreground">+12% this month</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-green-500/5 to-green-500/10 border-green-500/20">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                    <Leaf className="h-4 w-4" />
                    Waste Prevented
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-green-600">
                    {formatNumber(mockGlobalImpact.totalStats.wastePreventedKg)}kg
                  </div>
                  <p className="text-xs text-muted-foreground">+8% this month</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-blue-500/5 to-blue-500/10 border-blue-500/20">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                    <Globe className="h-4 w-4" />
                    CO₂ Saved
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-blue-600">
                    {formatNumber(mockGlobalImpact.totalStats.co2SavedKg)}kg
                  </div>
                  <p className="text-xs text-muted-foreground">+15% this month</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-accent/5 to-accent/10 border-accent/20">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                    <Building className="h-4 w-4" />
                    Active Partners
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-accent">
                    {formatNumber(mockGlobalImpact.totalStats.partnersActive)}
                  </div>
                  <p className="text-xs text-muted-foreground">+5% this month</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-purple-500/5 to-purple-500/10 border-purple-500/20">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    Communities
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-purple-600">
                    {mockGlobalImpact.totalStats.communitiesServed}
                  </div>
                  <p className="text-xs text-muted-foreground">nationwide</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-orange-500/5 to-orange-500/10 border-orange-500/20">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    Volunteers
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-orange-600">
                    {formatNumber(mockGlobalImpact.totalStats.volunteersActive)}
                  </div>
                  <p className="text-xs text-muted-foreground">active helpers</p>
                </CardContent>
              </Card>
            </div>

            {/* Monthly Trends */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  Impact Trends (Last 6 Months)
                </CardTitle>
                <CardDescription>Track our collective progress over time</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-medium mb-4">Meals Redistributed</h4>
                    <div className="space-y-3">
                      {mockGlobalImpact.monthlyTrends.map((month) => (
                        <div key={month.month} className="flex items-center gap-3">
                          <span className="text-sm font-medium w-8">{month.month}</span>
                          <div className="flex-1">
                            <Progress value={(month.meals / 15000) * 100} className="h-2" />
                          </div>
                          <span className="text-sm text-muted-foreground w-16 text-right">
                            {formatNumber(month.meals)}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium mb-4">Environmental Impact</h4>
                    <div className="space-y-4">
                      <div className="p-3 bg-green-50 dark:bg-green-950/20 rounded-lg">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm font-medium">Waste Prevented</span>
                          <span className="text-sm text-green-600">
                            {formatNumber(mockGlobalImpact.monthlyTrends[5].waste)}kg
                          </span>
                        </div>
                        <Progress value={85} className="h-1" />
                      </div>
                      <div className="p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm font-medium">CO₂ Saved</span>
                          <span className="text-sm text-blue-600">
                            {formatNumber(mockGlobalImpact.monthlyTrends[5].co2)}kg
                          </span>
                        </div>
                        <Progress value={78} className="h-1" />
                      </div>
                      <div className="p-3 bg-purple-50 dark:bg-purple-950/20 rounded-lg">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm font-medium">Active Partners</span>
                          <span className="text-sm text-purple-600">{mockGlobalImpact.monthlyTrends[5].partners}</span>
                        </div>
                        <Progress value={92} className="h-1" />
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Top Performers */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5" />
                  Top Impact Contributors
                </CardTitle>
                <CardDescription>Organizations making the biggest difference this month</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  {mockGlobalImpact.topPerformers.map((performer, index) => (
                    <div key={performer.name} className="flex items-center gap-4 p-4 border border-border rounded-lg">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                        <span className="text-lg font-bold text-primary">#{index + 1}</span>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-foreground">{performer.name}</h4>
                        <p className="text-sm text-muted-foreground">{performer.type}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-primary">{formatNumber(performer.meals)}</div>
                        <Badge variant="outline" className="text-xs">
                          {performer.impact}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="environmental" className="space-y-8">
            {/* Environmental Impact Details */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="bg-gradient-to-br from-green-500/5 to-green-500/10 border-green-500/20">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">CO₂ Equivalent Saved</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-green-600 mb-1">
                    {formatNumber(mockGlobalImpact.environmentalImpact.co2Equivalent)}kg
                  </div>
                  <p className="text-xs text-muted-foreground">Equal to 156 cars off road for a day</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-blue-500/5 to-blue-500/10 border-blue-500/20">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Water Saved</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-blue-600 mb-1">
                    {formatNumber(mockGlobalImpact.environmentalImpact.waterSaved)}L
                  </div>
                  <p className="text-xs text-muted-foreground">Enough for 1,200 people for a day</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-purple-500/5 to-purple-500/10 border-purple-500/20">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Landfill Diverted</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-purple-600 mb-1">
                    {formatNumber(mockGlobalImpact.environmentalImpact.landfillDiverted)}kg
                  </div>
                  <p className="text-xs text-muted-foreground">45 tons kept out of landfills</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-orange-500/5 to-orange-500/10 border-orange-500/20">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Energy Saved</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-orange-600 mb-1">
                    {formatNumber(mockGlobalImpact.environmentalImpact.energySaved)}kWh
                  </div>
                  <p className="text-xs text-muted-foreground">Powers 45 homes for a month</p>
                </CardContent>
              </Card>
            </div>

            {/* Environmental Impact Breakdown */}
            <Card>
              <CardHeader>
                <CardTitle>Environmental Impact Breakdown</CardTitle>
                <CardDescription>How food redistribution helps our planet</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center p-6 border border-border rounded-lg">
                    <Leaf className="h-12 w-12 text-green-600 mx-auto mb-4" />
                    <h3 className="font-semibold text-lg mb-2">Reduced Emissions</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Food waste in landfills produces methane, a greenhouse gas 25x more potent than CO₂
                    </p>
                    <div className="text-2xl font-bold text-green-600">-18.5 tons CO₂</div>
                  </div>

                  <div className="text-center p-6 border border-border rounded-lg">
                    <Globe className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                    <h3 className="font-semibold text-lg mb-2">Resource Conservation</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Saved water, energy, and land resources used in food production
                    </p>
                    <div className="text-2xl font-bold text-blue-600">234K liters</div>
                  </div>

                  <div className="text-center p-6 border border-border rounded-lg">
                    <Award className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                    <h3 className="font-semibold text-lg mb-2">Circular Economy</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Redirecting surplus food creates a sustainable circular economy
                    </p>
                    <div className="text-2xl font-bold text-purple-600">45 tons</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="social" className="space-y-8">
            {/* Social Impact Stats */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Families Helped</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-primary">
                    {formatNumber(mockGlobalImpact.socialImpact.familiesHelped)}
                  </div>
                  <p className="text-xs text-muted-foreground">across all communities</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Children Fed</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-accent">
                    {formatNumber(mockGlobalImpact.socialImpact.childrenFed)}
                  </div>
                  <p className="text-xs text-muted-foreground">nutritious meals provided</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Seniors Supported</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-secondary">
                    {formatNumber(mockGlobalImpact.socialImpact.seniorsSupported)}
                  </div>
                  <p className="text-xs text-muted-foreground">elderly community members</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Emergency Meals</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-red-600">
                    {formatNumber(mockGlobalImpact.socialImpact.emergencyMealsProvided)}
                  </div>
                  <p className="text-xs text-muted-foreground">crisis support provided</p>
                </CardContent>
              </Card>
            </div>

            {/* Community Stories */}
            <Card>
              <CardHeader>
                <CardTitle>Community Impact Stories</CardTitle>
                <CardDescription>Real stories from the communities we serve</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-6 border border-border rounded-lg">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <Users className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold">Downtown Community Center</h4>
                        <p className="text-sm text-muted-foreground">Chicago, IL</p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                      "Thanks to RePlate, we've been able to expand our after-school program meals by 300%. Kids who
                      used to go home hungry now have nutritious snacks and dinner."
                    </p>
                    <div className="flex gap-4 text-sm">
                      <span className="text-primary font-medium">2,340 meals</span>
                      <span className="text-muted-foreground">served this month</span>
                    </div>
                  </div>

                  <div className="p-6 border border-border rounded-lg">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                        <Heart className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <h4 className="font-semibold">Senior Living Support</h4>
                        <p className="text-sm text-muted-foreground">Portland, OR</p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                      "The fresh produce we receive helps our seniors maintain healthy diets on fixed incomes. It's not
                      just food - it's dignity and community connection."
                    </p>
                    <div className="flex gap-4 text-sm">
                      <span className="text-accent font-medium">1,890 meals</span>
                      <span className="text-muted-foreground">delivered weekly</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="achievements" className="space-y-8">
            {/* Achievement Progress */}
            <div className="grid md:grid-cols-3 gap-6">
              {mockGlobalImpact.achievements.map((achievement) => {
                const IconComponent = achievement.icon
                return (
                  <Card key={achievement.title} className="relative overflow-hidden">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                          <IconComponent className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">{achievement.title}</CardTitle>
                          <CardDescription>{achievement.description}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Progress</span>
                          <span className="font-medium">
                            {achievement.progress}% to {achievement.target}
                          </span>
                        </div>
                        <Progress value={achievement.progress} className="h-3" />
                      </div>
                    </CardContent>
                    {achievement.progress >= 90 && (
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-yellow-500 text-yellow-50">🏆 Almost There!</Badge>
                      </div>
                    )}
                  </Card>
                )
              })}
            </div>

            {/* Milestone Timeline */}
            <Card>
              <CardHeader>
                <CardTitle>Major Milestones</CardTitle>
                <CardDescription>Key achievements in our journey to reduce food waste</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex items-center gap-4 p-4 border-l-4 border-l-primary bg-primary/5 rounded-r-lg">
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                    <div className="flex-1">
                      <h4 className="font-medium">100,000 Meals Milestone</h4>
                      <p className="text-sm text-muted-foreground">Reached our first major redistribution goal</p>
                    </div>
                    <Badge>December 2024</Badge>
                  </div>

                  <div className="flex items-center gap-4 p-4 border-l-4 border-l-green-500 bg-green-50 dark:bg-green-950/20 rounded-r-lg">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <div className="flex-1">
                      <h4 className="font-medium">1,000 Partner Network</h4>
                      <p className="text-sm text-muted-foreground">
                        Built a nationwide network of food donors and receivers
                      </p>
                    </div>
                    <Badge variant="outline">November 2024</Badge>
                  </div>

                  <div className="flex items-center gap-4 p-4 border-l-4 border-l-blue-500 bg-blue-50 dark:bg-blue-950/20 rounded-r-lg">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <div className="flex-1">
                      <h4 className="font-medium">50 Cities Launch</h4>
                      <p className="text-sm text-muted-foreground">
                        Expanded to serve communities across 50 major cities
                      </p>
                    </div>
                    <Badge variant="outline">October 2024</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
