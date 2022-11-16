import { useState } from "react";

import useProductos from "../../hooks/useProductos";

import Navbar from "../../components/Navbar";

const FormularioProductos = () => {
  const { submitProducto } = useProductos();

  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [precio, setPrecio] = useState("");
  const [stock, setStock] = useState("");

  const generarId = () =>
    Math.random().toString(6).substr(5) + Date.now().toString(16).substr(5);

  const handleSubmit = (e) => {
    e.preventDefault();

    if ([nombre, descripcion, precio, stock].includes("")) {
      console.log("CAMPOS VACIOS");
      return;
    }

    submitProducto({ id: generarId(), nombre, descripcion, precio, stock });

    // Limpiar el formulario, BUGUEADO ARREGLAR!!!!!

    setTimeout(() => {
      setNombre("");
      setDescripcion("");
      setPrecio("");
      setStock("");
    }, 500);
  };

  return (
    <>
      <Navbar texto="Productos" ruta="" />
      <div className=" w-full justify-center h-5/6 items-center">
        <div className="w-full">
          <h1 className="font-bold text-6xl uppercase text-center w-full mx-auto">
            Registra tus <span className="text-sky-700">productos</span>
          </h1>

          <form
            className="p-4 mx-auto w-96 sm:px-9 mt-8 shadow-md"
            onSubmit={handleSubmit}
          >
            <div className="mb-5">
              <label htmlFor="nombre" className="font-medium">
                Nombre
              </label>
              <input
                type="text"
                id="nombre"
                className="block placeholder-slate-400 p-2 w-full bg-slate-100"
                placeholder="ej: Juan David Ariza Torres"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
              />
            </div>
            <div className="mb-5">
              <label htmlFor="email" className="font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="block placeholder-slate-400 p-2 w-full bg-slate-100"
                placeholder="ej: correo@correo.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-5">
              <label htmlFor="direccion" className="font-medium">
                Direccion
              </label>
              <input
                type="text"
                id="direccion"
                className="block placeholder-slate-400 p-2 w-full bg-slate-100"
                placeholder="ej: Calle 12 #34-56"
                value={direccion}
                onChange={(e) => setDireccion(e.target.value)}
              />
            </div>
            <div className="mb-5">
              <label htmlFor="web" className="font-medium">
                Web
              </label>
              <input
                type="text"
                id="web"
                className="block placeholder-slate-400 p-2 w-full bg-slate-100"
                placeholder="ej: www.MiWebSite.com"
                value={web}
                onChange={(e) => setWeb(e.target.value)}
              />
            </div>
            <div className="mb-5">
              <label htmlFor="telefono" className="font-medium">
                Telefono
              </label>
              <input
                type="number"
                id="telefono"
                className="block placeholder-slate-400 p-2 w-full bg-slate-100"
                placeholder="ej: 300123456"
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)}
              />
            </div>
            <div className="mb-5">
              <label htmlFor="password" className="font-medium">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="block placeholder-slate-400 p-2 w-full bg-slate-100"
                placeholder="*********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="mb-5">
              <label htmlFor="confirpassword" className="font-medium">
                Confirmar Password
              </label>
              <input
                type="password"
                id="confirpassword"
                className="block placeholder-slate-400 p-2 w-full bg-slate-100"
                placeholder="*********"
                value={confirPassword}
                onChange={(e) => setConfirPassword(e.target.value)}
              />
            </div>
            <input
              type="submit"
              value="Ingresar"
              className="uppercase bg-sky-700 text-white p-2 rounded-md w-full cursor-pointer"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default FormularioProductos;
