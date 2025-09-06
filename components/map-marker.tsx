"use client"

import { Utensils } from "lucide-react"

interface MapMarkerProps {
  category: string
  isSelected?: boolean
  isAvailable?: boolean
  onClick?: () => void
}

const getCategoryColor = (category: string) => {
  const colors = {
    "Prepared Meals": "#164e63", // Primary cyan
    "Fresh Produce": "#16a34a", // Green
    "Baked Goods": "#d97706", // Amber
    Dairy: "#7c3aed", // Purple
    "Packaged Foods": "#dc2626", // Red
  }
  return colors[category as keyof typeof colors] || "#6b7280"
}

export function MapMarker({ category, isSelected = false, isAvailable = true, onClick }: MapMarkerProps) {
  return (
    <div
      className={`cursor-pointer transition-all hover:scale-110 ${isSelected ? "scale-125 z-10" : "z-5"}`}
      onClick={onClick}
    >
      <div
        className={`w-6 h-6 rounded-full border-3 border-white shadow-lg flex items-center justify-center ${
          isAvailable ? "animate-pulse" : "opacity-60"
        }`}
        style={{ backgroundColor: getCategoryColor(category) }}
      >
        <Utensils className="h-3 w-3 text-white" />
      </div>
    </div>
  )
}
