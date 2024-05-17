import exp from "constants";
import { Links, HeroData, chooses, coachs,profileDatas, feedbacks } from "./types";

export const links: Links[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/classess", label: "Classes" },
  { href: "/blog", label: "Blog" },
  { href: "/shop", label: "Shop" },
  { href: "/contact", label: "Contact Us" },
];

export const heroData: HeroData[] = [
  {
    id: 1,
    title: "Stay Healthy",
    des: "Yoga For Peaceful, Calm, and Busy Lifestyle",
    des2: "Focuses on physical postures and breathing techniques for balance and flexibility.",
    img: "/home-2-slider-img-1.png",
  },
  {
    id: 2,
    title: "Realize Yourself",
    des: "Yoga An Treat For Inner Happiness",
    des2: "Incorporates flowing movements synchronized with breath to create a dynamic practice.",
    img: "/home-2-slider-img-2.png",
  },
  {
    id: 3,
    title: "Stay Healthy",
    des: "Find Your InnerPower With Yoga",
    des2: "Emphasizes meditation, chanting, and awakening spiritual energy through specific poses and breathwork.",
    img: "/home-2-slider-img-3.png",
  },
];

export const yogaAsanas = [
  "Tadasana",
  "Vrikshasana",
  "AdhoMukhaSvanasana",
  "Trikonasana",
  "Virabhadrasana ",

  "Utkatasana",
  "Uttanasana",
  "Balasana",
  "Sukhasana",
  "Padmasana",
  "Bhujangasana",
  "Sirsasana",
  "Sarvangasana",
  "Halasana",
  "Matsyasana",
  "Paschimottanasana",
  "ArdhaMatsyendrasana",
  "Navasana",
  "SetuBandhasana",
  "Dhanurasana",
  "SuptaVirasana",
  "SuptaBaddhaKonasana",
  "Garudasana",
  "Marjaryasana",
  "Bitilasana",
  "Anjaneyasana",
  "Bakasana",
  "Salabhasana",
  "ArdhaChandrasana",
  "ArdhaPinchaMayurasana",
  "Vasisthasana",
  "Ustrasana",
  "Dandasana",
  "Gomukhasana",
  "Hanumanasana",
  "Malasana",
  "Mayurasana",
  "ParivrttaParsvakonasana",
  "ParivrttaTrikonasana",
  "SalambaSirsasana",
  "SalambaSarvangasana",
  "ViparitaKarani",
];

export const choose: chooses[] = [
  {
    id: "01",
    title: "Meditaion",
    img: "/HOME2_class_image_02.jpg",
    des: "Nunc non blandit massa enim nec dui nunc mattis. Bibendum at varius vel pharetra. Volutpat consequat mauris nunc congue nisi. Elit scelerisque mauris pellentesque pulvinar.Viverra nam libero justo laoreet sit amet ante metus dictum cursus sit.",
  },
  {
    id: "02",
    title: "Relaxing Pose",
    img: "/home2_image_gallery_01.jpg",
    des: "Nunc non blandit massa enim nec dui nunc mattis. Bibendum at varius vel pharetra. Volutpat consequat mauris nunc congue nisi. Elit scelerisque mauris pellentesque pulvinar.Viverra nam libero justo laoreet sit amet ante metus dictum cursus sit.",
  },
  {
    id: "03",
    title: "Simhasana Yoga",
    img: "/home2_image_gallery_02.jpg",
    des: "Nunc non blandit massa enim nec dui nunc mattis. Bibendum at varius vel pharetra. Volutpat consequat mauris nunc congue nisi. Elit scelerisque mauris pellentesque pulvinar.Viverra nam libero justo laoreet sit amet ante metus dictum cursus sit.",
  },
  {
    id: "04",
    title: "Balancinü",
    img: "/HOME2_class_image_01.jpg",
    des: "Nunc non blandit massa enim nec dui nunc mattis. Bibendum at varius vel pharetra. Volutpat consequat mauris nunc congue nisi. Elit scelerisque mauris pellentesque pulvinar.Viverra nam libero justo laoreet sit amet ante metus dictum cursus sit.",
  },
];

export const coach:coachs[] = [
  {
    id: 1,
    title: "Joe Thomas",
    pos: " Yoga Coach",
    img: "/team-01.jpg",
  },
  {
    id: 2,
    title: "Genny",
    pos: " Yoga Instructor",
    img: "/team-02.jpg",
  },

  {
    id: 3,
    title: "John",
    pos: "Yoga Coach ",
    img: "/team-03.jpg",
  },
  {
    id: 4,
    title: "Ema",
    pos: "Manager ",
    img: "/team-04.jpg",
  },
  {
    id: 5,
    title: "Tonina",
    pos: "CEO ",
    img: "/team-05.jpg",
  },
];


export const profileData: profileDatas[] = [
  {
    id: 1,
    num: 15,
    title: "Year of Experience",
  },
  {
    id: 2,
    num: 10,
    title: "Number of Center",
  },

  {
    id: 3,
    num: 100,
    title: "Yoga Accessories",
  },
  {
    id: 4,
    num: 20,
    title: "Year of Experience",
  },
];

export const feedback: feedbacks[] = [
  {
    name: "Wyatt McDermott",
    feed: "Wyatt McDermott, with guidance from Ms. Joan Cremin, is excelling in his role as Delaney Gutkowski. His work is complemented by visuals crafted by Bradley Lang, adding a distinctive flair to the team's project.",
    position: "Delaney Gutkowski",
    img: "https://images.unsplash.com/photo-1554151228-14d9def656e4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZmFjZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Ena Donnelly",
    feed: "Ena Donnelly, under the mentorship of Aron Okuneva DDS, holds the position of Mack Romaguera Jr. The imagery by Maye Heaney enhances Ena's contributions, making them stand out.",
    position: "Mack Romaguera Jr.",
    img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Della Bode",
    feed: "Della Bode is diligently working as Juliana Haag, with Maverick Hermann providing essential feed support. Isac Larkin's images bring Della's work to life.",
    position: "Juliana Haag",
    img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Elenora Lubowitz",
    feed: "Elenora Lubowitz, guided by Hershel Conroy, thrives in her role as Miss Kylee Beier. Destinee Sporer's images enrich Elenora's contributions, making them visually appealing.",
    position: "Miss Kylee Beier",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Deonte Blanda DVM",
    feed: "Deonte Blanda DVM, with feed from Rhett Larson III, performs effectively as Gwendolyn Aufderhar. Leanne Wolff's images add an extra layer of quality to Deonte's work.",
    position: "Gwendolyn Aufderhar",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "Joy Bayer",
    feed: "Joy Bayer, supported by Ines Zulauf's feed, is excelling in her role as Lowell Little. Lavon McLaughlin's images bring Joy's efforts into sharp focus.",
    position: "Lowell Little",
    img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "Jailyn Doyle",
    feed: "Jailyn Doyle, with America Kertzmann's input, thrives as Mr. Brittany Stanton. Caden Johns' images provide a compelling visual complement to Jailyn's work.",
    position: "Mr. Brittany Stanton",
    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBvcnRyYWl0fGVufDB8fDB8fHww",
  },
  {
    name: "Ayana Herzog",
    feed: "Ayana Herzog, guided by Jasper Heathcote's feed, excels in her role as Ms. Everette Langosh. Melody Shanahan's images enhance Ayana's contributions, making them visually striking.",
    position: "Ms. Everette Langosh",
    img: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHBvcnRyYWl0fGVufDB8fDB8fHww",
  },
  {
    name: "Karlie Collins III",
    feed: "Karlie Collins III, supported by Mrs. Anya D'Amore's feed, performs effectively as Pasquale Hayes. Baby Strosin's images add depth to Karlie's work.",
    position: "Pasquale Hayes",
    img: "https://plus.unsplash.com/premium_photo-1683140621573-233422bfc7f1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fHBvcnRyYWl0fGVufDB8fDB8fHww",
  },
  {
    name: "Maverick Mohr",
    feed: "Maverick Mohr, with Lonnie Corwin's feed, excels in his role as Eldridge Gusikowski II. Rey Grant's images bring Maverick's efforts into sharp focus, making his contributions stand out.",
    position: "Eldridge Gusikowski II",
    img: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHBvcnRyYWl0fGVufDB8fDB8fHww",
  },
];
