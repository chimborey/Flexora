
import HB1 from '../../assets/business-track.jpg'
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { SiWeasyl } from "react-icons/si";
import analysis from '../../assets/analysis.jpg'
export default function Home_Portfolio() {
      const businessData = [
            {
                  name: 'business analysis',
                  desc: 'Gain valuable insights with real-time data analysis to improve your business decisions.',
                  icon: <TbBrandGoogleAnalytics />
            },
            {
                  name: 'easy access',
                  desc: 'Access your data anytime, anywhere with a simple and user-friendly interface.',
                  icon: <SiWeasyl />
            },
      ];
      return (
            <section className=' w-full overflow-hidden py-14'>
                  <main className=' mt-12 container'>
                        <div className=" grid grid-cols-1 md:grid-cols-2 gap-6">
                              {/* ====================================================left-text==================================== */}
                              <div className=' flex flex-col space-y-3'>
                                    <span data-aos='fade-right' data-aos-delay='300' className=' text-xs text-blue-500 capitalize'>business track</span>
                                    <h3 data-aos='fade-right' data-aos-delay='600' className=' text-4xl capitalize font-bold text-black'>control your business <br /> <span className=' text-blue-500'> Easily & quickly</span></h3>
                                    <p data-aos='fade-right' data-aos-delay='900' className=' text-sm text-gray-500'>Excepture sint occeat cpidatat non proident sunt culpa qui officia anim. Nemo enim magni dolore. Learn more</p>
                                    <div data-aos='fade-right' data-aos-delay='1200' className=' flex items-center gap-3'>
                                          {
                                                businessData.map((bd) => {
                                                      const { id, name, icon, desc } = bd
                                                      return (
                                                            <div key={id} className=' w-full overflow-hidden flex items-center gap-3'>
                                                                  <button className=' w-9 h-9 rounded-full px-2 py-2 bg-blue-50'>{icon}</button>
                                                                  <div className=' flex flex-col space-y-3'>
                                                                        <h3 className=' text-md text-black capitalize font-bold'>{name}</h3>
                                                                        <p className=' text-sm text-gray-300'>{desc}</p>
                                                                  </div>
                                                            </div>
                                                      )
                                                })
                                          }
                                    </div>
                              </div>
                              {/* ====================================================right-img==================================== */}
                              <div data-aos='fade-left' data-aos-delay='600'>
                                    <div className=' relative hover:scale-95 duration-300 transition-all cursor-pointer'>
                                          <img src={HB1} alt="HB1" className=' w-full h-96 rounded-lg' />
                                          <div>
                                                <img src={analysis} alt="" className=' w-36 h-36 rounded-lg absolute bottom-3 left-3' />
                                          </div>
                                    </div>
                              </div>
                        </div >
                  </main>
            </section>
      )
}