const express = require('express');
const app = express();

app.get('/', (req, res) => {
    // add a form to the page
    res.send(`
        <form action="/submit" method="post">
            <input type="text" name="name" />
            <input type="submit" value="Submit" />
        </form>
    `); 
}
);

app.get('/courses', (req, res) => {
    res.send([1, 2, 3]);
}
);

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
}
);