const conn = require('./config');
const express = require('express');
const app = express();

// example to run query 
// conn.query('SELECT * FROM user', function (err, rows, fields) {
//     if (err) {
//         console.log(err);
//         return;
//     }
//     console.log('Data received from Database:');
//     console.log(rows);
// }
// );
app.use(express.json());


app.get('/', function (req, res) {
    conn.query('SELECT * FROM user', function (err, rows, fields) {
        if (err) {
            console.log(err);
            return;
        }
        console.log('Data received from Database:');
        console.log(rows);
        res.send(rows);
    }
    );

}
);


// post
app.post('/upload', function (req, res) {
   let data ={
        name: req.body.name,
        price: req.body.price,
        status: req.body.status
   }

    conn.query('INSERT INTO user SET ?', data, function (err, rows, fields) {
        if (err) {
            console.log(err);
            return;
        }
        console.log('Data received from Database:');
        console.log(rows);
        res.send(rows);
    }
    );

}
);

// put
app.put('/upload/:id', function (req, res) {
    let data ={
        name: req.body.name,
        price: req.body.price,
        status: req.body.status
    }

    conn.query('UPDATE user SET ? WHERE id = ?', [data, req.params.id], function (err, rows, fields) {
        if (err) {
            console.log(err);
            return;
        }
        console.log('Data received from Database:');
        console.log(rows);
        res.send(rows);
    }
    );

});


// delete

app.delete('/delete/:id', function (req, res) {
    conn.query('DELETE FROM user WHERE id = ?', req.params.id, function (err, rows, fields) {
        if (err) {
            console.log(err);
            return;
        }
        console.log('Data received from Database:');
        console.log(rows);
        res.send(rows);
    }
    );

});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
}
);