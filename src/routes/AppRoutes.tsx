import { Routes, Route } from "react-router-dom";

import ErrorPage from "../pages/ErrorPage";
import Layout from "../Layouts/Layout";
import HomePage from "../pages/HomePage";
import EspecialidadesPage from "../pages/EspecialidadesPage";
import ContactoPage from "../pages/ContactoPage";
import ProcedimientosPage from "../pages/ProcedimientosPage";


const AppRoutes = () => {
  return (
    <Routes>

      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/especialidades" element={<EspecialidadesPage />} />
        <Route path="/contacto" element={<ContactoPage />} />
        <Route path="/tratamientos" element={<ProcedimientosPage />} />
      </Route>

      <Route path="/error" element={<ErrorPage />} />
      <Route path="*" element={<ErrorPage />} />

    </Routes>
  );
};

export default AppRoutes;
