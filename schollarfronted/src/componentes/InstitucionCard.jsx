import { useNavigate } from "react-router-dom";

export function InstitucionCard({ institucion }) {
  const navigate = useNavigate();

  return (
    <div
      className="bg-zinc-800 p-3 hover:bg-zinc-700 hover:cursor-pointer"
      onClick={() => {
        navigate(/instituciones/${institucion.id});
      }}
    >
      <img src={institucion.logo} alt={institucion.nombre} className="h-20 w-20 object-cover" />
      <h1 className="text-white font-bold uppercase rounded-lg">{institucion.nombre}</h1>
      <p className="text-slate-400">{institucion.direccion}</p>
    </div>
  );
}

import { useEffect, useState } from "react";
import { getAllInstituciones } from "../api/instituciones.api";
import { InstitucionCard } from "./InstitucionCard";

export function InstitucionesList() {
  const [instituciones, setInstituciones] = useState([]);

  useEffect(() => {
    async function loadInstituciones() {
      const res = await getAllInstituciones();
      setInstituciones(res.data);
    }
    loadInstituciones();
  }, []);

  return (
    <div className="grid grid-cols-3 gap-3">
      {instituciones.map((institucion) => (
        <InstitucionCard key={institucion.id} institucion={institucion} />
      ))}
    </div>
  );
}
navegacion lateral 
import { Link } from "react-router-dom";

export function Navigation() {
  return (
    <div className="flex justify-between py-3 items-center">
      <h1 className="font-bold text-3xl mb-4">Schollar transport</h1>
      <div>
        <button className="bg-indigo-500 p-3 rounded-lg mx-2">
          <Link to="/estudiantes">Estudiantes</Link>
        </button>
        <button className="bg-indigo-500 p-3 rounded-lg mx-2">
          <Link to="/estudiantes-create">Crear Estudiante</Link>
        </button>
        <button className="bg-indigo-500 p-3 rounded-lg mx-2">
          <Link to="/instituciones">Instituciones</Link>
        </button>
        <button className="bg-indigo-500 p-3 rounded-lg mx-2">
          <Link to="/instituciones-create">Crear Institución</Link>
        </button>
        <button className="bg-indigo-500 p-3 rounded-lg mx-2">
          <Link to="/rutas">Rutas</Link>
        </button>
        <button className="bg-indigo-500 p-3 rounded-lg mx-2">
          <Link to="/rutas-create">Crear Ruta</Link>
        </button>
      </div>
    </div>
  );
}
