let express = require('express');
let server  = express();

server.get("/", (req, res) => {
    res.status(200);
    res.send("test routes v1");
});


module.exports = (server);