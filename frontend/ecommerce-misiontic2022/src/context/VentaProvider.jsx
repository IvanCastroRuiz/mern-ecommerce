import { createContext, useState, useEffect } from "react";

import useProductos from "../hooks/useProductos";

const VentaContext = createContext()

const VentaProvider = ({ children }) => {

    const [productos, setProductos] = useState(JSON.parse(localStorage.getItem('productos')) ?? [])

    const [venta, setVenta] = useState([])
    // JSON.parse(localStorage.getItem('venta')) ?? []
    const [ventaState, setVentaState] = useState({})

    const [existe, setExiste] = useState(false)
    const [precioTotal, setPrecioTotal] = useState(0)

    useEffect(() => localStorage.setItem('venta', JSON.stringify(venta)), [venta])

    const añadirProducto = id => {

        //Buscar producto existente
        const productoFiltrado = productos.find(producto => producto.id == id)

        setPrecioTotal(Number(productoFiltrado.precio) + Number(precioTotal))
        // console.log(precioTotal)

        if (!productoFiltrado) {
            return console.log('Producto no encontrado')
        }
        const objetoVenta = {
            id: productoFiltrado.id,
            nombre: productoFiltrado.nombre,
            descripcion: productoFiltrado.descripcion,
            precio: productoFiltrado.precio,
            cantidad: 0
        }

        // const precioTotal = venta.map(items => items.precio)
        // console.log(precioTotal)
        // setPrecioTotal(precioTotal)

        setVentaState(objetoVenta)
        venta.find(item => ventaState.id === item.id ? setExiste(true) : setVenta(false))
        // console.log(existe)
        setVenta([...venta, ventaState])
        // setVentaState({})
    }

    return (
        <VentaContext.Provider
            value={{
                añadirProducto,
                venta, precioTotal
            }}>

            {children}
        </VentaContext.Provider>
    )
}

export {
    VentaProvider
}

export default VentaContext