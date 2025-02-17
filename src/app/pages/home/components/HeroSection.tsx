import { Button } from '@nextui-org/react'
import Image from 'next/image'
import React from 'react'

const HeroSection = () => {
  return (
    <div className="container mx-auto flex-grow">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-16 px-4 bg-[#068C52] rounded">
      <div className="flex flex-col items-start justify-start py-6 gap-4">
        <p className="sm:text-4xl md:text-6xl text-white font-bold text-wrap">
          Sizin için 
          Lezzetli Yemekler
        </p>
        <p className="text-gray-200">
          En lezzetli yemekler, en taze malzemeler ve en iyi servis ile sizlere
          hizmet veriyoruz. Özenle hazırlanan menümüzde damak tadınıza uygun
          birçok seçenek bulabilirsiniz.
        </p>
        <Button
          className="mt-4 bg-[#00F076] text-white px-8 font-bold rounded-[20px]"
          variant="flat"
        >
          Menüyü Gör 🍲
        </Button>
      </div>
      <div className="flex-col items-center justify-center">
        <div className="flex gap-20 items-center justify-center">
          <div>
            <Image src="/Ellipse 81.png"  width={100}
              height={100} alt="" />
          </div>
          <div>
            <Image  src="/Ellipse 77.png"  width={250}
              height={250} alt="" />
          </div>
        </div>
        <div className="flex gap-20 items-center justify-center">
          <div>
            <Image  src="/Ellipse 90.png"  width={200}
              height={200} alt="" />
          </div>
          <div>
            <Image src="/Ellipse 95.png"  width={250}
              height={250} alt="" />
          </div>
        </div>
      </div>
    </div>
    <div className="my-16 max-w-5xl mx-auto p-4 rounded shadow-lg mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="flex flex-col items-center justify-center">
          <h4 className="text-3xl font-bold text-custom">100%</h4>
          <p className="text-gray-600">Müşteri memnuniyeti</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <h4 className="text-3xl font-bold text-custom">150+</h4>
          <p className="text-gray-600">Restoran</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <h4 className="text-3xl font-bold text-custom">24/7</h4>
          <p className="text-gray-600">Müşteri desteği</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <h4 className="text-3xl font-bold text-custom">250K</h4>
          <p className="text-gray-600">Mutlu müşteri</p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default HeroSection