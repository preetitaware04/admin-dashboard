import {
  CategoryTwoTone,
  GridViewTwoTone,
  MarkChatUnreadTwoTone,
  MarkEmailUnreadTwoTone,
  PeopleAltTwoTone,
  ShoppingCartTwoTone,
} from "@mui/icons-material";
// import { RiProductHuntLine } from "react-icons/ri";

export const sidebarMenu = [
  {
    id: 1,
    title: "Dashboard",
    href: "",
    icon: <GridViewTwoTone size={20} />,
  },
  {
    id: 2,
    title: "Category",
    href: "categories/list",
    icon: <CategoryTwoTone size={20} />,
  },
  {
    id: 3,
    title: "Product",
    href: "products/list",
    icon: <CategoryTwoTone size={20} />,
  },
  {
    id: 4,
    title: "Customers",
    href: "customers/list",
    icon: <PeopleAltTwoTone size={20} />,
  },
  {
    id: 5,
    title: "Orders",
    href: "order/list",
    icon: <ShoppingCartTwoTone size={20} />,
  },
  {
    id: 6,
    title: "Mail",
    href: "mail/list",
    icon: <MarkEmailUnreadTwoTone/>,
  },

  {
    id: 7,
    title: "Chat",
    href: "chat/list",
    icon: <MarkChatUnreadTwoTone/>,
  },
];
