'use client'
import React from 'react'
import Navbar from './components/navbar/page'
import Hero from './components/hero/page'
import About from './components/about/page'
import Project from './components/project/page'
import Footer from './components/footer/page'

const page = () => {
  return (
    <>
      <Navbar />
      <article className='content'>
        <section id='home'>
            <Hero />
        </section>
        <section id='About'>
            <About />
        </section>
        <section id='Project'>
            <Project />
        </section>
      </article>
      <footer id='Contact'>
        <Footer />
      </footer>
    </>
  )
}

export default page