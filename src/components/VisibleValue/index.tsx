import { useContext } from 'react'
import { PersonContext } from '../../contexts/PersonContext'

import Slider from '../Slider';

import style from './index.module.css'

export default function VisibleValue() {

    const DataUserWithPersonContext = useContext(PersonContext)?.dataUser

    const name = DataUserWithPersonContext?.name
    const description = DataUserWithPersonContext?.description
    const img = DataUserWithPersonContext?.img

    return (
        <>
            {name && description ?
                <div className={style.containerAvatar}>
                    <div className={style.infoUser}>

                        <img src={img} alt="" />

                        <div className={style.user}>
                            <h2>{name}</h2>
                            <p>{description}</p>
                        </div>

                    </div>

                    <Slider />

                </div>
                :

                <div className={style.notUser}>
                    Nenhum usuário inserido
                </div>

            }
        </>
    )
}