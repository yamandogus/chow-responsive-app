import { Button } from '@nextui-org/react'
import Image from 'next/image'
import React from 'react'

const HeroSection = () => {
  return (
    <div className="container mx-auto flex-grow">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#068C52] to-[#025B35] min-h-[450px] md:min-h-[550px]">
        {/* Decorative circles */}
        <div className="absolute top-0 left-0 w-48 h-48 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-white/5 rounded-full translate-x-1/3 translate-y-1/3" />
        
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-6 py-6 md:py-10 px-4 md:px-6">
          {/* Text Content */}
          <div className="flex flex-col items-start justify-center space-y-4 z-10">
            <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
              Sizin için<br/>
              <span className="text-[#00F076]">Lezzetli</span> Yemekler
            </h1>
            <p className="text-gray-200 text-base md:text-lg max-w-lg">
              En lezzetli yemekler, en taze malzemeler ve en iyi servis ile sizlere
              hizmet veriyoruz. Özenle hazırlanan menümüzde damak tadınıza uygun
              birçok seçenek bulabilirsiniz.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                className="bg-[#00F076] text-white px-6 py-3 font-bold text-base hover:bg-[#00D566] transition-all rounded-full w-full sm:w-auto"
                variant="flat"
                size="lg"
                endContent={<span className="text-xl">🍲</span>}
              >
                Menüyü Gör
              </Button>
              <Button
                className="bg-white/10 text-white px-6 py-3 font-bold text-base hover:bg-white/20 transition-all backdrop-blur-sm rounded-full w-full sm:w-auto"
                variant="flat"
                size="lg"
              >
                Hakkımızda
              </Button>
            </div>
          </div>

          {/* Image Layout */}
          <div className="relative flex justify-between min-h-[400px] md:min-h-[450px] max-w-[500px] justify-self-center md:justify-self-end">
            <div className="absolute w-[120%] h-[120%] bg-[#E8FFE8] rounded-full opacity-20 blur-3xl" />
            
            {/* Left Side Image - Makarna */}
            <div className="relative w-[45%] flex items-center">
              <div className="relative w-[180px] md:w-[200px] aspect-square overflow-hidden rounded-full transform hover:scale-105 transition-transform shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=800&auto=format&fit=crop"
                  fill
                  sizes="(max-width: 768px) 180px, 200px"
                  style={{ objectFit: 'cover' }}
                  alt="Makarna"
                  className="hover:opacity-90 transition-opacity"
                  priority
                />
              </div>
            </div>

            {/* Right Side Images Stack */}
            <div className="relative w-[45%] flex flex-col justify-between py-4">
              {/* Top Image - Kahve */}
              <div className="relative w-[130px] md:w-[150px] aspect-square overflow-hidden rounded-full transform hover:scale-105 transition-transform shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1529892485617-25f63cd7b1e9?q=80&w=800&auto=format&fit=crop"
                  fill
                  sizes="(max-width: 768px) 130px, 150px"
                  style={{ objectFit: 'cover' }}
                  alt="Kahve"
                  className="hover:opacity-90 transition-opacity"
                  priority
                />
              </div>

              {/* Bottom Image - Tatlı */}
              <div className="relative w-[130px] md:w-[150px] aspect-square overflow-hidden rounded-full transform hover:scale-105 transition-transform shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?q=80&w=800&auto=format&fit=crop"
                  fill
                  sizes="(max-width: 768px) 130px, 150px"
                  style={{ objectFit: 'cover' }}
                  alt="Tatlı"
                  className="hover:opacity-90 transition-opacity"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="my-16">
        <div className="bg-white rounded-2xl shadow-xl p-8 backdrop-blur-lg">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center space-y-2 p-4 rounded-xl hover:bg-gray-50 transition-colors">
              <div className="text-4xl font-bold bg-gradient-to-r from-[#068C52] to-[#00F076] text-transparent bg-clip-text">
                100%
              </div>
              <p className="text-gray-600 font-medium">Müşteri Memnuniyeti</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-2 p-4 rounded-xl hover:bg-gray-50 transition-colors">
              <div className="text-4xl font-bold bg-gradient-to-r from-[#068C52] to-[#00F076] text-transparent bg-clip-text">
                150+
              </div>
              <p className="text-gray-600 font-medium">Restoran</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-2 p-4 rounded-xl hover:bg-gray-50 transition-colors">
              <div className="text-4xl font-bold bg-gradient-to-r from-[#068C52] to-[#00F076] text-transparent bg-clip-text">
                24/7
              </div>
              <p className="text-gray-600 font-medium">Müşteri Desteği</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-2 p-4 rounded-xl hover:bg-gray-50 transition-colors">
              <div className="text-4xl font-bold bg-gradient-to-r from-[#068C52] to-[#00F076] text-transparent bg-clip-text">
                250K+
              </div>
              <p className="text-gray-600 font-medium">Mutlu Müşteri</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection