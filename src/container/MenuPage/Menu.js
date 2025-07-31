import React, { useState, useMemo } from "react";
import { ShoppingBag, Plus, Minus, Send, ChefHat, Star } from "lucide-react";

// Optimized menu data structure
const menuData = {
  "Sandwiches": {
    emoji: "🥪",
    color: "from-amber-400 to-orange-500",
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
    color: "from-green-400 to-emerald-500",
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
    color: "from-red-400 to-rose-500",
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
    color: "from-purple-400 to-pink-500",
    items: [
      { name: "Veg Burger", price: 90, popular: true },
      { name: "Veg Cheese Burger", price: 110 }
    ]
  },
  "Fries & Toasts": {
    emoji: "🍟",
    color: "from-yellow-400 to-amber-500",
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
    color: "from-orange-400 to-red-500",
    items: [
      { name: "White Pasta", price: 140 },
      { name: "Masala Pasta", price: 170, popular: true },
      { name: "Cheese Pasta", price: 180 },
      { name: "Schezwan Pasta", price: 170 }
    ]
  },
  "Maggi": {
    emoji: "🍜",
    color: "from-blue-400 to-indigo-500",
    items: [
      { name: "Masala Maggi", price: 100, popular: true },
      { name: "Cheese Maggi", price: 120, popular: true },
      { name: "Schezwan Maggi", price: 130 },
      { name: "Cheese Schezwan Maggi", price: 140 }
    ]
  },
  "Momos": {
    emoji: "🥟",
    color: "from-teal-400 to-cyan-500",
    items: [
      { name: "Classic Veg Steam Momo", price: 110, popular: true },
      { name: "Veg Paneer Steam Momo", price: 130 },
      { name: "Classic Veg Fried Momo", price: 130, popular: true },
      { name: "Veg Paneer Fried Momo", price: 150 }
    ]
  },
  "Starters": {
    emoji: "🍤",
    color: "from-pink-400 to-red-500",
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
    color: "from-orange-400 to-yellow-500",
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
    color: "from-lime-400 to-green-500",
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
    color: "from-violet-400 to-purple-500",
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
    color: "from-gray-400 to-slate-500",
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

const MenuAccordion = () => {
  const [openCategory, setOpenCategory] = useState(null);
  const [quantities, setQuantities] = useState({});
  const [tableNumber, setTableNumber] = useState("");

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
    if (!tableNumber.trim()) {
      alert("Please enter your table number!");
      return "";
    }
    
    let msg = `🌈 *Rainbow Restaurant Order* 🌈\n📍 Table: ${tableNumber}\n\n`;
    
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
    
    msg += `💰 *Total: ₹${totalPrice}*\n🍽️ *Items: ${totalQty}*\n\nThank you for ordering with Rainbow Restaurant! 🙏`;
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
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
      {/* Header */}
      <div className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-orange-200 shadow-sm">
        <div className="px-4 py-4">
          <div className="flex items-center justify-center gap-3">
            <ChefHat className="w-8 h-8 text-orange-500" />
            <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              Rainbow Menu
            </h1>
          </div>
          <p className="text-center text-sm text-gray-600 mt-1">
            Tap items to add • Enter table number • Send to WhatsApp
          </p>
        </div>
      </div>

      {/* Menu Categories */}
      <div className="px-4 py-6 space-y-3 pb-32">
        {categories.map((cat) => (
          <div key={cat} className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden border border-white/50">
            <button
              className={`w-full flex items-center justify-between p-4 font-bold text-lg bg-gradient-to-r ${menuData[cat].color} text-white focus:outline-none active:scale-98 transition-all duration-200`}
              onClick={() => toggleCategory(cat)}
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">{menuData[cat].emoji}</span>
                <span>{cat}</span>
              </div>
              <div className="flex items-center gap-2">
                {/* Category item count */}
                {(() => {
                  const categoryCount = menuData[cat].items.reduce((count, item, idx) => {
                    return count + (quantities[`${cat}-${idx}`] || 0);
                  }, 0);
                  return categoryCount > 0 && (
                    <div className="bg-white/20 backdrop-blur-sm rounded-full px-2 py-1 text-sm">
                      {categoryCount}
                    </div>
                  );
                })()}
                <div className={`transform transition-transform duration-300 ${openCategory === cat ? 'rotate-45' : ''}`}>
                  <Plus className="w-6 h-6" />
                </div>
              </div>
            </button>
            
            <div className={`transition-all duration-300 ease-in-out ${
              openCategory === cat 
                ? "max-h-screen opacity-100" 
                : "max-h-0 opacity-0 overflow-hidden"
            }`}>
              <div className="p-4 pt-2 space-y-3">
                {menuData[cat].items.map((item, idx) => {
                  const qty = quantities[`${cat}-${idx}`] || 0;
                  return (
                    <div key={idx} className={`flex items-center justify-between p-3 rounded-xl transition-all duration-200 ${
                      qty > 0 
                        ? 'bg-gradient-to-r from-orange-50 to-amber-50 border-2 border-orange-200 shadow-sm' 
                        : 'bg-gray-50/50 hover:bg-orange-50/50'
                    }`}>
                      <div className="flex-1 pr-3">
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-gray-800 text-base leading-tight">
                            {item.name}
                          </span>
                          {item.popular && (
                            <div className="flex items-center bg-orange-100 text-orange-600 px-2 py-0.5 rounded-full text-xs font-medium">
                              <Star className="w-3 h-3 mr-1 fill-current" />
                              Popular
                            </div>
                          )}
                        </div>
                        <div className="text-orange-600 font-bold text-lg mt-1">
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
                        <div className="w-8 text-center font-bold text-lg text-gray-800">
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
        ))}
      </div>

      {/* Floating Order Summary & Controls */}
      <div className="fixed bottom-0 left-0 right-0 z-40 p-4 bg-white/95 backdrop-blur-md border-t border-orange-200">
        {selectedItems.length > 0 && (
          <div className="mb-4 p-4 bg-gradient-to-r from-orange-50 to-amber-50 rounded-2xl border border-orange-200 shadow-lg">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 text-orange-600" />
                <span className="font-bold text-gray-800">Your Order</span>
              </div>
              <div className="text-right">
                <div className="text-sm text-gray-600">{totalQty} items</div>
                <div className="font-bold text-lg text-orange-600">₹{totalPrice}</div>
              </div>
            </div>
            
            <div className="max-h-32 overflow-y-auto space-y-1">
              {selectedItems.map((item, idx) => (
                <div key={idx} className="flex justify-between items-center text-sm py-1">
                  <span className="text-gray-700 font-medium truncate flex-1 pr-2">
                    {item.name}
                  </span>
                  <span className="text-orange-600 font-bold whitespace-nowrap">
                    ×{item.qty} = ₹{item.subtotal}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
        
        <div className="space-y-3">
          <input
            type="text"
            className="w-full border-2 border-orange-200 rounded-xl px-4 py-3 text-lg font-medium focus:outline-none focus:border-orange-400 focus:ring-4 focus:ring-orange-100 transition-all placeholder:text-gray-400"
            placeholder="🪑 Enter Table Number"
            value={tableNumber}
            onChange={(e) => setTableNumber(e.target.value)}
          />
          
          <button
            className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold py-4 rounded-xl shadow-lg active:scale-98 transition-all duration-200 flex items-center justify-center gap-3 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={sendOnWhatsApp}
            disabled={!tableNumber.trim() || selectedItems.length === 0}
          >
            <Send className="w-6 h-6" />
            Send Order on WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuAccordion;