import {
  Link,
  Navbar as NextUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
  useDisclosure,
  Drawer,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import { useSelector } from "react-redux";
import BasketBody from "../pages/home/components/Drawer";
import { RootState } from "../store/store";
import React from "react";
import { useSession, signOut } from "next-auth/react";

interface MenuItem {
  label: string;
  href: string;
  icon?: string;
}

interface NavMenuItem {
  key: string;
  name: string;
  href: string;
  icon?: string;
  color?: "danger" | "default";
  onPress?: () => void;
}

export default function Navbar() {
  const { data: session } = useSession();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const totalQuantity = useSelector(
    (state: RootState) => state.cart.totalQuantity
  );
  const cart = useSelector((state: RootState) => state.cart);

  const handleOpen = () => {
    onOpen();
  };

  const menuItems: MenuItem[] = [
    {
      label: "Ana Sayfa",
      href: "/",
      icon: "fa-solid fa-home"
    },
    {
      label: "Menü",
      href: "/menu",
      icon: "fa-solid fa-utensils"
    },
    {
      label: "Restoranlar",
      href: "/restaurants",
      icon: "fa-solid fa-store"
    },
    {
      label: "Hakkımızda",
      href: "/about",
      icon: "fa-solid fa-info-circle"
    },
  ];

  const items: NavMenuItem[] = [
    {
      key: "login",
      name: "Giriş Yap",
      href: "/login",
      icon: "fa-solid fa-right-to-bracket"
    },
    {
      key: "register",
      name: "Kayıt Ol",
      href: "/register",
      icon: "fa-solid fa-user-plus"
    },
  ];

  const itemsLogin: NavMenuItem[] = [
    {
      key: "orders",
      name: "Siparişlerim",
      href: "/orders",
      icon: "fa-solid fa-box"
    },
    {
      key: "account",
      name: "Hesabım",
      href: "/account",
      icon: "fa-solid fa-user"
    },
    {
      key: "logout",
      name: "Çıkış Yap",
      href: "#",
      icon: "fa-solid fa-right-from-bracket",
      color: "danger",
      onPress: () => signOut({ callbackUrl: "/" })
    },
  ];

  return (
    <NextUINavbar
      maxWidth="xl"
      className="bg-white/70 backdrop-blur-md shadow-sm border-b"
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent>
        <NavbarMenuToggle
          className="block sm:hidden"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
        <NavbarBrand>
          <Link href="/" className="font-bold text-2xl">
            Crow<span className="text-green-500">/</span>
            <span className="text-black">/</span>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-6" justify="center">
        {menuItems.map((item, index) => (
          <NavbarItem key={index}>
            <Link
              className="text-foreground flex items-center gap-2 py-2 px-3 rounded-full hover:bg-green-50 transition-all duration-300"
              href={item.href}
            >
              <i className={`${item.icon} text-green-600`}></i>
              {item.label}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="flex gap-3">
          <Dropdown>
            <DropdownTrigger>
              <Button
                color="success"
                variant="flat"
                className="min-w-[40px] h-[40px] rounded-full flex items-center justify-center"
              >
                {session?.user?.name ? (
                  <span className="text-sm font-medium capitalize px-2 truncate max-w-[120px]">
                    {session.user.name.split(' ')[0]}
                  </span>
                ) : (
                  <i className="fa-solid fa-user text-lg"></i>
                )}
              </Button>
            </DropdownTrigger>
            <DropdownMenu 
              aria-label="Kullanıcı menüsü" 
              items={session?.user ? itemsLogin : items}
              className="min-w-[200px]"
            >
              {(item) => (
                <DropdownItem
                  key={item.key}
                  href={item.href}
                  color={item.color}
                  onPress={item.onPress}
                  className="py-3 px-4"
                  startContent={<i className={`${item.icon} mr-2`}></i>}
                >
                  {item.name}
                </DropdownItem>
              )}
            </DropdownMenu>
          </Dropdown>
          <Button
            as={Link}
            color="success"
            variant="flat"
            onPress={handleOpen}
            className="min-w-[40px] h-[40px] rounded-full relative"
            isIconOnly
          >
            <i className="fa-solid fa-bag-shopping text-lg"></i>
            {totalQuantity > 0 && (
              <span className="absolute -top-1 -right-1 text-xs bg-red-500 text-white rounded-full min-w-[18px] h-[18px] flex items-center justify-center">
                {totalQuantity}
              </span>
            )}
          </Button>
          <Drawer isOpen={isOpen} onClose={onClose} placement="right" size="lg">
            <BasketBody items={cart.items} onClose={onClose} />
          </Drawer>
        </NavbarItem>
      </NavbarContent>

      {/* Mobile Menu */}
      <NavbarMenu className="pt-6 bg-white/90 backdrop-blur-md">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={index} className="my-2">
            <Link
              className="w-full flex items-center gap-3 py-2 px-4 rounded-lg hover:bg-green-50 transition-all duration-300"
              href={item.href}
            >
              <i className={`${item.icon} text-green-600`}></i>
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </NextUINavbar>
  );
}
