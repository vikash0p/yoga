import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Mantra",
    short_name: "Mantra",
    description:
      "Yoga: a holistic practice uniting mind, body, and spirit through postures, breathwork, and meditation. Enhances flexibility, strength, and inner peace, fostering balance and harmony within oneself and the universe.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#ffffff",
    orientation: "portrait-primary",
    icons: [
      {
        src: "/icon.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon.png",
        sizes: "256x256",
        type: "image/png",
      },
      {
        src: "/icon.png",
        sizes: "384x384",
        type: "image/png",
      },
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/icon.png",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
