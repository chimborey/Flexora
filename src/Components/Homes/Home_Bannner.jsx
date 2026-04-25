import HBSlick1 from '../../assets/logo-slide-1.png'
import HBSlick2 from '../../assets/logo-slide-2.png'
import HBSlick3 from '../../assets/logo-slide-3.png'
import HBSlick4 from '../../assets/logo-slide-4.png'
import HBSlick5 from '../../assets/logo-slide-5.png'
// swipper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';


export default function Home_Bannner() {
      const bannerData = [ 
            { id:1, imgUrl: HBSlick1,},
            { id:2, imgUrl: HBSlick2,}, 
            { id:3, imgUrl: HBSlick3,},
            { id:4, imgUrl: HBSlick4,},
            { id:5, imgUrl: HBSlick5,},
            { id:3, imgUrl: HBSlick3,},
      ]
      return (
            <>
                  <Swiper
                        slidesPerView={5}
                        spaceBetween={20}
                        loop={true}
                        modules={[Autoplay]}
                        autoplay={{ delay: 1500 }}
                        speed={1500}
                        breakpoints={{
                              320: { slidesPerView: 2, spaceBetween: 10 },
                              640: { slidesPerView: 2, spaceBetween: 15 },
                              1024: { slidesPerView: 3, spaceBetween: 20 },
                              1280: { slidesPerView: 5, spaceBetween: 20 },
                        }}
                  >
                        {
                              bannerData.map((bd) => {
                                    const{id, imgUrl} = bd
                                    return(
                                          <SwiperSlide key={id}>
                                                <div className=' gap-3' data-aos='zoom-in' data-aos-delay='300'>
                                                      <img src={imgUrl} alt="" className=' w-full h-24 rounded-lg cursor-pointer'/>
                                                </div>
                                          </SwiperSlide>
                                    )
                              })
                        }
                  </Swiper>
            </>
      )
}