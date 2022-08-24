export default function nav(req, res) { 
    res.json([
        {id: 1, img: "", title: "Urban", subtitle: "Social hub de alta experiencia, para millennials y zetas ejecutivos", description: "Habitaciones VIP - Piscina Climatizada - Salón de Eventos - Espacio Coworking - Wifi gratis", price: 4560, availabilty: true },
        {id:2, img: "", title: "Tribe", subtitle: "Exploradores, artistas y emprendedores juntos en un lugar único", description: "Habitaciones VIP - Piscina - Gastronomía Vegana - Wifi graits", price: 3190, availabilty: true },
        {id: 3, img: "", title: "Family", subtitle: "vive junto a toda tu familia la mejor experiencia de sus vidas", description: "Habitaciones VIP - Piscina Climatizada - Actividades - Spa - Cancha de golf - Wifi gratis", price: 4560, availabilty: true },
        {id: 4, img: "", title: "Friends", subtitle: "vive junto a toda tu familia la mejor experiencia de sus vidas", description: "Habitaciones VIP - Piscina Climatizada - Actividades - Spa - Cancha de golf - Wifi gratis", price: 4560, availabilty: false },
    ])
    }
    