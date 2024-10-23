import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { createRuta, getRuta, updateRuta } from "../api/rutas.api";
import { useParams, useNavigate } from "react-router-dom";

export function RutaFormPage() {
  const { id } = useParams();
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      async function loadRuta() {
        const res = await getRuta(id);
        reset(res.data);
      }
      loadRuta();
    }
  }, [id]);

  const onSubmit = async (data) => {
    try {
      if (id) {
        await updateRuta(id, data);
        toast.success("Ruta actualizada");
      } else {
        await createRuta(data);
        toast.success("Ruta creada");
      }
      navigate("/rutas");
    } catch (error) {
      toast.error("Error al guardar la ruta");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("nombre")} placeholder="Nombre de la Ruta" required />
      <input {...register("numero_movil")} placeholder="Número Móvil" required />
      <input {...register("ids_instituciones")} placeholder="ID Instituciones Asociadas" />
      <textarea {...register("casilla_carta")} placeholder="Casilla para Carta" />
      <select {...register("estado")}>
        <option value="activo">Activo</option>
        <option value="inactivo">Inactivo</option>
      </select>
      <button type="submit">Guardar Ruta</button>
    </form>
  );
}