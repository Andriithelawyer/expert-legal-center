import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Expert Legal Center",
    short_name: "Expert Legal Center",

    description:
      "Правова допомога громадянам України незалежно від країни перебування.",

    start_url: "/",

    display: "standalone",

    background_color: "#ffffff",

    theme_color: "#0F2D52",

    lang: "uk",

    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}