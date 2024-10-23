
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { EstudianteFormPage } from "./pages/EstudianteFormPage";
import { EstudiantesPage } from "./pages/EstudiantesPage";
import { InstitucionesPage } from "./pages/InstitucionesPage";
import { InstitucionFormPage } from "./pages/InstitucionFormPage";
import { RutaFormPage } from "./pages/RutaFormPage";
import { RutasPage } from "./pages/RutasPage";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <BrowserRouter>
      <div className="container mx-auto">
        <Navigation />
        <Routes>
          {/* ruta por defecti estudiante*/}
          <Route path="/" element={<Navigate to="/estudiantes" />} />

          {/* Rutas para estudiantes */}
          <Route path="/estudiantes" element={<EstudiantesPage />} />
          <Route path="/estudiantes/:id" element={<EstudianteFormPage />} />
          <Route path="/estudiantes-create" element={<EstudianteFormPage />} />

          {/* Rutas para instituciones */}
          <Route path="/instituciones" element={<InstitucionesPage />} />
          <Route path="/instituciones-create" element={<InstitucionFormPage />} />
          <Route path="/instituciones/:id" element={<InstitucionFormPage />} />

          {/* Rutas para rutas */}
          <Route path="/rutas" element={<RutasPage />} />
          <Route path="/rutas-create" element={<RutaFormPage />} />
          <Route path="/rutas/:id" element={<RutaFormPage />} />
        </Routes>
        <Toaster />
      </div>
      <Toaster/>
    </BrowserRouter>
  );
}

export default App;
