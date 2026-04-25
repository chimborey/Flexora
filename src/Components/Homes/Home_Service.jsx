
import { FaCheck } from "react-icons/fa6";


export default function Home_Service() {
      const servicesData = [
            {
                  id: 1,
                  span: 'basic',
                  price: 199,
                  month: '/montly',
                  icon: <FaCheck />,
                  desc1: '3 regular ads',
                  desc2: 'no featured ads',
                  desc3: 'no top ads',
                  desc4: 'limted support',
            },
            {
                  id: 2,
                  span: 'standrad',
                  price: 249,
                  month: '/montly',
                  icon: <FaCheck />,
                  desc1: '3 regular ads',
                  desc2: 'no featured ads',
                  desc3: 'no top ads',
                  desc4: 'limted support',
            },
            {
                  id: 3,
                  span: 'premiun',
                  price: 499,
                  month: '/montly',
                  icon: <FaCheck />,
                  desc1: '3 regular ads',
                  desc2: 'no featured ads',
                  desc3: 'no top ads',
                  desc4: 'limted support',
            },
      ]
      return (
            <section className=" w-full overflow-hidden py-14 bg-slate-50">
                  <main className=" mt-12 container">
                        {/* top */}
                        <div className=" flex flex-col space-y-3 text-center">
                              <span data-aos='fade-up' data-aos-delay='300' className=' text-xs text-blue-500 capitalize'>pricing list</span>
                              <h3 data-aos='fade-up' data-aos-delay='600' className=' text-4xl capitalize font-bold text-black'>choose your best plan</h3>
                              <p data-aos='fade-up' data-aos-delay='900' className=" text-gray text-sm text-start">Choose the perfect plan that fits your business goals and budget.  Our pricing is designed to provide flexibility, scalability, and value  for individuals, startups, and growing companies. Enjoy powerful features,  secure performance, and reliable support to help you succeed in every step  of your journey. Upgrade anytime as your needs grow and unlock more advanced tools.</p>
                        </div>
                        {/* center */}
                        <div data-aos='fade-up' data-aos-delay='1200' className=" grid grid-cols-1 md:grid-cols-3 gap-6 mt-7">
                              {
                                    servicesData.map((sd) => {
                                          const{id, price, month, span, icon, desc1, desc2, desc3, desc4} = sd
                                          return(
                                                <div key={id} className=" w-full overflow-hidden bg-white rounded-lg py-3 px-3 cursor-pointer hover:bg-blue-200 duration-300 transition-all shadow-md backdrop-blur-md shadow-gray-300 space-y-3">
                                                      <span className=" uppercase text-gray-400 text-sm">{span}</span>
                                                      <div className=" flex items-center gap-3">
                                                            <span className=" text-4xl text-blue-700 font-bold">${price}</span>
                                                            <span className=" text-xs text-gray-400 capitalize">{month}</span>
                                                      </div>
                                                      <div className=" flex flex-col space-y-3">
                                                            <div className=" flex items-center gap-3">
                                                                  <button className=" text-gray-400 text-xs">{icon}</button>
                                                                  <span>{desc1}</span>
                                                            </div>
                                                            <div className=" flex items-center gap-3">
                                                                  <button className=" text-gray-400 text-xs">{icon}</button>
                                                                  <span>{desc2}</span>
                                                            </div>
                                                            <div className=" flex items-center gap-3">
                                                                  <button className=" text-gray-400 text-xs">{icon}</button>
                                                                  <span>{desc3}</span>
                                                            </div>
                                                            <div className=" flex items-center gap-3">
                                                                  <button className=" text-gray-400 text-xs">{icon}</button>
                                                                  <span>{desc4}</span>
                                                            </div>
                                                      </div>
                                                      <button className=" w-full py-2 px-2 rounded-lg bg-blue-100 hover:bg-white mx-auto flex justify-center items-center text-blue-500 uppercase text-sm mt-5 mb-5 text-center">
                                                            selection plan
                                                      </button>
                                                </div>
                                          )
                                    })
                              }
                        </div>
                  </main>
            </section>
      )
}