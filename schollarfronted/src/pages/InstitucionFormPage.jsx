import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { createInstitucion, getInstitucion, updateInstitucion } from "../api/instituciones.api";
import { toast } from "react-hot-toast";

export function InstitucionFormPage() {
  const { register, handleSubmit, formState: { errors }, setValue } = useForm();
  const navigate = useNavigate();
  const params = useParams();

  const onSubmit = handleSubmit(async (data) => {
    try {
      const formData = new FormData();
      formData.append("institucion_nombre", data.institucion_nombre);
      formData.append("institucion_direccion", data.institucion_direccion);
      formData.append("institucion_nit", data.institucion_nit);
      formData.append("institucion_contactos", data.institucion_contactos);
      formData.append("institucion_telefono", data.institucion_telefono);
      if (data.institucion_logo[0]) {
        formData.append("institucion_logo", data.institucion_logo[0]); 
      }

      if (params.id) {
        await updateInstitucion(params.id, formData);
        toast.success("Institución actualizada", { position: "bottom-right" });
      } else {
        await createInstitucion(formData);
        toast.success("Nueva Institución creada", { position: "bottom-right" });
      }
      navigate("/instituciones");
    } catch (error) {
      toast.error("Error al crear/actualizar la Institución", { position: "bottom-right" });
    }
  });

  useEffect(() => {
    async function loadInstitucion() {
      if (params.id) {
        const { data } = await getInstitucion(params.id);
        setValue("institucion_nombre", data.institucion_nombre);
        setValue("institucion_direccion", data.institucion_direccion);
        setValue("institucion_nit", data.institucion_nit);
        setValue("institucion_contactos", data.institucion_contactos);
        setValue("institucion_telefono", data.institucion_telefono);
      }
    }
    loadInstitucion();
  }, [params.id, setValue]);

  return (
    <div className="max-w-3xl mx-auto">
      <form onSubmit={onSubmit} className="bg-gray-300 p-10 rounded-lg mt-2 text-black">
        <input
          type="text"
          placeholder="Nombre"
          {...register("institucion_nombre", { required: true })}
          className="bg-gray-100 p-3 rounded-lg block w-full mb-3 text-black"
        />
        {errors.institucion_nombre && <span className="text-red-500">Este campo es requerido</span>}

        <input
          type="text"
          placeholder="Dirección"
          {...register("institucion_direccion", { required: true })}
          className="bg-gray-100 p-3 rounded-lg block w-full mb-3 text-black"
        />
        {errors.institucion_direccion && <span className="text-red-500">Este campo es requerido</span>}

        <input
          type="text"
          placeholder="NIT"
          {...register("institucion_nit", { required: true })}
          className="bg-gray-100 p-3 rounded-lg block w-full mb-3 text-black"
        />
        {errors.institucion_nit && <span className="text-red-500">Este campo es requerido</span>}

        <input
          type="email"
          placeholder="Correo Electrónico"
          {...register("institucion_contactos", { required: true })}
          className="bg-gray-100 p-3 rounded-lg block w-full mb-3 text-black"
        />
        {errors.institucion_contactos && <span className="text-red-500">Este campo es requerido</span>}

        <input
          type="tel"
          placeholder="Teléfono"
          {...register("institucion_telefono", { required: true })}
          className="bg-gray-100 p-3 rounded-lg block w-full mb-3 text-black"
        />
        {errors.institucion_telefono && <span className="text-red-500">Este campo es requerido</span>}

        
        <input
          type="file"
          accept="image/*" 
          {...register("institucion_logo")}
          className="bg-gray-100 p-3 rounded-lg block w-full mb-3 text-black"
        />

        <button className="bg-blue-500 p-3 rounded-lg block w-full mt-3 text-black">
          Guardar
        </button>
      </form>
    </div>
  );
}
