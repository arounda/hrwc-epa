import localFont from "next/font/local";
import { Inter } from "next/font/google"

export const inter = Inter({
  subsets: [ 'latin' ],
  display: 'swap',
  variable: "--font-inter",
});

export const gilroy = localFont({
  variable: "--font-gilroy",
  display: 'swap',
  src: [
    {
      path: "/Gilroy-Light.woff",
      weight: "300",
    },
    {
      path: "/Gilroy-Regular.woff",
      weight: "normal",
    },
    {
      path: "/Gilroy-Medium.woff",
      weight: "500"
    },
    {
      path: "/Gilroy-SemiBold.woff",
      weight: "600"
    },
    {
      path: "/Gilroy-Bold.woff",
      weight: "bold"
    },
  ],
});
