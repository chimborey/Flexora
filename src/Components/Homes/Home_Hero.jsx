// chart
import { FaStar } from 'react-icons/fa'
import HChart1 from '../../assets/hero-chart1.png'
import HChart2 from '../../assets/hero-chart2.png'
// client
import HClient1 from '../../assets/hero-client-1.jpg'
import HClient2 from '../../assets/hero-client-2.jpg'
import HClient3 from '../../assets/hero-client-3.jpg'
// plane
import HPlane from '../../assets/hero-plane.png'
// img
import HeroImg from '../../assets/hero.png'
export default function Home_Hero() {
      return (
            <section className=" grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* ====================================================left-text======================================== */}
                  <div className=' flex flex-col space-y-3'>
                        <h3 data-aos='zoom-in' data-aos-delay='300' className=' text-black text-5xl font-bold capitalize'>speed your <br /> business with <br /> flexora</h3>
                        <p data-aos='zoom-in' data-aos-delay='600' className=' text-gray-500 text-xs'>speed your business with flexora - smart solutions that enhance performance, streamline workflow, and accelerate your path to success.</p>
                        <div data-aos='zoom-in' data-aos-delay='900' className=' flex items-center gap-3'>
                              <button className=' py-2 px-4 bg-blue-500 rounded-lg text-white capitalize'>get started</button>
                              <div className=' flex items-center gap-1'>
                                    <img src={HClient2} alt="" className='w-9 h-9 rounded-full' />
                                    <img src={HClient1} alt="" className='w-9 h-9 rounded-full -translate-x-4' />
                                    <img src={HClient3} alt="" className='w-9 h-9 rounded-full -translate-x-7' />
                                    <div className=' flex flex-col'>
                                          <h5 className=' text-sm text-black capitalize'>our happy customers</h5>
                                          <div className=' flex items-center gap-1'>
                                                <FaStar size={13} className=' text-yellow-500' />
                                                <span className=' text-xs text-gray-400'>4.9(1.5k Review)</span>
                                          </div>
                                    </div>
                              </div>
                        </div>
                        <div className=' flex items-center gap-3' data-aos='zoom-in' data-aos-delay='1200'>
                              <div className=' flex flex-col'>
                                    <h4 className=' text-md text-black capitalize font-bold'>1500+</h4>
                                    <p className=' text-xs text-gray-700 capitalize'>happy clients</p>
                              </div>
                              <div className=' w-0.5 h-9 bg-black'></div>
                              <div className=' flex flex-col'>
                                    <h4 className=' text-md text-black capitalize font-bold'>1751+</h4>
                                    <p className=' text-xs text-gray-700 capitalize'>completed work</p>
                              </div>
                              <div className=' w-0.5 h-9 bg-black'></div>
                              <div className=' flex flex-col'>
                                    <h4 className=' text-md text-black capitalize font-bold'>150+</h4>
                                    <p className=' text-xs text-gray-700 capitalize'>running work</p>
                              </div>
                        </div>
                  </div>
                  {/* =====================================================tight-img======================================= */}
                  <div data-aos='zoom-in' data-aos-delay='300'>
                        <div className=' relative bg-blue-400 rounded-lg h-80 cursor-pointer hover:scale-95 duration-300 transition-all'>
                              {/* img */}
                              <img src={HeroImg} alt="" className=' w-full h-96 -translate-y-1 rounded-lg' data-aos='zoom-in' data-aos-delay='600' />
                              {/* top-left */}
                              <div className=' absolute top-9 -left-9' data-aos='zoom-in' data-aos-delay='900'>
                                    <img src={HPlane} alt="" className=' bg-white shadow-md backdrop-blur-3xl shadow-gray-400 rounded-lg w-20 h-20' />
                              </div>
                              {/* bottom-left */}
                              <div className=' absolute bottom-0 -left-4 sm:-left-9' data-aos='zoom-in' data-aos-delay='1200'>
                                    <img src={HChart1} alt="" className=' bg-white shadow-md backdrop-blur-3xl shadow-gray-400 rounded-lg w-64 h-full' />
                              </div>
                              {/* top-right */}
                              <div className=' absolute top-24 -right-4 sm:-right-9' data-aos='zoom-in' data-aos-delay='1500'>
                                    <img src={HChart2} alt="" className=' bg-white shadow-md backdrop-blur-3xl shadow-gray-400 rounded-lg w-44 h-20' />
                              </div>
                        </div>
                  </div>
            </section>
      )
}