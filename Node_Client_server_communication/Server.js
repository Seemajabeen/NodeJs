
const http = require('http');


const server = http.createServer((req, res) => {
   
    const path = req.url;
    
    
    const method = req.method;
    
   
    console.log(`Received ${method} request for ${path}`);
    
   
    res.setHeader('Content-Type', 'application/json');
    
   
    if (path === '/') {
       
        res.writeHead(200);
        res.end(JSON.stringify({ message: 'Welcome to the Node.js HTTP server!' }));
    } else if (path === '/api/data') {
       
        res.writeHead(200);
        res.end(JSON.stringify({ 
            data: 'Sample data',
            timestamp: new Date().toISOString()
        }));
    } else {
       
        res.writeHead(404);
        res.end(JSON.stringify({ error: 'Route not found' }));
    }
});

// Start the server
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
