"use client";

import { useEffect, useState } from "react";
import { Card, CardBody, Chip } from "@nextui-org/react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import type { Order } from "../lib/orders";

const statusColors = {
  pending: "warning",
  processing: "primary",
  completed: "success",
} as const;

const statusTexts = {
  pending: "Beklemede",
  processing: "Hazırlanıyor",
  completed: "Tamamlandı",
} as const;

export default function OrdersPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
      return;
    }
  }, [status, router]);

  useEffect(() => {
    const fetchOrders = async () => {
      if (!session?.user?.id) return;

      try {
        console.log("Fetching orders for user:", session.user.id);
        const response = await fetch("/api/orders", {
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          const errorData = await response.json();
          console.error("API Error:", errorData);
          throw new Error(errorData.error || "Siparişler getirilemedi");
        }

        const data = await response.json();
        console.log("Fetched orders:", data);
        setOrders(data);
      } catch (error) {
        console.error("Error fetching orders:", error);
        setError("Siparişleriniz yüklenirken bir hata oluştu");
      } finally {
        setLoading(false);
      }
    };

    if (session?.user) {
      fetchOrders();
    }
  }, [session]);

  if (status === "loading" || loading) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          {error}
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Siparişlerim</h1>
      
      {orders.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-gray-600">Henüz hiç siparişiniz bulunmuyor.</p>
        </div>
      ) : (
        <div className="grid gap-6">
          {orders.map((order) => (
            <Card key={order.id} className="w-full">
              <CardBody>
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <p className="text-sm text-gray-600">
                      Sipariş No: #{order.id}
                    </p>
                    <p className="text-sm text-gray-600">
                      Tarih: {new Date(order.createdAt).toLocaleDateString('tr-TR')}
                    </p>
                  </div>
                  <Chip
                    color={statusColors[order.status]}
                    variant="flat"
                  >
                    {statusTexts[order.status]}
                  </Chip>
                </div>

                <div className="space-y-2">
                  {order.items.map((item, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center py-2 border-b last:border-0"
                    >
                      <div>
                        <p className="font-medium">{item.name}</p>
                        <p className="text-sm text-gray-600">
                          {item.quantity} adet x {item.price}₺
                        </p>
                      </div>
                      <p className="font-medium">
                        {(item.quantity * item.price).toFixed(2)}₺
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-4 pt-4 border-t">
                  <div className="flex justify-between items-center">
                    <p className="font-bold">Toplam</p>
                    <p className="font-bold">{order.totalAmount.toFixed(2)}₺</p>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">
                    Teslimat Adresi: {order.address}
                  </p>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
