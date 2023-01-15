export default function nav(req, res) {
    res.json(
        {
            language: "English",
            reserve: "Comprar",
            menuCity: "City host",
            menuActivities: "Actividades",
            menuGastronomy: "Gastronomía",
            menuEvents: "Eventos",
            nomad: "/img/nomadLogo.jpg",
            bagIcon: "/img/calendar.png"
        },
    )
}