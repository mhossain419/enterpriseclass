var http = require('http');
var url = require('url');
var calculator = require('./m_calculator');

function handleUnknown(res) {
    res.writeHead(200, {
        "Content-Type" : "text/plain"
    });
    res.write("Not Supported Yet");
    res.end();
}

function handleRequest(req, res) {

    var data = url.parse(req.url, true).query;
    if (data.max === undefined || data.iteration === undefined) {
        handleUnknown(res);
    }
    
    var result = {};
    result['Plouf'] = calculator.plouffBig(data.iteration);
    result['Bellard'] = calculator.bellardBig(data.iteration);
    result['PI'] = calculator.calculatePI(data.max);
    res.writeHead(200, {
        "Content-Type" : "application/json"
    });
    res.write(JSON.stringify(result));
    res.end();
}

http.createServer(handleRequest).listen(1337);
