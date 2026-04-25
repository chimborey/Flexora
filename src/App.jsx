import { BrowserRouter, Route, Routes } from "react-router-dom";
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from "react";
import Home from "./Page/Home";
import Header from "./Page/Header";
import ScrollToUp from "./Page/ScrollToUp";
import About from "./Page/About";
import Services from "./Page/Services";
import Portfolio from "./Page/Portfolio";
import Contact from "./Page/Contact";
import Footer from "./Page/Footer";


export default  function App(){
  // aos
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 100,
      once: false
    })
  }, [])
  return(
    <BrowserRouter>
    <Header />
    <ScrollToUp />
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/services" element={<Services />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
      <Route path="/portfolio" element={<Portfolio />}></Route>
    </Routes>
    <Footer />
    </BrowserRouter>
  )
}