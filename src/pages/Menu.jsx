import React, { useState, useMemo } from "react";
import { ShoppingBag, Plus, Minus, Send, ChefHat, Star, Package, Utensils } from "lucide-react";

// Optimized menu data structure
const menuData = {
  "Sandwiches": {
    emoji: "🥪",
    color: "from-gray-600 to-slate-700",
    items: [
      { name: "Veg Sandwich", price: 40, popular: true },
      { name: "Veg Cheese Sandwich", price: 50, popular: true },
      { name: "Plain Cheese Sandwich", price: 50 },
      { name: "Bread Butter Sandwich", price: 30 },
      { name: "Masala Toast", price: 70, popular: true },
      { name: "Veg Toast Sandwich", price: 70 },
      { name: "Paneer Toast Sandwich", price: 100 },
      { name: "Veg Cheese Toast", price: 90 },
      { name: "Paneer Cheese Toast", price: 110 },
      { name: "Corn Cheese Toast", price: 90 },
      { name: "Veg Grill Sandwich", price: 150 },
      { name: "Cheese Grill Sandwich", price: 160 },
      { name: "Paneer Grill Sandwich", price: 170 },
      { name: "Corn Cheese Grill Sandwich", price: 160 },
      { name: "Masala Grill Sandwich", price: 160 },
      { name: "Cheese Masala Grill Sandwich", price: 170 },
      { name: "Veg Cheese Masala Grill", price: 180 },
      { name: "Cheese Jumbo Grill Sandwich", price: 200 },
      { name: "Cheese Grill Mix Sandwich", price: 200 },
      { name: "Footlong Spicy Guacamole", price: 150 },
      { name: "Footlong Garden Sub", price: 140 },
      { name: "Footlong Veggies and Cheese Sub", price: 160 },
      { name: "Footlong Mexican Delight", price: 170 },
      { name: "Footlong Veg Mexican Delight", price: 160 }
    ]
  },
  "Frankie Rolls": {
    emoji: "🌯",
    color: "from-gray-600 to-slate-700",
    items: [
      { name: "Veg Frankie", price: 80, popular: true },
      { name: "Veg Schezwan Frankie", price: 90, popular: true },
      { name: "Paneer Frankie", price: 110 },
      { name: "Paneer Schezwan Frankie", price: 120 },
      { name: "Cheese Frankie", price: 110 },
      { name: "Veg Noodle Frankie", price: 130 },
      { name: "Schezwan Noodle Frankie", price: 150 },
      { name: "Paneer Noodle Frankie", price: 140 },
      { name: "Paneer Schezwan Noodle Frankie", price: 150 }
    ]
  },
  "Pizza": {
    emoji: "🍕",
    color: "from-gray-600 to-slate-700",
    items: [
      { name: "Veg Cheese Pizza", price: 120, popular: true },
      { name: "Plain Cheese Pizza", price: 100 },
      { name: "Veg Pizza", price: 150 },
      { name: "Paneer Pizza", price: 170 },
      { name: "Veg Schezwan Pizza", price: 160 },
      { name: "Paneer Schezwan Pizza", price: 180 },
      { name: "Veg Szechuan Paneer Cheese Pizza", price: 190 },
      { name: "Special Mix Szechuan Pizza", price: 180 },
      { name: "Rainbow Special Pizza", price: 210, popular: true }
    ]
  },
  "Burgers": {
    emoji: "🍔",
    color: "from-gray-600 to-slate-700",
    items: [
      { name: "Veg Burger", price: 90, popular: true },
      { name: "Veg Cheese Burger", price: 110 }
    ]
  },
  "Fries & Toasts": {
    emoji: "🍟",
    color: "from-gray-600 to-slate-700",
    items: [
      { name: "Classic French Fries", price: 100, popular: true },
      { name: "Peri Peri Fries", price: 120 },
      { name: "Cheese French Fries", price: 120, popular: true },
      { name: "Cheese Melting French Fries", price: 130 },
      { name: "Cheese Herlic French Fries", price: 130 },
      { name: "Cheese Bell Pepper Toast", price: 110 }
    ]
  },
  "Pasta": {
    emoji: "🍝",
    color: "from-gray-600 to-slate-700",
    items: [
      { name: "White Pasta", price: 140 },
      { name: "Masala Pasta", price: 170, popular: true },
      { name: "Cheese Pasta", price: 180 },
      { name: "Schezwan Pasta", price: 170 }
    ]
  },
  "Maggi": {
    emoji: "🍜",
    color: "from-gray-600 to-slate-700",
    items: [
      { name: "Masala Maggi", price: 100, popular: true },
      { name: "Cheese Maggi", price: 120, popular: true },
      { name: "Schezwan Maggi", price: 130 },
      { name: "Cheese Schezwan Maggi", price: 140 }
    ]
  },
  "Momos": {
    emoji: "🥟",
    color: "from-gray-600 to-slate-700",
    items: [
      { name: "Classic Veg Steam Momo", price: 110, popular: true },
      { name: "Veg Paneer Steam Momo", price: 130 },
      { name: "Classic Veg Fried Momo", price: 130, popular: true },
      { name: "Veg Paneer Fried Momo", price: 150 }
    ]
  },
  "Starters": {
    emoji: "🍤",
    color: "from-gray-600 to-slate-700",
    items: [
      { name: "Paneer Chilly Dry", price: 180, popular: true },
      { name: "Masala Pav", price: 100 },
      { name: "Hakka Noodles", price: 160 },
      { name: "Schezwan Noodles", price: 170 },
      { name: "Veg Crispy", price: 170 },
      { name: "Butter Spice Hot Corn", price: 90, popular: true },
      { name: "Sweet Corn", price: 90 },
      { name: "All Juice Masala Mix", price: 60 }
    ]
  },
  "Rainbow Pav Bhaji": {
    emoji: "🫓",
    color: "from-gray-600 to-slate-700",
    items: [
      { name: "Pav Bhaji", price: 100, popular: true },
      { name: "Cheese Pav Bhaji", price: 130, popular: true },
      { name: "Jain Pav Bhaji", price: 110 },
      { name: "Paneer Cheese Pav Bhaji", price: 150 },
      { name: "Butter Pav Bhaji", price: 130 },
      { name: "Khata Pav Bhaji", price: 150 }
    ]
  },
  "Dosa & Uttapam": {
    emoji: "🥞",
    color: "from-gray-600 to-slate-700",
    items: [
      { name: "Plain Dosa", price: 60 },
      { name: "Masala Dosa", price: 80, popular: true },
      { name: "Mysore Dosa", price: 80 },
      { name: "Mysore Masala Dosa", price: 100 },
      { name: "Paneer Chilly Dosa", price: 170 },
      { name: "Butter Soda Dosa", price: 80 },
      { name: "Onion Uttapam", price: 90 },
      { name: "Masala Uttapam", price: 100 },
      { name: "Rainbow Special Uttapam", price: 120, popular: true }
    ]
  },
  "Cream Bowls & Shakes": {
    emoji: "🍨",
    color: "from-gray-600 to-slate-700",
    items: [
      { name: "Strawberry Shake + Cream", price: 190, popular: true },
      { name: "Strawberry Banana Shake + Cream", price: 200 },
      { name: "Mango Cream Bowl", price: 250, popular: true },
      { name: "Mango Whipped Cream", price: 230 },
      { name: "Mango Banana Cream Bowl", price: 260 },
      { name: "Mango Apple Cream Bowl", price: 240 },
      { name: "Mango Anjeer Cream Bowl", price: 260 },
      { name: "Mix Fruit Cream Bowl", price: 250 },
      { name: "Mango Shake Cream", price: 190 },
      { name: "Mango Banana Shake Cream", price: 190 },
      { name: "Sitaphal Cream Bowl", price: 250 },
      { name: "Sitaphal Apple Banana Cream", price: 260 },
      { name: "Sitaphal Anjeer Cream Bowl", price: 260 },
      { name: "Strawberry Cream Bowl", price: 250 },
      { name: "Strawberry Whipped Cream", price: 230 },
      { name: "Strawberry Apple Banana Cream", price: 260 },
      { name: "Strawberry Chikoo Cream Bowl", price: 260 },
      { name: "Strawberry Anjeer Cream Bowl", price: 280 },
      { name: "Mango Dry Fruit Shake + Cream", price: 280 },
      { name: "Mango Kaju Shake Cream", price: 250 },
      { name: "Dry Fruit Exotic Shake", price: 250 },
      { name: "Sitaphal Dry Fruit Cream Bowl", price: 320 },
      { name: "Sitaphal Pista Cream Bowl", price: 350 },
      { name: "Sitaphal Anjeer Cream Bowl", price: 350 },
      { name: "Sitaphal Exotic Cream Bowl", price: 350 },
      { name: "Sitaphal Apple Banana Kaju", price: 310 }
    ]
  },
  "Add-Ons": {
    emoji: "➕",
    color: "from-gray-600 to-slate-700",
    items: [
      { name: "Brown Bread", price: 10 },
      { name: "Extra Cheese", price: 20 },
      { name: "Extra Schezwan", price: 10 },
      { name: "Extra Maggi Masala", price: 20 },
      { name: "Mayo", price: 10 }
    ]
  }
};

const categories = Object.keys(menuData);

const Menu = () => {
  const [openCategory, setOpenCategory] = useState(null);
  const [quantities, setQuantities] = useState({});
  const [tableNumber, setTableNumber] = useState("");
  const [orderType, setOrderType] = useState("dine"); // "dine" or "parcel"

  // Memoized calculations for better performance
  const { selectedItems, totalQty, totalPrice } = useMemo(() => {
    const items = [];
    let qty = 0;
    let price = 0;
    
    categories.forEach((cat) => {
      menuData[cat].items.forEach((item, idx) => {
        const itemQty = quantities[`${cat}-${idx}`] || 0;
        if (itemQty > 0) {
          const subtotal = item.price * itemQty;
          items.push({
            category: cat,
            name: item.name,
            price: item.price,
            qty: itemQty,
            subtotal
          });
          qty += itemQty;
          price += subtotal;
        }
      });
    });
    
    return { selectedItems: items, totalQty: qty, totalPrice: price };
  }, [quantities]);

  const toggleCategory = (cat) => {
    setOpenCategory(openCategory === cat ? null : cat);
  };

  const changeQty = (cat, idx, delta) => {
    setQuantities((prev) => {
      const key = `${cat}-${idx}`;
      const newQty = Math.max(0, (prev[key] || 0) + delta);
      if (newQty === 0) {
        const { [key]: removed, ...rest } = prev;
        return rest;
      }
      return { ...prev, [key]: newQty };
    });
  };

  const getOrderSummary = () => {
    if (orderType === "dine" && !tableNumber.trim()) {
      alert("Please enter your table number!");
      return "";
    }
    
    let msg = ` *Rainbow Restaurant Order* \n`;
    msg += orderType === "dine" ? ` Table: ${tableNumber}\n` : `Parcel Order\n`;
    msg += `\n`;
    
    categories.forEach((cat) => {
      const catItems = [];
      menuData[cat].items.forEach((item, idx) => {
        const qty = quantities[`${cat}-${idx}`] || 0;
        if (qty > 0) {
          catItems.push(`${menuData[cat].emoji} ${item.name} × ${qty} = ₹${item.price * qty}`);
        }
      });
      if (catItems.length) {
        msg += `*${cat}*\n${catItems.join("\n")}\n\n`;
      }
    });
    
    msg += `*Total: ₹${totalPrice}*\n *Items: ${totalQty}*\n\nThank you for ordering with Rainbow Restaurant! `;
    return msg;
  };

  const sendOnWhatsApp = () => {
    const orderMsg = getOrderSummary();
    if (!orderMsg) return;
    
    const phone = "7972889376";
    const msg = encodeURIComponent(orderMsg);
    const isMobile = /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(navigator.userAgent);
    const waUrl = isMobile
      ? `https://wa.me/${phone}?text=${msg}`
      : `https://web.whatsapp.com/send?phone=${phone}&text=${msg}`;
    window.open(waUrl, "_blank");
  };

  return (
    <div className="min-h-content bg-white">
      {/* Header */}
              <div className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b-2 border-gradient-to-r from-red-500 via-orange-500 via-yellow-500 via-green-500 via-blue-500 via-indigo-500 to-purple-500 shadow-sm">
        <div className="px-4 py-3">
          <div className="flex items-center justify-center gap-3 md:mt-12">
            <ChefHat className="w-6 h-6 text-green-600" />
            <h1 className="text-lg font-bold bg-gradient-to-r from-green-600 to-emerald-700 bg-clip-text text-transparent">
              Rainbow Menu
            </h1>
          </div>
          <p className="text-center text-xs text-green-600 mt-1">
            Tap items to add • Select order type • Send to WhatsApp
          </p>
        </div>
      </div>

      {/* Menu Categories */}
      <div className="px-3 py-4 pb-28  ">
        {/* Mobile Layout */}
        <div className="md:hidden space-y-2">
          {categories.map((cat) => (
            <div key={cat} className="bg-white/90 backdrop-blur-sm rounded-lg shadow-sm overflow-hidden border border-orange-100 hover:shadow-lg hover:scale-[1.02] transition-all duration-300 group">
              <div className="p-[2px] bg-gradient-to-r from-red-500 via-orange-500 via-yellow-500 via-green-500 via-blue-500 via-indigo-500 to-purple-500 rounded-lg">
                <button
                  className={`w-full flex items-center justify-between p-3 font-semibold text-sm bg-white text-green-700 rounded-[6px] focus:outline-none active:scale-98 transition-all duration-200 hover:shadow-lg hover:bg-green-50 group`}
                  onClick={() => toggleCategory(cat)}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-base">{menuData[cat].emoji}</span>
                    <span className="relative">
                      {cat}
                      <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full group-hover:left-0 rounded-full"></span>
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    {/* Category item count */}
                    {(() => {
                      const categoryCount = menuData[cat].items.reduce((count, item, idx) => {
                        return count + (quantities[`${cat}-${idx}`] || 0);
                      }, 0);
                      return categoryCount > 0 && (
                        <div className="bg-white/20 backdrop-blur-sm rounded-full px-2 py-0.5 text-xs">
                          {categoryCount}
                        </div>
                      );
                    })()}
                    <div className={`transform transition-transform duration-300 ${openCategory === cat ? 'rotate-45' : ''}`}>
                      <Plus className="w-5 h-5" />
                    </div>
                  </div>
                </button>
              </div>
            
            <div className={`transition-all duration-300 ease-in-out ${
              openCategory === cat 
                ? "max-h-[2000px] opacity-100" 
                : "max-h-0 opacity-0 overflow-hidden"
            }`}>
              <div className="p-3 pt-1 space-y-2">
                {menuData[cat].items.map((item, idx) => {
                  const qty = quantities[`${cat}-${idx}`] || 0;
                  return (
                    <div key={idx} className={`flex items-center justify-between p-2 rounded-lg transition-all duration-200 ${
                      qty > 0 
                        ? 'bg-gradient-to-r from-amber-50 to-yellow-50 border border-orange-200 shadow-sm' 
                        : 'bg-amber-50/30 hover:bg-gradient-to-r hover:from-amber-100 hover:to-yellow-100 hover:shadow-sm'
                    }`}>
                      <div className="flex-1 pr-2">
                        <div className="flex items-center gap-2">
                          <span className="font-medium text-orange-800 text-xs leading-tight">
                            {item.name}
                          </span>
                        </div>
                        <div className="text-orange-600 font-bold text-sm mt-0.5">
                          ₹{item.price}
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <button
                          className="w-8 h-8 rounded-full bg-red-100 text-red-600 font-bold flex items-center justify-center active:scale-90 transition-all duration-150 disabled:opacity-50 disabled:cursor-not-allowed shadow-sm"
                          onClick={() => changeQty(cat, idx, -1)}
                          disabled={qty === 0}
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <div className="w-6 text-center font-bold text-sm text-orange-700">
                          {qty}
                        </div>
                        <button
                          className="w-8 h-8 rounded-full bg-green-100 text-green-600 font-bold flex items-center justify-center active:scale-90 transition-all duration-150 shadow-sm"
                          onClick={() => changeQty(cat, idx, 1)}
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        ))}
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:block">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {categories.map((cat, catIndex) => {
              // Check if this category or adjacent categories should be open
              const isOpen = openCategory === cat;
              const shouldShowContent = isOpen || 
                (openCategory && Math.abs(categories.indexOf(openCategory) - catIndex) <= 1);
              
              return (
                <div key={cat} className="bg-gradient-to-br from-amber-50/90 via-yellow-50/90 to-orange-50/90 backdrop-blur-md rounded-xl shadow-lg overflow-hidden border border-orange-200/50 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 group">
                  <div className="p-[2px] bg-gradient-to-r from-red-500 via-orange-500 via-yellow-500 via-green-500 via-blue-500 via-indigo-500 to-purple-500 rounded-xl">
                    <button
                      className={`w-full flex items-center justify-between p-4 font-semibold text-base bg-white text-green-700 rounded-[10px] focus:outline-none active:scale-98 transition-all duration-200 hover:shadow-lg hover:bg-green-50 group`}
                      onClick={() => toggleCategory(cat)}
                    >
                    <div className="flex items-center gap-3">
                      <span className="text-xl">{menuData[cat].emoji}</span>
                      <span className="relative">
                        {cat}
                        <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full group-hover:left-0 rounded-full"></span>
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      {/* Category item count */}
                      {(() => {
                        const categoryCount = menuData[cat].items.reduce((count, item, idx) => {
                          return count + (quantities[`${cat}-${idx}`] || 0);
                        }, 0);
                        return categoryCount > 0 && (
                          <div className="bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-medium">
                            {categoryCount}
                          </div>
                        );
                      })()}
                      <div className={`transform transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}>
                        <Plus className="w-6 h-6" />
                      </div>
                    </div>
                  </button>
                  </div>
                  
                  <div className={`transition-all duration-500 ease-in-out ${
                    shouldShowContent 
                      ? "max-h-[2000px] opacity-100" 
                      : "max-h-0 opacity-0 overflow-hidden"
                  }`}>
                    <div className="p-4 pt-2 space-y-3">
                      {menuData[cat].items.map((item, idx) => {
                        const qty = quantities[`${cat}-${idx}`] || 0;
                        return (
                          <div key={idx} className={`flex items-center justify-between p-3 rounded-lg transition-all duration-200 ${
                            qty > 0 
                              ? 'bg-gradient-to-r from-amber-100/80 to-yellow-100/80 border border-orange-300/50 shadow-sm backdrop-blur-sm' 
                              : 'bg-amber-50/50 hover:bg-gradient-to-r hover:from-amber-100/80 hover:to-yellow-100/80 hover:shadow-sm backdrop-blur-sm'
                          }`}>
                            <div className="flex-1 pr-3">
                              <div className="flex items-center gap-2">
                                <span className="font-medium text-orange-800 text-sm leading-tight">
                                  {item.name}
                                </span>
                              </div>
                              <div className="text-orange-600 font-bold text-base mt-1">
                                ₹{item.price}
                              </div>
                            </div>
                            
                            <div className="flex items-center gap-3">
                              <button
                                className="w-10 h-10 rounded-full bg-red-100 text-red-600 font-bold flex items-center justify-center active:scale-90 transition-all duration-150 disabled:opacity-50 disabled:cursor-not-allowed shadow-sm"
                                onClick={() => changeQty(cat, idx, -1)}
                                disabled={qty === 0}
                              >
                                <Minus className="w-5 h-5" />
                              </button>
                              <div className="w-8 text-center font-bold text-base text-orange-700">
                                {qty}
                              </div>
                              <button
                                className="w-10 h-10 rounded-full bg-green-100 text-green-600 font-bold flex items-center justify-center active:scale-90 transition-all duration-150 shadow-sm"
                                onClick={() => changeQty(cat, idx, 1)}
                              >
                                <Plus className="w-5 h-5" />
                              </button>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Floating Order Summary & Controls */}
              <div className="fixed bottom-0 left-0 right-0 z-40 p-3 bg-white/95 backdrop-blur-md border-t-2 border-gradient-to-r from-red-500 via-orange-500 via-yellow-500 via-green-500 via-blue-500 via-indigo-500 to-purple-500">
        {selectedItems.length > 0 && (
          <div className="mb-3 p-3 bg-white rounded-lg border-2 border-gradient-to-r from-red-500 via-orange-500 via-yellow-500 via-green-500 via-blue-500 via-indigo-500 to-purple-500 shadow-sm">
            <div className="flex items-center justify-between mb-2">
                              <div className="flex items-center gap-2">
                  <ShoppingBag className="w-4 h-4 text-green-600" />
                  <span className="font-semibold text-green-800 text-xs">Your Order</span>
                </div>
                <div className="text-right">
                  <div className="text-xs text-green-600">{totalQty} items</div>
                  <div className="font-bold text-sm text-green-700">₹{totalPrice}</div>
              </div>
            </div>
            
            <div className="max-h-24 overflow-y-auto space-y-0.5">
                              {selectedItems.map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center text-xs py-0.5">
                    <span className="text-green-700 font-medium truncate flex-1 pr-2">
                      {item.name}
                    </span>
                    <span className="text-green-800 font-bold whitespace-nowrap">
                      ×{item.qty} = ₹{item.subtotal}
                    </span>
                  </div>
                ))}
            </div>
          </div>
        )}
        
        <div className="space-y-2">
          {/* Order Type Selection */}
          <div className="flex gap-2">
            <div className={`flex-1 p-[2px] bg-gradient-to-r from-red-500 via-orange-500 via-yellow-500 via-green-500 via-blue-500 via-indigo-500 to-purple-500 rounded-lg ${orderType !== "dine" ? "opacity-50" : ""}`}>
              <button
                className={`w-full flex items-center justify-center gap-2 py-2 px-3 rounded-lg font-medium text-xs transition-all duration-200 bg-white text-green-700 hover:bg-green-50`}
                onClick={() => setOrderType("dine")}
              >
                <Utensils className="w-4 h-4" />
                Dine In
              </button>
            </div>
            <div className={`flex-1 p-[2px] bg-gradient-to-r from-red-500 via-orange-500 via-yellow-500 via-green-500 via-blue-500 via-indigo-500 to-purple-500 rounded-lg ${orderType !== "parcel" ? "opacity-50" : ""}`}>
              <button
                className={`w-full flex items-center justify-center gap-2 py-2 px-3 rounded-lg font-medium text-xs transition-all duration-200 bg-white text-green-700 hover:bg-green-50`}
                onClick={() => setOrderType("parcel")}
              >
                <Package className="w-4 h-4" />
                Parcel
              </button>
            </div>
          </div>

          {/* Table Number Input - Only show for dine in */}
          {orderType === "dine" && (
                          <input
                type="text"
                className="w-full border-2 border-gradient-to-r from-red-500 via-orange-500 via-yellow-500 via-green-500 via-blue-500 via-indigo-500 to-purple-500 rounded-lg px-3 py-2 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-green-200 transition-all placeholder:text-green-400 bg-white text-green-700"
                placeholder="🪑 Enter Table Number"
                value={tableNumber}
                onChange={(e) => setTableNumber(e.target.value)}
              />
          )}
          
          <div className="p-[2px] bg-gradient-to-r from-red-500 via-orange-500 via-yellow-500 via-green-500 via-blue-500 via-indigo-500 to-purple-500 rounded-lg">
            <button
              className="w-full bg-white text-green-700 font-semibold py-3 rounded-lg shadow-md active:scale-98 transition-all duration-200 flex items-center justify-center gap-2 text-xs disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg hover:bg-green-50"
              onClick={sendOnWhatsApp}
              disabled={(orderType === "dine" && !tableNumber.trim()) || selectedItems.length === 0}
            >
            <Send className="w-5 h-5" />
            Send Order on WhatsApp
          </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;