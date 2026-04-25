

import HFPayment1 from '../../assets/payment-card.png'
import HFPayment3 from '../../assets/document.png'
import HFPayment2 from '../../assets/security.png'
export default function Home_Feature() {
      const featureData = [
            {
                  img: HFPayment1,
                  name: 'easy payment',
                  desc: 'Make fast and simple payments with a smooth and user-friendly experience.',
                  color: 'bg-green-50'
            },
            {
                  img: HFPayment2,
                  name: 'secure first',
                  desc: 'Your transactions are protected with advanced security and encryption.',
                  color: 'bg-white'
            },
            {
                  img: HFPayment3,
                  name: 'automated reports',
                  desc: 'Get detailed reports automatically to track your payments and performance.',
                  color: 'bg-rose-50'
            },
      ];
      return (
            <>
                  {/* top */}
                  <div className=" flex flex-col space-y-3 text-center">
                        <span data-aos='fade-up' data-aos-delay='300' className=' text-xs text-blue-500 capitalize'>our feature</span>
                        <h3 data-aos='fade-up' data-aos-delay='600' className=' text-4xl capitalize font-bold text-black'>our best exciting feature</h3>
                  </div>
                  {/* center */}
                  <div className=' grid grid-cols-1 md:grid-cols-3 gap-6 mt-7'>
                        {
                              featureData.map((fd) => {
                                    const { id, name, img, desc, color } = fd
                                    return (
                                          <div data-aos='fade-up' data-aos-delay='900' key={id} className=' w-full overflow-hidden flex flex-col space-y-3 rounded-lg bg-white px-3 py-3 cursor-pointer shadow-md backdrop-blur-md shadow-gray-300 hover:bg-blue-500'>
                                                <img src={img} alt="" className={` w-12 h-12 rounded-lg px-2 py-2 ${color}`} />
                                                <div className=' flex flex-col space-y-3'>
                                                      <h3 className=' tetx-md text-black capitalize font-bold hover:text-white'>{name}</h3>
                                                      <p className=' text-sm text-gray-400'>{desc}</p>
                                                </div>
                                          </div>
                                    )
                              })
                        }
                  </div>
            </>
      )
}