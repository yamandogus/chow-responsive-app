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
}

interface NavMenuItem {
  key: string;
  name: string;
  href: string;
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
    },
    {
      label: "Menü",
      href: "/menu",
    },
    {
      label: "Restoranlar",
      href: "/restaurants",
    },
    {
      label: "Hakkımızda",
      href: "/about",
    },
  ];

  const items: NavMenuItem[] = [
    {
      key: "login",
      name: "Giriş Yap",
      href: "/login"
    },
    {
      key: "register",
      name: "Kayıt Ol",
      href: "/register"
    },
  ];

  const itemsLogin: NavMenuItem[] = [
    {
      key: "account",
      name: "Hesabım",
      href: "/account"
    },
    {
      key: "logout",
      name: "Çıkış Yap",
      href: "#",
      color: "danger",
      onPress: () => signOut({ callbackUrl: "/" })
    },
  ];

  return (
    <NextUINavbar
      maxWidth="xl"
      className="bg-background"
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarBrand>
        <Link href="/" className="font-bold text-custom">
          Crow<span className="text-custom">/</span>
          <span className="text-black">/</span>
        </Link>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">

        {menuItems.map((item, index) => (
          <NavbarItem key={index}>
            <Link
              className="text-foreground relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-0.5 after:bg-green-500 after:transition-all after:ease-in-out after:duration-300 cursor-pointer"
              href={item.href}
            >
              {item.label}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="flex gap-4">
          <Dropdown>
            <DropdownTrigger>
              <Button
                color="success"
                variant="flat"
                size="sm"
                className="min-w-[40px] h-[35px] flex items-center justify-center"
              >
                {session?.user?.name ? (
                  <span className="text-sm font-medium capitalize px-2 truncate max-w-[120px]">
                    {session.user.name}
                  </span>
                ) : (
                  <i className="fa-solid fa-user text-lg"></i>
                )}
              </Button>
            </DropdownTrigger>
            <DropdownMenu 
              aria-label="Kullanıcı menüsü" 
              items={session?.user ? itemsLogin : items}
              className="min-w-[150px]"
            >
              {(item) => (
                <DropdownItem
                  key={item.key}
                  href={item.href}
                  color={item.color}
                  onPress={item.onPress}
                  className="py-2"
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
            onPress={() => {
              handleOpen();
            }}
            size="sm"
            isIconOnly
          >
            <i className="fa-solid fa-bag-shopping text-lg"></i>
            <p className="absolute top-1 right-1 text-xs bg-red-500 text-white rounded-full w-3 h-3 flex items-center justify-center z-50">
              {totalQuantity}
            </p>
          </Button>
          <Drawer isOpen={isOpen} onClose={onClose} placement="right" size="lg">
            <BasketBody items={cart.items} onClose={onClose} />
          </Drawer>

          {/* Toggle Button */}
          <NavbarItem>
            <NavbarMenuToggle
              className="w-full h-full block md:hidden bg-transparent"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            />
            <NavbarMenu>
              {menuItems.map((item, index) => (
                <NavbarMenuItem key={index}>
                  <Link className="w-full" href={item.href}>
                    {item.label}
                  </Link>
                </NavbarMenuItem>
              ))}
            </NavbarMenu>
          </NavbarItem>
        </NavbarItem>
      </NavbarContent>
    </NextUINavbar>
  );
}
