import { Link } from "react-router-dom";

export function Navigation() {
  return (
    <div className="flex justify-between items-center bg-blue-500 w-screen py-3 px-3">
      <Link 
        to="/instituciones" 
        className="text-white font-bold text-3xl hover:text-gray-200 transition-colors duration-300"
      >
        Instituciones
      </Link>
      <Link to="/instituciones-create">
        <button className="bg-blue-700 text-white font-bold p-2 rounded-lg flex items-center transition duration-300 hover:bg-blue-600">
          Crear Institución
        </button>
      </Link>
    </div>
  );
}


