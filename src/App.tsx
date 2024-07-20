import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Listas from "./Routes/Listas";

function App() {
  return (
    <main>
      <Header />
      <Routes>
        <Route path="/" element={<h1>Main</h1>} />
        <Route path="/Listas/*" element={<Listas />} />
        <Route path="/Arboles/*" element={<h1>Arboles</h1>} />
      </Routes>
    </main>
  );
}

export default App;
