import { Restaurant, CuisineType, SortOption } from "./types";

export const restaurants: Restaurant[] = [
  {
    id: 1,
    name: "Lezzet Köşesi",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800",
    rating: 4.8,
    cuisine: "Türk Mutfağı",
    deliveryTime: "30-45",
    minOrder: 50,
    tags: ["Kebap", "Pide", "Lahmacun"],
    address: "Atatürk Cad. No:123, İstanbul",
    description: "Geleneksel Türk mutfağının en seçkin lezzetleri"
  },
  {
    id: 2,
    name: "Sushi Master",
    image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=800",
    rating: 4.5,
    cuisine: "Japon Mutfağı",
    deliveryTime: "40-55",
    minOrder: 100,
    tags: ["Sushi", "Ramen", "Tempura"],
    address: "Bağdat Cad. No:45, İstanbul",
    description: "Otantik Japon lezzetleri"
  },
  {
    id: 3,
    name: "Pizza Roma",
    image: "https://images.unsplash.com/photo-1579751626657-72bc17010498?w=800",
    rating: 4.6,
    cuisine: "İtalyan Mutfağı",
    deliveryTime: "25-40",
    minOrder: 60,
    tags: ["Pizza", "Makarna", "Risotto"],
    address: "İstiklal Cad. No:78, İstanbul",
    description: "Roma usulü el yapımı pizzalar"
  },
  {
    id: 4,
    name: "Burger House",
    image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=800",
    rating: 4.3,
    cuisine: "Amerikan Mutfağı",
    deliveryTime: "20-35",
    minOrder: 40,
    tags: ["Burger", "Wings", "Fries"],
    address: "Barbaros Bulvarı No:90, İstanbul",
    description: "El yapımı gurme burgerler"
  },
  {
    id: 5,
    name: "Dim Sum Palace",
    image: "https://images.unsplash.com/photo-1582450871972-ab5ca641643d?w=800",
    rating: 4.7,
    cuisine: "Çin Mutfağı",
    deliveryTime: "35-50",
    minOrder: 70,
    tags: ["Dim Sum", "Noodles", "Spring Rolls"],
    address: "Nişantaşı No:12, İstanbul",
    description: "Otantik Çin mutfağı"
  },
  {
    id: 6,
    name: "Mangal Express",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=800",
    rating: 4.4,
    cuisine: "Türk Mutfağı",
    deliveryTime: "25-40",
    minOrder: 55,
    tags: ["Izgara", "Köfte", "Pirzola"],
    address: "Kadıköy No:34, İstanbul",
    description: "Enfes ızgara çeşitleri"
  },
  {
    id: 7,
    name: "Thai Wok",
    image: "https://images.unsplash.com/photo-1559847844-5315695dadae?w=800",
    rating: 4.6,
    cuisine: "Tayland Mutfağı",
    deliveryTime: "30-45",
    minOrder: 65,
    tags: ["Pad Thai", "Curry", "Spring Rolls"],
    address: "Cihangir No:56, İstanbul",
    description: "Otantik Thai lezzetleri"
  },
  {
    id: 8,
    name: "Mantı & Börek Evi",
    image: "https://images.unsplash.com/photo-1605478371310-a9f1e96b4ff4?w=800",
    rating: 4.7,
    cuisine: "Türk Mutfağı",
    deliveryTime: "25-35",
    minOrder: 45,
    tags: ["Mantı", "Börek", "Gözleme"],
    address: "Beşiktaş No:89, İstanbul",
    description: "El açması mantı ve börek çeşitleri"
  },
  {
    id: 9,
    name: "Meksika Sokağı",
    image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=800",
    rating: 4.5,
    cuisine: "Meksika Mutfağı",
    deliveryTime: "30-45",
    minOrder: 60,
    tags: ["Taco", "Burrito", "Nachos"],
    address: "Karaköy No:23, İstanbul",
    description: "Meksika mutfağının eşsiz lezzetleri"
  },
  {
    id: 10,
    name: "Balık Noktası",
    image: "https://images.unsplash.com/photo-1579631542720-3a87824fff86?w=800",
    rating: 4.8,
    cuisine: "Deniz Mahsülleri",
    deliveryTime: "35-50",
    minOrder: 85,
    tags: ["Balık", "Karides", "Kalamar"],
    address: "Arnavutköy No:67, İstanbul",
    description: "Günlük taze deniz ürünleri"
  }
];

export const cuisineTypes: CuisineType[] = [
  { value: "all", label: "Tüm Mutfaklar" },
  { value: "turkish", label: "Türk Mutfağı" },
  { value: "japanese", label: "Japon Mutfağı" },
  { value: "italian", label: "İtalyan Mutfağı" },
  { value: "american", label: "Amerikan Mutfağı" },
  { value: "chinese", label: "Çin Mutfağı" },
  { value: "thai", label: "Tayland Mutfağı" },
  { value: "mexican", label: "Meksika Mutfağı" },
  { value: "seafood", label: "Deniz Mahsülleri" }
];

export const sortOptions: SortOption[] = [
  { value: "rating", label: "Puana Göre" },
  { value: "deliveryTime", label: "Teslimat Süresine Göre" },
  { value: "minOrder", label: "Minimum Sipariş Tutarına Göre" }
];
