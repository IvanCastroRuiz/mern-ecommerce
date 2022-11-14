import React from 'react'
import producto1 from '../assets/producto.jpg'
import { Link } from 'react-router-dom'

const Producto = ({ producto }) => {

    const { id, nombre, descripcion, precio, stock } = producto

    return (
        <div className='block border rounded p-2 w-64 bg-white'>
            <p>{nombre}</p>
            <div className='flex gap-5'>
                <p>Precio : {precio}</p>
            </div>
        </div>
    )
}

export default Producto