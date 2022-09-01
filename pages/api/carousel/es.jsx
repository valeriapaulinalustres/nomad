export default function nav(req, res) {
    res.json([
        {
            id: 1,
            img: "/img/cooking.jpg",
            title: "Tu tribu te espera",
            featuresone: "Concepto Co-living",
            featurestwo: "Experiencias únicas",
            featuresthree: "Gastronomía multi-formato",
            featuresnumberone: "1",
            featuresnumbertwo: "2",
            featuresnumberthree: "3",
        },

        {
            id: 2,
            img: "/img/family.jpg",
            title: "Tu tribu te espera",
            featuresone: "Concepto Co-living",
            featurestwo: "Experiencias únicas",
            featuresthree: "Gastronomía multi-formato",
            featuresnumberone: "1",
            featuresnumbertwo: "2",
            featuresnumberthree: "3",
        }
    ]
    )
}
