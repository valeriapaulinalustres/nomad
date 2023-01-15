export default function nav(req, res) {
    res.json([
        {
            id: 1,
            img: "/img/cooking.jpg",
            title: "Decoration",
            featuresone: "Personalized and business gifts",
            featurestwo: "Business gifts",
            featuresthree: "Design",
            featuresnumberone: "1",
            featuresnumbertwo: "2",
            featuresnumberthree: "3",
        },

        {
            id: 2,
            img: "/img/family.jpg",
            title: "Chocolate delights",
            featuresone: "Gifts",
            featurestwo: "Events",
            featuresthree: "Special moments",
            featuresnumberone: "1",
            featuresnumbertwo: "2",
            featuresnumberthree: "3",
        }
    ]
    )
}
