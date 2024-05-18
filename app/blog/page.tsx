import BlogData from '@/components/BlogComponent/BlogData'
import ReusableHero from '@/components/reusableComp/ReusableHero'
import React from 'react'
import { Metadata } from "next";

 const metadata: Metadata = {
  title: "Blog - Mantra",
  description:
    "Read our latest blog posts on yoga, wellness, and holistic living. Stay informed and inspired with Mantra.",
  applicationName: "Mantra",
  category: "fitness",
  openGraph: {
    title: "Blog - Mantra",
    description:
      "Read our latest blog posts on yoga, wellness, and holistic living. Stay informed and inspired with Mantra.",
    url: "https://mantra.example.com/blog",
    type: "website",
  },
};

const Blog = () => {
  return (
    <div>
      <ReusableHero text='Blog' />
      <BlogData />
    </div>
  )
}

export default Blog
