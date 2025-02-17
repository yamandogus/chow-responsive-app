import {
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  Button,
} from "@nextui-org/react";
import React, { useState } from "react";
import { CartItem, clearCart } from "@/app/store/cartSlice";
import Image from "next/image";
import { useDispatch } from "react-redux";

interface BasketBodyProps {
  items: CartItem[];
  onClose: () => void;
}

const BasketBody = ({ items, onClose }: BasketBodyProps) => {
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const totalPrice = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  ).toFixed(2);
  return (
    <DrawerContent>
      <DrawerHeader>
        <h2 className="text-xl font-bold">Siparişler</h2>
      </DrawerHeader>
      <DrawerBody className="p-4 gap-2">
        {isOrderPlaced ? (
          isLoading ? (
            <p>Sipariş yaptınız, lütfen bekleyin...</p>
          ) : (
            <p>Siparişiniz alındı!</p>
          )
        ) : (
          items.map((item: CartItem) => (
            <div
              key={item.id}
              className="flex items-center justify-between border-b"
            >
              <div className="flex flex-row justify-center align-center gap-4">
                <div className="w-24">
                  <Image
                    src={item.image}
                    width={150}
                    height={150}
                    alt=""
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
          ))
        )}
      </DrawerBody>
      <DrawerFooter className="flex flex-col justify-between w-full">
        {!isOrderPlaced && (
          <div className="flex flex-row justify-end w-full">
            <p className="font-bold text-xl">
              Toplam Tutar: {totalPrice} ₺
            </p>
          </div>
        )}
        {!isOrderPlaced && (
          <div className="flex flex-row justify-between gap-4 w-full mt-4">
            <Button onPress={() => {
              setIsLoading(true);
              setTimeout(() => {
                setIsLoading(false);
                setIsOrderPlaced(true);
                dispatch(clearCart());
                setTimeout(() => {
                  onClose();
                }, 2000);
              }, 5000);
            }} color="primary">Sipariş Ver</Button>
            <Button onPress={() => {
              dispatch(clearCart());
              onClose();
            }} color="danger">Sepeti Temizle</Button>
          </div>
        )}
        {isOrderPlaced && (
          <Button onPress={onClose} color="primary">
            Kapat
          </Button>
        )}
      </DrawerFooter>
    </DrawerContent>
  );
};

export default BasketBody;
