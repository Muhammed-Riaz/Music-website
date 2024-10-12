
"use client"

import HeroSection from "./components/HeroSection"
import FeaturedSection from "./components/FeaturedSection"
import StickyScrollRevealDemo from "./components/ui/Whychoseus"
import Testdemocard from "./components/ui/Testdemocard"
import Upcomingweb from "./components/ui/Upcomingweb"
import Insterctoros from "./components/ui/insterctoros"
import Footer from "./components/ui/Footer"

// import Whychoseus from "./components/ui/whychoseus"


function Homepage(){
  return (

    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]] ">
<HeroSection />
<FeaturedSection/>
<StickyScrollRevealDemo/>
<Testdemocard/>
<Upcomingweb/>
<Insterctoros/>
<Footer/>
    </main>
    
  )
}

export default Homepage