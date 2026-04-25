import { useEffect, useState } from "react"
import { FaArrowUp } from "react-icons/fa"




export default function ScrollToUp() {
      const [Scroll, setScroll] = useState(false)
      useEffect(() => {
            const handleScroll = () => {
                  if (window.scrollY > 300) {
                        setScroll(true)
                  } else {
                        setScroll(false)
                  }
            }
            window.addEventListener('scroll', handleScroll)
            return () => {
                  window.removeEventListener('scroll', handleScroll)
            }
      })
      const scrollUp = () => {
            window.scrollTo({
                  top: 0,
                  behavior: 'smooth'
            })
      }
      return (
            <section className=" fixed bottom-4 right-2 animate-pulse">
                  {
                        Scroll && (
                              <button onClick={scrollUp} className=" bg-red-400 flex items-center justify-center w-12 h-12 cursor-pointer rounded-full text-white">
                                    <FaArrowUp size={28}/>
                              </button>
                        )
                  }
            </section>
      )
}