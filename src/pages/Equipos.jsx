function Equipos() {

    const equipos = [
        {
            codigo: "EQ-001",
            tipo: "Laptop",
            marca: "Lenovo",
            estado: "Asignado",
            empleado: "Juan Pérez"
        },
        {
            codigo: "EQ-002",
            tipo: "Monitor",
            marca: "LG",
            estado: "Disponible",
            empleado: "-"
        },
        {
            codigo: "EQ-003",
            tipo: "Laptop",
            marca: "HP",
            estado: "Mantenimiento",
            empleado: "Ana Torres"
        },
        {
            codigo: "EQ-004",
            tipo: "Impresora",
            marca: "Epson",
            estado: "Asignado",
            empleado: "Carlos Díaz"
        }
    ];

    return (

        <div className="page">

            <h1>Equipos</h1>

            <p className="page-description">
                Gestión de activos tecnológicos.
            </p>

            <div className="table-container">

                <table>

                    <thead>
                    <tr>
                        <th>Código</th>
                        <th>Tipo</th>
                        <th>Marca</th>
                        <th>Estado</th>
                        <th>Asignado a</th>
                    </tr>
                    </thead>

                    <tbody>

                    {equipos.map((equipo) => (

                        <tr key={equipo.codigo}>

                            <td>{equipo.codigo}</td>
                            <td>{equipo.tipo}</td>
                            <td>{equipo.marca}</td>
                            <td>
                  <span className="estado">
                    {equipo.estado}
                  </span>
                            </td>
                            <td>{equipo.empleado}</td>

                        </tr>

                    ))}

                    </tbody>

                </table>

            </div>

        </div>

    );
}

export default Equipos;