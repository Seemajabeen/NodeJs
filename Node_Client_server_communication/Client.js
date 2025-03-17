
const http = require('http');

const options = {
hostname: 'localhost',
port: 3000,
path: '/api/data',
method: 'GET'
};

const req = http.request(options, (res) => {
console.log(`Status Code: ${res.statusCode}`);

let data = '';

res.on('data', (chunk) => {
data += chunk;
});

res.on('end', () => {
console.log('Response data:');
console.log(JSON.parse(data));
});
});


req.on('error', (error) => {
console.error(`Request error: ${error.message}`);
});


req.end();

console.log('Client request sent');