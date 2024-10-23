import { useNavigate } from "react-router-dom";

export function RutaCard({ ruta }) {
  const navigate = useNavigate();

  return (
    <div
      className="bg-zinc-800 p-3 hover:bg-zinc-700 hover:cursor-pointer"
      onClick={() => {
        navigate(`/rutas/${ruta.id}`);
      }}
    >
      <h1 className="text-white font-bold uppercase rounded-lg">
        {ruta.nombre}
      </h1>
      <p className="text-slate-400">{ruta.numero_movil}</p>
    </div>
  );
}
