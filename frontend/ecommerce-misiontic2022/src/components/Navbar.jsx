import { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo-empresa.png'
import svg60 from '../assets/svg/icons8-menu-30.svg'

const Navbar = ({texto, ruta}) => {

  const [ver, setVer] = useState(false)

  const mostrarBarra = n => ver ? setVer(false) : setVer(true)

  return (
    <nav className='shadow bg-slate-100 mb-5'>
      <div className='max-sm:hidden w-full flex justify-between px-5 items-center gap-2'>
        <img src={logo} alt="logo empresa" className='w-50 h-20' />
        <input type="search" placeholder='Buscar Producto' className='my-3 p-3 h-10 rounded-lg w-1/2 border-2' />
        <div className='flex gap-3'>
          <button type='button' className='bg-sky-500 text-white p-2 rounded-lg uppercase font-medium hover:bg-sky-700 transition-colors'><Link to={`/productos/${ruta}`}>{texto}</Link></button>
          <button type='button' className='bg-sky-500 text-white p-2 rounded-lg uppercase font-medium hover:bg-sky-700 transition-colors'>Cerrar Sesion</button>
        </div>
      </div> 
      <div className='sm:hidden w-full flex justify-between px-5 items-center overflow-hidden z-10'>
        <img src={logo} alt="logo empresa" className='w-50 h-20' />
        <button onClick={mostrarBarra}><img src={svg60} alt="menu hamburguesa"/></button>
        {ver &&
            <div className='flex flex-col gap-3 absolute top-20 left-0 w-full bg-slate-100 p-4 justify-between'>
              <input type="search" placeholder='Buscar Producto' className='my-3 p-3 h-10 rounded-lg border-2' />
              <br />
              <button type='button' className='bg-sky-500 text-white p-2 rounded-lg uppercase font-medium hover:bg-sky-700 transition-colors'><Link to={`/productos/${ruta}`}>{texto}</Link></button>
              <button type='button' className='bg-sky-500 text-white p-2 rounded-lg uppercase font-medium hover:bg-sky-700 transition-colors'>Cerrar Sesion</button>
            </div>
        }
      </div>
    </nav>
  )
}

export default Navbar