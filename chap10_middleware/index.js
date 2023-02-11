const express = require('express');
const router = express.Router();

// get middleware from middleware folder
const reqFilter2 = require('./middleware');

const app = express();

router.use(reqFilter2);

// example of middleware for route level 
const reqFilter = (req, res, next) => {
       if (!req.query.age) {
           res.send('age is needed');
       }else if (req.query.age < 18) {
           res.send('you are not allowed');
       }
       else {
              next();
       }



}
// for application leverl middleware belove line imp so commenting out the below line for route level middleware example
// app.use(reqFilter);

//create home route like ask age on load
app.get('/', (req, res) => {

       // use middleware to check age
        res.send('<h1>Welcome to the home page</h1>');
        
}
);

app.get('/user', reqFilter, (req, res) => {

    // use middleware to check age
     res.send('<h1>Welcome to the user page</h1>');
     
}
);


router.get('/admin', (req, res) => {

    // use middleware to check age
     res.send('<h1>Welcome to the admin page</h1>');
     
}
);


app.use('/', router);


app.listen(3000, () => {
    console.log('Server started on port 3000');
    }
);

