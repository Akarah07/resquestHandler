 var http = require('http');
 var fs = require('fs');


const server = http.createServer((req, res) => {
    console.log(req.url);

    res.setHeader('Content-Type', 'text/html');

    let path = './webpages/';
    switch(req.url){
        case '/':
            path += 'index.html';
            res.statusCode = 200;
            break;
        case '/index.html':
            path += 'index.html';
            res.statusCode = 200;
            break;
        case '/about.html':
            path += 'about.html';
            res.statusCode = 200;
            break;
        case '/contact.html':
            path += 'contact.html';
            res.statusCode = 200;
            break;
        default:
            path += '404.html';
            res.statusCode = 400;
            break;
    }

    fs.readFile(path, (err, data) => {
        if (err){
            console.log(err);
            res.end();
        } else{
            res.end(data);
        }
    })
});

server.listen(5000, 'localhost', () => {
    console.log('port listerning at 5000')
})