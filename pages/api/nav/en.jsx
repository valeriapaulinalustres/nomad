export default function nav(req, res) { 
    res.json([
        {id: 1, navName: "Take place", src: "alojate", type:"link"}, 
        {id: 2, navName: "Co-Work", src: "cowork", type:"link"}, 
        {id: 3, navName: "Experiment", src:"experimenta", type:"click"}, 
        {id: 4, navName: "Join", src:"unete", type:"link"}])
    }