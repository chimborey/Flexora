
import { MdOutlineMail } from "react-icons/md";

export default function Home_Newsletter() {
      return (
            <>
                  {/* top */}
                  <div className=" flex flex-col text-center space-y-3 mb-7">
                        <h3 data-aos='fade-up' data-aos-delay='300' className=' text-4xl capitalize font-bold text-black'>subcribe to our newsletter</h3>
                        <p data-aos='fade-up' data-aos-delay='600' className=" text-sm text-gray-500">Subscribe to our newsletter and stay updated with the latest news, features, and updates. We share useful tips, product improvements, and exclusive offers that help you grow faster. Join our community and never miss important updates again.</p>
                        <form data-aos='fade-up' data-aos-delay='900' action="" className=" w-full h-12 py-3 px-3 rounded-lg bg-white shadow-md backdrop-blur-md flex items-center justify-between shadow-gray-300">
                              <div className=" flex items-center gap-1">
                                    <MdOutlineMail size={18} className=" text-gray-400" />
                                    <input type="text" name="" id="" placeholder="enter your email here" className=" focus:outline-none focus:border-none capitalize" />
                              </div>
                              <button className=" py-2 px-5 rounded-lg text-center bg-blue-500 text-white capitalize text-sm">subsribe</button>
                        </form>
                  </div>
            </>
      )
}