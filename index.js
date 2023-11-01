#!/usr/bin/node
const https = require('https');
const fs = require('fs');
var port =8080
const server = https.createServer((req, res) => {

    function serve(pathToFile) {
        fs.readFile(pathToFile, (data) => {
            // if (err) {
            //     console.log(err);
            // } else {
                res.end(data);
            //}
        });
    }

    switch (req.url) {
        case '/': {
            serve('./index.html');
            break;
        }
        case '/about':{
            serve('./about.html')
        }
        case '/contact-me':{ 
            serve('./contact-me.html')
        }
        default: {
            serve("/404.html")
        }
    }

});
server.listen(port, ()=>{console.log(`node is running on ${port}`)});