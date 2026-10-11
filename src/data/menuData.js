export const CATEGORIES = [
  { id: 'all', name: 'All Dishes', count: 18 },
  { id: 'tiffins', name: 'Tiffins & Breakfast', count: 5 },
  { id: 'biryani', name: 'Biryani & Rice', count: 4 },
  { id: 'curries', name: 'Curries & Parotta', count: 4 },
  { id: 'snacks', name: 'Starters & Snacks', count: 3 },
  { id: 'beverages', name: 'Drinks & Desserts', count: 2 },
];

export const DIETARY_FILTERS = [
  { id: 'all', label: 'All Items' },
  { id: 'veg', label: 'Pure Veg 🟢' },
  { id: 'non-veg', label: 'Non-Veg 🔴' },
  { id: 'bestseller', label: 'Bestseller ⭐' },
  { id: 'spicy', label: 'Spicy 🌶️' },
];

export const MENU_ITEMS = [
  // TIFFINS
  {
    id: 1,
    name: 'Ghee Podi Masala Dosa',
    category: 'tiffins',
    price: 130,
    isVeg: true,
    rating: 4.9,
    reviewsCount: 320,
    badge: 'Bestseller',
    spiciness: 1,
    dietary: ['veg'],
    image: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=800&q=80',
    description: 'Crispy golden crepe roasted with pure desi ghee, dusted with spicy gunpowder podi, and stuffed with spiced potato masala. Served with 3 chutneys & hot sambar.',
    details: {
      calories: 340,
      prepTime: '10 min',
      allergens: ['Dairy (Ghee)'],
      sideServing: 'Coconut chutney, tomato chutney, mint chutney & drumstick sambar',
      ingredients: ['Fermented Rice-Urad Batter', 'Desi Ghee', 'Chana Dal Podi', 'Spiced Potato Mash', 'Mustard Seeds', 'Curry Leaves']
    }
  },
  {
    id: 2,
    name: 'Steamed Idli Sambar (3 Pcs)',
    category: 'tiffins',
    price: 70,
    isVeg: true,
    rating: 4.8,
    reviewsCount: 240,
    badge: 'Classic',
    spiciness: 0,
    dietary: ['veg'],
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80',
    description: 'Pillowy soft, melt-in-mouth steamed rice cakes dipped in piping hot, aromatic lentil sambar made with freshly ground spices.',
    details: {
      calories: 180,
      prepTime: '5 min',
      allergens: [],
      sideServing: 'Fresh coconut chutney & shallots sambar',
      ingredients: ['Rice Flour', 'Urad Dal', 'Fenugreek', 'Toor Dal Sambar', 'Drumstick', 'Curry Leaves']
    }
  },
  {
    id: 3,
    name: 'Crispy Medu Vada (2 Pcs)',
    category: 'tiffins',
    price: 80,
    isVeg: true,
    rating: 4.85,
    reviewsCount: 195,
    badge: 'Popular',
    spiciness: 1,
    dietary: ['veg'],
    image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/3/32/Medu_Vada_with_chutnies.jpg/1920px-Medu_Vada_with_chutnies.jpg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail&_=20200819134712',
    description: 'Crunchy on the outside and fluffy inside, golden lentil fritters tempered with crushed black pepper, ginger, and fresh curry leaves.',
    details: {
      calories: 220,
      prepTime: '8 min',
      allergens: [],
      sideServing: 'Spicy kara chutney & coconut chutney',
      ingredients: ['Urad Dal', 'Black Peppercorns', 'Ginger', 'Green Chillies', 'Curry Leaves', 'Asafoetida']
    }
  },
  {
    id: 4,
    name: 'Onion Rava Masala Dosa',
    category: 'tiffins',
    price: 140,
    isVeg: true,
    rating: 4.75,
    reviewsCount: 160,
    badge: null,
    spiciness: 1,
    dietary: ['veg'],
    image: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=800&q=80',
    description: 'Ultra-crispy semolina crepe with finely chopped onions, cumin, green chillies, stuffed with homestyle potato sagu.',
    details: {
      calories: 360,
      prepTime: '12 min',
      allergens: ['Wheat (Semolina)'],
      sideServing: 'Groundnut chutney & sambar',
      ingredients: ['Semolina (Rava)', 'Rice Flour', 'Chopped Onions', 'Cumin Seeds', 'Potato Masala', 'Green Chillies']
    }
  },
  {
    id: 5,
    name: 'Poori Masala (3 Pcs)',
    category: 'tiffins',
    price: 110,
    isVeg: true,
    rating: 4.78,
    reviewsCount: 145,
    badge: 'Weekend Special',
    spiciness: 1,
    dietary: ['veg'],
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80',
    description: 'Puffy deep-fried golden wheat pooris served with creamy South Indian spiced potato kurma and coconut chutney.',
    details: {
      calories: 420,
      prepTime: '10 min',
      allergens: ['Wheat'],
      sideServing: 'Potato-onion bhaji & pickle',
      ingredients: ['Whole Wheat Flour', 'Potatoes', 'Turmeric', 'Green Chillies', 'Ginger', 'Bengal Gram']
    }
  },

  // BIRYANI & RICE
  {
    id: 6,
    name: 'Hyderabadi Chicken Dum Biryani',
    category: 'biryani',
    price: 260,
    isVeg: false,
    rating: 4.95,
    reviewsCount: 480,
    badge: 'Chef Special',
    spiciness: 2,
    dietary: ['non-veg', 'spicy'],
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80',
    description: 'Fragrant long-grain aged basmati rice cooked on slow dum with tender marinated chicken, saffron, fried onions, and authentic secret spices. Served with Mirchi ka Salan & onion raita.',
    details: {
      calories: 650,
      prepTime: '15 min',
      allergens: ['Dairy'],
      sideServing: 'Mirchi ka Salan, onion mint raita & boiled egg',
      ingredients: ['Aged Basmati Rice', 'Farm Chicken', 'Saffron Milk', 'Brown Onions (Birista)', 'Mint & Coriander', 'Desi Ghee']
    }
  },
  {
    id: 7,
    name: 'Andhra Special Mutton Biryani',
    category: 'biryani',
    price: 340,
    isVeg: false,
    rating: 4.9,
    reviewsCount: 310,
    badge: 'Bestseller',
    spiciness: 3,
    dietary: ['non-veg', 'spicy'],
    image: 'https://media.istockphoto.com/id/980036840/photo/gosht-or-lamb-biryani-prepared-in-basmati-rice-served-with-yogurt-dip-in-terracotta-bowl.jpg?s=612x612&w=0&k=20&c=jFTBXVyQkPmt_3GE1hOSlraqBe_qIIDN7zckiHUqAWc=',
    description: 'Spicy and aromatic Guntur-style mutton dum biryani with succulent bone-in lamb pieces infused with rich spices and ghee.',
    details: {
      calories: 720,
      prepTime: '18 min',
      allergens: ['Dairy'],
      sideServing: 'Spicy gravy & cucumber raita',
      ingredients: ['Tender Lamb/Mutton', 'Basmati Rice', 'Guntur Red Chillies', 'Cardamom', 'Cinnamon', 'Ghee']
    }
  },
  {
    id: 8,
    name: 'South Indian Veg Meals (Unlimited Thali)',
    category: 'biryani',
    price: 180,
    isVeg: true,
    rating: 4.88,
    reviewsCount: 390,
    badge: 'Popular',
    spiciness: 1,
    dietary: ['veg'],
    image: 'https://images.unsplash.com/photo-1789993496277-33397db03554?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
    description: 'Traditional banana-leaf style feast with steamed Sona Masoori rice, sambar, Mysore rasam, kootu, poriyal, appalam, curd, pickle, and payasam.',
    details: {
      calories: 580,
      prepTime: '5 min',
      allergens: ['Dairy'],
      sideServing: 'Appalam, homemade mango pickle, gun powder ghee',
      ingredients: ['Sona Masoori Rice', 'Lentil Sambar', 'Pepper Rasam', 'Vegetable Poriyal', 'Fresh Curd', 'Semiya Payasam']
    }
  },

  // CURRIES & BREADS
  {
    id: 10,
    name: 'Chettinad Pepper Chicken Curry',
    category: 'curries',
    price: 240,
    isVeg: false,
    rating: 4.92,
    reviewsCount: 275,
    badge: 'Chef Special',
    spiciness: 3,
    dietary: ['non-veg', 'spicy'],
    image: 'https://media.istockphoto.com/id/1138127308/photo/jamaican-jerk-chicken-wings-top-view.jpg?s=612x612&w=0&k=20&c=oqiy7-oXYxKBVgCzDPA4TrFPx_4o9l95l1Y4K5hfS_o=',
    description: 'Fiery Tamil Nadu Chettinad chicken cooked with freshly stone-ground black pepper, star anise, kalpasi (stone flower), and roasted coconut paste.',
    details: {
      calories: 460,
      prepTime: '15 min',
      allergens: [],
      sideServing: 'Best enjoyed with flaky Malabar Parottas or Steamed Rice',
      ingredients: ['Tender Chicken', 'Tellicherry Black Pepper', 'Kalpasi', 'Fennel Seeds', 'Shallots', 'Coconut Paste']
    }
  },
  {
    id: 11,
    name: 'Kerala Malabar Parotta (2 Pcs) with Kurma',
    category: 'curries',
    price: 130,
    isVeg: true,
    rating: 4.87,
    reviewsCount: 310,
    badge: 'Popular',
    spiciness: 1,
    dietary: ['veg'],
    image: 'https://media.istockphoto.com/id/1334569812/photo/kerala-food-cuisine-porotta-with-vegetable-curry.jpg?s=612x612&w=0&k=20&c=PHBL3FzSYETd3UJypQQ_A2FTtwkTDjtCUeA3cVS2k6s=',
    description: 'Multi-layered, flaky, buttery Kerala flatbread hand-stretched and griddled to crisp perfection. Served with aromatic vegetable coconut kurma.',
    details: {
      calories: 480,
      prepTime: '10 min',
      allergens: ['Wheat', 'Dairy'],
      sideServing: 'Vegetable coconut kurma & onion salad',
      ingredients: ['Refined Flour', 'Butter/Oil', 'Coconut Milk Kurma', 'Potatoes & Green Peas', 'Curry Leaves']
    }
  },
  {
    id: 12,
    name: 'Paneer Butter Masala (South Style)',
    category: 'curries',
    price: 210,
    isVeg: true,
    rating: 4.82,
    reviewsCount: 190,
    badge: null,
    spiciness: 1,
    dietary: ['veg'],
    image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=800&q=80',
    description: 'Soft cottage cheese cubes simmered in a luscious, mildly spiced tomato, cashew nut, and butter gravy with a hint of South Indian kasuri methi.',
    details: {
      calories: 420,
      prepTime: '12 min',
      allergens: ['Dairy', 'Cashews'],
      sideServing: 'Pair with Parotta or Chapati',
      ingredients: ['Fresh Malai Paneer', 'Tomato Puree', 'Cashew Paste', 'Butter & Cream', 'Kasuri Methi']
    }
  },
  {
    id: 13,
    name: 'Mangalore Ghee Roast Prawns',
    category: 'curries',
    price: 320,
    isVeg: false,
    rating: 4.94,
    reviewsCount: 180,
    badge: 'Signature',
    spiciness: 2,
    dietary: ['non-veg', 'spicy'],
    image: 'https://media.istockphoto.com/id/1629255433/photo/prawns.webp?a=1&b=1&s=612x612&w=0&k=20&c=_bjE0gIoC6B4r-8ByesVPBYiXzVBhvtqAn9qaswRPVo=',
    description: 'Plump coastal prawns slow-roasted in generous desi ghee with tangy Byadgi chilli paste, garlic, and freshly roasted coastal spices.',
    details: {
      calories: 390,
      prepTime: '14 min',
      allergens: ['Shellfish', 'Dairy'],
      sideServing: 'Lemon wedges & sliced onions',
      ingredients: ['Fresh Prawns', 'Desi Ghee', 'Byadgi Red Chillies', 'Tamarind', 'Garlic', 'Curry Leaves']
    }
  },

  // SNACKS & STARTERS
  {
    id: 14,
    name: 'Authentic Andhra Chicken 65',
    category: 'snacks',
    price: 220,
    isVeg: false,
    rating: 4.93,
    reviewsCount: 420,
    badge: 'Bestseller',
    spiciness: 3,
    dietary: ['non-veg', 'spicy'],
    image: 'https://media.istockphoto.com/id/2160216921/photo/chicken-65-entree.webp?a=1&b=1&s=612x612&w=0&k=20&c=UDxUj13Tazeu78K5YKomD-tfRSiyaEtXuGQUIrRya-E=',
    description: 'Crispy deep-fried chicken bites tossed with fresh slit green chillies, aromatic curry leaves, garlic, and special spicy yoghurt marinade.',
    details: {
      calories: 380,
      prepTime: '12 min',
      allergens: ['Dairy'],
      sideServing: 'Onion rings & lemon wedges',
      ingredients: ['Boneless Chicken', 'Curd Marinade', 'Curry Leaves', 'Green Chillies', 'Ginger Garlic', 'Red Chilli Powder']
    }
  },
  {
    id: 15,
    name: ' 65 / Crispy Cauliflower FrGobiy',
    category: 'snacks',
    price: 150,
    isVeg: true,
    rating: 4.81,
    reviewsCount: 210,
    badge: 'Popular',
    spiciness: 2,
    dietary: ['veg', 'spicy'],
    image: 'https://media.istockphoto.com/id/1265600666/photo/cauliflower-fry-or-crispy-gobi-65-or-gobi-manchurian-indian-snacks.webp?a=1&b=1&s=612x612&w=0&k=20&c=LtEoXbCwrZrpypJwctKFaJrxDPEBrx8h7D3w2APe7oI=',
    description: 'Crunchy cauliflower florets coated in spiced batter, fried golden, and tossed with crackling curry leaves and chaat spices.',
    details: {
      calories: 270,
      prepTime: '10 min',
      allergens: [],
      sideServing: 'Mint coriander chutney',
      ingredients: ['Fresh Cauliflower', 'Corn Flour', 'Kashmiri Chilli', 'Curry Leaves', 'Lemon Juice']
    }
  },
  {
    id: 16,
    name: 'Crispy Onion Pakoda / Bajji',
    category: 'snacks',
    price: 90,
    isVeg: true,
    rating: 4.74,
    reviewsCount: 165,
    badge: null,
    spiciness: 1,
    dietary: ['veg'],
    image: 'https://media.istockphoto.com/id/1311053210/photo/crispy-indian-street-food-with-various-names-like-onion-bhajji-pyaj-pakora-or-pakore-pyaaj-ke.webp?a=1&b=1&s=612x612&w=0&k=20&c=tiUOUjCFxX7QFFqMRUcUuzjljmLUlYn2zsZiBxrzoDA=',
    description: 'Hot shredded onion fritters made with gram flour, ajwain, and crushed coriander seeds. The ultimate evening tea-time snack.',
    details: {
      calories: 230,
      prepTime: '8 min',
      allergens: [],
      sideServing: 'Green spicy chutney',
      ingredients: ['Sliced Onions', 'Besan (Gram Flour)', 'Rice Flour', 'Green Chillies', 'Ajwain', 'Coriander']
    }
  },

  // DRINKS & DESSERTS
  {
    id: 17,
    name: 'Degree South Indian Filter Coffee',
    category: 'beverages',
    price: 40,
    isVeg: true,
    rating: 4.97,
    reviewsCount: 540,
    badge: 'Signature',
    spiciness: 0,
    dietary: ['veg'],
    image: 'https://media.istockphoto.com/id/1292570512/photo/traditional-indian-madras-filter-coffee-in-a-steel-cup-also-known-as-tumbler-and-dabarah.webp?a=1&b=1&s=612x612&w=0&k=20&c=p3LWBw0tXEvhBjsuuFiO91RbRM0PStkeEBfdTnN_JF0=',
    description: 'Brewed with traditional brass filter decoction and frothy boiled whole milk. Served in a traditional brass dabara and tumbler.',
    details: {
      calories: 110,
      prepTime: '3 min',
      allergens: ['Dairy'],
      sideServing: 'Served in authentic brass dabarah tumbler',
      ingredients: ['Chicory-Blended Roasted Coffee Beans', 'Fresh Full Cream Milk', 'Sugar']
    }
  },
  {
    id: 18,
    name: 'Warm Gulab Jamun (2 Pcs)',
    category: 'beverages',
    price: 60,
    isVeg: true,
    rating: 4.88,
    reviewsCount: 220,
    badge: 'Popular',
    spiciness: 0,
    dietary: ['veg'],
    image: 'https://images.unsplash.com/photo-1681476747916-8a8fc7e2001e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
    description: 'Melt-in-mouth soft khoya dumplings fried golden brown and soaked in aromatic cardamom and rose-infused warm sugar syrup.',
    details: {
      calories: 290,
      prepTime: '2 min',
      allergens: ['Dairy', 'Wheat'],
      sideServing: 'Garnished with roasted pistachio slivers',
      ingredients: ['Mawa/Khoya', 'Cardamom', 'Rose Water', 'Sugar Syrup', 'Pistachios']
    }
  },

{
  id: 19,
  name: 'Badam Milk',
  category: 'beverages',
  price: 90,
  isVeg: true,
  rating: 4.8,
  reviewsCount: 95,
  badge: 'Popular',
  spiciness: 0,
  dietary: ['veg', 'contains-dairy'],
  image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=800&q=80',
  description: 'Chilled milk blended with almonds, cardamom, and a delicate touch of saffron.',
  details: {
    calories: 220,
    prepTime: '5 min',
    allergens: ['Dairy', 'Tree Nuts'],
    sideServing: 'Served chilled',
    ingredients: ['Milk', 'Almonds', 'Sugar', 'Cardamom', 'Saffron']
  }
},
{
  id: 20,
  name: 'Chocolate Milkshake',
  category: 'beverages',
  price: 130,
  isVeg: true,
  rating: 4.8,
  reviewsCount: 120,
  badge: 'Bestseller',
  spiciness: 0,
  dietary: ['veg', 'contains-dairy'],
  image: 'https://images.unsplash.com/photo-1553787499-6f9133860278?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
  description: 'A creamy chocolate milkshake blended with milk and chocolate ice cream.',
  details: {
    calories: 350,
    prepTime: '5 min',
    allergens: ['Dairy'],
    sideServing: 'Chocolate drizzle',
    ingredients: ['Milk', 'Chocolate Ice Cream', 'Chocolate Syrup']
  }
},
{
  id: 21,
  name: 'Oreo Milkshake',
  category: 'beverages',
  price: 150,
  isVeg: true,
  rating: 4.7,
  reviewsCount: 88,
  badge: 'Popular',
  spiciness: 0,
  dietary: ['veg', 'contains-dairy'],
  image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=800&q=80',
  description: 'A thick cookies-and-cream shake blended with chocolate sandwich cookies and chilled milk.',
  details: {
    calories: 420,
    prepTime: '5 min',
    allergens: ['Dairy', 'Wheat', 'Soy'],
    sideServing: 'Cookie crumble topping',
    ingredients: ['Milk', 'Chocolate Sandwich Cookies', 'Vanilla Ice Cream']
  }
},
{
  id: 22,
  name: 'Mango Milkshake',
  category: 'beverages',
  price: 120,
  isVeg: true,
  rating: 4.6,
  reviewsCount: 76,
  badge: '',
  spiciness: 0,
  dietary: ['veg', 'contains-dairy'],
  image: 'https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
  description: 'A refreshing mango shake made with ripe mango pulp and chilled milk.',
  details: {
    calories: 280,
    prepTime: '5 min',
    allergens: ['Dairy'],
    sideServing: 'Served chilled',
    ingredients: ['Mango', 'Milk', 'Sugar', 'Ice Cream']
  }
},
{
  id: 23,
  name: 'Strawberry Milkshake',
  category: 'beverages',
  price: 130,
  isVeg: true,
  rating: 4.6,
  reviewsCount: 64,
  badge: '',
  spiciness: 0,
  dietary: ['veg', 'contains-dairy'],
  image: 'https://images.unsplash.com/photo-1611928237590-087afc90c6fd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
  description: 'A smooth strawberry milkshake blended with milk and sweet strawberry puree.',
  details: {
    calories: 290,
    prepTime: '5 min',
    allergens: ['Dairy'],
    sideServing: 'Served chilled',
    ingredients: ['Strawberries', 'Milk', 'Sugar', 'Vanilla Ice Cream']
  }
},
{
  id: 24,
  name: 'Vanilla Milkshake',
  category: 'beverages',
  price: 110,
  isVeg: true,
  rating: 4.5,
  reviewsCount: 51,
  badge: '',
  spiciness: 0,
  dietary: ['veg', 'contains-dairy'],
  image: 'https://media.istockphoto.com/id/1663262604/photo/vanilla-milkshake-with-cream-served-in-glass-isolated-on-table-top-view-healthy-morning-drink.webp?a=1&b=1&s=612x612&w=0&k=20&c=Aa88dVGHtUL9dsqnpW3zGnwH1WU8toQBu24l27rd1vc=',
  description: 'A classic, creamy vanilla shake with a smooth texture and delicate sweetness.',
  details: {
    calories: 300,
    prepTime: '5 min',
    allergens: ['Dairy'],
    sideServing: 'Served chilled',
    ingredients: ['Milk', 'Vanilla Ice Cream', 'Sugar']
  }
},
{
  id: 25,
  name: 'Chicken Shawarma Roll',
  category: 'shawarma',
  price: 160,
  isVeg: false,
  rating: 4.8,
  reviewsCount: 145,
  badge: 'Bestseller',
  spiciness: 1,
  dietary: ['non-veg'],
  image: 'https://images.unsplash.com/photo-1529006557810-274b9b2fc783?auto=format&fit=crop&w=800&q=80',
  description: 'Seasoned chicken wrapped in soft flatbread with crisp vegetables and creamy garlic sauce.',
  details: {
    calories: 480,
    prepTime: '12 min',
    allergens: ['Wheat', 'Dairy', 'Egg'],
    sideServing: 'Garlic sauce and pickles',
    ingredients: ['Chicken', 'Flatbread', 'Lettuce', 'Tomato', 'Garlic Sauce', 'Spices']
  }
},
{
  id: 26,
  name: 'Peri Peri Chicken Shawarma',
  category: 'shawarma',
  price: 190,
  isVeg: false,
  rating: 4.7,
  reviewsCount: 92,
  badge: 'Spicy',
  spiciness: 3,
  dietary: ['non-veg', 'spicy'],
  image: 'https://media.istockphoto.com/id/1531018130/photo/appetizing-sandwich-with-a-variety-of-vegetables-and-meat-on-a-green-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=2v-w7pka5B4HEtXIjB76D7qoz3CUlvB58KPRyhC5KW8=',
  description: 'Juicy seasoned chicken wrapped with crunchy vegetables and a bold peri-peri sauce.',
  details: {
    calories: 520,
    prepTime: '15 min',
    allergens: ['Wheat', 'Dairy'],
    sideServing: 'Peri-peri sauce',
    ingredients: ['Chicken', 'Flatbread', 'Peri-Peri Seasoning', 'Lettuce', 'Onion', 'Sauce']
  }
},
{
  id: 27,
  name: 'Chicken Shawarma Plate',
  category: 'shawarma',
  price: 240,
  isVeg: false,
  rating: 4.8,
  reviewsCount: 83,
  badge: '',
  spiciness: 1,
  dietary: ['non-veg'],
  image: 'https://images.unsplash.com/photo-1529006557810-274b9b2fc783?auto=format&fit=crop&w=800&q=80',
  description: 'Sliced shawarma chicken served with fresh salad, flatbread, and garlic dip.',
  details: {
    calories: 580,
    prepTime: '15 min',
    allergens: ['Wheat', 'Dairy'],
    sideServing: 'Salad, flatbread, and garlic dip',
    ingredients: ['Chicken', 'Flatbread', 'Lettuce', 'Tomato', 'Garlic Sauce', 'Spices']
  }
},
{
  id: 28,
  name: 'Paneer Shawarma Roll',
  category: 'shawarma',
  price: 150,
  isVeg: true,
  rating: 4.5,
  reviewsCount: 47,
  badge: '',
  spiciness: 1,
  dietary: ['veg', 'contains-dairy'],
  image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=800&q=80',
  description: 'Spiced paneer pieces wrapped in flatbread with crunchy vegetables and a creamy sauce.',
  details: {
    calories: 450,
    prepTime: '12 min',
    allergens: ['Wheat', 'Dairy'],
    sideServing: 'Mint dip',
    ingredients: ['Paneer', 'Flatbread', 'Onion', 'Capsicum', 'Mint Sauce', 'Spices']
  }
},
{
  id: 29,
  name: 'Crispy Corn',
  category: 'snacks',
  price: 130,
  isVeg: true,
  rating: 4.7,
  reviewsCount: 101,
  badge: 'Popular',
  spiciness: 2,
  dietary: ['veg', 'spicy'],
  image: 'https://plus.unsplash.com/premium_photo-1725282495491-ac18e3c11edb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
  description: 'Crispy corn kernels tossed with chilli, pepper, herbs, and a hint of lime.',
  details: {
    calories: 280,
    prepTime: '12 min',
    allergens: [],
    sideServing: 'Lemon wedges',
    ingredients: ['Sweet Corn', 'Corn Flour', 'Chilli Powder', 'Pepper', 'Lime']
  }
},
{
  id: 30,
  name: 'Chilli Paneer',
  category: 'snacks',
  price: 190,
  isVeg: true,
  rating: 4.7,
  reviewsCount: 86,
  badge: '',
  spiciness: 2,
  dietary: ['veg', 'spicy', 'contains-dairy'],
  image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=800&q=80',
  description: 'Golden paneer cubes tossed with capsicum, onion, garlic, and Indo-Chinese chilli sauce.',
  details: {
    calories: 360,
    prepTime: '15 min',
    allergens: ['Dairy', 'Soy'],
    sideServing: 'Spring onion garnish',
    ingredients: ['Paneer', 'Capsicum', 'Onion', 'Garlic', 'Soy Sauce', 'Chilli Sauce']
  }
},
{
  id: 31,
  name: 'Paneer Tikka',
  category: 'snacks',
  price: 220,
  isVeg: true,
  rating: 4.8,
  reviewsCount: 112,
  badge: 'Bestseller',
  spiciness: 2,
  dietary: ['veg', 'contains-dairy'],
  image: 'https://media.istockphoto.com/id/1474136049/photo/close-up-image-of-paneer-kebabs-marinated-curd-cheese-pieces-on-metal-skewers-red-onion-and.webp?a=1&b=1&s=612x612&w=0&k=20&c=cvfV2qr33X-FNf0E4GCYnVovx3w7DdXmyIxv4EuMLII=',
  description: 'Marinated paneer cubes grilled with peppers, onions, and aromatic Indian spices.',
  details: {
    calories: 320,
    prepTime: '18 min',
    allergens: ['Dairy'],
    sideServing: 'Mint chutney and onion rings',
    ingredients: ['Paneer', 'Curd', 'Capsicum', 'Onion', 'Tandoori Spices']
  }
},
{
  id: 32,
  name: 'Chicken Lollipop',
  category: 'snacks',
  price: 230,
  isVeg: false,
  rating: 4.8,
  reviewsCount: 132,
  badge: 'Popular',
  spiciness: 2,
  dietary: ['non-veg', 'spicy'],
  image: 'https://images.unsplash.com/photo-1696950171387-dc808171711e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
  description: 'Chicken drumettes coated in a seasoned batter, fried until crisp, and served with spicy sauce.',
  details: {
    calories: 420,
    prepTime: '18 min',
    allergens: ['Wheat', 'Egg', 'Soy'],
    sideServing: 'Chilli garlic dip',
    ingredients: ['Chicken Wings', 'Ginger Garlic', 'Corn Flour', 'Chilli Sauce', 'Spices']
  }
},

{
  id: 34,
  name: 'Chicken Manchurian',
  category: 'snacks',
  price: 210,
  isVeg: false,
  rating: 4.6,
  reviewsCount: 81,
  badge: '',
  spiciness: 2,
  dietary: ['non-veg', 'spicy'],
  image: 'https://images.unsplash.com/photo-1727280376746-b89107a5b0df?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
  description: 'Crispy chicken bites tossed in a savoury Indo-Chinese sauce with garlic and spring onions.',
  details: {
    calories: 410,
    prepTime: '15 min',
    allergens: ['Wheat', 'Soy', 'Egg'],
    sideServing: 'Spring onion garnish',
    ingredients: ['Chicken', 'Garlic', 'Soy Sauce', 'Chilli Sauce', 'Spring Onion']
  }
},
{
  id: 35,
  name: 'Veg Spring Rolls',
  category: 'snacks',
  price: 140,
  isVeg: true,
  rating: 4.5,
  reviewsCount: 61,
  badge: '',
  spiciness: 1,
  dietary: ['veg'],
  image: 'https://images.unsplash.com/photo-1679310290259-78d9eaa32700?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
  description: 'Crispy pastry rolls filled with seasoned cabbage, carrots, and mixed vegetables.',
  details: {
    calories: 300,
    prepTime: '15 min',
    allergens: ['Wheat', 'Soy'],
    sideServing: 'Sweet chilli sauce',
    ingredients: ['Pastry Wrapper', 'Cabbage', 'Carrot', 'Capsicum', 'Soy Sauce']
  }
},

{
  id: 38,
  name: 'Double Ka Meetha',
  category: 'desserts',
  price: 110,
  isVeg: true,
  rating: 4.7,
  reviewsCount: 72,
  badge: '',
  spiciness: 0,
  dietary: ['veg', 'contains-dairy'],
  image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=800&q=80',
  description: 'A Hyderabadi bread pudding made with fried bread, sweetened milk, cardamom, and nuts.',
  details: {
    calories: 340,
    prepTime: '8 min',
    allergens: ['Dairy', 'Wheat', 'Tree Nuts'],
    sideServing: 'Chopped nuts',
    ingredients: ['Bread', 'Milk', 'Sugar', 'Ghee', 'Cardamom', 'Nuts']
  }
},
{
  id: 39,
  name: 'Qubani Ka Meetha',
  category: 'desserts',
  price: 130,
  isVeg: true,
  rating: 4.8,
  reviewsCount: 65,
  badge: 'Special',
  spiciness: 0,
  dietary: ['veg'],
  image: 'https://media.istockphoto.com/id/1277143708/photo/ready-to-eat-traditional-turkish-dessert-asure.webp?a=1&b=1&s=612x612&w=0&k=20&c=69T2QwS6j30SYNEgd8SsiYwKz622f1hq_B_4bZm5n9A=',
  description: 'A traditional Hyderabadi dessert of slow-cooked dried apricots with a rich fruity flavour.',
  details: {
    calories: 250,
    prepTime: '8 min',
    allergens: [],
    sideServing: 'Cream or custard, if available',
    ingredients: ['Dried Apricots', 'Sugar', 'Water', 'Lemon Juice']
  }
},
{
  id: 40,
  name: 'Chocolate Brownie',
  category: 'desserts',
  price: 120,
  isVeg: true,
  rating: 4.7,
  reviewsCount: 93,
  badge: 'Popular',
  spiciness: 0,
  dietary: ['veg', 'contains-dairy'],
  image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80',
  description: 'A rich chocolate brownie with a soft centre and a lightly crisp top.',
  details: {
    calories: 320,
    prepTime: '5 min',
    allergens: ['Wheat', 'Dairy', 'Egg'],
    sideServing: 'Vanilla ice cream, if available',
    ingredients: ['Chocolate', 'Flour', 'Butter', 'Sugar', 'Eggs']
  }
},
{
  id: 41,
  name: 'Caramel Custard',
  category: 'desserts',
  price: 100,
  isVeg: true,
  rating: 4.6,
  reviewsCount: 58,
  badge: '',
  spiciness: 0,
  dietary: ['veg', 'contains-dairy'],
  image: 'https://media.istockphoto.com/id/1297087544/photo/persimmon-pudding.webp?a=1&b=1&s=612x612&w=0&k=20&c=ZoLWCLPDB710LvKVJwTQB07e3TpKKMuUxcgDX32CyfE=',
  description: 'Silky baked custard topped with a smooth layer of golden caramel.',
  details: {
    calories: 240,
    prepTime: '5 min',
    allergens: ['Dairy', 'Egg'],
    sideServing: 'Chilled',
    ingredients: ['Milk', 'Eggs', 'Sugar', 'Vanilla']
  }
},
{
  id: 42,
  name: 'Rasmalai',
  category: 'desserts',
  price: 110,
  isVeg: true,
  rating: 4.8,
  reviewsCount: 105,
  badge: 'Popular',
  spiciness: 0,
  dietary: ['veg', 'contains-dairy'],
  image: 'https://media.istockphoto.com/id/515853026/photo/traditional-rasmalai-or-ras-malai-indian-dessert-bengali-sweet.webp?a=1&b=1&s=612x612&w=0&k=20&c=M_bkgtt4nYVBSvX5RrWxjG-y07gOvCyFH4x9aiQOVZo=',
  description: 'Soft cottage-cheese dumplings served in chilled saffron and cardamom milk.',
  details: {
    calories: 290,
    prepTime: '5 min',
    allergens: ['Dairy', 'Tree Nuts'],
    sideServing: 'Pistachio garnish',
    ingredients: ['Chenna', 'Milk', 'Sugar', 'Saffron', 'Cardamom', 'Pistachios']
  }
},
{
  id: 43,
  name: 'Classic Falooda',
  category: 'desserts',
  price: 150,
  isVeg: true,
  rating: 4.7,
  reviewsCount: 81,
  badge: '',
  spiciness: 0,
  dietary: ['veg', 'contains-dairy'],
  image: 'https://media.istockphoto.com/id/1256834456/photo/strawberry-falooda.jpg?s=612x612&w=0&k=20&c=6HJnSs8SwEx0kcl5MM5BP3OK5TFxptoBXkO8mrKDW5o=',
  description: 'A chilled layered dessert drink with vermicelli, basil seeds, milk, and ice cream.',
  details: {
    calories: 390,
    prepTime: '8 min',
    allergens: ['Dairy', 'Wheat'],
    sideServing: 'Ice cream topping',
    ingredients: ['Milk', 'Falooda Vermicelli', 'Basil Seeds', 'Rose Syrup', 'Ice Cream']
  }
},
{
  id: 44,
  name: 'Fresh Lime Soda',
  category: 'beverages',
  price: 60,
  isVeg: true,
  rating: 4.6,
  reviewsCount: 67,
  badge: '',
  spiciness: 0,
  dietary: ['veg'],
  image: 'https://images.unsplash.com/photo-1695490454828-f8df9109da43?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
  description: 'A refreshing lime drink made with fresh lime juice, soda, and your choice of sweet or salted.',
  details: {
    calories: 90,
    prepTime: '4 min',
    allergens: [],
    sideServing: 'Lime wedge',
    ingredients: ['Lime', 'Soda Water', 'Sugar or Salt', 'Mint']
  }
},
{
  id: 45,
  name: 'Mango Lassi',
  category: 'beverages',
  price: 110,
  isVeg: true,
  rating: 4.8,
  reviewsCount: 91,
  badge: 'Popular',
  spiciness: 0,
  dietary: ['veg', 'contains-dairy'],
  image: 'https://images.unsplash.com/photo-1774428755046-f1a9b662ecb8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
  description: 'A creamy yoghurt drink blended with ripe mango and a touch of sweetness.',
  details: {
    calories: 260,
    prepTime: '5 min',
    allergens: ['Dairy'],
    sideServing: 'Served chilled',
    ingredients: ['Mango', 'Yoghurt', 'Milk', 'Sugar']
  }
},
{
  id: 46,
  name: 'Cold Coffee',
  category: 'beverages',
  price: 120,
  isVeg: true,
  rating: 4.6,
  reviewsCount: 74,
  badge: '',
  spiciness: 0,
  dietary: ['veg', 'contains-dairy'],
  image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=800&q=80',
  description: 'Chilled coffee blended with milk and ice cream for a smooth, refreshing drink.',
  details: {
    calories: 250,
    prepTime: '5 min',
    allergens: ['Dairy'],
    sideServing: 'Coffee drizzle',
    ingredients: ['Coffee', 'Milk', 'Sugar', 'Vanilla Ice Cream']
  }
},


];

export const RESTAURANT_INFO = {
  name: 'KK Restaurant',
  subtitle: 'Authentic South Indian Kitchen',
  tagline: 'Authentic South Indian Tiffins, Meals & Biryanis, prepared fresh every day.',
  hours: 'Monday – Sunday: 7:00 AM – 10:30 PM',
  lunchHours: 'Lunch Service: 12:00 PM – 3:30 PM',
  address: '100 Feet Road, Indiranagar, Bengaluru, Karnataka 560038',
  phone: '+91 98765 43210',
  email: 'contact@kkrestaurant.in',
  currency: '₹',
};

export const CHEF_SPECIAL_IDS = [1, 6, 10, 17];
