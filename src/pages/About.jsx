import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

function About() {
  return (
    <main className="relative">
      <Nav />
      <section className='bgAbout'>
      <h1>About Us</h1>
      <p>We provide the solution for business development</p>
      </section>
      <Footer />
    </main>
  )
}

export default About