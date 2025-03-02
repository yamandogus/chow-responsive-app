import {
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  Button,
  Input,
  Textarea,
} from "@nextui-org/react";
import React, { useState } from "react";
import { CartItem, clearCart } from "@/app/store/cartSlice";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

interface BasketBodyProps {
  items: CartItem[];
  onClose: () => void;
}

const BasketBody = ({ items, onClose }: BasketBodyProps) => {
  const { data: session } = useSession();
  const router = useRouter();
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [address, setAddress] = useState("");
  const dispatch = useDispatch();

  const totalPrice = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  ).toFixed(2);

  const handleOrder = async () => {
    if (!session?.user) {
      toast.error("Sipariş vermek için giriş yapmalısınız!");
      onClose();
      router.push("/login");
      return;
    }

    if (!address.trim()) {
      toast.error("Lütfen teslimat adresini girin!");
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch("/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          items: items.map(item => ({
            productId: item.id,
            name: item.name,
            quantity: item.quantity,
            price: item.price
          })),
          totalAmount: parseFloat(totalPrice),
          address: address
        }),
      });

      if (!response.ok) {
        throw new Error("Sipariş oluşturulurken bir hata oluştu");
      }

      toast.success("Siparişiniz başarıyla alındı!");
      setIsOrderPlaced(true);
      dispatch(clearCart());
      setTimeout(() => {
        onClose();
        router.push("/orders");
      }, 2000);
    } catch (error) {
      toast.error("Sipariş oluşturulurken bir hata oluştu");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <DrawerContent>
      <DrawerHeader>
        <h2 className="text-xl font-bold">Sepetim</h2>
      </DrawerHeader>
      <DrawerBody className="p-4 gap-2">
        {items.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-gray-600">Sepetiniz boş</p>
          </div>
        ) : (
          <>
            {items.map((item: CartItem) => (
              <div
                key={item.id}
                className="flex items-center justify-between border-b py-4"
              >
                <div className="flex flex-row justify-center align-center gap-4">
                  <div className="w-24">
                    <Image
                      src={item.image}
                      width={150}
                      height={150}
                      alt={item.name}
                      className="rounded aspect-[1/1]"
                    />
                  </div>
                  <div className="flex flex-col">
                    <p className="font-semibold">{item.name}</p>
                    <p className="text-sm text-gray-500">{item.price} ₺</p>
                    <p className="text-sm">Adet: {item.quantity}</p>
                  </div>
                </div>
                <div className="flex flex-row justify-end">
                  <p className="font-bold">{item.price * item.quantity} ₺</p>
                </div>
              </div>
            ))}

            {!isOrderPlaced && (
              <div className="mt-6">
                <Textarea
                  label="Teslimat Adresi"
                  placeholder="Lütfen teslimat adresinizi girin"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="mb-4"
                />
              </div>
            )}
          </>
        )}
      </DrawerBody>
      <DrawerFooter className="flex flex-col justify-between w-full">
        {items.length > 0 && (
          <>
            <div className="flex flex-row justify-end w-full">
              <p className="font-bold text-xl">
                Toplam Tutar: {totalPrice} ₺
              </p>
            </div>
            <div className="flex flex-row justify-between gap-4 w-full mt-4">
              <Button
                onPress={handleOrder}
                color="primary"
                isLoading={isLoading}
                isDisabled={isOrderPlaced || items.length === 0}
              >
                {isLoading ? "Sipariş Veriliyor..." : "Sipariş Ver"}
              </Button>
              <Button
                onPress={() => {
                  dispatch(clearCart());
                  onClose();
                }}
                color="danger"
                isDisabled={isLoading}
              >
                Sepeti Temizle
              </Button>
            </div>
          </>
        )}
      </DrawerFooter>
    </DrawerContent>
  );
};

export default BasketBody;
