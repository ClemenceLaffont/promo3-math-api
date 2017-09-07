"use strict";

const express = require('express');

let app = express();

app.get("/add", function(req, res) {
    if (!req.query.a || !req.query.b) {
        res.status(400);
        res.send("missing parameter");
        return;
    }
    let a = parseFloat(req.query.a);
    let b = parseFloat(req.query.b);
    if (isNaN(a) || isNaN(b)) {
        res.status(400);
        res.send("invalid parameter");
        return;
    }
    res.send((a + b).toString());
});

const port = 8080;
app.listen(port, function(err) {
    if (err) {
        console.error("fail to start server:", err);
        return;
    }
    console.log("listening on port " + port + "...");
});