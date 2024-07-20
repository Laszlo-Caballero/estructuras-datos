import { Route, Routes } from "react-router-dom";
import Simple from "../Pages/Simple";

export default function Listas() {
  return (
    <Routes>
      <Route path="/Simple" element={<Simple />} />
      <Route path="/Doble" element={<h1>Lista Doble</h1>} />
      <Route path="/Circular" element={<h1>Lista Circular</h1>} />
      <Route path="/Pilas" element={<h1>Pilas</h1>} />
      <Route path="/Colas" element={<h1>Colas</h1>} />
      <Route path="/Bicolas" element={<h1>Bicolas</h1>} />
      <Route path="/*" element={<h1>404</h1>} />
    </Routes>
  );
}
