import localFont from "next/font/local";

export const granolaFont = localFont({
  src: [
    {
      path: "./granola-regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./granola-italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "./granola-bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./granola-black.ttf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-granola",
});
