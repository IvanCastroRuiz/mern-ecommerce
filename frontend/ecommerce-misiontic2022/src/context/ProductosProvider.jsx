import { useState, createContext } from "react";

const ProductosContext = createContext()

const ProductosProvider = ({ children }) => {

    const [productos, setProductos] = useState(JSON.parse(localStorage.getItem('productos')) ?? [])

    const submitProducto = (producto) => {
        localStorage.setItem('productos', JSON.stringify(productos))
        setProductos([...productos,producto])
    }

    return (
        <ProductosContext.Provider
            value={{
                submitProducto,
                productos
            }}
        >
            {children}
        </ProductosContext.Provider>
    )
}

export { ProductosProvider }

export default ProductosContext