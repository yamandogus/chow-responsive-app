import {
  Link,
  Navbar as NextUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
  useDisclosure,
  Drawer,
} from "@nextui-org/react";
import { useSelector } from "react-redux";
import BasketBody from "../pages/home/components/Drawer";
import { RootState } from "../store/store";

export const AcmeLogo = () => {
  return (
    <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
      <path
        clipRule="evenodd"
        d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
};

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const totalQuantity = useSelector((state: RootState) => state.cart.totalQuantity);
  const cart = useSelector((state: RootState) => state.cart);

  const handleOpen = () => {
    onOpen();
  };
  return (
    <NextUINavbar maxWidth="xl" className="bg-background">
      <NavbarBrand>
        <AcmeLogo />
        <Link href="/" className="font-bold text-custom">
          Crow<span className="text-custom">/</span>
          <span className="text-black">/</span>
        </Link>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link className="text-foreground" href="/">
            Ana Sayfa
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-foreground" href="/menu">
            Menü
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-foreground" href="/restaurants">
            Restoranlar
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-foreground" href="/about">
            Hakkımızda
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="flex gap-2">
          <Button
            as={Link}
            color="success"
            href="/"
            variant="flat"
            size="sm"
            isIconOnly
          >
            <i className="fa-solid fa-user text-lg"></i>
          </Button>
          <Button
            as={Link}
            color="success"
            variant="flat"
            onPress={() => {
              handleOpen();
            }}
            size="sm"
            isIconOnly
          >
            <i className="fa-solid fa-bag-shopping text-lg"></i>
            <p
              className="absolute top-1 right-1 text-xs bg-red-500 text-white rounded-full w-3 h-3 flex items-center justify-center z-50"
            >
              {totalQuantity}
            </p>
          </Button>
          <Drawer
            isOpen={isOpen}
            onClose={onClose}
            placement="right"
            size="lg"
          >
            <BasketBody items={cart.items} onClose={onClose} />
          </Drawer>
        </NavbarItem>
      </NavbarContent>
    </NextUINavbar>
  );
}
