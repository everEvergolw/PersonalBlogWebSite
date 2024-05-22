import { Fragment } from "react";

import Hero  from "../conponents/home-page/hero";
import FeaturedPosts from "../conponents/home-page/featured-posts";

const DUMMY_POSTS= [

  {
    title:'Getting Started with Nextjs', 
    image:'getting-started-nextjs.png', 
    excerpt: 'The React Framework for the Web Used by some of the worlds largest companies, Next.js enables you to create high-quality web applications with the power of React components.', 
    date: '2022-02-10', 
    slug:'getting-started-with-nextjs' },
  {
      title:'Getting Started with Nextjs2', 
      image:'getting-started-nextjs.png', 
      excerpt: 'The React Framework for the Web Used by some of the worlds largest companies, Next.js enables you to create high-quality web applications with the power of React components.', 
      date: '2022-02-10', 
      slug:'getting-started-with-nextjs2' },
  {
        title:'Getting Started with Nextjs3', 
        image:'getting-started-nextjs.png', 
        excerpt: 'The React Framework for the Web Used by some of the worlds largest companies, Next.js enables you to create high-quality web applications with the power of React components.', 
        date: '2022-02-10', 
        slug:'getting-started-with-nextjs3' },
  {
          title:'Getting Started with Nextjs4', 
          image:'getting-started-nextjs.png', 
          excerpt: 'The React Framework for the Web Used by some of the worlds largest companies, Next.js enables you to create high-quality web applications with the power of React components.', 
          date: '2022-02-10', 
          slug:'getting-started-with-nextjs4' }



];


function HomePage(){


  return <Fragment> 

          <Hero/>
          <FeaturedPosts posts={DUMMY_POSTS}/>
      </Fragment>


}




export default HomePage;

// 1) Hero => Present ourselves
// 2) Featured Posts
