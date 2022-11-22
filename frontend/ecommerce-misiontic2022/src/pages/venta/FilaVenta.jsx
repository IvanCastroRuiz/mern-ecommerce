import React from 'react'

const FilaVenta = () => {
    return (
        <tr className='text-center bg-slate-100'>
            <td>
                <span className='font-medium text-lg'>121321321</span>
            </td>
            <td>
                <span className='font-medium text-lg'>Ivan Castro</span>
            </td>
            <td>
                <span className='font-medium text-lg'>21/11/2022</span>
            </td>
            <td className=' flex justify-center items-center p-3'>
                <button className='bg-sky-700 text-white p-2 uppercase text-sm font-medium rounded-lg hover:bg-sky-600 transition-colors'>
                    Editar <i class="bi bi-pencil-square"></i>
                </button>
            </td>
        </tr>
    )
}

export default FilaVenta