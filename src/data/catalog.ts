export type Category = { id: string; name: string; image: string; color: string };
export type Product = {
  id: string;
  name: string;
  weight: string;
  price: number;
  mrp: number;
  image: string;
  deliveryTime: string;
  category: string;
};

export const categories: Category[] = [
  { id: "fruits", name: "Fruits & Vegetables", image: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=300&q=80", color: "#F3FDE8" },
  { id: "dairy", name: "Dairy & Bread", image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=300&q=80", color: "#FDF6E2" },
  { id: "snacks", name: "Snacks", image: "https://images.unsplash.com/photo-1621447504864-d8686e12698c?w=300&q=80", color: "#FFF1E2" },
  { id: "beverages", name: "Beverages", image: "https://images.unsplash.com/photo-1625772299848-391b6a87d7b3?w=300&q=80", color: "#E8F4FD" },
  { id: "instant", name: "Instant Food", image: "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?w=300&q=80", color: "#FFE8E8" },
  { id: "personal", name: "Personal Care", image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=300&q=80", color: "#F0E8FD" },
  { id: "cleaning", name: "Cleaning Essentials", image: "https://images.unsplash.com/photo-1583947215259-38e31be8751f?w=300&q=80", color: "#E2F7FD" },
  { id: "baby", name: "Baby Care", image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=300&q=80", color: "#FDE8F4" },
  { id: "icecream", name: "Ice Creams", image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=300&q=80", color: "#FDF2E2" },
  { id: "pet", name: "Pet Care", image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=300&q=80", color: "#E8FDE8" },
];

export const products: Product[] = [
  { id: "p1", name: "Fresh Bananas", weight: "1 kg", price: 49, mrp: 69, image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400&q=80", deliveryTime: "8 MINS", category: "fruits" },
  { id: "p2", name: "Tomato Local", weight: "500 g", price: 19, mrp: 30, image: "https://images.unsplash.com/photo-1561136594-7f68413baa99?w=400&q=80", deliveryTime: "9 MINS", category: "fruits" },
  { id: "p3", name: "Amul Gold Milk", weight: "500 ml", price: 33, mrp: 35, image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=400&q=80", deliveryTime: "8 MINS", category: "dairy" },
  { id: "p4", name: "Britannia Brown Bread", weight: "400 g", price: 50, mrp: 55, image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&q=80", deliveryTime: "10 MINS", category: "dairy" },
  { id: "p5", name: "Lay's Classic Salted", weight: "52 g", price: 20, mrp: 25, image: "https://images.unsplash.com/photo-1613919113640-25732ec5e61f?w=400&q=80", deliveryTime: "9 MINS", category: "snacks" },
  { id: "p6", name: "Kurkure Masala Munch", weight: "90 g", price: 20, mrp: 25, image: "https://images.unsplash.com/photo-1599490659213-e2b9527bd087?w=400&q=80", deliveryTime: "10 MINS", category: "snacks" },
  { id: "p7", name: "Coca Cola Bottle", weight: "750 ml", price: 40, mrp: 45, image: "https://images.unsplash.com/photo-1554866585-cd94860890b7?w=400&q=80", deliveryTime: "8 MINS", category: "beverages" },
  { id: "p8", name: "Real Mixed Fruit Juice", weight: "1 L", price: 110, mrp: 130, image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=400&q=80", deliveryTime: "10 MINS", category: "beverages" },
  { id: "p9", name: "Maggi Noodles Pack", weight: "280 g", price: 56, mrp: 60, image: "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?w=400&q=80", deliveryTime: "8 MINS", category: "instant" },
  { id: "p10", name: "Knorr Tomato Soup", weight: "53 g", price: 60, mrp: 70, image: "https://images.unsplash.com/photo-1547592180-85f173990554?w=400&q=80", deliveryTime: "9 MINS", category: "instant" },
  { id: "p11", name: "Colgate MaxFresh", weight: "150 g", price: 95, mrp: 120, image: "https://images.unsplash.com/photo-1559591937-abc3a06fe108?w=400&q=80", deliveryTime: "10 MINS", category: "personal" },
  { id: "p12", name: "Dove Soap Bar", weight: "100 g", price: 65, mrp: 75, image: "https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?w=400&q=80", deliveryTime: "8 MINS", category: "personal" },
  { id: "p13", name: "Surf Excel Detergent", weight: "1 kg", price: 215, mrp: 250, image: "https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?w=400&q=80", deliveryTime: "10 MINS", category: "cleaning" },
  { id: "p14", name: "Pampers Diapers M", weight: "Pack of 30", price: 599, mrp: 699, image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=400&q=80", deliveryTime: "10 MINS", category: "baby" },
  { id: "p15", name: "Amul Vanilla Tub", weight: "1 L", price: 220, mrp: 280, image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&q=80", deliveryTime: "9 MINS", category: "icecream" },
  { id: "p16", name: "Pedigree Dog Food", weight: "1.2 kg", price: 320, mrp: 380, image: "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?w=400&q=80", deliveryTime: "10 MINS", category: "pet" },
];

export const banners = [
  { id: "b1", title: "Free Delivery in 10 Minutes", subtitle: "Order groceries, snacks & more", bg: "linear-gradient(135deg, #0c831f 0%, #2ecc71 100%)" },
  { id: "b2", title: "Up to 50% OFF on Fruits", subtitle: "Fresh from the farm to your door", bg: "linear-gradient(135deg, #f59e0b 0%, #f97316 100%)" },
  { id: "b3", title: "Cool Summer Drinks", subtitle: "Beverages delivered ice-cold", bg: "linear-gradient(135deg, #2563eb 0%, #06b6d4 100%)" },
];
