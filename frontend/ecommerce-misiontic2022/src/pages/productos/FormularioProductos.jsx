import { useState } from 'react'

import useProductos from '../../hooks/useProductos'

import Navbar from '../../components/Navbar'

const FormularioProductos = () => {

  const { submitProducto } = useProductos()

  const [nombre, setNombre] = useState('')
  const [descripcion, setDescripcion] = useState('')
  const [precio, setPrecio] = useState('')
  const [stock, setStock] = useState('')

  const generarId = () => Math.random().toString(6).substr(5) + Date.now().toString(16).substr(5)

  const handleSubmit = e => {
    e.preventDefault()

    if ([nombre, descripcion, precio, stock].includes("")) {
      console.log("CAMPOS VACIOS")
      return
    }

    submitProducto({ id: generarId(), nombre, descripcion, precio, stock })

    // Limpiar el formulario, BUGUEADO ARREGLAR!!!!!

    setTimeout(() => {
      setNombre("")
      setDescripcion("")
      setPrecio("")
      setStock("")
    }, 1000)
  }

  return (
    <>
      <Navbar texto="Productos" ruta="" />
      <div className=' w-full justify-center h-5/6 items-center'>
        <div className='w-full'>
          <h1 className='font-bold text-6xl uppercase text-center w-full mx-auto'>Registra tus <span className='text-sky-700'>productos</span></h1>

          <form className='p-4 mx-auto sm:px-9 sm:w-5/6 md:w-4/5 lg:w-3/4 mt-8 shadow-lg' onSubmit={handleSubmit}>

            <div className='mb-5'>
              <label htmlFor="nombre" className='font-medium'>Nombre</label>
              <input type="text" id="nombre" className='block placeholder-slate-400 p-2 w-full bg-slate-100' placeholder='ej: Desinfectante' value={nombre} onChange={e => setNombre(e.target.value)} />
            </div>
            <div className='mb-5'>
              <label htmlFor="descripcion" className='font-medium'>Descripcion</label>
              <textarea id="descripcion" className='block placeholder-slate-400 p-2 w-full bg-slate-100 h-52' placeholder='...' value={descripcion} onChange={e => setDescripcion(e.target.value)} />
            </div>
            <div className='mb-5'>
              <label htmlFor="precio" className='font-medium'>Precio</label>
              <div className='flex items-center'>
                <span className='font-bold text-xl mr-2'>$</span>
                <input type="number" id="precio" className='placeholder-slate-400 p-2 w-full bg-slate-100' placeholder='ej: 200000' value={precio} onChange={e => setPrecio(e.target.value)} />
              </div>
            </div>
            <div className='mb-5'>
              <label htmlFor="stock" className='font-medium'>Stock</label>
              <input type="number" id="stock" className='block placeholder-slate-400 p-2 w-full bg-slate-100' placeholder="ej: 5" value={stock} onChange={e => setStock(e.target.value)} />
            </div>
            <div className='mb-5'>
              <label htmlFor="stock" className='font-medium'>Imagen</label>
              <input type="file" id="stock" className='block placeholder-slate-400 p-2 w-full bg-slate-100' />
            </div>
            <input type="submit" value="Guardar" className='uppercase bg-sky-700 text-white p-2 rounded-md w-full cursor-pointer' />
          </form>
        </div>
      </div>
    </>
  )
}

export default FormularioProductos