const dbConnect  = require('./mongodb');


const insert = async () => {
    let data = await dbConnect();
    data.insertOne({
        name: 'iphone',
        price: '1000',
        category: 'mobile'
    }).then((resp, err) => {
        if (err) {
            console.log(err);
        }
        else {
            if (resp.acknowledged) {
                console.log('inserted');
            }
        }
    }
    )
}

// insert();

//insert multi records


const multiple =async ()=>{
let data = await dbConnect();
data.insertMany(
    [
        {
            name: 'samsung',
            price: '2000',
            category: 'mobile'
        },
        {
            name: 'nokia',
            price: '3000',
            category: 'mobile'

        },
        {
            name: 'sony',
            price: '4000',
            category: 'mobile'

        }
    ]
).then((resp, err) => {
    if (err) {
        console.log(err);
    }
    else {
        if (resp.acknowledged) {
            console.log('inserted');
        }
    }
    
    

});
}

multiple();
