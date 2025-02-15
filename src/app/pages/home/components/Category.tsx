import { increment } from "@/app/store/counterSlice";
import { Button, Card, CardBody, CardHeader, Link } from "@nextui-org/react";
import React from "react";
import { useDispatch } from "react-redux";
const categories = [
  "All",
  "Breakfast",
  "Lunch",
  "Dinner",
  "Desserts",
  "Beverage",
];

interface FoodItem {
  id: number;
  name: string;
  price: number;
  rating: number;
  image: string;
}

const foodItems: FoodItem[] = [
  {
    id: 1,
    name: "Spaghetti Meatballs",
    price: 10,
    rating: 4.5,
    image: "/category.png",
  },
  {
    id: 2,
    name: "Bagel Breakfast",
    price: 10,
    rating: 4.5,
    image: "/category.png",
  },
  {
    id: 3,
    name: "Full English Breakfast",
    price: 10,
    rating: 4.5,
    image: "/category.png",
  },
  {
    id: 4,
    name: "Italian Meatballs",
    price: 10,
    rating: 4.5,
    image: "/category.png",
  },
  {
    id: 5,
    name: "Iced Coffee",
    price: 10,
    rating: 4.5,
    image: "/category.png",
  },
  {
    id: 6,
    name: "American Breakfast",
    price: 10,
    rating: 4.5,
    image: "/category.png",
  },
];

const Category = () => {
  const dispatch = useDispatch();
  return (
    <div className="bg-[#c9ffbf] py-4 px-4">
      <div className="container mx-auto">
        <div className="flex align-center justify-between gap-4">
          <h4 className="text-3xl font-bold">Simple Meals for You</h4>
          <div className="flex gap-4">
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
                  <img
                    width={250}
                    className="absolute top-[-70px] -right-6 z-10"
                    src={item.image}
                    alt={item.name}
                  />
                </div>
              </CardHeader>
              <div></div>
              <CardBody className="absolute bottom-0 gap-4">
                <h4 className="text-md font-bold">{item.name}</h4>
                <div className="flex align-center justify-between w-full">
                  <span className="text-lg font-bold">${item.price}</span>
                  <div>
                    <Button
                      className="bg-[#00F076] rounded-full z-20 relative"
                      onPress={() => {
                        dispatch(increment());
                      }}
                    >
                      Add to Cart
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
          content="Explore Menu"
          href="/menu"
          as={Link}
        >
          Explore Menu
        </Button>
      </div>
    </div>
  );
};

export default Category;
