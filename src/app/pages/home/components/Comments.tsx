"use client";
import { dummyData } from "@/app/data/data";
import { Avatar, Button, Card, CardBody, CardFooter } from "@nextui-org/react";
import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation} from "swiper/modules";

const Comments = () => {
  return (
    <div className="container mx-auto my-16">
      <div className="flex flex-row items-center justify-between">
        <p className="text-3xl font-bold">
          Müşterilerimiz neler söylüyor
        </p>
        <div className="flex flex-row items-center justify-end gap-4">
          <Button className="bg-[#00F076] text-black rounded-[20px] prev-button">
            <i className="fa-solid fa-arrow-left"></i>
          </Button>
          <Button className="bg-[#00F076] text-black rounded-[20px] next-button">
            <i className="fa-solid fa-arrow-right"></i>
          </Button>
        </div>
      </div>
      <div>
        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: ".next-button",
            prevEl: ".prev-button",
          }}
          slidesPerView={3}
          spaceBetween={30}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          className="mt-8 py-8"
        >
          {dummyData.map((item) => (
            <SwiperSlide key={item.id}>
              <Card className="p-4 h-[200px] my-2 shadow-lg">
                <CardBody className="pb-2">
                  <p className="text-gray-600 text-sm">{item.content}</p>
                </CardBody>
                <CardFooter>
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center gap-4">
                      <Avatar src={item.avatar} alt="" />
                      <div className="flex flex-col">
                        <p className="font-bold">{item.name}</p>
                        <p className="text-sm text-gray-500">{item.date}</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-end">
                      {[...Array(5)].map((_, index) => (
                        <i
                          key={index}
                          className={`fa-solid fa-star ${
                            index < Math.floor(item.rating)
                              ? "text-[#FFD700]"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </CardFooter>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Comments;
