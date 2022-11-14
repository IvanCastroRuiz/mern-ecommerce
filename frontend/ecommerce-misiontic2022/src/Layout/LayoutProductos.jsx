import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

const LayoutProductos = () => {

  return (
    <div className="h-screen">
      {/* <Navbar /> */}
      <Outlet />
    </div>
  )
}

export default LayoutProductos