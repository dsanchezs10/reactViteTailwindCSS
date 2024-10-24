import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { createStudent, deleteStudent, getStudent, updateStudent } from "../api/students.api";
import { toast } from "react-hot-toast";

export function StudentFormPage() {
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
      await updateStudent(params.id, data);
      toast.success("Student updated", {
        position: "bottom-right",
        style: {
          background: "#101010",
          color: "#fff",
        },
      });
    } else {
      await createStudent(data);
      toast.success("New Student Added", {
        position: "bottom-right",
        style: {
          background: "#101010",
          color: "#fff",
        },
      });
    }
    navigate("/students");
  });

  useEffect(() => {
    async function loadStudent() {
      if (params.id) {
        const { data } = await getStudent(params.id);
        setValue("nombre", data.nombre);
        setValue("apellido", data.apellido);
        setValue("edad", data.edad);
        setValue("curso", data.curso);
        setValue("direccion", data.direccion);
        setValue("colegioId", data.colegioId);
        setValue("rutaId", data.rutaId);
      }
    }
    loadStudent();
  }, []);

  return (
    <div className="max-w-xl mx-auto">
      <form onSubmit={onSubmit} className="bg-zinc-800 p-10 rounded-lg mt-2">
        <input
          type="text"
          placeholder="Nombre del Acudiente"
          {...register("acudiente.nombre", { required: true })}
          className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
          autoFocus
        />
        {errors.acudiente?.nombre && <span>This field is required</span>}

        <input
          type="text"
          placeholder="Apellido del Acudiente"
          {...register("acudiente.apellido", { required: true })}
          className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
        />
        {errors.acudiente?.apellido && <span>This field is required</span>}

        <input
          type="text"
          placeholder="Parentesco"
          {...register("acudiente.parentesco", { required: true })}
          className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
        />
        {errors.acudiente?.parentesco && <span>This field is required</span>}

        <input
          type="text"
          placeholder="Teléfono"
          {...register("acudiente.telefono", { required: true })}
          className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
        />
        {errors.acudiente?.telefono && <span>This field is required</span>}

        <input
          type="file"
          {...register("estudiante.foto", { required: true })}
          className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
        />
        {errors.estudiante?.foto && <span>This field is required</span>}

        <input
          type="text"
          placeholder="Colegio ID"
          {...register("colegioId", { required: true })}
          className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
        />
        {errors.colegioId && <span>This field is required</span>}

        <input
          type="text"
          placeholder="Ruta ID"
          {...register("rutaId", { required: true })}
          className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
        />
        {errors.rutaId && <span>This field is required</span>}

        <input
          type="text"
          placeholder="Nombre del Estudiante"
          {...register("estudiante.nombre", { required: true })}
          className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
        />
        {errors.estudiante?.nombre && <span>This field is required</span>}

        <input
          type="text"
          placeholder="Apellido del Estudiante"
          {...register("estudiante.apellido", { required: true })}
          className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
        />
        {errors.estudiante?.apellido && <span>This field is required</span>}

        <input
          type="number"
          placeholder="Edad"
          {...register("estudiante.edad", { required: true })}
          className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
        />
        {errors.estudiante?.edad && <span>This field is required</span>}

        <input
          type="text"
          placeholder="Curso"
          {...register("estudiante.curso", { required: true })}
          className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
        />
        {errors.estudiante?.curso && <span>This field is required</span>}

        <input
          type="text"
          placeholder="Dirección"
          {...register("estudiante.direccion", { required: true })}
          className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
        />
        {errors.estudiante?.direccion && <span>This field is required</span>}

        <button className="bg-indigo-500 p-3 rounded-lg block w-full mt-3">
          Save
        </button>
      </form>

      {params.id && (
        <div className="flex justify-end">
          <button
            className="bg-red-500 p-3 rounded-lg w-48 mt-3"
            onClick={async () => {
              const accepted = window.confirm("Are you sure?");
              if (accepted) {
                await deleteStudent(params.id);
                toast.success("Student Removed", {
                  position: "bottom-right",
                  style: {
                    background: "#101010",
                    color: "#fff",
                  },
                });
                navigate("/students");
              }
            }}
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
}