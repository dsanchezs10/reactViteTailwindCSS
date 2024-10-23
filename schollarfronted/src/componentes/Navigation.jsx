import { Link } from "react-router-dom";

export function Navigation() {
  return (
    <div className="flex justify-between py-4 items-center bg-gray-100 shadow-md">
      <h1 className="font-bold text-3xl mb-4 text-blue-800">Schollar Transport</h1>
      <div>
        {["Estudiantes", "Crear Estudiante", "Instituciones", "Crear Institución", "Rutas", "Crear Ruta"].map((text, index) => (
          <button key={index} className="bg-blue-600 text-white p-3 rounded-lg mx-2 hover:bg-blue-500 transition duration-200">
            <Link to={`/${text.toLowerCase().replace(/ /g, '-')}`}>{text}</Link>
          </button>
        ))}
      </div>
    </div>
  );
}
