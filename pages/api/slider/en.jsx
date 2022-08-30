export default function nav(req, res) {
    res.json([
        { id: 1, img: "/img/cooking.jpg", icon: "/img/maps.svg", city: "Arequipa", title: "URBAN", },
        { id: 2, img: "/img/friends.jpg", icon: "/img/maps.svg", city: "Arequipa", title: "Tribe", text: "Hub of explorers, artists and professionals who see the world as their true home.", services: "Services", icon1: "/img/bed.png", icon2: "/img/restaurante.png", icon3: "/img/carousel.png", alt1: "bed", alt2: "restaurant", alt3: "carousel" },
        { id: 3, img: "/img/family.jpg", icon: "/img/maps.svg", city: "Arequipa", title: "Family", text: "", services: "", icon1: "", icon2: "", icon3: "" }
    ])
}