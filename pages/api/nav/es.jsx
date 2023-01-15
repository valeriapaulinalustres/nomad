
export default function nav(req, res) { 
    res.json([
        {id: 1, navName: "Acerca de", src: "#about", type:"link"}, 
        {id: 2, navName: "Galería", src: "#gallery", type:"link"}, 
        {id: 3, navName: "Contacto", src:"#contact", type:"link"}, 
        {id: 4, navName: "****", src:"unete", type:"click"}])
    }