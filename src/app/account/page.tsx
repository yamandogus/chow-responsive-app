"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Tabs, Tab, Card, CardBody, User, Button } from "@nextui-org/react";

export default function AccountPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  if (status === "loading") {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-green-500"></div>
      </div>
    );
  }

  return (
    <div className="max-h-screen container mx-auto px-4 py-8">
      <div className="flex items-center gap-4 mb-8">
        <User
          name={session?.user?.name}
          description={session?.user?.email}
          avatarProps={{
            src: session?.user?.image || "https://i.pravatar.cc/150?img=3",
            size: "lg",
          }}
        />
      </div>

      <Tabs 
        aria-label="Hesap Seçenekleri" 
        color="success" 
        variant="underlined"
        classNames={{
          tabList: "gap-6 w-full relative rounded-none p-0 border-b border-divider",
          cursor: "w-full bg-green-500",
          tab: "max-w-fit px-0 h-12",
          tabContent: "group-data-[selected=true]:text-green-500"
        }}
      >
        <Tab
          key="profile"
          title="Hesap Bilgileri"
        >
          <Card className="mt-4">
            <CardBody>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Kişisel Bilgiler</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Ad Soyad</label>
                      <input
                        type="text"
                        className="w-full p-2 border rounded-lg"
                        value={session?.user?.name || ""}
                        readOnly
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">E-posta</label>
                      <input
                        type="email"
                        className="w-full p-2 border rounded-lg"
                        value={session?.user?.email || ""}
                        readOnly
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">Adres Bilgileri</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Adres</label>
                      <textarea
                        className="w-full p-2 border rounded-lg"
                        rows={3}
                        placeholder="Henüz adres eklenmemiş"
                      />
                    </div>
                    <Button color="success" variant="flat">
                      Bilgileri Güncelle
                    </Button>
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>
        </Tab>
        <Tab
          key="orders"
          title="Siparişlerim"
        >
          <Card className="mt-4">
            <CardBody>
              <div className="space-y-4">
                {/* Sipariş geçmişi olmadığı durumda gösterilecek mesaj */}
                <div className="text-center py-8">
                  <i className="fa-solid fa-receipt text-4xl text-gray-400 mb-4"></i>
                  <p className="text-gray-600">Henüz bir sipariş geçmişiniz bulunmuyor.</p>
                  <Button 
                    color="success" 
                    variant="flat" 
                    className="mt-4"
                    onClick={() => router.push("/menu")}
                  >
                    Menüyü İncele
                  </Button>
                </div>

                {/* Sipariş geçmişi olduğunda buraya map ile siparişler listelenecek */}
                {/* Örnek sipariş kartı yapısı: */}
                {/*
                <div className="border rounded-lg p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-semibold">Sipariş #123456</p>
                      <p className="text-sm text-gray-600">12 Mart 2024, 15:30</p>
                    </div>
                    <span className="px-3 py-1 rounded-full text-sm bg-green-100 text-green-600">
                      Tamamlandı
                    </span>
                  </div>
                  <div className="mt-4">
                    <p className="text-sm">2x Tavuk Döner</p>
                    <p className="text-sm">1x Ayran</p>
                  </div>
                  <div className="mt-4 flex justify-between items-center">
                    <p className="font-semibold">Toplam: 150.00 ₺</p>
                    <Button size="sm" color="success" variant="flat">
                      Detaylar
                    </Button>
                  </div>
                </div>
                */}
              </div>
            </CardBody>
          </Card>
        </Tab>
      </Tabs>
    </div>
  );
}
