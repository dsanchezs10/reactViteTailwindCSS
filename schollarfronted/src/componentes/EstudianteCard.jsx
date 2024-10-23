import { useNavigate } from "react-router-dom";

export function EstudianteCard({ estudiante }) {
  const navigate = useNavigate();

  return (
    <div
      className="bg-zinc-800 p-3 hover:bg-zinc-700 hover:cursor-pointer"
      onClick={() => navigate(/estudiantes/${estudiante.id})}
    >
      <h1 className="text-white font-bold uppercase rounded-lg">
        {estudiante.nombre_estudiante} {estudiante.apellido_estudiante}
      </h1>
      <p className="text-slate-400">{estudiante.telefono_acudiente}</p>
    </div>
  );
}


import { useEffect, useState } from "react";
import { getAllEstudiantes } from "../api/estudiantes.api";
import { EstudianteCard } from "./EstudianteCard";

export function EstudiantesList() {
  const [estudiantes, setEstudiantes] = useState([]);

  useEffect(() => {
    async function loadEstudiantes() {
      const res = await getAllEstudiantes();
      setEstudiantes(res.data);
    }
    loadEstudiantes();
  }, []);

  return (
    <div className="grid grid-cols-3 gap-3">
      {estudiantes.map((estudiante) => (
        <EstudianteCard key={estudiante.id} estudiante={estudiante} />
      ))}
    </div>
  );
}