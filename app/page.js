import React  from "react"
import './globals.css'
import Header from "./components/Header"
import Home from "./components/Home"
import Features from "./components/Features"
import Services from "./components/Services"
import Work from "./components/Work"
import Pricing from "./components/Pricing"
import Footer from "./components/Footer"

function App() {

  return (
    <div className="appBg">
     <Header/>
     <Home/>
     <Features/>
     <Work/>
     <Services/>
     <Pricing/>
     <Footer/>
    </div>
  )
}

export default App
