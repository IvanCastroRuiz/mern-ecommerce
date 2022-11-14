import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import LayoutAuth from './Layout/LayoutAuth'
import Login from './pages/Login'
import Registro from './pages/usuario/Registro'
import OlvidePassword from './pages/usuario/OlvidePassword'
import Confirmar from './pages/usuario/Confirmar'


import LayoutProductos from './Layout/LayoutProductos'
import ListaProductos from './pages/productos/ListaProductos'
import FormularioProductos from './pages/productos/FormularioProductos'
import DetalleProducto from './pages/productos/DetalleProducto'

import { ProductosProvider } from './context/ProductosProvider'

function App() {

  return (
    <Router>
      <ProductosProvider>
        <Routes>
          {/* RUTAS PUBLICAS */}
          <Route path='/' element={<LayoutAuth />}>
            <Route index element={<Login />} />
            <Route path='registro' element={<Registro />} />
            <Route path='olvide-password' element={<OlvidePassword />} />
            <Route path='confirmar/:id' element={<Confirmar />} />
          </Route>

          <Route path='/productos' element={<LayoutProductos />}>
            <Route index element={<ListaProductos />} />
            <Route path='agregar-producto' element={<FormularioProductos />} />
            <Route path='detalle-producto/:id' element={<DetalleProducto />} />
          </Route>
        </Routes>
      </ProductosProvider>
    </Router>
  )
}

export default App
