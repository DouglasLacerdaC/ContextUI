import { useContext, useState } from 'react'
import { ModalContext } from '../../contexts/ModalContext'
import { PersonContext } from '../../contexts/PersonContext'
import style from './index.module.css'

export default function InsertValue() {
    
    const [ newName, setNewName ] = useState<string>('')
    const [ newDescription, setNewDescription ] = useState<string>('')

    const personContext = useContext(PersonContext)
    const modalContext = useContext(ModalContext)

    function alterPersonValue() {
        
        personContext?.setDataUser({...personContext.dataUser,
            name: newName,
            description: newDescription,
        })

    }


    return (
        <>
            <div className={style.insertValue}>
                
                <h1>Context UI</h1>
                
                <input type="text" className="input" placeholder='Digite o nome' onChange={(e) => setNewName(e.target.value)} />
                <input type="text" className="input" placeholder='Digite a descrição' onChange={(e) => setNewDescription(e.target.value)} />
                
                <p>Não estou entendendo o que fazer <span onClick={() => modalContext?.setModalIsOpen(!modalContext.modalIsOpen)}>aqui</span></p>
                
                <button onClick={() => alterPersonValue()}>Mostrar usuário</button>
            
            </div>
        </>
    )
}