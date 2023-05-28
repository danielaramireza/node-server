const http = require("http");
const port = 3000;
const host = "localhost";

let listaTareas = [
  "Hacer el desayuno",
  "Sacar la basura",
  "Ir al supermercado",
  "Pasear el perro",
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
