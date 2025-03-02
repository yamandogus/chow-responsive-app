import { addToCart } from "@/app/store/cartSlice";
import { Button, Card, CardBody, CardHeader, Link, Chip } from "@nextui-org/react";
import Image from "next/image";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";

const categories = [
  "Tümü",
  "Kahvaltı",
  "Öğle",
  "Akşam",
  "Tatlılar",
  "İçecekler",
];

interface FoodItem {
  id: number;
  name: string;
  rating: number;
  image: string;
  price: number;
  category: string;
}

const foodItems: FoodItem[] = [
  {
    id: 1,
    name: "Spaghetti Meatballs",
    rating: 4.5,
    image: "/category.png",
    price: 180,
    category: "Öğle"
  },
  {
    id: 2,
    name: "Bagel Breakfast",
    rating: 4.5,
    image: "/category.png",
    price: 120,
    category: "Kahvaltı"
  },
  {
    id: 3,
    name: "Full English Breakfast",
    rating: 4.5,
    image: "/category.png",
    price: 450,
    category: "Kahvaltı"
  },
  {
    id: 4,
    name: "Italian Meatballs",
    rating: 4.5,
    image: "/category.png",
    price: 220,
    category: "Akşam"
  },
  {
    id: 5,
    name: "Iced Coffee",
    rating: 4.5,
    image: "/category.png",
    price: 85,
    category: "İçecekler"
  },
  {
    id: 6,
    name: "American Breakfast",
    rating: 4.5,
    image: "/category.png",
    price: 380,
    category: "Kahvaltı"
  },
];

const Category = () => {
  const dispatch = useDispatch();
  const [selectedCategory, setSelectedCategory] = useState("Tümü");
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  const filteredItems = selectedCategory === "Tümü"
    ? foodItems
    : foodItems.filter(item => item.category === selectedCategory);

  return (
    <div className="bg-gradient-to-b from-[#c9ffbf]/30 to-white py-16 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-gray-800"
          >
            Sizin için <span className="text-[#068C52]">Özel</span> Menümüz
          </motion.h2>
          
          <div className="flex gap-2 flex-wrap">
            {categories.map((category) => (
              <Button
                key={category}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  selectedCategory === category
                    ? "bg-[#068C52] text-white"
                    : "bg-white/80 text-gray-700 hover:bg-[#068C52]/10"
                }`}
                onPress={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
        >
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <Card
                className="w-full bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300"
                onMouseEnter={() => setHoveredItem(item.id)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <CardHeader className="pt-8 px-6">
                  <div className="flex items-start justify-between w-full">
                    <div className="flex flex-col gap-1">
                      <Chip
                        className="bg-yellow-400/10 text-yellow-700 font-medium"
                        startContent={<span className="text-yellow-400">★</span>}
                      >
                        {item.rating}
                      </Chip>
                      <Chip
                        className="bg-[#068C52]/10 text-[#068C52]"
                        size="sm"
                      >
                        {item.category}
                      </Chip>
                    </div>
                    <motion.div
                      animate={{
                        scale: hoveredItem === item.id ? 1.1 : 1,
                        y: hoveredItem === item.id ? -10 : 0
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <Image
                        width={200}
                        height={200}
                        className="object-contain"
                        src={item.image}
                        alt={item.name}
                        priority
                      />
                    </motion.div>
                  </div>
                </CardHeader>

                <CardBody className="px-6 pb-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">{item.name}</h3>
                  <div className="flex items-center justify-between">
                    <p className="text-2xl font-bold text-[#068C52]">{item.price} ₺</p>
                    <Button
                      className="bg-[#00F076] text-white font-medium hover:bg-[#00d566] transition-colors"
                      radius="full"
                      onPress={() => {
                        dispatch(addToCart({
                          ...item,
                          quantity: 1,
                        }));
                      }}
                    >
                      Sepete Ekle
                    </Button>
                  </div>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mt-16"
        >
          <Button
            className="bg-[#068C52] text-white font-bold px-8 py-6 text-lg hover:bg-[#056b3e] transition-colors"
            radius="full"
            href="/menu"
            as={Link}
          >
            Tüm Menüyü Keşfet
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default Category;
