import { useNavigate } from "react-router-dom";

export function StudentCard({ student }) {
  const navigate = useNavigate();

  return (
    <div
      className="bg-zinc-800 p-3 hover:bg-zinc-700 hover:cursor-pointer"
      onClick={() => {
        navigate(`/students/${student.id}`);
      }}
    >
      <h1 className="text-white font-bold uppercase rounded-lg">
        {student.nombre} {student.apellido}
      </h1>
      <p className="text-slate-400">{student.colegioId}</p>
    </div>
  );
}