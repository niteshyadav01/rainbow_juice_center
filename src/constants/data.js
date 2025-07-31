import images from './images';

const food = [
  {
    title: 'Burger Meal',
    price: '$56',
    tags: 'AU | Meal',
  },
  {
    title: '3x Pizza Deal',
    price: '$59',
    tags: 'AU | Deal',
  },
  {
    title: 'Kebab Meal',
    price: '$44',
    tags: 'FR | Deal',
  },
  {
    title: 'Shawarma',
    price: '$31',
    tags: 'CA | Meal',
  },
  {
    title: 'Donner Roll',
    price: '$26',
    tags: 'IE | Meal',
  },
];

const drinks = [
  {
    title: 'Coca Cola',
    price: '$20',
    tags: 'Free with a meal | Soda | 30 ml',
  },
  {
    title: "Pepsi",
    price: '$16',
    tags: 'Free with a meal | Soda | 30 ml',
  },
  {
    title: 'Water',
    price: '$10',
    tags: 'Free with a meal | 30 ml',
  },
  {
    title: 'Water',
    price: '$31',
    tags: 'Free with a meal | 30 ml',
  },
  {
    title: 'Rio',
    price: '$26',
    tags: 'Free with a meal | Soda | 30 ml',
  },
];

const achievements = [
  {
    imgUrl: images.award01,
    title: 'Customer Favorite',
    subtitle: 'Loved by hundreds for our rich flavors and fast service.',
  },
  {
    imgUrl: images.award02,
    title: 'Pure & Hygienic',
    subtitle: 'Maintaining top cleanliness and fresh ingredient standards.',
  },
  {
    imgUrl: images.award03,
    title: 'Expertly Crafted',
    subtitle: 'Juices and snacks prepared by skilled hands, every day.',
  },
  //   {
  //   imgUrl: images.award05,
  //   title: 'Expertly Crafted',
  //   subtitle: 'Juices and snacks prepared by skilled hands, every day.',
  // },
  // {
  //   imgUrl: images.award05,
  //   title: 'Expertly Crafted',
  //   subtitle: 'Juices and snacks prepared by skilled hands, every day.',
  // },
];


export default { food, drinks, achievements };
