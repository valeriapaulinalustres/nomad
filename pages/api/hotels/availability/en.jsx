export default function nav(req, res) {
    res.json([
        { id: 1, img: "/img/chef.jpg", title: "URBAN", subtitle: "High experience social hub, for millennials and executive zetas", description: "VIP Rooms - Heated Pool - Meeting Room - Coworking Space - Free Wi-Fi", desde: "from ", price: "USD 4560/night", availabilty: true, btn: "Reserve now" },
        { id: 2, img: "/img/dinner.jpg", title: "Tribe", subtitle: "Explorers, artists and entrepreneurs together in a unique place", description: "VIP Rooms - Pool - Vegan Gastronomy - Free Wi-Fi", desde: "from ", price: "USD 3190/night", availabilty: true  , btn: "Reserve now"},
        { id: 3, img: "/img/bicycle.jpg", title: "Family", subtitle: "Live with your whole family the best experience of your lives", description: "VIP Rooms - Heated Pool - Activities - Spa - Golf Course - Free Wi-Fi", desde: "from ", price: "USD 4560/night", availabilty: true , btn: "Reserve now" },
        { id: 4, img: "", title: "Friends", subtitle: "Live with your whole family the best experience of your lives", description: "VIP Rooms - Heated Pool - Activities - Spa - Golf Course - Free Wi-Fi", desde: "from ", price: "USD 4560/night", availabilty: false  , btn: "Reserve now"},
    ])
}
