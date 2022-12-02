import { useContext } from 'react'
import { PersonContext } from '../../contexts/PersonContext'

import { Swiper, SwiperSlide } from 'swiper/react'

import style from './index.module.css'
import 'swiper/css';

export default function VisibleValue() {

    const user = useContext(PersonContext)?.dataUser.name
    const age = useContext(PersonContext)?.dataUser.age

    return (
        <>
            {user && age ?
                <div>
                    <div className={style.infoUser}>

                        <img src="https://i.pinimg.com/564x/ac/12/95/ac129579e89fc674957275f35c003586.jpg" alt="" />

                        <h2>{user}</h2>
                        <p>{age}</p>

                    </div>

                    <div>
                        <Swiper
                            spaceBetween={5}
                            slidesPerView={3}
                            onSlideChange={() => console.log('slide change')}
                            onSwiper={(swiper) => console.log(swiper)}
                        >
                            <SwiperSlide>Slide 1</SwiperSlide>
                            <SwiperSlide>Slide 2</SwiperSlide>
                            <SwiperSlide>Slide 3</SwiperSlide>
                            <SwiperSlide>Slide 4</SwiperSlide>
                        </Swiper>
                    </div>
                </div>
                :

                <div className={style.notUser}>
                    Nenhum usuário inserido
                </div>

            }
        </>
    )
}