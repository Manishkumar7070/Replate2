import type React from "react"
import type { Metadata } from "next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "RePlate - Community Food Redistribution",
  description: "Connecting communities through food redistribution. Reduce waste, fight hunger.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans">
        <Suspense fallback={null}>{children}</Suspense>
      </body>
    </html>
  )
}
