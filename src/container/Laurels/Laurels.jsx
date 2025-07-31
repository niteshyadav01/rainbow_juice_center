import React, { useState } from "react";
import "./Laurels.css";

const Laurels = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const galleryData = [
    // Fresh Juices Row 1 - Always Visible
    {
      id: 1,
      category: 'juice',
      emoji: '🍊',
      title: 'Rainbow Orange Juice',
      description: 'Fresh squeezed oranges with natural sweetness',
      price: '₹45',
      hidden: false
    },
    {
      id: 2,
      category: 'juice',
      emoji: '🥤',
      title: 'Tropical Mix',
      description: 'Pineapple, mango, and passion fruit blend',
      price: '₹55',
      hidden: false
    },
    {
      id: 3,
      category: 'smoothie',
      emoji: '🍓',
      title: 'Berry Blast Smoothie',
      description: 'Mixed berries with yogurt and honey',
      price: '₹65',
      hidden: false
    },
    {
      id: 4,
      category: 'smoothie',
      emoji: '🥭',
      title: 'Mango Paradise',
      description: 'Creamy mango smoothie with coconut milk',
      price: '₹60',
      hidden: false
    },
    // Hidden Items - Show after "See More"
    {
      id: 5,
      category: 'juice',
      emoji: '🍎',
      title: 'Green Apple Fresh',
      description: 'Crisp green apples with mint and lime',
      price: '₹40',
      hidden: true
    },
    {
      id: 6,
      category: 'juice',
      emoji: '🍇',
      title: 'Grape Delight',
      description: 'Sweet purple grapes with lemon twist',
      price: '₹50',
      hidden: true
    },
    {
      id: 7,
      category: 'smoothie',
      emoji: '🍌',
      title: 'Banana Energy Boost',
      description: 'Banana, oats, and almond milk blend',
      price: '₹50',
      hidden: true
    },
    {
      id: 8,
      category: 'smoothie',
      emoji: '🥥',
      title: 'Coconut Dream',
      description: 'Fresh coconut with pineapple chunks',
      price: '₹55',
      hidden: true
    },
    {
      id: 9,
      category: 'snack',
      emoji: '🥪',
      title: 'Rainbow Sandwich',
      description: 'Multi-colored veggie sandwich with herbs',
      price: '₹35',
      hidden: true
    },
    {
      id: 10,
      category: 'snack',
      emoji: '🍟',
      title: 'Sweet Potato Fries',
      description: 'Golden fries with special seasoning',
      price: '₹30',
      hidden: true
    },
    {
      id: 11,
      category: 'snack',
      emoji: '🥙',
      title: 'Colorful Wrap',
      description: 'Fresh vegetables in spinach tortilla',
      price: '₹45',
      hidden: true
    },
    {
      id: 12,
      category: 'snack',
      emoji: '🥗',
      title: 'Fresh Garden Salad',
      description: 'Mixed greens with rainbow vegetables',
      price: '₹40',
      hidden: true
    },
    {
      id: 13,
      category: 'special',
      emoji: '🌈',
      title: 'Rainbow Combo',
      description: 'Any juice + any snack at special price',
      price: '₹85',
      hidden: true
    },
    {
      id: 14,
      category: 'special',
      emoji: '⭐',
      title: 'Health Special',
      description: 'Green smoothie with energy bar combo',
      price: '₹75',
      hidden: true
    },
    {
      id: 15,
      category: 'juice',
      emoji: '🍋',
      title: 'Lemon Mint Cooler',
      description: 'Refreshing lemon with fresh mint leaves',
      price: '₹35',
      hidden: true
    }
  ];



  const handleSeeMore = () => {
    setIsExpanded(!isExpanded);
  };

  const visibleData = galleryData.filter(item => {
    return !item.hidden || isExpanded;
  });

  const hasHiddenItems = galleryData.some(item => item.hidden);

  return (
    <div className="gallery-container">
      <div className="gallery-header">
        <h1 className="gallery-title">Our Colorful Gallery</h1>
        <p className="gallery-subtitle">
          Discover our vibrant collection of fresh juices, smoothies, and delicious snacks
        </p>
      </div>



      <div className="gallery-grid">
        {visibleData.map((item, index) => (
          <div
            key={item.id}
            className={`gallery-item ${item.category} ${item.hidden && !isExpanded ? 'hidden-row' : ''}`}
          >
            <div className="item-image">{item.emoji}</div>
          </div>
        ))}
      </div>

      {hasHiddenItems && (
        <div className="see-more-container">
          <button className="see-more-btn" onClick={handleSeeMore}>
            {isExpanded ? '📦 Show Less' : '🌟 See More Items'}
          </button>
        </div>
      )}


    </div>
  );
};

export default Laurels;

