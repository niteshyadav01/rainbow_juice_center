// 

import { useState } from 'react';
import { Heart, Award, Leaf, Clock, Users, Star, CheckCircle, Coffee } from 'lucide-react';

export default function WhyChooseRainbow() {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "Premium Quality Since 1996",
      description: "Over 27 years of excellence in serving fresh, natural juices and healthy snacks to our valued customers.",
      highlight: "27+ Years Experience",
      color: "from-orange-400 to-yellow-500"
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "100% Natural Ingredients",
      description: "We use only the freshest fruits and vegetables, with no artificial preservatives or additives in our products.",
      highlight: "Pure & Natural",
      color: "from-green-400 to-emerald-500"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Made with Love Daily",
      description: "Every juice is freshly squeezed and every snack is prepared with care, ensuring maximum nutrition and flavor.",
      highlight: "Fresh Daily",
      color: "from-pink-400 to-rose-500"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Market Fresh Ingredients",
      description: "We source our fruits and vegetables daily from local markets to guarantee peak freshness and quality.",
      highlight: "Daily Fresh",
      color: "from-blue-400 to-cyan-500"
    },
    // {
    //   icon: <Users className="w-8 h-8" />,
    //   title: "Your Health Partner",
    //   description: "Committed to promoting healthy living through nutritious, delicious beverages and snacks for the whole family.",
    //   highlight: "Health Focused",
    //   color: "from-purple-400 to-indigo-500"
    // },
    // {
    //   icon: <Star className="w-8 h-8" />,
    //   title: "Quality Guaranteed",
    //   description: "We stand behind every product we serve with our quality guarantee, ensuring customer satisfaction always.",
    //   highlight: "Quality Promise",
    //   color: "from-yellow-400 to-orange-500"
    // }
  ];

  const stats = [
    { number: "27+", label: "Years of Excellence", icon: <Award className="w-6 h-6" /> },
    { number: "100%", label: "Natural Ingredients", icon: <Leaf className="w-6 h-6" /> },
    { number: "1000+", label: "Happy Customers", icon: <Users className="w-6 h-6" /> },
    { number: "50+", label: "Fresh Items Daily", icon: <Coffee className="w-6 h-6" /> }
  ];

  const benefits = [
    "Fresh fruit cups and natural juices available daily",
    "No artificial preservatives or additives",
    "Locally sourced, market-fresh ingredients",
    "Nutritious options for healthy living",
    "Family-friendly environment",
    "Competitive pricing with premium quality"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-amber-50 py-16">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-100 to-yellow-100 px-6 py-3 rounded-full mb-6 border border-orange-200">
            <Heart className="w-5 h-5 text-orange-600" />
            <span className="text-orange-800 font-semibold">A HEALTHY WAY • PREMIUM QUALITY</span>
          </div>
          
          <h2 className="text-5xl font-bold text-gray-800 mb-6">
            Why Choose
            <span className="block bg-gradient-to-r from-orange-600 via-yellow-600 to-amber-600 bg-clip-text text-transparent">
              Rainbow Juice & Snack Centre?
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our vibrant selection of fresh-cut fruit cups and natural juices. 
            From sweet watermelon to tropical pineapple, every cup is packed with freshness and flavor.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center border border-orange-100 hover:border-orange-300 transition-all duration-300 hover:transform hover:scale-105">
              <div className="text-orange-600 mb-3 flex justify-center">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-gray-800 mb-2">{stat.number}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Main Features Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          
          {/* Interactive Features */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-gray-800 mb-8">Our Key Strengths</h3>
            {features.map((feature, index) => (
              <div
                key={index}
                className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 border-2 ${
                  activeFeature === index
                    ? 'bg-white border-orange-300 shadow-lg transform scale-102'
                    : 'bg-white/60 border-orange-100 hover:border-orange-200 hover:bg-white/80'
                }`}
                onClick={() => setActiveFeature(index)}
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${feature.color} text-white`}>
                    {feature.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h4 className="font-bold text-lg text-gray-800">{feature.title}</h4>
                      <span className="px-3 py-1 bg-orange-100 text-orange-700 text-sm font-semibold rounded-full">
                        {feature.highlight}
                      </span>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Benefits List */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-orange-100">
            <h3 className="text-2xl font-bold text-gray-800 mb-8 flex items-center gap-3">
              <CheckCircle className="w-8 h-8 text-green-600" />
              What You Get With Us
            </h3>
            
            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-orange-50 transition-colors duration-200">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-orange-500 to-yellow-500 rounded-2xl p-6 text-center">
              <h4 className="text-white font-bold text-xl mb-3">Ready to Experience the Rainbow?</h4>
              <p className="text-orange-100 mb-4">Visit us today and taste the difference quality makes!</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button className="bg-white text-orange-600 px-6 py-3 rounded-xl font-semibold hover:bg-orange-50 transition-colors duration-200">
                  📍 Find Our Location
                </button>
                <button className="bg-orange-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-orange-700 transition-colors duration-200 border border-orange-400">
                  📞 Call Us Now
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Highlight */}
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
      </div>
    </div>
  );
}



