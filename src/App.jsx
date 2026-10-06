import { useState } from "react";

import "./App.css";

import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Equipos from "./pages/Equipos";
import Empleados from "./pages/Empleados";

function App() {

  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");

  const [logueado, setLogueado] = useState(false);

  const [error, setError] = useState("");

  const [pagina, setPagina] = useState("dashboard");


  const iniciarSesion = (e) => {

    e.preventDefault();

    if (usuario === "admin" && password === "123456") {

      setLogueado(true);
      setError("");

    } else {

      setError("Usuario o contraseña incorrectos");

    }

  };


  const cerrarSesion = () => {

    setLogueado(false);

    setUsuario("");
    setPassword("");

    setPagina("dashboard");

  };


  const mostrarPagina = () => {

    switch (pagina) {

      case "equipos":
        return <Equipos />;

      case "empleados":
        return <Empleados />;

      case "dashboard":
      default:
        return <Dashboard />;

    }

  };


  if (!logueado) {

    return (

        <div className="login-container">

          <div className="login-card">

            <h1>TechManager</h1>

            <p className="subtitle">
              Gestión de Activos Tecnológicos
            </p>

            <form onSubmit={iniciarSesion}>

              <label>Usuario</label>

              <input
                  type="text"
                  placeholder="Ingrese su usuario"
                  value={usuario}
                  onChange={(e) => setUsuario(e.target.value)}
              />

              <label>Contraseña</label>

              <input
                  type="password"
                  placeholder="Ingrese su contraseña"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
              />

              {error && (
                  <p className="error">
                    {error}
                  </p>
              )}

              <button type="submit">
                Iniciar sesión
              </button>

            </form>

            <p className="footer">
              Sistema interno de gestión tecnológica
            </p>

          </div>

        </div>

    );

  }


  return (

      <div className="app-layout">

        <Sidebar
            cambiarPagina={setPagina}
            cerrarSesion={cerrarSesion}
        />

        <main className="main-content">

          {mostrarPagina()}

        </main>

      </div>

  );

}

export default App;