import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  MapPin,
  Users,
  Utensils,
  Heart,
  Star,
  Mail,
  Phone,
  LocateOffIcon as LocationIcon,
  TrendingUp,
} from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Utensils className="h-8 w-8 text-primary" />
              <h1 className="text-2xl font-bold text-foreground">RePlate</h1>
            </div>
            <div className="flex items-center gap-4">
              <Link href="/requests">
                <Button variant="outline">Requests</Button>
              </Link>
              <Link href="/login">
                <Button variant="outline">Sign In</Button>
              </Link>
              <Link href="/register">
                <Button>Get Started</Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        {/* Background Images */}
        <div className="absolute inset-0 z-0">
          <div className="grid grid-cols-3 h-full opacity-20">
            <div
              className="bg-cover bg-center"
              style={{
                backgroundImage: "url('/fresh-sandwiches-and-salads.jpg')",
              }}
            />
            <div
              className="bg-cover bg-center"
              style={{
                backgroundImage: "url('/fresh-produce-display.png')",
              }}
            />
            <div
              className="bg-cover bg-center"
              style={{
                backgroundImage: "url('/fresh-bread-and-pastries.jpg')",
              }}
            />
          </div>
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-background/80" />
        </div>

        {/* Content overlay */}
        <div className="container mx-auto text-center relative z-10">
          <h2 className="text-5xl font-bold text-foreground mb-6 text-balance drop-shadow-sm">
            Connecting Communities Through Food
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty drop-shadow-sm">
            RePlate bridges the gap between food surplus and food insecurity by connecting restaurants, grocery stores,
            and event organizers with local charities and shelters.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/register?type=donor">
              <Button size="lg" className="w-full sm:w-auto shadow-lg">
                <Utensils className="mr-2 h-5 w-5" />
                Donate Food
              </Button>
            </Link>
            <Link href="/register?type=receiver">
              <Button size="lg" variant="secondary" className="w-full sm:w-auto shadow-lg">
                <Heart className="mr-2 h-5 w-5" />
                Request Food
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-card/30">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center text-foreground mb-12">How RePlate Works</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Utensils className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>List Surplus Food</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Restaurants and stores easily post available surplus food with photos, quantities, and pickup times.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <MapPin className="h-6 w-6 text-accent" />
                </div>
                <CardTitle>Find Food Nearby</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Charities and shelters discover available food on an interactive map and claim items with one click.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle>Build Community</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Track your impact, connect with local organizations, and help build a stronger, more sustainable
                  community.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold text-foreground mb-12">Our Community Impact</h3>
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">125K+</div>
              <div className="text-muted-foreground">Meals Redistributed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">1,200+</div>
              <div className="text-muted-foreground">Partner Organizations</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-secondary mb-2">89</div>
              <div className="text-muted-foreground">Communities Served</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">45 tons</div>
              <div className="text-muted-foreground">Food Waste Prevented</div>
            </div>
          </div>
          <div className="mt-8">
            <Link href="/impact">
              <Button size="lg" variant="outline">
                <TrendingUp className="mr-2 h-5 w-5" />
                View Full Impact Report
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 bg-card/30">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center text-foreground mb-12">What Our Community Says</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-l-4 border-l-primary">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Utensils className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Maria Rodriguez</h4>
                    <p className="text-sm text-muted-foreground">Chef, Bella Vista Restaurant</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  "RePlate has transformed how we handle surplus food. Instead of waste, we're creating hope. We've
                  donated over 500 meals in just 3 months!"
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-accent">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                    <Heart className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">David Chen</h4>
                    <p className="text-sm text-muted-foreground">Director, Community Food Bank</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  "The platform makes it so easy to find fresh food for our programs. The real-time updates and map
                  feature help us serve our community more efficiently."
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-secondary">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                    <Users className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Sarah Johnson</h4>
                    <p className="text-sm text-muted-foreground">Volunteer Coordinator, Hope Shelter</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  "RePlate connects us with local businesses in ways we never imagined. It's not just about food - it's
                  about building lasting community partnerships."
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card/50 py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Brand Section */}
            <div className="md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <Utensils className="h-8 w-8 text-primary" />
                <span className="text-2xl font-bold text-foreground">RePlate</span>
              </div>
              <p className="text-muted-foreground mb-4 text-pretty">
                Building stronger communities through food redistribution. Together, we can reduce waste and fight
                hunger.
              </p>
              <div className="flex gap-4">
                <Button size="sm" variant="outline" className="h-10 w-10 p-0 bg-transparent">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </Button>
                <Button size="sm" variant="outline" className="h-10 w-10 p-0 bg-transparent">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </Button>
                <Button size="sm" variant="outline" className="h-10 w-10 p-0 bg-transparent">
                  <span className="sr-only">Instagram</span>
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987c6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297L3.323 16.988c-.49-.49-.49-1.297 0-1.787l1.803-1.803c-.807-.875-1.297-2.026-1.297-3.323s.49-2.448 1.297-3.323L3.323 5.949c-.49-.49-.49-1.297 0-1.787s1.297-.49 1.787 0l1.803 1.803c-.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297l1.803 1.803c-.49.49 1.297.49 1.787 0s.49-1.297 0-1.787l-1.803-1.803c-.875.807-2.026 1.297-3.323 1.297z" />
                  </svg>
                </Button>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/listings" className="text-muted-foreground hover:text-primary transition-colors">
                    Browse Food
                  </Link>
                </li>
                <li>
                  <Link href="/map" className="text-muted-foreground hover:text-primary transition-colors">
                    Food Map
                  </Link>
                </li>
                <li>
                  <Link href="/dashboard" className="text-muted-foreground hover:text-primary transition-colors">
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link href="/requests" className="text-muted-foreground hover:text-primary transition-colors">
                    My Requests
                  </Link>
                </li>
                <li>
                  <Link href="/listings/create" className="text-muted-foreground hover:text-primary transition-colors">
                    Donate Food
                  </Link>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Support</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/help" className="text-muted-foreground hover:text-primary transition-colors">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-muted-foreground hover:text-primary transition-colors">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Get in Touch</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-primary" />
                  <span className="text-muted-foreground">hello@replate.org</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-primary" />
                  <span className="text-muted-foreground">1-800-REPLATE</span>
                </div>
                <div className="flex items-center gap-3">
                  <LocationIcon className="h-4 w-4 text-primary" />
                  <span className="text-muted-foreground">San Francisco, CA</span>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-sm text-muted-foreground mb-2">Join our newsletter</p>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Enter email"
                    className="flex-1 px-3 py-2 text-sm border border-border rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <Button size="sm">Subscribe</Button>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-border pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2024 RePlate. All rights reserved. Building communities through food redistribution.
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="/accessibility" className="text-muted-foreground hover:text-primary transition-colors">
                Accessibility
              </Link>
              <Link href="/sitemap" className="text-muted-foreground hover:text-primary transition-colors">
                Sitemap
              </Link>
              <Link href="/cookies" className="text-muted-foreground hover:text-primary transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
