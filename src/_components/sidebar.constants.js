import CategoryTwoToneIcon from "@mui/icons-material/CategoryTwoTone";
import GridViewTwoToneIcon from "@mui/icons-material/GridViewTwoTone";
import MarkChatUnreadTwoToneIcon from "@mui/icons-material/MarkChatUnreadTwoTone";
import MarkEmailUnreadTwoToneIcon from "@mui/icons-material/MarkEmailUnreadTwoTone";
import PeopleAltTwoToneIcon from "@mui/icons-material/PeopleAltTwoTone";
import ShoppingCartTwoToneIcon from "@mui/icons-material/ShoppingCartTwoTone";

import LogoutTwoToneIcon from "@mui/icons-material/LogoutTwoTone";
import { RiProductHuntLine } from "react-icons/ri";

export const sidebarMenu = [
  {
    id: 1,
    title: "Dashboard",
    href: "",
    icon: <GridViewTwoToneIcon size={25} />,
  },
  {
    id: 2,
    title: "Category",
    href: "categories/list",
    icon: <CategoryTwoToneIcon size={25} />,
    items: [
      {
        id: 1,
        title: "Category List",
        href: "categories/list",
      },
      {
        id: 2,
        title: "Add Category",
        href: "categories/add",
      },
      {
        id: 3,
        title: "Edit Category",
        href: "categories/edit",
      },
    ],
  },
  {
    id: 3,
    title: "Product",
    href: "products/list",
    icon: <RiProductHuntLine size={25} />,
    items: [
      {
        id: 1,
        title: "Products List",
        href: "products/list",
      },
      {
        id: 2,
        title: "Add Product",
        href: "products/add",
      },
      {
        id: 3,
        title: "Edit Product",
        href: "products/edit",
      },
    ],
  },
  {
    id: 4,
    title: "Customers",
    href: "customers/list",
    icon: <PeopleAltTwoToneIcon size={25} />,
  },
  {
    id: 5,
    title: "Orders",
    href: "order/list",
    icon: <ShoppingCartTwoToneIcon size={25} />,
  },
  {
    id: 6,
    title: "Mail",
    href: "mail/list",
    icon: <MarkEmailUnreadTwoToneIcon size={25} />,
  },

  {
    id: 7,
    title: "Chat",
    href: "chat/list",
    icon: <MarkChatUnreadTwoToneIcon size={25} />,
  },
  {
    id: 8,
    title: "LogOut",
    href: "",
    icon: <LogoutTwoToneIcon size={25} />,
  },
];
