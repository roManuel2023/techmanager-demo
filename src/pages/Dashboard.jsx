import StatCard from "../components/StatCard";

function Dashboard() {

    return (

        <div className="page">

            <h1>Dashboard</h1>

            <p className="page-description">
                Resumen general de los activos tecnológicos.
            </p>

            <div className="stats">

                <StatCard
                    titulo="Total de equipos"
                    valor="48"
                    icono="💻"
                />

                <StatCard
                    titulo="Equipos asignados"
                    valor="35"
                    icono="📦"
                />

                <StatCard
                    titulo="En mantenimiento"
                    valor="7"
                    icono="🔧"
                />

                <StatCard
                    titulo="Disponibles"
                    valor="6"
                    icono="✅"
                />

            </div>

            <div className="welcome-card">

                <h2>Bienvenido a TechManager 👋</h2>

                <p>
                    Sistema para la gestión y control de activos
                    tecnológicos de la organización.
                </p>

            </div>

        </div>

    );
}

export default Dashboard;