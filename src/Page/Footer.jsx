import { Link } from "react-router-dom";
import Scorpion from '../assets/Scorpion.jpg'
import { FaFacebook } from "react-icons/fa";
import { AiFillYoutube } from "react-icons/ai";
import { FaGithub } from "react-icons/fa6";
import { TbBrandVercelFilled } from "react-icons/tb";
import { FaTelegramPlane } from "react-icons/fa";

export default function Footer() {
      return (
            <section className=" bg-slate-700 w-full overflow-hidden py-14">
                  <main className=" mt-12 container">
                        <div className=" grid grid-cols-1 md:grid-cols-5 gap-6 border-b-2 border-gray-300 pb-7">
                              {/* logo */}
                              <div data-aos='zoom-in' data-aos-delay='300' className=" flex flex-col space-y-3">
                                    <Link to="/" className=" flex items-center gap-1">
                                          <img src={Scorpion} alt="Scorpion" className="h-9 w-9 rounded-full" />
                                          <h3 className=" text-black text-xl font-bold capitalize">flex<span className=" text-blue-500">ora</span></h3>
                                    </Link>
                                    <p className=" text-sm text-gray-400"></p>
                                    <div className=" flex items-center gap-3">
                                          <Link to={'https://www.facebook.com/chim.borey.637181?mibextid=ZbWKwL'}>
                                                <FaFacebook size={18} className="hover:text-gray-500 text-white cursor-pointer hover:opacity-45" />
                                          </Link>
                                          <Link to={'www.youtube.com/@learncode2026'}>
                                                <AiFillYoutube size={18} className="hover:text-gray-500 text-white cursor-pointer hover:opacity-45" />
                                          </Link>
                                          <Link to={'/'}>
                                                <FaGithub size={18} className="hover:text-gray-500 text-white cursor-pointer hover:opacity-45" />
                                          </Link>
                                          <Link to={'/'}>
                                                <TbBrandVercelFilled size={18} className="hover:text-gray-500 text-white cursor-pointer hover:opacity-45" />
                                          </Link>
                                          <Link to={'https://t.me/software_engineer25'}>
                                                <FaTelegramPlane size={18} className="hover:text-gray-500 text-white cursor-pointer hover:opacity-45" />
                                          </Link>
                                    </div>
                              </div>
                              {/* about */}
                              <div data-aos='zoom-in' data-aos-delay='600' className=" flex flex-col space-y-3 items-center md:items-start">
                                    <h3 className=" text-md text-white capitalize font-bold">About</h3>
                                    <div className=" flex flex-col gap-3">
                                          <span className=" text-gray-400 capitalize text-sm">about us</span>
                                          <span className=" text-gray-400 capitalize text-sm">testimonails</span>
                                          <span className=" text-gray-400 capitalize text-sm">security</span>
                                          <span className=" text-gray-400 capitalize text-sm">pricing</span>
                                    </div>
                              </div>
                              {/* partner */}
                              <div data-aos='zoom-in' data-aos-delay='900' className=" flex flex-col space-y-3 items-center md:items-start">
                                    <h3 className=" text-md text-white capitalize font-bold">partner</h3>
                                    <div className=" flex flex-col gap-3">
                                          <span className=" text-gray-400 capitalize text-sm">integration</span>
                                          <span className=" text-gray-400 capitalize text-sm">affiliate program</span>
                                          <span className=" text-gray-400 capitalize text-sm">refer a friends</span>
                                          <span className=" text-gray-400 capitalize text-sm">commission</span>
                                    </div>
                              </div>
                              {/* help */}
                              <div data-aos='zoom-in' data-aos-delay='1200' className=" flex flex-col space-y-3 items-center md:items-start">
                                    <h3 className=" text-md text-white capitalize font-bold">help</h3>
                                    <div className=" flex flex-col gap-3">
                                          <span className=" text-gray-400 capitalize text-sm">account</span>
                                          <span className=" text-gray-400 capitalize text-sm">support center</span>
                                          <span className=" text-gray-400 capitalize text-sm">privacy policy</span>
                                          <span className=" text-gray-400 capitalize text-sm">teams $ conditions</span>
                                    </div>
                              </div>
                              {/* contact us */}
                              <div data-aos='zoom-in' data-aos-delay='1500' className=" flex flex-col space-y-3 items-center md:items-start">
                                    <h3 className=" text-md text-white capitalize font-bold">(+885) 123 456 7890</h3>
                                    <div className=" flex flex-col gap-3">
                                          <span className=" text-gray-400 capitalize text-sm">scode2026@gmail.com</span>
                                          <span className=" text-gray-400 capitalize text-sm">phnompenh, cambodai</span>
                                    </div>
                              </div>
                        </div>
                        <h5 data-aos='zoom-in' data-aos-delay='1500' className=" text-sm text-gray-300 capitalize mt-7 text-center">@2026 all copyright reserved by <span className=" text-yellow-500">uicode</span></h5>
                  </main>
            </section>
      )
}