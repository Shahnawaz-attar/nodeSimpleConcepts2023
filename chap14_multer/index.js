const express = require('express');
const multer = require('multer');
const app = express();
const router = express.Router();


const upload = multer({  // cd is callback 

    storage: multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, 'uploads/')
        },
        filename: function (req, file, cb) {
            cb(null, file.originalname+'-'+Date.now()+'.jpg')
        }
    }),

}).single('file');

app.post('/upload', function (req, res) {
    upload(req, res, function (err) {
        if (err) {
            return res.end("Error uploading file.");
        }
        res.end("File is uploaded");
    });

});



app.listen(3000, () => {
    console.log('Server is running on port 3000');
}
);