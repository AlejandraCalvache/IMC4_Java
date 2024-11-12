const http = require('http');

// Crea el servidor
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>¡Hola Mundo desde Node.js!</h1>');
});

// El servidor escucha en el puerto 3000
server.listen(3000, () => {
    console.log('Servidor en ejecución en http://localhost:3000');
});
