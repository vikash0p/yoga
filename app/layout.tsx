import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import GlobalLayout from "@/utils/GlobalLayout";

const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "Mantra",
  description:
    "Yoga: a holistic practice uniting mind, body, and spirit through postures, breathwork, and meditation. Enhances flexibility, strength, and inner peace, fostering balance and harmony within oneself and the universe.",
  applicationName: "Mantra",
  category: "fitness",
  keywords: [
    "Yoga",
    "Holistic Practice",
    "Mind",
    "Body",
    "Spirit",
    "Postures",
    "Breathwork",
    "Meditation",
    "Flexibility",
    "Strength",
    "Inner Peace",
    "Balance",
    "Harmony",
  ],
  authors: {
    name: "Mantra Team",
    url: "https://mantra.example.com",
  },
  creator: "Mr. vikash pandit",

  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "https://mantra.example.com/en-US",
      "es-ES": "https://mantra.example.com/es-ES",
    },
  },
  publisher: "Vikash pandit lechnologies",
  openGraph: {
    type: "website",
    url: "https://mantra.example.com",
    title: "Mantra",
    description:
      "Yoga: a holistic practice uniting mind, body, and spirit through postures, breathwork, and meditation.",
    images: [
      {
        url: "/home2_image_gallery_12.jpg",
        width: 800,
        height: 600,
        alt: "Mantra Yoga Practice",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@mantra",
    title: "Mantra",
    description:
      "Yoga: a holistic practice uniting mind, body, and spirit through postures, breathwork, and meditation.",
    images: ["/home2_image_gallery_12.jpg"],
  },
  viewport: "width=device-width, initial-scale=1.0",
  robots: {
    index: true,
    follow: true,
    nocache: true,
    noarchive: false,
    nosnippet: false,
  },
  themeColor: "#ffffff",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
    other: [
      {
        rel: "icon",
        url: "/icon.png",
      },
    ],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GlobalLayout>{children}</GlobalLayout>
      </body>
    </html>
  );
}
