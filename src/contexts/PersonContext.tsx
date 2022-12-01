import { createContext, useState } from "react";
import { user } from "../interfaces/user";

interface IContext {
    dataUser: user,
    setDataUser: (param: user) => void,
    modalIsOpen: boolean,
    setModalIsOpen: (param: boolean) => void
}

export const PersonContext = createContext<IContext | null>(null)

export default function PersonProvider({ children }: any) {

    const [dataUser, setDataUser] = useState<user>({
        name: '',
        age: ''
    })

    const [modalIsOpen, setModalIsOpen] = useState<boolean>(false)
    
    return (
        <PersonContext.Provider value={{ dataUser, setDataUser, modalIsOpen, setModalIsOpen }}>
            { children }
        </PersonContext.Provider>
    )

}