import { useContext } from 'react'

import UsuarioContext from '../context/UsuariosProvider'

const useAuth = () => useContext(UsuarioContext)

export default useAuth