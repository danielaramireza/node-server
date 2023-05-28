const http = require("http");
const port = 3000;
const host = "localhost";

let listaTareas = [
  { id: 1, descripcion: "Hacer el desayuno", estado: false },
  { id: 2, descripcion: "Sacar la basura", estado: false },
  { id: 3, descripcion: "Ir al supermercado", estado: false },
  { id: 4, descripcion: "Pasear el perro", estado: false },
];

const server = http.createServer((req, res) => {
  if (req.method === "GET" && req.url === "/") {
    res.statusCode = 200;
    res.end(JSON.stringify(listaTareas));
  } else {
    res.statusCode = 404;
    res.end("Recurso no encontrado");
  }
});

server.listen(port, host, () => {
  console.log("Servidor encendido");
});
