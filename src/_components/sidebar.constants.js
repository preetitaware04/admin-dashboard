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
    href: "/",
    icon: (
      <GridViewTwoToneIcon
        size={35}
        className="!min-w-[30px] !w-[30px] !h-[30px] !rounded-full !text-medium dark:!text-gray-200"
      />
    ),
  },
  {
    id: 2,
    title: "Category",
    href: "#",
    icon: (
      <CategoryTwoToneIcon
        size={35}
        className="!min-w-[30px] !w-[30px] !h-[30px] !rounded-full !text-medium dark:!text-gray-200"
      />
    ),
    items: [
      {
        id: 1,
        title: "Category List",
        // href: "categories/list",
        href: "#",
      },
      {
        id: 2,
        title: "Add Category",
        // href: "categories/add",
        href: "#",
      },
      {
        id: 3,
        title: "Edit Category",
        // href: "categories/edit",
        href: "#",
      },
    ],
  },
  {
    id: 3,
    title: "Product",
    href: "#",
    icon: (
      <RiProductHuntLine
        size={30}
        className="!min-w-[30px] !w-[30px] !h-[30px] !rounded-full !text-medium dark:!text-gray-200"
      />
    ),
    items: [
      {
        id: 1,
        title: "Products List",
        // href: "products/list",
        href: "#",
      },
      {
        id: 2,
        title: "Add Product",
        // href: "products/add",
        href: "#",
      },
      {
        id: 3,
        title: "Edit Product",
        // href: "products/edit",
        href: "#",
      },
    ],
  },
  {
    id: 4,
    title: "Customers",
    // href: "customers/list",
    href: "#",
    icon: (
      <PeopleAltTwoToneIcon
        size={35}
        className="!min-w-[30px] !w-[30px] !h-[30px] !rounded-full !text-medium dark:!text-gray-200"
      />
    ),
  },
  {
    id: 5,
    title: "Orders",
    // href: "order/list",
    href: "#",
    icon: (
      <ShoppingCartTwoToneIcon
        size={35}
        className="!min-w-[30px] !w-[30px] !h-[30px] !rounded-full !text-medium dark:!text-gray-200"
      />
    ),
  },
  {
    id: 6,
    title: "Mail",
    // href: "mail/list",
    href: "#",
    icon: (
      <MarkEmailUnreadTwoToneIcon
        size={35}
        className="!min-w-[30px] !w-[30px] !h-[30px] !rounded-full !text-medium dark:!text-gray-200"
      />
    ),
  },

  {
    id: 7,
    title: "Chat",
    // href: "chat/list",
    href: "#",
    icon: (
      <MarkChatUnreadTwoToneIcon
        size={35}
        className="!min-w-[30px] !w-[30px] !h-[30px] !rounded-full !text-medium dark:!text-gray-200"
      />
    ),
  },
  {
    id: 8,
    title: "LogOut",
    href: "#",
    icon: (
      <LogoutTwoToneIcon
        size={35}
        className="!min-w-[30px] !w-[30px] !h-[30px] !rounded-full !text-medium dark:!text-gray-200"
      />
    ),
  },
];
