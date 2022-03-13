import { Footer, Navbar, Newsletter, Organize, Partners, Testimonials } from '../../Components'
import React from 'react'
import { HomeDetails } from '../../Components'
import { Features } from '../../Components'
export default function Home () {
  return (
    <>
      <Navbar />
      <HomeDetails />
      <Features />
      <Organize />
      {/* <Testimonials /> */}
      <Newsletter/>
      <Partners/>
      <Footer />
    </>
  )
}
