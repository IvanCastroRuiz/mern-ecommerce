import { createContext, useState, useEffect } from "react";

const UsuarioContext = createContext()

const UsuariosProvider = ({ children }) => {

    const [usuarios, setUsuarios] = useState([])
    const [usuarioState, setUsuarioState] = useState({})

    useEffect(() => localStorage.setItem('usuarios', JSON.stringify(usuarios)), [usuarios])

    const submitUsuario = user => {
        localStorage.setItem('usuarios', JSON.stringify(usuarios))
        setUsuarios([...usuarios, user])
    }

    const usuarioLogeado = email => {
        const logeado = usuarios.filter(usuario => usuario.email == email)
        // setUsuarioState(logeado)
        console.log(logeado)
    }

    return (
        <UsuarioContext.Provider
            value={{
                submitUsuario,
                usuarioLogeado
            }}
        >
            {children}
        </UsuarioContext.Provider>
    )
}

export { UsuariosProvider }

export default UsuarioContext