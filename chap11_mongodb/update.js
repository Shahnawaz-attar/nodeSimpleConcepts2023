const dbConnect = require('./mongodb');


const update = async () => {
    let data = await dbConnect();
    data.updateOne({
        name: 'sony'
    }, {
        $set: {
            price: '2000'
        }
    }).then((resp, err) => {
        if (err) {
            console.log(err);
        }
        else {
            if (resp.acknowledged) {
                console.log('updated');
            }
        }
    }
    )
}
update();