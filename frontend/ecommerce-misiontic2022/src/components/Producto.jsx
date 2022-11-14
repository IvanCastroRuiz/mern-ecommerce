import React from 'react'
import producto1 from '../assets/producto.jpg'
import { Link } from 'react-router-dom'

const Producto = ({ producto }) => {

    const { id, nombre, descripcion, precio, stock } = producto

    

    return (
        <div className='flex flex-col h-1/2 border rounded w-60 bg-white hover:scale-105'>
            <div>
                <img src={producto1} alt="producto" className='h-56 w-96 border-b' />
            </div>
            <div className='p-2 flex flex-col justify-between'>
                <div>
                    <p className='font-bold capitalize my-3 text-2xl'>{nombre}</p>
                </div>
                <div className='my-3'>
                    <p className='font-bold text-lg'>Precio : $<span className='font-normal'>{precio}</span> </p>
                    <p className='font-bold text-lg'>Stock : <span className='font-normal'>{stock}</span> </p>
                </div>
                <button type="button" className='bg-sky-500 text-white p-2 uppercase rounded-lg font-medium w-full hover:bg-sky-700 transition-colors'>Añadir al Carrito</button>
            </div>
        </div>
    )
}

export default Producto