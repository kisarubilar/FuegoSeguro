import React from 'react'
import Navbar from '../components/Navbar'
import HeroIntro from '../components/HeroIntro'
import NewsSection from '../components/NewsSection'
import MapSection from '../components/MapSection'
import ResourcesSection from '../components/ResourcesSection'
import ReportSection from '../components/ReportSection'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className="home-container bg-light">
      <Navbar />
      <main className="container my-4">
        <HeroIntro />
        <NewsSection />
        <MapSection />
        <ResourcesSection />
        <ReportSection />
      </main>
      <Footer />
    </div>
  )
}

export default Home