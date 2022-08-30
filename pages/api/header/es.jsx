export default function nav(req, res) {
    res.json(
        {
            language: "English",
            reserve: "Reservar",
            menuCity: "City host",
            menuActivities: "Actividades",
            menuGastronomy: "Gastronomía",
            menuEvents: "Eventos",
        },
    )
}