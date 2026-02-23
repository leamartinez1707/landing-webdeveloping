import { useEffect } from 'react'
import Hero from "./components/Hero"
import PainPoints from "./components/PainPoints"
import Services from "./components/Services"
import UruFix from "./components/UruFix"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Header from "./components/Header"
import FloatingButtons from "./components/FloatingButtons"

function App() {
  useEffect(() => {
    // Configurar idioma para SEO
    document.documentElement.lang = 'es'
  }, [])

  return (
    <div>
      <Header />
      <main className="pt-26">
        <Hero />
        <PainPoints />
        <Services />
        <UruFix />
        <Contact />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  )
}

export default App
