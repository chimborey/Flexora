
import HPayment1 from '../../assets/woman-give-payment.jpg'
import HPaypal from '../../assets/paypal.png'
import HCircle from '../../assets/payoneer.png'
import HVisa from '../../assets/visa.png'
import { FaCheck } from "react-icons/fa6";
export default function Home_Payment() {
      const paymentsData = [
            {
                  id:1,
                  icon: <FaCheck />,
                  name: 'Many payments options',
            },
            {
                  id:2,
                  icon: <FaCheck />,
                  name: 'Guaranteed payments',
            },
            {
                  id:3,
                  icon: <FaCheck />,
                  name: 'First and easy payments',
            },
      ];
      return (
            <section className=" grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* ====================================================left-img==================================== */}
                  <div data-aos='fade-right' data-aos-delay='600'>
                        <div className=' relative hover:scale-95 duration-300 transition-all cursor-pointer'>
                              <img src={HPayment1} alt="HB1" className=' w-full h-96 rounded-lg' />
                              <div className=' absolute -bottom-3 -right-3 bg-white shadow-md shadow-gray-300 rounded-lg w-72 overflow-hidden py-3 px-3'>
                                    <div className=' flex flex-col space-y-3'>
                                          <h3 className=' text-md text-black capitalize'>payments option</h3>
                                          <div className=' flex flex-col space-y-3'>
                                                {/* payapl */}
                                                <div className=' flex items-center justify-between'>
                                                      <div className='flex items-center gap-3'>
                                                            <img src={HPaypal} alt="HPaypal" className='w-8 h-8'/>
                                                            <h5 className=' text-sm text-black capitalize'>paypal</h5>
                                                      </div>
                                                      <input type="radio" name="" id="" />
                                                </div>
                                                {/* circle */}
                                                <div className=' flex items-center justify-between'>
                                                      <div className='flex items-center gap-3'>
                                                            <img src={HCircle} alt="HPaypal" className='w-8 h-8'/>
                                                            <h5 className=' text-sm text-black capitalize'>paypal</h5>
                                                      </div>
                                                      <input type="radio" name="" id="" />
                                                </div>
                                                {/* visa */}
                                                <div className=' flex items-center justify-between'>
                                                      <div className='flex items-center gap-3'>
                                                            <img src={HVisa} alt="HPaypal" className='w-8 h-8'/>
                                                            <h5 className=' text-sm text-black capitalize'>paypal</h5>
                                                      </div>
                                                      <input type="radio" name="" id="" />
                                                </div>
                                                {/* btn */}
                                                <button className=' text-white capitalize tetx-md bg-blue-500 rounded-lg py-2 px-2 text-center'>choose payments</button>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>
                  {/* ====================================================right-text==================================== */}
                  <div className=' flex flex-col space-y-3'>
                        <span data-aos='fade-left' data-aos-delay='300' className=' text-xs text-blue-500 capitalize'>paypal purpose</span>
                        <h3 data-aos='fade-left' data-aos-delay='600' className=' text-4xl capitalize font-bold text-black'>payments<span className=' text-blue-500'> will be easier</span> <br /> with many options</h3>
                        <p data-aos='fade-left' data-aos-delay='900' className=' text-sm text-gray-500'>Excepture sint occeat cpidatat non proident sunt culpa qui officia anim. Nemo enim magni dolore. Learn more</p>
                        <div data-aos='fade-left' data-aos-delay='1200' className=' grid grid-cols-1 md:grid-cols-2 gap-3'>
                              {
                                    paymentsData.map((pd) => {
                                          const{id, name, icon} = pd
                                          return(
                                                <div key={id} className=' w-full overflow-hidden flex items-center gap-2'>
                                                      <button className=' text-md text-blue-500'>{icon}</button>
                                                      <h5 className=' text-sm text-gray-500'>{name}</h5>
                                                </div>
                                          )
                                    })
                              }
                        </div>
                  </div>
            </section >
      )
}