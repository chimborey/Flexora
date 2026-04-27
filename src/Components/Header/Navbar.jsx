
import { CiMenuFries } from "react-icons/ci";
import { MdOutlineCloseFullscreen } from "react-icons/md";
import Scorpion from '../../assets/LKS.jpg'
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
      // scrolled
      const [scrolled, setScrolled] = useState(false)
      useEffect(() => {
            const handleScroll = () => {
                  setScrolled(window.scrollY > 50)
            }
            window.addEventListener("scroll", handleScroll)
            return () => {
                  window.removeEventListener("scroll", handleScroll)
            }
      })
      // menuList
      const menuList = [
            { id: 1, name: 'home', path: '/' },
            { id: 2, name: 'about', path: '/about' },
            { id: 3, name: 'services', path: '/services' },
            { id: 4, name: 'portfolio', path: '/portfolio' },
            { id: 5, name: 'contact', path: '/contact' },
      ]
      // clickMenu
      const [clickMenu, setClickMenu] = useState(false)
      return (
            <section className={` w-full fixed z-50 shadow-sm backdrop-blur-sm border-b ${scrolled ? 'bg-white' : 'bg-transparent'}`}>
                  <nav className=" container h-14 flex justify-between items-center" data-aos='fade-down' data-aos-delay='600'>
                        {/* logo */}
                        <Link to="/" className=" flex items-center gap-1">
                              <img src={Scorpion} alt="Scorpion" className="h-9 w-9 rounded-full" />
                              <h3 className=" text-black text-xl font-bold capitalize">flex<span className=" text-blue-500">ora</span></h3>
                        </Link>
                        {/* menuList */}
                        <div className=" py-14 hidden md:block">
                              <div className=" flex items-center gap-7">
                                    {
                                          menuList.map((ml) => {
                                                const { id, name, path } = ml
                                                return (
                                                      <Link key={id} to={path} className=" text-sm text-gray-700 capitalize hover:text-blue-500 duration-300 transition-all">{name}</Link>
                                                )
                                          })
                                    }
                              </div>
                        </div>
                        {/* mobile menu */}
                        <div className=" flex items-center gap-3">
                              {/* login */}
                              <div className=" flex items-center gap-1">
                                    <button className=" text-md text-blue-500 capitalize py-1 px-5 rounded-lg border border-blue-500 hover:bg-blue-500 hover:text-white duration-300 transition-all">login</button>
                                    <button className=" text-md text-white capitalize py-1 px-4 rounded-lg border hover:bg-white hover:text-blue-500 border-blue-500 bg-blue-500 duration-300 transition-all">sign up</button>
                              </div>
                              {/* clickMenu */}
                              <button className=" md:hidden cursor-pointer">
                                    {
                                          clickMenu ? (
                                                <MdOutlineCloseFullscreen className=" text-2xl text-gray-700" onClick={() => setClickMenu(false)} />
                                          ) : (
                                                <CiMenuFries className=" text-2xl text-gray-700" onClick={() => setClickMenu(true)} />
                                          )
                                    }
                              </button>
                        </div>
                  </nav>
                  {/* mobile menuList */}
                        <div className={` w-full absolute md:hidden py-14 duration-300 transition-all bg-slate-50 shadow-md backdrop-blur-md ${clickMenu ? "translate-x-0" :  "-translate-x-full"}`}>
                              <div className=" flex items-center justify-center flex-col space-y-3">
                                    {
                                          menuList.map((ml) => {
                                                const { id, name, path } = ml
                                                return (
                                                      <Link key={id} to={path} className=" text-sm text-gray-700 capitalize hover:text-blue-500 duration-300 transition-all">{name}</Link>
                                                )
                                          })
                                    }
                              </div>
                        </div>
            </section>
      )
}