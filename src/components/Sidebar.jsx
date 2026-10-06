function Sidebar({ cambiarPagina, cerrarSesion }) {

    return (
        <aside className="sidebar">

            <div className="logo">
                <h2>TechManager</h2>
                <span>Gestión Tecnológica</span>
            </div>

            <nav>

                <button onClick={() => cambiarPagina("dashboard")}>
                    Dashboard
                </button>

                <button onClick={() => cambiarPagina("equipos")}>
                    Equipos
                </button>

                <button onClick={() => cambiarPagina("empleados")}>
                    Empleados
                </button>

                <button onClick={() => cambiarPagina("mantenimientos")}>
                    Mantenimientos
                </button>

                <button onClick={() => cambiarPagina("reportes")}>
                    Reportes
                </button>

            </nav>

            <button
                className="logout"
                onClick={cerrarSesion}
            >
                Cerrar sesión
            </button>

        </aside>
    );
}

export default Sidebar;