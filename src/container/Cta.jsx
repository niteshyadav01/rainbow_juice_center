import { Star } from 'lucide-react'
import React from 'react'

const Cta = () => {
  return (
    <div className="bg-gradient-to-r from-orange-100 via-yellow-100 to-amber-100 rounded-3xl p-8 text-center border border-orange-200">
    <div className="flex items-center justify-center gap-4 mb-4">
      <div className="w-12 h-1 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full"></div>
      <Star className="w-8 h-8 text-orange-600" />
      <div className="w-12 h-1 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full"></div>
    </div>
    
    <h3 className="text-2xl font-bold text-gray-800 mb-3">
      "A Healthy Way • Fresh Since 1996 • 100% Natural & Pure"
    </h3>
    
    <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
      Rainbow Juice & Snacks Center - Your Health Partner • Quality Guaranteed • Made with Love Daily
    </p>
    
    <div className="flex items-center justify-center gap-8 text-sm text-gray-600">
      <div className="flex items-center gap-2">
        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        <span>Market Fresh</span>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
        <span>Premium Quality</span>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
        <span>Daily Prepared</span>
      </div>
    </div>
  </div>
  )
}

export default Cta