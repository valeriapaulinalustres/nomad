export default function nav(req, res) {
    res.json([
        { id: 1, img: "/img/cookingFriends.jpg", icon: "/img/maps.svg", city: "Arequipa", title: "URBAN", },
        { id: 2, img: "/img/dinnerfriends.jpg", icon: "/img/maps.svg", city: "Arequipa", title: "Tribe", text: "Hub de exploradores, artistas y profesionales que ven al mundo su verdadero hogar.", services: "Servicios de este hotel", icon1: "/img/bed.png", icon2: "/img/restaurante.png", icon3: "/img/carousel.png", alt1: "cama", alt2: "restaurante", alt3: "carousel" },
        { id: 3, img: "/img/bicycleFamily.jpg", icon: "/img/maps.svg", city: "Arequipa", title: "Family", text: "", services: "", icon1: "", icon2: "", icon3: "" }
    ])
}