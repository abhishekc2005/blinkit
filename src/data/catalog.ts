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
  { id: "fruits", name: "Fruits & Vegetables", image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-2_10.png", color: "#F3FDE8" },
  { id: "dairy", name: "Dairy & Bread", image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-3_9.png", color: "#FDF6E2" },
  { id: "snacks", name: "Snacks", image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-4_9.png", color: "#FFF1E2" },
  { id: "beverages", name: "Beverages", image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-5_4.png", color: "#E8F4FD" },
  { id: "instant", name: "Instant Food", image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-6_5.png", color: "#FFE8E8" },
  { id: "personal", name: "Personal Care", image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-7_3.png", color: "#F0E8FD" },
  { id: "cleaning", name: "Cleaning Essentials", image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-8_4.png", color: "#E2F7FD" },
  { id: "baby", name: "Baby Care", image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-9_3.png", color: "#FDE8F4" },
  { id: "icecream", name: "Ice Creams", image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-10_2.png", color: "#FDF2E2" },
  { id: "pet", name: "Pet Care", image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-12.png", color: "#E8FDE8" },
];

export const products: Product[] = [
  { id: "p1", name: "Fresh Bananas", weight: "1 kg", price: 49, mrp: 69, image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/35caee9d-3bdc-4773-b3b4-d057ab4b27c0.jpg", deliveryTime: "8 MINS", category: "fruits" },
  { id: "p2", name: "Tomato Local", weight: "500 g", price: 19, mrp: 30, image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/ce2b88d2-72ba-49bc-a784-9b5e94a4f6d3.jpg", deliveryTime: "9 MINS", category: "fruits" },
  { id: "p3", name: "Amul Gold Milk", weight: "500 ml", price: 33, mrp: 35, image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/de17fb22-15c1-4f88-9b07-cb22ad7c3d28.jpg", deliveryTime: "8 MINS", category: "dairy" },
  { id: "p4", name: "Britannia Brown Bread", weight: "400 g", price: 50, mrp: 55, image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/2e3a8b1c-9e16-4f7c-92a4-b5dbb1ce72e7.jpg", deliveryTime: "10 MINS", category: "dairy" },
  { id: "p5", name: "Lay's Classic Salted", weight: "52 g", price: 20, mrp: 25, image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/2c5e3e21-1cdf-4f1b-8898-0fdbe7b35e0d.jpg", deliveryTime: "9 MINS", category: "snacks" },
  { id: "p6", name: "Kurkure Masala Munch", weight: "90 g", price: 20, mrp: 25, image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/52e2bbb1-7b73-4f04-b9c0-0d51d1b89ec5.jpg", deliveryTime: "10 MINS", category: "snacks" },
  { id: "p7", name: "Coca Cola Bottle", weight: "750 ml", price: 40, mrp: 45, image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/9c1a3eb2-7e1a-4f53-9ba3-d6f5d65a4f50.jpg", deliveryTime: "8 MINS", category: "beverages" },
  { id: "p8", name: "Real Mixed Fruit Juice", weight: "1 L", price: 110, mrp: 130, image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/05be4f24-7e54-4f74-bd2b-8e0a8f06c3a5.jpg", deliveryTime: "10 MINS", category: "beverages" },
  { id: "p9", name: "Maggi Noodles Pack", weight: "280 g", price: 56, mrp: 60, image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/0e0b7e6f-bfb6-4f08-b89c-3b3e3c0e0f1f.jpg", deliveryTime: "8 MINS", category: "instant" },
  { id: "p10", name: "Knorr Tomato Soup", weight: "53 g", price: 60, mrp: 70, image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/45e1c2d0-fbe1-4d11-9c4d-39e8d5e6b8a3.jpg", deliveryTime: "9 MINS", category: "instant" },
  { id: "p11", name: "Colgate MaxFresh", weight: "150 g", price: 95, mrp: 120, image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/85e6b1b0-7d35-4c79-9c3e-1c2f59c8f9e2.jpg", deliveryTime: "10 MINS", category: "personal" },
  { id: "p12", name: "Dove Soap Bar", weight: "100 g", price: 65, mrp: 75, image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/7a3e4f7e-bef0-4a4f-8d1c-3b3f2c1b1e0a.jpg", deliveryTime: "8 MINS", category: "personal" },
  { id: "p13", name: "Surf Excel Detergent", weight: "1 kg", price: 215, mrp: 250, image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/0aabbc11-bb1b-4f6d-8a8a-1c2d3e4f5061.jpg", deliveryTime: "10 MINS", category: "cleaning" },
  { id: "p14", name: "Pampers Diapers M", weight: "Pack of 30", price: 599, mrp: 699, image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/0e6f7a3d-4f7e-4d5b-9c9c-2d3e4f5061b1.jpg", deliveryTime: "10 MINS", category: "baby" },
  { id: "p15", name: "Amul Vanilla Tub", weight: "1 L", price: 220, mrp: 280, image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/4f7e4d5b-9c9c-2d3e-4f50-61b10aabbc11.jpg", deliveryTime: "9 MINS", category: "icecream" },
  { id: "p16", name: "Pedigree Dog Food", weight: "1.2 kg", price: 320, mrp: 380, image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/2d3e4f50-61b1-0aab-bc11-4f7e4d5b9c9c.jpg", deliveryTime: "10 MINS", category: "pet" },
];

export const banners = [
  { id: "b1", title: "Free Delivery in 10 Minutes", subtitle: "Order groceries, snacks & more", bg: "linear-gradient(135deg, #0c831f 0%, #2ecc71 100%)" },
  { id: "b2", title: "Up to 50% OFF on Fruits", subtitle: "Fresh from the farm to your door", bg: "linear-gradient(135deg, #f59e0b 0%, #f97316 100%)" },
  { id: "b3", title: "Cool Summer Drinks", subtitle: "Beverages delivered ice-cold", bg: "linear-gradient(135deg, #2563eb 0%, #06b6d4 100%)" },
];
