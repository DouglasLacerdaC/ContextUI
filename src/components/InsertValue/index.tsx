import { useContext, useState } from 'react'
import { PersonContext } from '../../contexts/PersonContext'
import style from './index.module.css'

export default function InsertValue() {
    
    const [ newName, setNewName ] = useState<string>('')
    const [ newAge, setNewAge ] = useState<string>('')

    const personContext = useContext(PersonContext)

    function alterPersonValue() {
        
        personContext?.setDataUser({
            name: newName,
            age: newAge
        })

    }


    return (
        <>
            <div className={style.insertValue}>
                
                <h1>Context UI</h1>
                
                <input type="text" className="input" placeholder='Digite o nome' onChange={(e) => setNewName(e.target.value)} />
                <input type="text" className="input" placeholder='Digite a idade' onChange={(e) => setNewAge(e.target.value)} />
                
                <p>Abrir modal <span onClick={() => personContext?.setModalIsOpen(!personContext.modalIsOpen)}>modal</span></p>
                
                <button onClick={() => alterPersonValue()}>Inserir usuário</button>
            
            </div>
        </>
    )
}