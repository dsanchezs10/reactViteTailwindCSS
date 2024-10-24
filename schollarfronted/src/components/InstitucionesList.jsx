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

  const handleDelete = async () => {
    const res = await getAllInstituciones();
    setInstituciones(res.data); 
  };

  return (
    <div className="grid grid-cols-3 gap-3">
      {instituciones.map((institucion) => (
        <InstitucionCard key={institucion.id} institucion={institucion} onDelete={handleDelete} />
      ))}
    </div>
  );
}