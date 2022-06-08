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
        <div className="container m-auto gap-8 grid grid-cols-4">

            <div className="lg:col-span-3  col-span-4 select-none">
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    loop={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper "
                >
                    <SwiperSlide>
                        <img src={s1} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={s2} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={s3} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={s4} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={s5} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={s6} alt="" />
                    </SwiperSlide>
                </Swiper>
            </div>

            <div className="UpdateNews relative  col-span-4 lg:col-span-1 shadow overflow-hidden rounded-lg bottom-1 ">
                <UpdateNews></UpdateNews>
            </div>
        </div>
    );
};

export default Slider;