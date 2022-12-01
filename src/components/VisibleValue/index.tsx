import { useContext } from 'react'
import { PersonContext } from '../../contexts/PersonContext'
import style from './index.module.css'

export default function VisibleValue() {

    const user = useContext(PersonContext)?.dataUser.name
    const age = useContext(PersonContext)?.dataUser.age
    
    return (
        <>
            {user && age ?
                    <div className={style.infoUser}>

                        <img src="https://i.pinimg.com/564x/ac/12/95/ac129579e89fc674957275f35c003586.jpg" alt="" />

                        <h2>{user}</h2>
                        <p>{age}</p>

                    </div>
                :
                
                <div className={style.notUser}>
                    Nenhum usuário inserido    
                </div>
            
            }
        </>
    )
}