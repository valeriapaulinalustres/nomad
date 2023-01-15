export default function nav(req, res) {
    res.json([
        { 
            id: 1, 
            img: "/img/urban.jpg", 
            title: "Cups and spoons", 
            subtitle: "Personalized porcelain cups and spoons", 
            description: "VIP Rooms - Heated Pool - Meeting Room - Coworking Space - Free Wi-Fi", 
            desde: "from ", 
            price: "USD 50", 
            availabilty: true, 
            btn: "Request current catalog" 
        },
        { 
            id: 2, 
            img: "/img/tribeHotel.jpg", 
            title: "Boxes", 
            subtitle: "Wooden boxes", 
            description: "Decorated wooden boxes", 
            desde: "from ", 
            price: "USD 100", 
            availabilty: true  , 
            btn: "Request current catalog"
        },
        { 
            id: 3, 
            img: "/img/familyHotel.jpg", 
            title: "Chocolates", 
            subtitle: "Chocolates ", 
            description: "Personalized chocolates and lollipops", 
            desde: "from ", 
            price: "USD 80", 
            availabilty: true ,
            btn: "Request current catalog" 
        },
        { 
            id: 4, 
            img: "", 
            title: "Friends", 
            subtitle: "Live with your whole family the best experience of your lives", 
            description: "VIP Rooms - Heated Pool - Activities - Spa - Golf Course - Free Wi-Fi", 
            desde: "from ", 
            price: "USD 4560/night", 
            availabilty: false  , 
            btn: "Request current catalog"
        },
    ])
}
