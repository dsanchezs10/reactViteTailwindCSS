import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { InstitucionFormPage } from "./pages/InstitucionFormPage";
import { InstitucionesPage } from "./pages/InstitucionesPage";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <BrowserRouter>
      <div className="container mx-auto">
        <Navigation />
        <Routes>
          <Route path="/" element={<Navigate to="/instituciones" />} />
          <Route path="/instituciones" element={<InstitucionesPage />} />
          <Route path="/instituciones/:id" element={<InstitucionFormPage />} />
          <Route path="/instituciones-create" element={<InstitucionFormPage />} />
        </Routes>
        <Toaster />
      </div>
    </BrowserRouter>
  );
}

export default App;

