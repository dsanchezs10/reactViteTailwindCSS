import axios from "axios";

const URL =
  process.env.NODE_ENV === "production"
    ? import.meta.env.VITE_BACKEND_URL
    : "http://localhost:8004/api/estudiantes/";

const estudiantesApi = axios.create({
  baseURL: URL,
});

export const getAllEstudiantes = () => estudiantesApi.get("/");
export const getEstudiante = (id) => estudiantesApi.get(`/${id}/`);
export const createEstudiante = (estudiante) => estudiantesApi.post("/", estudiante);
export const updateEstudiante = (id, estudiante) => estudiantesApi.put(`/${id}/`, estudiante);
export const deleteEstudiante = (id) => estudiantesApi.delete(`/${id}/`);