import Hero from "./components/Hero"
import Services from "./components/Services"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Portfolio from "./components/Portfolio"
import WorkProcess from "./components/WorkProcess"

function App() {
  return (
    <div>
      <Header />
      <main className="pt-20">
        <Hero />
        <Services />
        <WorkProcess />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
