function StatCard({ titulo, valor, icono }) {

    return (
        <div className="stat-card">

            <div className="stat-icon">
                {icono}
            </div>

            <div>
                <p>{titulo}</p>
                <h2>{valor}</h2>
            </div>

        </div>
    );
}

export default StatCard;