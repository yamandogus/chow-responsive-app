import { Button } from '@nextui-org/react'
import React from 'react'

const HeroSection = () => {
  return (
    <div className="container mx-auto flex-grow">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-[#068C52] rounded">
      <div className="flex-col items-center justify-start py-6">
        <p className="xs:text-xl md:text-6xl text-white font-bold text-wrap">
          Tasty Meals <br />
          made for You
        </p>
        <p className="text-gray-200">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do
          amet sint. Velit officia consequat duis enim velit mollit.
          Exercitation veniam consequat sunt nostrud amet.
        </p>
        <Button
          className="mt-4 bg-[#00F076] text-white px-8 font-bold rounded-[20px]"
          variant="flat"
        >
          View Menu 🍲
        </Button>
      </div>
      <div className="flex-col items-center justify-center">
        <div className="flex gap-20 items-center justify-center">
          <div>
            <img src="/Ellipse 81.png" alt="" />
          </div>
          <div>
            <img src="/Ellipse 77.png" alt="" />
          </div>
        </div>
        <div className="flex gap-20 items-center justify-center">
          <div>
            <img src="/Ellipse 90.png" alt="" />
          </div>
          <div>
            <img src="/Ellipse 95.png" alt="" />
          </div>
        </div>
      </div>
    </div>
    <div className="my-16 max-w-5xl mx-auto p-4 rounded shadow-lg mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="flex flex-col items-center justify-center">
          <h4 className="text-3xl font-bold text-custom">100%</h4>
          <p className="text-gray-600">User satisfaction</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <h4 className="text-3xl font-bold text-custom">150+</h4>
          <p className="text-gray-600">Restaurants</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <h4 className="text-3xl font-bold text-custom">24/7</h4>
          <p className="text-gray-600">Customer support</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <h4 className="text-3xl font-bold text-custom">250K</h4>
          <p className="text-gray-600">Users served</p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default HeroSection