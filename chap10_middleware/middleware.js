module.exports= reqFilter = (req, res, next) => {
    if (!req.query.age) {
        res.send('age is needed');
    }else if (req.query.age < 18) {
        res.send('you are not allowed');
    }
    else {
           next();
    }



}