import {
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  Button,
} from "@nextui-org/react";
import React from "react";
import { CartItem, clearCart } from "@/app/store/cartSlice";
import Image from "next/image";
import { useDispatch } from "react-redux";

interface BasketBodyProps {
  items: CartItem[];
  onClose: () => void;
}

const BasketBody = ({ items, onClose }: BasketBodyProps) => {
  const dispatch = useDispatch();
  return (
    <DrawerContent>
      <DrawerHeader>
        <h2 className="text-xl font-bold">Siparişler</h2>
      </DrawerHeader>
      <DrawerBody>
        {items.map((item: CartItem) => (
          <div
            key={item.id}
            className="flex items-center justify-between border-b"
          >
            <div className="flex flex-row justify-center align-center">
              <div className="w-24">
                <Image src={item.image} width={150} height={150} alt="" />
              </div>
              <div className="flex flex-col">
                <p className="font-semibold">{item.name}</p>
                <p className="text-gray-600">Fiyat: ${item.price}</p>
                <p className="text-sm">Adet: {item.quantity}</p>
              </div>
            </div>
            <div className="flex flex-row justify-end">
              <p className="font-bold">${item.price * item.quantity}</p>
            </div>
          </div>
        ))}
      </DrawerBody>
      <DrawerFooter className="flex flex-col justify-between w-full">
        <div className="flex flex-row justify-end w-full">
          <p className="font-bold text-xl">
            Toplam: $
            {items.reduce(
              (total, item) => total + item.price * item.quantity,
              0
            ).toFixed(2)}
          </p>
        </div>
        <div className="flex flex-row justify-between gap-4 w-full mt-4">
          <Button color="primary">Sipariş Ver</Button>
          <Button onPress={() => {
            dispatch(clearCart());
            onClose();
          }} color="danger">Sepeti Temizle</Button>
        </div>
      </DrawerFooter>
    </DrawerContent>
  );
};

export default BasketBody;
