var http = require('http');
http.createServer(function (req, res) {
    var s = 'var%20http%20%3D%20require%28%27http%27%29%3B%0Ahttp.createServer%28function%20%28req%2C%20res%29%20%7B%0A%09var%20s%20%3D%20%27_%27%3B%0A%09var%20c%20%3D%20unescape%28s%29.replace%28%27_%27%2C%20s%29%3B%0A%09res.writeHead%28200%2C%20%7B%27Content-Type%27%3A%20%27text/plain%27%7D%29%3B%0A%09res.end%28unescape%28s%29%29%3B%0A%7D%29.listen%28process.env.PORT%29%3B';
    var c = unescape(s).replace('_', s);
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(c);
}).listen(process.env.PORT);