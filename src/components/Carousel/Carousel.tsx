import mrshake1 from '../../assets/images/mrshake1.jpg';
import mrshake2 from '../../assets/images/mrshake2.jpg';
import mrshake3 from '../../assets/images/mrshake3.jpg';
import mrshake4 from '../../assets/images/mrshake4.jpg';
import mrshake5 from '../../assets/images/mrshake5.jpg';
import mrshake6 from '../../assets/images/mrshake6.jpg';
import mrshake7 from '../../assets/images/mrshake7.jpg';
import mrshake8 from '../../assets/images/mrshake8.jpg';
import mrshake9 from '../../assets/images/mrshake9.jpg';
import mrshake10 from '../../assets/images/mrshake10.jpg';
import mrshake11 from '../../assets/images/mrshake11.jpg';
import mrshake12 from '../../assets/images/mrshake12.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css';
import '../../styles/carousel.scss';

export function Carousel() {
    return (
        <Swiper
            breakpoints={{
                320: {
                width: 320,
                slidesPerView: 3,
                },
                768: {
                width: 768,
                slidesPerView: 4,
                }
            }}
            spaceBetween={30}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            modules={[Navigation, Pagination, Scrollbar, A11y]}
        >
            <SwiperSlide><img src={mrshake1} /></SwiperSlide>
            <SwiperSlide><img src={mrshake2} /></SwiperSlide>
            <SwiperSlide><img src={mrshake3} /></SwiperSlide>
            <SwiperSlide><img src={mrshake4} /></SwiperSlide>
            <SwiperSlide><img src={mrshake5} /></SwiperSlide>
            <SwiperSlide><img src={mrshake6} /></SwiperSlide>
            <SwiperSlide><img src={mrshake7} /></SwiperSlide>
            <SwiperSlide><img src={mrshake8} /></SwiperSlide>
            <SwiperSlide><img src={mrshake9} /></SwiperSlide>
            <SwiperSlide><img src={mrshake10} /></SwiperSlide>
            <SwiperSlide><img src={mrshake11} /></SwiperSlide>
            <SwiperSlide><img src={mrshake12} /></SwiperSlide>
        </Swiper>
    )
}