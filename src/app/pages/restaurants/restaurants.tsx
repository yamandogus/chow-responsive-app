"use client";

import { useState } from "react";
import {
  Card,
  CardBody,
  Input,
  Select,
  SelectItem,
  Chip,
} from "@nextui-org/react";
import Image from "next/image";
import { restaurants, cuisineTypes, sortOptions } from "./data";
import type { Restaurant as RestaurantType } from "./types";

export default function Restaurants() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCuisine, setSelectedCuisine] = useState("all");
  const [selectedSort, setSelectedSort] = useState("rating");

  // Filtreleme ve sıralama mantığı
  const filteredAndSortedRestaurants = restaurants
    .filter((restaurant) => {
      // İsim araması
      const nameMatch = restaurant.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase());

      // Mutfak tipine göre filtreleme
      const cuisineMatch =
        selectedCuisine === "all" ||
        restaurant.cuisine === cuisineTypes.find((c) => c.value === selectedCuisine)?.label;

      return nameMatch && cuisineMatch;
    })
    .sort((a, b) => {
      // Sıralama mantığı
      switch (selectedSort) {
        case "rating":
          return b.rating - a.rating;
        case "deliveryTime":
          return (
            parseInt(a.deliveryTime.split("-")[0]) -
            parseInt(b.deliveryTime.split("-")[0])
          );
        case "minOrder":
          return a.minOrder - b.minOrder;
        default:
          return 0;
      }
    });

  return (
    <div className="container mx-auto py-8 px-4">
      {/* Hero Section */}
      <div className="relative h-[300px] rounded-2xl overflow-hidden mb-8">
        <Image
          src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=1200"
          alt="Restaurants Hero"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              En İyi Restoranlar
            </h1>
            <p className="text-xl">
              Şehrin en iyi lezzetleri parmaklarınızın ucunda
            </p>
          </div>
        </div>
      </div>

      {/* Filters Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="relative">
          <Input
            placeholder="Restaurant Ara..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            startContent={<i className="fa fa-search" />}
          />
        </div>
        <Select
          placeholder="Mutfak Seçin"
          selectedKeys={[selectedCuisine]}
          onChange={(e) => setSelectedCuisine(e.target.value)}
        >
          {cuisineTypes.map((cuisine) => (
            <SelectItem key={cuisine.value} value={cuisine.value}>
              {cuisine.label}
            </SelectItem>
          ))}
        </Select>
        <Select
          placeholder="Sırala"
          selectedKeys={[selectedSort]}
          onChange={(e) => setSelectedSort(e.target.value)}
        >
          {sortOptions.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </Select>
      </div>

      {/* Restaurants Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredAndSortedRestaurants.map((restaurant) => (
          <Card
            key={restaurant.id}
            className="hover:shadow-lg transition-shadow duration-200"
            isPressable
          >
            <CardBody className="p-0">
              <div className="relative h-48">
                <Image
                  src={restaurant.image}
                  alt={restaurant.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold">{restaurant.name}</h3>
                  <div className="flex items-center">
                    <i className="fa fa-star text-yellow-400 mr-1" />
                    <span>{restaurant.rating}</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-2">{restaurant.cuisine}</p>
                <div className="flex justify-between text-sm text-gray-500 mb-3">
                  <span>{restaurant.deliveryTime} dk</span>
                  <span>Min. {restaurant.minOrder}₺</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {restaurant.tags.map((tag, index) => (
                    <Chip
                      key={index}
                      size="sm"
                      variant="flat"
                      className="bg-gray-100"
                    >
                      {tag}
                    </Chip>
                  ))}
                </div>
              </div>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
}
