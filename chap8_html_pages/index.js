const express = require('express');
const app = express();
const path = require('path');

const publicPath = path.join(__dirname, 'public');

app.use(express.static(publicPath));

// render index.html as root page
app.get('/', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
}
);
 
// remove extension from file name
app.get('', (_, res) => {
    res.sendFile(`${publicPath}/index.html`);

}
);
app.get('/about', (_, res) => {
    res.sendFile(`${publicPath}/about.html`);

}
);

// page not found
app.get('*', (_, res) => {
    res.sendFile(`${publicPath}/404.html`);
}
);

app.listen(3000, () => {
    console.log('Server is up on port 3000');
}
);
