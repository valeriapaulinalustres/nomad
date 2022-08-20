
export default function nav(req, res) {
    res.json([
      {id: 1, navName: "Alojate", src: "alojate"}, 
      {id: 2, navName: "Co-Work", src: "cowork"}, 
      {id: 3, navName: "Experimenta", src:"experimenta"}, 
      {id: 4, navName: "Únete", src:"unete"}])
  }
  