import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "Products",
    path: "/products",
    newTab: false,
  },
  {
    id: 3,
    title: "Services",
    path: "/services",
    newTab: false,
  },
  {
    id: 4,
    title: "Support",
    path: "/contact",
    newTab: false,
  },
  {
    id: 5,
    title: "About",
    path: "/about",
    newTab: false,
  },
  {
    id: 6,
    title: "More",
    newTab: false,
    submenu: [
      {
        id: 61,
        title: "Gecon 24",
        path: "/gecon",
        newTab: false,
      },
      {
        id: 62,
        title: "Jampass",
        path: "/jampass",
        newTab: false,
      },
      {
        id: 63,
        title: "Store",
        path: "/store",
        newTab: false,
      },
      {
        id: 64,
        title: "Animations",
        path: "/animations",
        newTab: false,
      },
      {
        id: 65,
        title: "Streams",
        path: "/streams",
        newTab: false,
      },
      // {
      //   id: 46,
      //   title: "Sign In Page",
      //   path: "/signin",
      //   newTab: false,
      // },
      // {
      //   id: 47,
      //   title: "Sign Up Page",
      //   path: "/signup",
      //   newTab: false,
      // },
      // {
      //   id: 48,
      //   title: "Error Page",
      //   path: "/error",
      //   newTab: false,
      // },
    ],
  },
];
export default menuData;
