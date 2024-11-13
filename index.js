const http = require('http');

// Crea el servidor
const server = http.createServer((req, res) => {
    // Establece el Content-Type con codificación UTF-8
    res.writeHead(200, { 'Content-Type': 'text/html; charset=UTF-8' });
    res.end('<h1>¡Hello World from Node.js!</h1>');
});

// El servidor escucha en el puerto 3000
server.listen(3000, () => {
    console.log('Servidor en ejecución en http://localhost:3000');
});
