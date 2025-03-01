"use client";

import { useState } from "react";
import { Card, CardBody, CardFooter, Button, Chip } from "@nextui-org/react";
import Image from "next/image";
import { menuItems } from "@/app/data/menuData";
import { useDispatch } from "react-redux";
import { addToCart } from "@/app/store/cartSlice";

const categories = ["Tümü", "Kahvaltı", "Öğle Yemeği", "Akşam Yemeği", "Tatlılar", "İçecekler"];

export default function Menu() {
  const [selectedCategory, setSelectedCategory] = useState("Tümü");
  const dispatch = useDispatch();
  const filteredItems = menuItems.filter(
    (item) => selectedCategory === "Tümü" || item.category === selectedCategory
  );

  return (
    <div className="container mx-auto py-8 px-4">
      {/* Hero Section */}
      <div className="relative h-[300px] rounded-2xl overflow-hidden mb-8">
        <Image
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200"
          alt="Menu Hero"
          fill
          className="object-cover"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Menümüz</h1>
            <p className="text-xl">Özenle hazırlanmış lezzetli yemekler</p>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="flex flex-wrap gap-2 mb-8 justify-center">
        {categories.map((category) => (
          <Button
            key={category}
            color={selectedCategory === category ? "primary" : "default"}
            variant={selectedCategory === category ? "solid" : "bordered"}
            onPress={() => setSelectedCategory(category)}
            className="min-w-[100px]"
          >
            {category}
          </Button>
        ))}
      </div>

      {/* Menu Items Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <Card
            key={item.id}
            className="hover:shadow-lg transition-all duration-200 hover:-translate-y-1 ease-in-out"
            isPressable
          >
            <CardBody className="p-0 overflow-hidden">
              <div className="relative w-full pt-[66.67%]">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  quality={85}
                />
              </div>
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold line-clamp-1">{item.name}</h3>
                  <div className="flex items-center bg-yellow-100 px-2 py-1 rounded-full">
                    <i className="fa fa-star text-yellow-400 mr-1 text-sm" />
                    <span className="text-sm font-medium">{item.rating}</span>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">{item.description}</p>
                <div className="flex justify-between items-center">
                  <p className="text-lg font-bold text-primary">{item.price.toFixed(2)}₺</p>
                  <div className="flex gap-2">
                    {item.isVegetarian && (
                      <Chip size="sm" color="success" variant="flat">
                        Vejetaryen
                      </Chip>
                    )}
                    {item.isSpicy && (
                      <Chip size="sm" color="danger" variant="flat">
                        Acılı
                      </Chip>
                    )}
                  </div>
                </div>
                {item.calories && (
                  <p className="text-sm text-gray-500 mt-2 flex items-center">
                    <i className="fa fa-fire-alt mr-1" />
                    {item.calories} kalori
                  </p>
                )}
              </div>
            </CardBody>
            <CardFooter className="gap-2 p-4 pt-0">
              <Button
                color="primary"
                className="flex-1"
                endContent={<i className="fa fa-shopping-cart" />}
                isLoading={false}
                onPress={() => {
                  dispatch(addToCart({
                    ...item,
                    id: item.id,
                    name: item.name,
                    price: item.price,
                    rating: item.rating,
                    image: item.image,
                    quantity: 1,
                  }));
                }}
              >
                Sepete Ekle
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
