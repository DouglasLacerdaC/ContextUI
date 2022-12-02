import { useContext } from 'react'
import { ModalContext } from '../../contexts/ModalContext'
import style from './index.module.css'

export default function Home() {

    const modal = useContext(ModalContext)
    const bodyScroll = document.body.style

    modal?.modalIsOpen === true ? bodyScroll.overflow = 'hidden' : setTimeout(() => bodyScroll.overflow = 'auto', 200)


    return (
        <>
            <div className={`${style.modal} ${modal?.modalIsOpen == true ? style.modalIsOpen : style.modalIsClose}`}>
                <h4>Hello, Cowboy</h4>
                <p>Insira os dados corretamente para mostrar o usuário</p>
            </div>
            <div className={style.morph} onClick={() => modal?.setModalIsOpen(!modal.modalIsOpen)}></div>
        </>
    )
}