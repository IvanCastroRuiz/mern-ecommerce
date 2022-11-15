import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

import useProductos from '../../hooks/useProductos'
import Navbar from '../../components/Navbar'

const DetalleProducto = () => {

  const param = useParams()

  const { obtenerProducto, producto } = useProductos()

  useEffect(() => {
    obtenerProducto(param.id)
  }, [])

  const { nombre, descripcion, precio, stock } = producto


  return (
    <>
      <Navbar texto="Productos" ruta="" />
      <div className='flex flex-col justify-center h-5/6 items-center overflow-hidden w-5/6 mx-auto'>

        <h1 className='font-bold text-6xl uppercase text-center w-full mx-auto mb-4'>Información del <span className='text-sky-700'>producto</span></h1>

        <div className="w-full px-10 py-2 md:px-20 md:py-5 lg:px-40 lg:py-10 border-2 shadow-lg m-2">
          <div className='mb-9 flex justify-center'>
            <img src=" " alt="imagen de producto" className='h-56 w-96 border-2'/>
          </div>
          <h1 className='text-4xl font-bold capitalize mb-9'>{nombre}</h1>
          <p className='text-xl mb-9'>{descripcion}</p>
          <div className='flex justify-around mb-3'>
            <p className='text-xl font-semibold'>Precio : $<span className='font-normal'>{precio}</span></p>
            <p className='text-xl font-semibold'>Cantidad : <span className='font-normal'>{stock}</span></p>
          </div>
          <div className='flex justify-center gap-4 mt-12 mb-4'>
            <button className='bg-blue-700 text-white p-2 text-xl uppercase rounded-md font-semibold hover:bg-blue-600 transition-colors w-1/3'>Editar</button>
            <button className='bg-red-700 text-white p-2 text-xl uppercase rounded-md font-semibold hover:bg-red-600 transition-colors w-1/3'>Eliminar</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default DetalleProducto