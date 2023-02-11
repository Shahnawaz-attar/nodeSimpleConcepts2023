const express = require('express');
const app = express();
const path = require('path');

const publicPath = path.join(__dirname, 'public');

// ejs  is a templating engine
app.set('view engine', 'ejs');

app.use(express.static(publicPath)); 

// render index.html as root page
app.get('/', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
}
);

//routing for ejs profile page inside view folder
app.get('/profile', (req, res) => {
    // res.render('profile'
    //     , {
    //         name: 'John Doe',
    //         age: 30
    //     }
    // );

    // looping through an array of objects
    let posts = [
        {
            id: 1,
            title: 'Post 1',
            body: 'This is post 1'
        },
        {
            id: 2,
            title: 'Post 2',
            body: 'This is post 2'
        },
        {
            id: 3,
            title: 'Post 3',
            body: 'This is post 3'
        }

    ];

    res.render('profile' , {posts} );
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
