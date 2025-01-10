const fs = require('fs');
const http = require('http');
let users = [];
let a=fs.readFileSync('./sample.json', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    users = JSON.parse(data);
    return users;
});

// console.log(a);
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write(a);
    res.end();
});

server.listen(3000,()=>{
    console.log('server is running on port http://localhost:3000');
})