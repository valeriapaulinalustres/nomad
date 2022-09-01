export default function nav(req, res) {
    res.json([
        {
            id: 1,
            img: "/img/cooking.jpg",
            title: "Your tribe waits for you",
            featuresone: "Co-living concept",
            featurestwo: "Unique experiences",
            featuresthree: "Multi-format gastronomy",
            featuresnumberone: "1",
            featuresnumbertwo: "2",
            featuresnumberthree: "3",
        },

        {
            id: 2,
            img: "/img/family.jpg",
            title: "Your tribe waits for you",
            featuresone: "Co-living concept",
            featurestwo: "Unique experiences",
            featuresthree: "Multi-format gastronomy",
            featuresnumberone: "1",
            featuresnumbertwo: "2",
            featuresnumberthree: "3",
        }
    ]
    )
}
