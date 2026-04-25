
import HAbout1 from '../../assets/about-1.jpg'
import HAbout2 from '../../assets/about-2.jpg'



export default function Home_About() {
      return (
            <section className=" w-full overflow-hidden py-14">
                  <main className=" mt-12 container">
                        <div className=' grid grid-cols-1 md:grid-cols-2 gap-6'>
                              {/* =============================================left-img=============================================== */}
                              <div data-aos='fade-right' data-aos-delay='600'>
                                    <div className=' relative hover:scale-95 duration-300 cursor-pointer rounded-lg transition-all'>
                                          <img src={HAbout1} alt="" className=' w-full h-96 rounded-lg' />
                                          <div className=' absolute inset-0 bg-black/45 rounded-lg' />
                                          <div className=' absolute bottom-0 left-0'>
                                                <img src={HAbout2} alt="" className=' home-abut w-64 h-36 sm:w-80 sm:h-48 rounded-lg z-10 relative' />
                                          </div>
                                    </div>
                              </div>
                              {/* =============================================right-text============================================= */}
                              <div className=' flex flex-col space-y-3'>
                                    <span data-aos='fade-left' data-aos-delay='300' className=' text-xs text-blue-500 capitalize'>about us</span>
                                    <h3 data-aos='fade-left' data-aos-delay='600' className=' text-4xl capitalize font-bold text-black'>we help grow and <br /> achieve your business</h3>
                                    <p data-aos='fade-left' data-aos-delay='900' className=' text-sm text-gray-500'>Excepture sint occeat cpidatat non proident sunt culpa qui officia anim. Nemo enim magni dolore. Learn more</p>
                                    <div data-aos='fade-left' data-aos-delay='1200'>
                                          <button className=' py-2 px-4 bg-blue-500 rounded-lg text-white capitalize'>get started</button>
                                    </div>
                                    <div className=' flex items-center gap-3' data-aos='fade-left' data-aos-delay='1500'>
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
                        </div>
                  </main>
            </section>
      )
}