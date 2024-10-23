import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { createInstitucion, deleteInstitucion, getInstitucion, updateInstitucion } from "../api/instituciones.api";
import { toast } from "react-hot-toast";

export function InstitucionFormPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();
  const navigate = useNavigate();
  const params = useParams();

  const onSubmit = handleSubmit(async (data) => {
    if (params.id) {
      await updateInstitucion(params.id, data);
      toast.success("Institución actualizada", {
        position: "bottom-right",
        style: {
          background: "#101010",
          color: "#fff",
        },
      });
    } else {
      await createInstitucion(data);
      toast.success("Nueva Institución añadida", {
        position: "bottom-right",
        style: {
          background: "#101010",
          color: "#fff",
        },
      });
    }

    navigate("/instituciones");
  });

  useEffect(() => {
    async function loadInstitucion() {
      if (params.id) {
        const { data } = await getInstitucion(params.id);
        setValue("logo", data.logo);
        setValue("nombre", data.nombre);
        setValue("direccion", data.direccion);
        setValue("nit", data.nit);
        setValue("correo", data.correo);
        setValue("telefono", data.telefono);
      }
    }
    loadInstitucion();
  }, [params.id, setValue]);

  return (
    <div className="max-w-xl mx-auto">
      <form onSubmit={onSubmit} className="bg-zinc-800 p-10 rounded-lg mt-2">
        <input
          type="file"
          {...register("logo")}  // Logo ya no es requerido
          className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
          autoFocus
        />
        {/* Puedes eliminar este mensaje si el campo no es requerido */}
        {errors.logo && <span>Este campo es requerido</span>} 

        <input
          type="text"
          placeholder="Nombre"
          {...register("nombre", { required: true })}
          className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
        />
        {errors.nombre && <span>Este campo es requerido</span>}

        <input
          type="text"
          placeholder="Dirección"
          {...register("direccion", { required: true })}
          className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
        />
        {errors.direccion && <span>Este campo es requerido</span>}

        <input
          type="text"
          placeholder="NIT"
          {...register("nit", { required: true })}
          className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
        />
        {errors.nit && <span>Este campo es requerido</span>}

        <input
          type="email"
          placeholder="Correo Electrónico"
          {...register("correo", { required: true })}
          className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
        />
        {errors.correo && <span>Este campo es requerido</span>}

        <input
          type="tel"
          placeholder="Teléfono"
          {...register("telefono", { required: true })}
          className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
        />
        {errors.telefono && <span>Este campo es requerido</span>}

        <button className="bg-indigo-500 p-3 rounded-lg block w-full mt-3">Guardar</button>
      </form>

      {params.id && (
        <div className="flex justify-end">
          <button
            className="bg-red-500 p-3 rounded-lg w-48 mt-3"
            onClick={async () => {
              const accepted = window.confirm("¿Estás seguro?");
              if (accepted) {
                await deleteInstitucion(params.id);
                toast.success("Institución eliminada", {
                  position: "bottom-right",
                  style: {
                    background: "#101010",
                    color: "#fff",
                  },
                });
                navigate("/instituciones");
              }
            }}
          >
            Eliminar
          </button>
        </div>
      )}
    </div>
  );
}
