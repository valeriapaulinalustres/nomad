export default function nav(req, res) { 
    res.json([
        {id: 1, navName: "About us", src: "alojate", type:"link"}, 
        {id: 2, navName: "Products", src: "cowork", type:"link"}, 
        {id: 3, navName: "Contact", src:"experimenta", type:"click"}, 
        {id: 4, navName: "****", src:"unete", type:"link"}])
    }