function Empleados() {

    const empleados = [
        {
            id: 1,
            nombre: "Juan Pérez",
            cargo: "Analista de Sistemas",
            departamento: "TI"
        },
        {
            id: 2,
            nombre: "Ana Torres",
            cargo: "Diseñadora",
            departamento: "Marketing"
        },
        {
            id: 3,
            nombre: "Carlos Díaz",
            cargo: "Administrador",
            departamento: "Administración"
        }
    ];

    return (

        <div className="page">

            <h1>Empleados</h1>

            <p className="page-description">
                Personal registrado en el sistema.
            </p>

            <div className="table-container">

                <table>

                    <thead>

                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Cargo</th>
                        <th>Departamento</th>
                    </tr>

                    </thead>

                    <tbody>

                    {empleados.map((empleado) => (

                        <tr key={empleado.id}>

                            <td>{empleado.id}</td>
                            <td>{empleado.nombre}</td>
                            <td>{empleado.cargo}</td>
                            <td>{empleado.departamento}</td>

                        </tr>

                    ))}

                    </tbody>

                </table>

            </div>

        </div>

    );
}

export default Empleados;