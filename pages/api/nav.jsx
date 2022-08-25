
export default function nav(req, res) { 
  res.json([
      {id: 1, navName: "Alójate", src: "alojate", type:"link"}, 
      {id: 2, navName: "Co-Work", src: "cowork", type:"link"}, 
      {id: 3, navName: "Experimenta", src:"experimenta", type:"click"}, 
      {id: 4, navName: "Únete", src:"unete", type:"link"}])
  }
  