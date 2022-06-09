import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper";
import s1 from "../../resource/carousel/s1.jpg"
import s2 from "../../resource/carousel/s2.jpg"
import s3 from "../../resource/carousel/s3.jpg"
import s4 from "../../resource/carousel/s4.jpg"
import s5 from "../../resource/carousel/s5.jpg"
import s6 from "../../resource/carousel/s6.jpg"
import UpdateNews from "./UpdateNews";
const Slider = () => {
    return (
        <div className="container m-auto  gap-8 grid grid-cols-4 overflow-hidden  ">

            <div className="lg:col-span-3 col-span-4 rounded-lg  h-60 sm:h-80 md:h-96 lg:h-full overflow-hidden select-none">
                <Swiper
                    spaceBetween={30}
                    loop={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Autoplay]}
                    className="mySwiper overflow-hidden"
                >
                    <SwiperSlide>
                        <img src={s1} alt="" height={'100%'} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={s2} alt="" height={'100%'} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={s3} alt="" height={'100%'} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={s4} alt="" height={'100%'} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={s5} alt="" height={'100%'} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={s6} alt="" height={'100%'} />
                    </SwiperSlide>
                </Swiper>
            </div>

            <div className="UpdateNews relative  col-span-4 lg:col-span-1 shadow  overflow-x-hidden  rounded-lg bottom-1 ">
                <UpdateNews></UpdateNews>
            </div>
        </div>
    );
};

export default Slider;