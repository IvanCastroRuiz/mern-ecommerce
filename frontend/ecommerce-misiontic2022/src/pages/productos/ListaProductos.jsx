import { useEffect } from 'react'

import useProductos from '../../hooks/useProductos'
import Producto from '../../components/Producto'

import Navbar from '../../components/Navbar'

const ListaProductos = () => {

  const { productos } = useProductos()

  return (
    <>
      <Navbar texto="Agregar Producto" ruta="agregar-producto" />
      <div className='w-full justify-center h-5/6 max-sm:p-0 px-20'>
        <div className='w-full flex flex-col items-center'>
          <h1 className='font-bold text-5xl uppercase text-center w-full mx-auto mb-10'><span className='text-sky-700'>productos</span> a comprar</h1>

          <div className='flex mx-5 gap-5 flex-wrap mb-10'>
            {productos.length ?
              (
                <>
                  {productos.map(producto =>
                  (
                    <Producto key={producto.id} producto={producto} />
                  )
                  )
                  }
                </>
              )
              : (
                <p className='mt-10 shadow-lg w-1/2 text-center p-5 uppercase font-bold text-2xl'>No hay Productos</p>
              )
            }
          </div>

        </div>
      </div>
    </>
  )
}

export default ListaProductos