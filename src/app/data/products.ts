import { Product } from '../contexts/CartContext';

export const products: Product[] = [
  // Cakes
  {
    id: 'cake-1',
    name: 'Chocolate Decadence Cake',
    description: 'Rich triple-layer chocolate cake with Belgian chocolate ganache',
    price: 1200,
    category: 'Cakes',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&q=80',
  },
  {
    id: 'cake-2',
    name: 'Classic Vanilla Bean',
    description: 'Moist vanilla cake with Madagascar vanilla buttercream',
    price: 950,
    category: 'Cakes',
    image: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=800&q=80',
  },
  {
    id: 'cake-3',
    name: 'Red Velvet Dream',
    description: 'Southern-style red velvet with cream cheese frosting',
    price: 1100,
    category: 'Cakes',
    image: 'https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?w=800&q=80',
  },
  {
    id: 'cake-4',
    name: 'Strawberry Shortcake',
    description: 'Light sponge cake layered with fresh strawberries and whipped cream',
    price: 1050,
    category: 'Cakes',
    image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=800&q=80',
  },

  // Pastries
  {
    id: 'pastry-1',
    name: 'Butter Croissant',
    description: 'Flaky, buttery French croissant baked fresh daily',
    price: 85,
    category: 'Pastries',
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=800&q=80',
  },
  {
    id: 'pastry-2',
    name: 'Pain au Chocolat',
    description: 'Classic chocolate croissant with dark chocolate batons',
    price: 95,
    category: 'Pastries',
    image: 'https://images.unsplash.com/photo-1623334044303-241021148842?w=800&q=80',
  },
  {
    id: 'pastry-3',
    name: 'Almond Danish',
    description: 'Sweet pastry filled with almond cream and topped with sliced almonds',
    price: 110,
    category: 'Pastries',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&q=80',
  },
  {
    id: 'pastry-4',
    name: 'Fruit Tart',
    description: 'Buttery tart shell filled with pastry cream and seasonal fruits',
    price: 150,
    category: 'Pastries',
    image: 'https://images.unsplash.com/photo-1519915028121-7d3463d20b13?w=800&q=80',
  },
  {
    id: 'pastry-5',
    name: 'Cinnamon Roll',
    description: 'Soft, fluffy roll swirled with cinnamon and topped with cream cheese icing',
    price: 120,
    category: 'Pastries',
    image: 'https://images.unsplash.com/photo-1619985632461-f33748ef8f3e?w=800&q=80',
  },

  // Bread
  {
    id: 'bread-1',
    name: 'Sourdough Loaf',
    description: 'Artisan sourdough with crispy crust and chewy interior',
    price: 180,
    category: 'Bread',
    image: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=800&q=80',
  },
  {
    id: 'bread-2',
    name: 'French Baguette',
    description: 'Traditional French baguette with golden crust',
    price: 65,
    category: 'Bread',
    image: 'https://images.unsplash.com/photo-1534620808146-d33bb39128b2?w=800&q=80',
  },
  {
    id: 'bread-3',
    name: 'Multigrain Bread',
    description: 'Healthy blend of whole wheat, oats, and seeds',
    price: 150,
    category: 'Bread',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&q=80',
  },
  {
    id: 'bread-4',
    name: 'Brioche Loaf',
    description: 'Rich, buttery French bread perfect for toast',
    price: 200,
    category: 'Bread',
    image: 'https://images.unsplash.com/photo-1586444248902-2f64eddc13df?w=800&q=80',
  },

  // Cookies
  {
    id: 'cookie-1',
    name: 'Chocolate Chip Cookies',
    description: 'Classic cookies loaded with Belgian chocolate chips',
    price: 45,
    category: 'Cookies',
    image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=800&q=80',
  },
  {
    id: 'cookie-2',
    name: 'Oatmeal Raisin',
    description: 'Chewy oatmeal cookies with plump raisins and cinnamon',
    price: 40,
    category: 'Cookies',
    image: 'https://images.unsplash.com/photo-1590080876129-c58a9625dfaa?w=800&q=80',
  },
  {
    id: 'cookie-3',
    name: 'Sugar Cookies',
    description: 'Soft sugar cookies decorated with royal icing',
    price: 50,
    category: 'Cookies',
    image: 'https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=800&q=80',
  },
  {
    id: 'cookie-4',
    name: 'Double Chocolate',
    description: 'Dark chocolate cookies with white chocolate chunks',
    price: 55,
    category: 'Cookies',
    image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=800&q=80',
  },
  {
    id: 'cookie-5',
    name: 'Peanut Butter',
    description: 'Soft peanut butter cookies with crisscross pattern',
    price: 45,
    category: 'Cookies',
    image: 'https://images.unsplash.com/photo-1605224685925-cc47d59a3c21?w=800&q=80',
  },
];

export const categories = ['All', 'Cakes', 'Pastries', 'Bread', 'Cookies'];
