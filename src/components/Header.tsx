import { Link } from "react-router-dom";
import Logo from "../assets/estructura-de-datos.png";

export default function Header() {
  return (
    <header className="flex p-4 bg-blue-700">
      <Link to="/">
        {" "}
        <img src={Logo} alt="logo" />
      </Link>
      <div className="flex justify-around w-full items-center text-blue-50 font-semibold">
        <Link to="/Listas/Simple">Lista Simple</Link>
        <Link to="/Listas/Doble">Lista Doble</Link>
        <Link to="/Listas/Circular">Lista Circular</Link>
        <Link to="/Listas/Pilas">Pilas</Link>
        <Link to="/Listas/Colas">Colas</Link>
        <Link to="/Listas/Bicolas">Bicolas</Link>
        <Link to="/Arboles">Arboles</Link>
      </div>
    </header>
  );
}
