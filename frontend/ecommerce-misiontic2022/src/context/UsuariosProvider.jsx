import { createContext, useState, useEffect } from "react";

const UsuarioContext = createContext()

const UsuariosProvider = ({ children }) => {

    return (
        <UsuarioContext.Provider
            value={{}}
        >
            {children}
        </UsuarioContext.Provider>
    )
}

export { UsuariosProvider }

export default UsuarioContext