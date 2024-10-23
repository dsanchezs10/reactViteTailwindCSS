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
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {instituciones.map((institucion) => (
        <InstitucionCard key={institucion.id} institucion={institucion} />
      ))}
    </div>
  );
}

