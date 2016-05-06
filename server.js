var http = require('http');

function headerPrinter(req, res){
    console.log("a user made a request to " + req.url);
    res.writeHead(200, {"Content-Type": 'text/plain'});
    var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    var language = req.headers['accept-language'].split(',')[0]; 
    var os = req.headers['user-agent'].split(') ')[0].split('(')[1];
    res.write('information about your browser :)\n\
    ip address: ' + ip + '\n\
    language: ' + language + '\n\
    OS: ' + os + '\n');
    res.end();
};

var port = Number(process.env.PORT || 3000)

var server = http.createServer(headerPrinter)

server.listen(port)

console.log('server is now running...')