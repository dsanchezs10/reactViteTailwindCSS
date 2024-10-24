import { useNavigate } from "react-router-dom";

export function InstitucionCard({ institucion }) {
  const navigate = useNavigate();

  return (
    <div
      className="bg-[#1a252f] rounded-[10px] shadow-lg text-white flex flex-col p-2 max-w-[300px] w-full m-2 cursor-pointer hover:bg-gray-700"
      onClick={() => {
        navigate(`/instituciones/${institucion.id}`);
      }}
    >
      <div className="card-body flex items-center">
        
        <img
          src={institucion.institucion_logo} 
          alt={`${institucion.institucion_nombre} logo`}
          className="h-12 w-12 rounded-full mr-4" 
        />
        <div className="flex flex-col"> 
          <h1 className="text-[1.2rem] font-bold mb-1">
            {institucion.institucion_nombre} 
          </h1>
          <p className="text-[#ccc] mb-2">
            NIT: {institucion.institucion_nit}
          </p>
        </div>
      </div>
      <div className="card-actions flex justify-center">
       
      </div>
    </div>
  );
}
