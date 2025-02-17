import { addToCart } from "@/app/store/cartSlice";
import { Button, Card, CardBody, CardHeader, Link } from "@nextui-org/react";
import Image from "next/image";
import React from "react";
import { useDispatch } from "react-redux";

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
}

const foodItems: FoodItem[] = [
  {
    id: 1,
    name: "Spaghetti Meatballs",
    rating: 4.5,
    image: "/category.png",
    price: 180,
  },
  {
    id: 2,
    name: "Bagel Breakfast",
    rating: 4.5,
    image: "/category.png",
    price: 120,
  },
  {
    id: 3,
    name: "Full English Breakfast",
    rating: 4.5,
    image: "/category.png",
    price: 450,
  },
  {
    id: 4,
    name: "Italian Meatballs",
    rating: 4.5,
    image: "/category.png",
    price: 220,
  },
  {
    id: 5,
    name: "Iced Coffee",
    rating: 4.5,
    image: "/category.png",
    price: 85,
  },
  {
    id: 6,
    name: "American Breakfast",
    rating: 4.5,
    image: "/category.png",
    price: 380,
  },
];

const Category = () => {
  const dispatch = useDispatch();
  return (
    <div className="bg-[#c9ffbf] py-4 px-4">
      <div className="container mx-auto">
        <div className="flex align-center justify-between">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div>
              <h4 className="text-3xl font-bold">Sizin için Basit Yemekler</h4>
            </div>
            <div className="flex gap-2 flex-wrap">
              {categories.map((category) => (
                <Button
                  key={category}
                  className="bg-transparent text-custom border border-custom w-24 font-bold rounded-[20px] py-1"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16 z-5">
          {foodItems.map((item) => (
            <Card
              key={item.id}
              className="w-full h-[325px] relative shadow-lg overflow-visible"
            >
              <CardHeader>
                <div className="flex align-center justify-between">
                  <Button className="bg-[#00F076] rounded-full">
                    <i className="fa-solid fa-star"> {" " + item.rating}</i>
                  </Button>
                  <Image
                    width={250}
                    height={250}
                    className="absolute top-[-70px] -right-6 z-10 object-contain"
                    src={item.image}
                    alt={item.name}
                    priority
                  />
                </div>
              </CardHeader>
              <div></div>
              <CardBody className="absolute bottom-0 gap-4">
                <h4 className="text-md font-bold">{item.name}</h4>
                <div className="flex align-center justify-between w-full">
                  <span className="text-lg font-bold">{item.price} ₺</span>
                  <div>
                    <Button
                      className="bg-[#00F076] rounded-full z-20 relative"
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
                  </div>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
      <div className="flex align-center justify-center my-16">
        <Button
          className="bg-[#068C52] text-white font-bold rounded-full"
          content="Menüyü Keşfet"
          href="/menu"
          as={Link}
        >
          Menüyü Keşfet
        </Button>
      </div>
    </div>
  );
};

export default Category;
