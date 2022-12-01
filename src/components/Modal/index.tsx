import { useContext } from 'react'
import { PersonContext } from '../../contexts/PersonContext'
import style from './index.module.css'

export default function Home() {

    const modal = useContext(PersonContext)

    return (
        <>
            <div className={`${style.modal} ${modal?.modalIsOpen == true ? style.modalIsOpen : style.modalIsClose}`}>
                <h4>Modal</h4>
                <p>Insira os dados corretamente para mostrar o usuário</p>
            </div>
            <div className={style.morph} onClick={() => modal?.setModalIsOpen(!modal.modalIsOpen)}></div>
        </>
    )
}