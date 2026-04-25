
import { FaStar } from 'react-icons/fa'
import HCTeam1 from '../../assets/team-1.jpg'
import HCTeam2 from '../../assets/team-2.jpg'
import HCTeam3 from '../../assets/team-3.jpg'
import HCTeam4 from '../../assets/team-4.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';


export default function Home_Contact() {
      const contactData = [
            {
                  id: 1,
                  imgurl: HCTeam1,
                  desc: 'This platform has completely transformed the way I manage my work. It is very easy to use, fast, and reliable. I was able to save a lot of time and improve my productivity significantly.',
                  name: 'Farhan Rio',
                  skill: 'happy customer',
                  icon: <FaStar />
            },
            {
                  id: 2,
                  imgurl: HCTeam2,
                  desc: 'I am really impressed with the overall experience. The interface is clean and user-friendly, and everything works smoothly. I feel secure using this service every day.',
                  name: 'Jenny Wilson',
                  skill: 'happy customer',
                  icon: <FaStar />
            },
            {
                  id: 3,
                  imgurl: HCTeam3,
                  desc: 'The features provided are exactly what I needed. Customer support is also very helpful and responsive. I would highly recommend this platform to anyone looking for ​service.',
                  name: 'Jay Rio',
                  skill: 'happy customer',
                  icon: <FaStar />
            },
            {
                  id: 4,
                  imgurl: HCTeam4,
                  desc: 'Everything works perfectly and the performance is excellent. I have tried many similar services before, but this one stands out the most in terms of reliability and ease of use.',
                  name: 'Johnson',
                  skill: 'happy customer',
                  icon: <FaStar />
            },
      ];
      return (
            <section className=" w-full overflow-hidden py-14">
                  <main className=" mt-12 container">
                        {/* top */}
                        <div className=" flex flex-col space-y-3 mb-7">
                              <span data-aos='fade-up' data-aos-delay='300' className=' text-xs text-blue-500 capitalize'>testimonials</span>
                              <h3 data-aos='fade-up' data-aos-delay='600' className=' text-4xl capitalize font-bold text-black'>what our beloved customer say about us</h3>
                              <div data-aos='fade-up' data-aos-delay='900'>
                                    <button className=" text-white capitalize text-center text-sm bg-blue-500 py-3 px-5 rounded-lg">contact us</button>
                              </div>
                        </div>
                        {/* center */}
                        <Swiper
                              slidesPerView={3}
                              spaceBetween={20}
                              loop={true}
                              modules={[Autoplay]}
                              autoplay={{ delay: 1500 }}
                              speed={1500}
                              breakpoints={{
                                    320: { slidesPerView: 1, spaceBetween: 10 },
                                    640: { slidesPerView: 2, spaceBetween: 15 },
                                    1024: { slidesPerView: 3, spaceBetween: 20 },
                                    1280: { slidesPerView: 3, spaceBetween: 20 },
                              }}
                        >
                              {
                                    contactData.map((cd) => {
                                          const { id, imgurl, skill, desc, icon, name } = cd
                                          return (
                                                <SwiperSlide key={id}>
                                                      <div data-aos='fade-up' data-aos-delay='1200' className=' w-full overflow-hidden bg-white rounded-lg cursor-pointer px-3 py-3 hover:bg-blue-500 shadow-sm backdrop-blur-sm shadow-gray-200'>
                                                            <div className=' flex flex-col space-y-3'>
                                                                  <div className=' flex items-center gap-3'>
                                                                        <img src={imgurl} alt="imgUrl" className=' w-12 h-12 rounded-full' />
                                                                        <div className=' flex flex-col'>
                                                                              <h3 className=' text-md text-black capitalize'>{name}</h3>
                                                                              <span className=' text-xs text-gray-300 capitalize'>{skill}</span>
                                                                        </div>
                                                                  </div>
                                                                  <div>
                                                                        <p className=' text-sm text-gray-500'>{desc}</p>
                                                                  </div>
                                                                  <div className=' flex items-center'>
                                                                        <button className=' text-yellow-500 text-md'>{icon}</button>
                                                                        <button className=' text-yellow-500 text-md'>{icon}</button>
                                                                        <button className=' text-yellow-500 text-md'>{icon}</button>
                                                                        <button className=' text-yellow-500 text-md'>{icon}</button>
                                                                        <button className=' text-yellow-500 text-md'>{icon}</button>
                                                                  </div>
                                                            </div>
                                                      </div>
                                                </SwiperSlide>
                                          )
                                    })
                              }
                        </Swiper>
                  </main>
            </section>
      )
}