var http = require('http');
var calculator = require('./m_calculator');

function handleRequest(req, res) {
    var result = {};
    result['Plouf'] = calculator.plouffBig(180000000);
    result['Bellard'] = calculator.bellardBig(180000000);
    result['PI'] = calculator.calculatePI(1000);
    res.writeHead(200, {
        "Content-Type" : "application/json"
    });
    res.write(JSON.stringify(result));
    res.end();
}

http.createServer(handleRequest).listen(1337, '127.0.0.1');
