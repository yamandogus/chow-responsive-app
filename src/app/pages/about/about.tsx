"use client";

import { Card, CardBody } from "@nextui-org/react";
import Image from "next/image";

const stats = [
  { number: "10K+", title: "Mutlu Müşteri" },
  { number: "500+", title: "Restaurant" },
  { number: "50+", title: "Şehir" },
  { number: "24/7", title: "Destek" },
];

const features = [
  {
    title: "Hızlı Teslimat",
    description: "30 dakika içinde kapınızda, sıcak ve taze yemekler.",
    icon: "https://cdn-icons-png.flaticon.com/512/2830/2830305.png",
  },
  {
    title: "Kaliteli Restoranlar",
    description: "Özenle seçilmiş en iyi restoranlardan lezzetli yemekler.",
    icon: "https://cdn-icons-png.flaticon.com/512/1996/1996055.png",
  },
  {
    title: "Kolay Ödeme",
    description: "Güvenli ve hızlı ödeme seçenekleri ile sorunsuz alışveriş.",
    icon: "https://cdn-icons-png.flaticon.com/512/2527/2527857.png",
  },
];

const AboutPage = () => {
  return (
    <div className="container mx-auto py-16 px-4">
      {/* Hero Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Lezzetli Yemekler,<br />
            Mutlu Anlar
          </h1>
          <p className="text-gray-600 text-lg mb-8">
            2023 yılında kurulan Chow, Türkiye&apos;nin önde gelen yemek teslimat platformlarından biridir. 
            Misyonumuz, Müşterilerimize en kaliteli restoranlardan en lezzetli yemekleri, 
            en hızlı şekilde ulaştırmaktır.
          </p>
        </div>
        <div className="relative h-[400px]">
          <Image
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800"
            alt="About Hero"
            fill
            className="object-cover rounded-2xl"
          />
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
        {stats.map((stat, index) => (
          <Card key={index} className="bg-[#068C52] text-white">
            <CardBody className="text-center py-8">
              <p className="text-4xl font-bold mb-2">{stat.number}</p>
              <p className="text-sm">{stat.title}</p>
            </CardBody>
          </Card>
        ))}
      </div>

      {/* Features Section */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold text-center mb-12">Neden Chow?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-white">
              <CardBody className="text-center p-6">
                <div className="mb-4 flex justify-center">
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    width={64}
                    height={64}
                  />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>

      {/* Team Section */}
      <div className="text-center mb-20">
        <h2 className="text-3xl font-bold mb-12">Ekibimiz</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="relative h-[500px] rounded-2xl overflow-hidden group">
            <Image
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800"
              alt="Team Member"
              fill
              className="object-cover transition-transform group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end p-6">
              <div className="text-white">
                <h3 className="text-xl font-semibold">Doğuş Yaman</h3>
                <p>Kurucu & CEO</p>
              </div>
            </div>
          </div>
          <div className="relative h-[500px] rounded-2xl overflow-hidden group">
            <Image
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800"
              alt="Team Member"
              fill
              className="object-cover transition-transform group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end p-6">
              <div className="text-white">
                <h3 className="text-xl font-semibold">Emine Yaman</h3>
                <p>Operasyon Direktörü</p>
              </div>
            </div>
          </div>
          <div className="relative h-[500px] rounded-2xl overflow-hidden group">
            <Image
              src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800"
              alt="Team Member"
              fill
              className="object-cover transition-transform group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end p-6">
              <div className="text-white">
                <h3 className="text-xl font-semibold">Ömürcan Yılmaz</h3>
                <p>Teknoloji Direktörü</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-[#C9FFBF] rounded-2xl p-12 text-center">
        <h2 className="text-3xl font-bold mb-6">Bizimle İletişime Geçin</h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Sorularınız veya önerileriniz için bize ulaşın. 
          7/24 müşteri hizmetleri ekibimiz size yardımcı olmaktan mutluluk duyacaktır.
        </p>
        <div className="flex justify-center gap-6">
          <Card className="w-64">
            <CardBody className="text-center p-6">
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-gray-600">info@chow.com</p>
            </CardBody>
          </Card>
          <Card className="w-64">
            <CardBody className="text-center p-6">
              <h3 className="font-semibold mb-2">Telefon</h3>
              <p className="text-gray-600">0850 123 45 67</p>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
