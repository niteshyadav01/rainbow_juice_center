import { Marquee } from "../components/magicui/marquee"
import { cn } from "../lib/utils";

const reviews = [
  {
    name: "Priya Sharma",
    username: "@priya_s",
    body: "The Rainbow Special Uttapam is absolutely divine! Fresh ingredients and perfect taste. Their mango cream bowls are heavenly too!",
    img: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    rating: 5,
  },
  {
    name: "Rahul Patel",
    username: "@rahul_p",
    body: "Best sandwiches in town! The Veg Cheese Grill Sandwich is my go-to. Fresh bread and generous cheese filling. Highly recommended!",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    rating: 5,
  },
  {
    name: "Anjali Desai",
    username: "@anjali_d",
    body: "Love their Frankie rolls! The Veg Schezwan Frankie is spicy and delicious. Perfect for a quick snack. Staff is very friendly!",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    rating: 5,
  },
  {
    name: "Vikram Singh",
    username: "@vikram_s",
    body: "Their Rainbow Special Pizza is amazing! Fresh toppings and perfect cheese. The Peri Peri Fries are crispy and flavorful too.",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    rating: 4,
  },
  {
    name: "Meera Iyer",
    username: "@meera_i",
    body: "The Mango Cream Bowl is to die for! So fresh and creamy. Their Pav Bhaji is also authentic and delicious. Best juice center!",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
    rating: 5,
  },
  {
    name: "Arjun Reddy",
    username: "@arjun_r",
    body: "Amazing variety of shakes and cream bowls! The Sitaphal Cream Bowl is my favorite. Fresh ingredients and great taste!",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    rating: 5,
  },
  {
    name: "Kavya Nair",
    username: "@kavya_n",
    body: "Their Cheese Melting French Fries are the best! Crispy outside, cheesy inside. The Masala Dosa is also perfectly made.",
    img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
    rating: 5,
  },
  {
    name: "Aditya Kumar",
    username: "@aditya_k",
    body: "Love their Paneer Chilly Dry starter! Perfectly spiced and crispy. The Cheese Pasta is also creamy and delicious.",
    img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face",
    rating: 4,
  },
  {
    name: "Zara Khan",
    username: "@zara_k",
    body: "The Strawberry Shake with Cream is heavenly! So smooth and refreshing. Their Momos are also perfectly steamed and juicy.",
    img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=150&h=150&fit=crop&crop=face",
    rating: 5,
  },
  {
    name: "Rohan Mehta",
    username: "@rohan_m",
    body: "Best juice center in the area! Their Cheese Pav Bhaji is rich and flavorful. The service is quick and staff is polite.",
    img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face",
    rating: 5,
  },
  {
    name: "Sneha Verma",
    username: "@sneha_v",
    body: "The Masala Maggi is perfectly cooked! Not too soft, not too hard. Their Cheese Toast Sandwich is also very tasty.",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    rating: 5,
  },
  {
    name: "Karan Malhotra",
    username: "@karan_m",
    body: "Amazing variety of sandwiches and rolls! The Footlong Mexican Delight is huge and delicious. Great value for money!",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    rating: 5,
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const StarRating = ({ rating }) => {
  return (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, index) => (
        <svg
          key={index}
          className={`w-4 h-4 ${
            index < rating ? "text-yellow-400" : "text-gray-300"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
};

const ReviewCard = ({ img, name, username, body, rating }) => {
  return (
    <figure
      className={cn(
        "relative h-full w-80 cursor-pointer overflow-hidden rounded-2xl border p-6 mx-4",
        "backdrop-blur-md bg-white/20 border-white/30 shadow-xl",
        "hover:bg-white/30 hover:border-white/50 transition-all duration-300",
        "transform hover:scale-105 hover:shadow-2xl",
      )}
    >
      {/* Glass effect overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl" />
      
      <div className="relative z-10">
        <div className="flex items-start gap-4 mb-4">
          <div className="relative">
            <img 
              className="rounded-full w-12 h-12 object-cover ring-2 ring-white/30" 
              alt={name} 
              src={img} 
            />
            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white"></div>
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between mb-1">
              <figcaption className="text-sm font-semibold text-gray-800">
                {name}
              </figcaption>
              <StarRating rating={rating} />
            </div>
            {/* <p className="text-xs text-gray-600 mb-2">{username}</p> */}
          </div>
        </div>
        
        <blockquote className="text-sm text-gray-700 leading-relaxed">
          "{body}"
        </blockquote>
        
        {/* Decorative quote mark */}
        <div className="absolute top-4 right-4 text-4xl text-white/20 font-serif">
          "
        </div>
      </div>
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden py-16">
      {/* Glass effect background */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-100 via-yellow-100 to-red-100" />
      <div className="absolute inset-0 backdrop-blur-sm bg-white/30" />
      
      <div className="relative z-10 w-full">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-semibold text-gray-800 font-serif mb-2 gallery-title">
            What Our Customers Say
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="border-t border-gray-400 w-24" />
            <svg xmlns="http://www.w3.org/2000/svg" height="40" width="40" viewBox="0 0 443.693 443.693" className="text-orange-500">
              <path fill="currentColor" d="M326.85 96.927c0-25.505-20.749-46.256-46.254-46.256-22.07 0-40.568 15.543-45.152 36.255h-59.972L135.84 5.621a10 10 0 0 0-13.371-4.607c-4.964 2.42-7.027 8.406-4.607 13.371l35.36 72.542h-25.198a9.999 9.999 0 0 0-8.062 15.918c16.631 22.655 15.013 42.409 5.834 73.151-8.842 29.616-14.489 54.499-.451 82.368 12.495 27.684 38.644 46.531 68.355 50.027.092 38.064.092 76.754.001 115.303h-38.942c-5.522 0-10 4.479-10 10 0 5.523 4.478 10 10 10h97.93c5.522 0 10-4.477 10-10 0-5.521-4.478-10-10-10h-38.987c.091-38.547.091-77.234-.001-115.297 29.721-3.48 55.886-22.326 68.39-50.01 14.054-27.877 8.405-52.767-.439-82.392-3.758-12.579-6.245-23.317-6.737-33.169a47 47 0 0 0 5.683.356c25.503-.001 46.252-20.75 46.252-46.255m-46.253-26.256c14.477 0 26.254 11.778 26.254 26.256s-11.777 26.254-26.254 26.254a27 27 0 0 1-3.469-.234c1.988-6.69 5.336-13.266 10.355-20.104a10 10 0 0 0-8.062-15.917h-23.096c3.942-9.53 13.335-16.255 24.272-16.255m-36.274 36.255.02.001.02-.001h17.498c-11.519 24.881-7.122 48.179-.307 71.62-4.779-4.189-11.354-9.145-22.787-9.145-9.247 0-15.313 3.245-19.825 6.702l-33.72-69.177zm-81.352 0 37.955 77.863c-3.035-.6-4.918-2.272-7.994-5.022-4.894-4.374-11.596-10.366-24.163-10.366-11.529 0-18.117 5.039-22.906 9.25 6.832-23.48 11.259-46.81-.276-71.726zM264.146 249.55a10 10 0 0 0-.208.436c-10.621 23.691-34.257 39-60.216 39-25.967 0-49.605-15.316-60.225-39.02a10 10 0 0 0-.207-.434c-7.546-14.883-7.7-28.742-4.395-44.86 9.346-1.355 14.857-6.258 19.037-9.994 3.931-3.513 5.903-5.277 10.836-5.277 4.932 0 6.904 1.764 10.835 5.277 4.894 4.375 11.596 10.366 24.164 10.366 7.433 0 12.804-2.1 16.973-4.717l.04-.025c2.862-1.802 5.162-3.845 7.153-5.624 3.93-3.513 5.902-5.276 10.833-5.276 4.934 0 6.907 1.764 10.838 5.277 4.166 3.723 9.656 8.604 18.943 9.979 3.311 16.131 3.157 30-4.401 44.892" />
            </svg>
            <div className="border-t border-gray-400 w-24" />
          </div>
        </div>
        
        <Marquee pauseOnHover className="[--duration:40s] mb-8">
          {firstRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:40s]">
          {secondRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
      </div>
      
      {/* Gradient fade effects */}
      {/* <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-transparent to-white/50 z-20"></div> */}
      {/* <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-transparent to-white/50 z-20"></div> */}
    </div>
  );
}
