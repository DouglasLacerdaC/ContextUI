import { useContext } from 'react'
import { ModalContext } from '../../contexts/ModalContext'
import style from './index.module.css'

export default function Home() {

    const modal = useContext(ModalContext)

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