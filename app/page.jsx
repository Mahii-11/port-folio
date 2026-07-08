import Hero from '@/components/hero'
import Navbar from '@/components/navbar'
import About from '@/components/about'
import Skills from '@/components/skills'
import Experience from '@/components/experience'
import Projects from '@/components/projects'
import Testimonials from '@/components/testimonials'
import Contact from '@/components/contact'
import Footer from '@/components/footer'
import EcomProject from '../components/EcomProject'
import DonationPlatforms from '../components/DonationPlatforms'
export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <EcomProject />
      <DonationPlatforms/>
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}
