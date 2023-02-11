const express = require('express');

const EventEmitter = require('events');


const app = express();


const event = new EventEmitter();   

let count = 0;
event.on('message', () => {
    count++;
    console.log(`Total count is ${count}`);
}
);

app.get('/', (req, res) => {
    res.send('Hello World!');
}
);
app.get('/search', (req, res) => {
 
    res.send('api call');
    event.emit('message');

}
);
app.get('/update', (req, res) => {
 
    res.send('api call');
}
);
app.listen(3000, () => {
    console.log('Server is running on port 3000');
}
);