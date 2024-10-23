import { useEffect, useState } from "react";
import { getAllRutas } from "../api/rutas.api";
import { RutaCard } from "./RutaCard";

export function RutasList() {
  const [rutas, setRutas] = useState([]);

  useEffect(() => {
    async function loadRutas() {
      const res = await getAllRutas();
      setRutas(res.data);
    }
    loadRutas();
  }, []);

  return (
    <div className="grid grid-cols-3 gap-3">
      {rutas.map((ruta) => (
        <RutaCard key={ruta.id} ruta={ruta} />
      ))}
    </div>
  );
}