const dbConnect = require('./mongodb');


const deleteOne = async () => {
    let data = await dbConnect();
    data.deleteOne({
        name: 'sony'
    }).then((resp, err) => {
        if (err) {
            console.log(err);
        }
        else {
            if (resp.acknowledged) {
                console.log('deleted');
            }
        }
    }
    )
}


// deleteOne();

//deleteMany
const deleteMany = async () => {
    let data = await dbConnect();
    data.deleteMany({
      
    }).then((resp, err) => {
        if (err) {
            console.log(err);
        }
        else {
            if (resp.acknowledged) {
                console.log('deleted');
            }
        }
    }
    )
}
deleteMany();