import React from "react";
import Image from "next/image";

const MoreDetails = () => {
  return (
    <div className="bg-[#C9FFBF] px-4">
      <div className="container mx-auto py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Sol Kısım */}
          <div className="flex flex-col items-start justify-center space-y-6">
            <p className="text-3xl font-bold">Yemekler Yanınızda!!!</p>
            <p className="text-gray-700">
              Uygulamayı indirerek indirimlerden, promosyonlardan ve fırsatlardan
              yararlanın. En lezzetli yemekler artık cebinizde. Hemen indirin
              ve sipariş vermeye başlayın.
            </p>
            <div className="flex flex-col gap-4">
              <p className="font-medium">Uygulamayı İndir</p>
              <div className="flex gap-4">
                <Image 
                  src="/Google Play Badge.png" 
                  alt="Get it on Google Play" 
                  width={140}
                  height={48}
                  className="h-12 w-auto"
                />
                <Image 
                  src="/App Store Badge.png" 
                  alt="Download on App Store" 
                  width={140}
                  height={48}
                  className="h-12 w-auto"
                />
              </div>
            </div>
          </div>

          {/* Sağ Kısım - Mockup */}
          <div className="relative flex items-center justify-center min-h-[600px]">
            {/* Container for all floating elements */}
            <div className="relative w-full max-w-[400px] aspect-[3/4]">
              {/* iPhone */}
              <Image 
                src="/iPhone.png" 
                alt="iPhone mockup" 
                width={400}
                height={800}
                className="relative z-20 w-[100%] mx-auto"
              />
              
              {/* Floating Elements */}
              <div className="absolute inset-0">
                {/* Cart */}
                <Image
                  src="/cart.png"
                  alt="Cart"
                  width={240}
                  height={240}
                  className="absolute w-[60%] top-[17%] left-[-15%] z-30"
                />
                
                {/* Food Items */}
                <Image
                  src="/food2.png"
                  alt="Food 2"
                  width={80}
                  height={80}
                  className="absolute w-[20%] bottom-[25%] left-[4%] z-10"
                />
                
                <Image
                  src="/food1.png"
                  alt="Food 1"
                  width={80}
                  height={80}
                  className="absolute w-[20%] bottom-[40%] right-[10%] z-10"
                />

                {/* Decorative Elements */}
                <span className="absolute w-[8%] aspect-square bg-[#92c3fd] rounded-full z-10 bottom-[50%] left-[10%]"></span>
                <span className="absolute w-[5%] aspect-square bg-gray-600 rounded-full z-10 top-[20%] right-[15%]"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreDetails;
