export default function nav(req, res) {
    res.json(
        {
            language: "Español",
            reserve: "Reserve",
            menuCity: "City host",
            menuActivities: "Activities",
            menuGastronomy: "Gastronomy",
            menuEvents: "Events",
            nomad: "/img/nomadLogo.jpg",
            bagIcon: "/img/calendar.png"
        },
    )
}