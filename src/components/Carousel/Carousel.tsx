import mrshake1 from '../../assets/images/mrshake1.jpg';
import mrshake2 from '../../assets/images/mrshake2.jpg';
import mrshake3 from '../../assets/images/mrshake3.jpg';
import mrshake4 from '../../assets/images/mrshake4.jpg';
import mrshake5 from '../../assets/images/mrshake5.jpg';
import mrshake6 from '../../assets/images/mrshake6.jpg';
import '../../styles/carousel.scss';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';

export function Carousel() {
    return (
        <Swiper spaceBetween={10} slidesPerView={3}>
            <SwiperSlide><img src={mrshake1} /></SwiperSlide>
            <SwiperSlide><img src={mrshake2} /></SwiperSlide>
            <SwiperSlide><img src={mrshake3} /></SwiperSlide>
            <SwiperSlide><img src={mrshake4} /></SwiperSlide>
            <SwiperSlide><img src={mrshake5} /></SwiperSlide>
            <SwiperSlide><img src={mrshake6} /></SwiperSlide>
        </Swiper>
    )
}