export default function nav(req, res) {
    res.json([
        { 
            id: 1, 
            img: "/img/urban.jpg", 
            title: "Tazas", 
            subtitle: "Tazas y cucharas de porcelana personalizadas", 
            description: "Tazas y cucharas con aplique de porcelana fría", 
            desde: "desde ",  
            price: "$2000", 
            availabilty: true, 
            btn: "Solicitar catálogo actual" 
        },
        { 
            id: 2, 
            img: "/img/tribeHotel.jpg", 
            title: "Cajas", 
            subtitle: "Cajas de madera", 
            description: "Cajas de madera decoradas", 
            desde: "desde ",  
            price: "$3000", 
            availabilty: true , 
            btn: "Solicitar catálogo actual"
        },
        { 
            id: 3, 
            img: "/img/familyHotel.jpg", 
            title: "Chocolates", 
            subtitle: "Chocolates variedad", 
            description: "Bombones y chupetines personalizados", 
            desde: "desde ",  
            price: "$2000", 
            availabilty: true , 
            btn: "Solicitar catálogo actual"
        },
        { 
            id: 4, 
            img: "", 
            title: "Friends", 
            subtitle: "Vive junto a toda tu familia la mejor experiencia de sus vidas", 
            description: "Habitaciones VIP - Piscina Climatizada - Actividades - Spa - Cancha de golf - Wifi gratis", desde: "desde ",  
            price: "$4560/noche", 
            availabilty: false , 
            btn: "Solicitar catálogo actual"
        },
    ])
}
