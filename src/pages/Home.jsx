import HeroIntro from '../components/HeroIntro.jsx'
import NewsSection from '../components/NewsSection.jsx'
import MapSection from '../components/MapSection.jsx'
import ResourcesSection from '../components/ResourcesSection.jsx'
import ReportSection from '../components/ReportSection.jsx'

// Orden del boceto: Intro → Noticias → Mapa → Información (PDF/Videos) → Reporte → Pie de página
export default function Home() {
  return (
    <>
      <HeroIntro />
      <NewsSection />
      <MapSection />
      <ResourcesSection />
      <ReportSection />
    </>
  )
}
