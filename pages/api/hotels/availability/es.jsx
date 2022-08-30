export default function nav(req, res) {
    res.json([
        { id: 1, img: "/img/cooking.jpg", title: "URBAN", subtitle: "Social hub de alta experiencia, para millennials y zetas ejecutivos", description: "Habitaciones VIP - Piscina Climatizada - Salón de Eventos - Espacio Coworking - Wifi gratis", desde: "desde",  price: "$4560/noche", availabilty: true, btn: "Reservar ahora" },
        { id: 2, img: "/img/friends.jpg", title: "Tribe", subtitle: "Exploradores, artistas y emprendedores juntos en un lugar único", description: "Habitaciones VIP - Piscina - Gastronomía Vegana - Wifi gratis", desde: "desde",  price: "$3190/noche", availabilty: true , btn: "Reservar ahora"},
        { id: 3, img: "/img/family.jpg", title: "Family", subtitle: "Vive junto a toda tu familia la mejor experiencia de sus vidas", description: "Habitaciones VIP - Piscina Climatizada - Actividades - Spa - Cancha de golf - Wifi gratis", desde: "desde",  price: "$4560/noche", availabilty: true , btn: "Reservar ahora"},
        { id: 4, img: "", title: "Friends", subtitle: "Vive junto a toda tu familia la mejor experiencia de sus vidas", description: "Habitaciones VIP - Piscina Climatizada - Actividades - Spa - Cancha de golf - Wifi gratis", desde: "desde",  price: "$4560/noche", availabilty: false , btn: "Reservar ahora"},
    ])
}
