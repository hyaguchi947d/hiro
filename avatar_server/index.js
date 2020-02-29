const express = require('express');
const app = express();
const express_ws = require('express-ws')(app);

app.use(express.static('public'));

app.listen(3000);

var clients = [];

app.ws('/ws', (ws, req) => {
    console.log('connected.');
    clients.push(ws);

    ws.on('message', message => {
        clients.forEach(a => {
            if (a !== ws) {
                a.send(message);
            }
        });
    });

    ws.on('close', () => {
        clients = clients.filter(a => a !== ws);
        console.log('disconnected.');
    });
});
