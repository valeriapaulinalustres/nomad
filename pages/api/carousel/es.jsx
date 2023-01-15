export default function nav(req, res) {
    res.json([
        {
            id: 1,
            img: "/img/tribe.jpg",
            title: "Decoración",
            featuresone: "Regalos personalizados y empresariales",
            featurestwo: "Regalos empresariales",
            featuresthree: "Diseño",
            featuresnumberone: "1",
            featuresnumbertwo: "2",
            featuresnumberthree: "3",
        },

        {
            id: 2,
            img: "/img/family.jpg",
            title: "Delicias en chocolate",
            featuresone: "Regalos",
            featurestwo: "Eventos",
            featuresthree: "Motivos especiales",
            featuresnumberone: "1",
            featuresnumbertwo: "2",
            featuresnumberthree: "3",
        }
    ]
    )
}
