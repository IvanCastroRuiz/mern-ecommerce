import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import LayoutAuth from './Layout/LayoutAuth'
import Login from './pages/Login'
import Registro from './pages/usuario/Registro'
import OlvidePassword from './pages/usuario/OlvidePassword'
import Confirmar from './pages/usuario/Confirmar'
import Perfil from './pages/usuario/Perfil'
import NuevoPassword from './pages/usuario/NuevoPassword'

import LayoutPrivado from './Layout/LayoutPrivado'
import ListaProductos from './pages/productos/ListaProductos'
import FormularioProductos from './pages/productos/FormularioProductos'
import DetalleProducto from './pages/productos/DetalleProducto'

import { ProductosProvider } from './context/ProductosProvider'
import { UsuariosProvider } from './context/UsuariosProvider'

function App() {

  return (
    <Router>
      <UsuariosProvider>
        <ProductosProvider>
          <Routes>
            {/* RUTAS PUBLICAS */}
            <Route path='/' element={<LayoutAuth />}>
              <Route index element={<Login />} />
              <Route path='registro' element={<Registro />} />
              <Route path='olvide-password' element={<OlvidePassword />} />
              <Route path='confirmar/:id' element={<Confirmar />} />
            </Route>

            <Route path='/productos' element={<LayoutPrivado />}>
              <Route index element={<ListaProductos />} />
              <Route path='agregar-producto' element={<FormularioProductos />} />
              <Route path='detalle-producto/:id' element={<DetalleProducto />} />
            </Route>

            <Route path='/perfil' element={<LayoutPrivado />}>
              <Route path=':id' element={<Perfil />} />
              <Route path='cambiar-password/:id ' element={<NuevoPassword />} />
            </Route>
          </Routes>
        </ProductosProvider>
      </UsuariosProvider>
    </Router>
  )
}

export default App
