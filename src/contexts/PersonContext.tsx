import { createContext, useState } from "react";
import { user } from "../interfaces/user";

interface IContext {
    dataUser: user,
    setDataUser: (param: user) => void,
}

export const PersonContext = createContext<IContext | null>(null)

export default function PersonProvider({ children }: any) {

    const [dataUser, setDataUser] = useState<user>({
        name: '',
        description: '',
        img: '/src/assets/imgs/avatars/av1.svg'
    })
    
    return (
        <PersonContext.Provider value={{ dataUser, setDataUser }}>
            { children }
        </PersonContext.Provider>
    )

}