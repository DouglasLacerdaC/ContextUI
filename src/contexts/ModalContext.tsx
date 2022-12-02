import { createContext, useState } from "react";

interface IContext {
    modalIsOpen: boolean,
    setModalIsOpen: (param: boolean) => void
}

export const ModalContext = createContext<IContext | null>(null)

export function ModalProvider({ children }: any) {

    const [modalIsOpen, setModalIsOpen] = useState<boolean>(false)

    return(
        <ModalContext.Provider value={{ modalIsOpen, setModalIsOpen }}>
            { children }
        </ModalContext.Provider>
    )
}