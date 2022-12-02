import { Swiper, SwiperSlide } from 'swiper/react'

import { useContext } from 'react';
import { PersonContext } from '../../contexts/PersonContext';

import style from './index.module.css'
import 'swiper/css'; // style swipper

// import img's avatar
import av1 from '/src/assets/imgs/avatars/av1.svg'
import av2 from '/src/assets/imgs/avatars/av2.svg'
import av3 from '/src/assets/imgs/avatars/av3.svg'
import av4 from '/src/assets/imgs/avatars/av4.svg'
import av5 from '/src/assets/imgs/avatars/av5.svg'

export default function Slider() {

    const personContext = useContext(PersonContext)

    function alterImage(imageUrl: string) {

        console.log(imageUrl)
        
        personContext?.setDataUser({...personContext.dataUser, img: imageUrl})
    
    }

    return (
        <div className={style.slider}>
            <Swiper spaceBetween={5} slidesPerView={3.7} >

                <SwiperSlide onClick={() => alterImage(av1)}>
                    <div className={style.card}>
                        <img src={av1} alt="" />
                    </div>
                </SwiperSlide>
                
                <SwiperSlide onClick={() => alterImage(av2)}>
                    <div className={style.card}>
                        <img src={av2} alt="" />
                    </div>
                </SwiperSlide>
                
                <SwiperSlide onClick={() => alterImage(av3)}>
                    <div className={style.card}>
                        <img src={av3} alt="" />
                    </div>
                </SwiperSlide>
                
                <SwiperSlide onClick={() => alterImage(av4)}>
                    <div className={style.card}>
                        <img src={av4} alt="" />
                    </div>
                </SwiperSlide>

                <SwiperSlide onClick={() => alterImage(av5)}>
                    <div className={style.card}>
                        <img src={av5} alt="" />
                    </div>
                </SwiperSlide>
            
            </Swiper>
        </div>
    )
}