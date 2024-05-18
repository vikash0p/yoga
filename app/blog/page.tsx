import BlogData from '@/components/BlogComponent/BlogData'
import ReusableHero from '@/components/reusableComp/ReusableHero'
import React from 'react'

const Blog = () => {
  return (
    <div>
      <ReusableHero text='Blog' />
      <BlogData />
    </div>
  )
}

export default Blog
