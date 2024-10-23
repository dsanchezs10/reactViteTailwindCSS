
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
