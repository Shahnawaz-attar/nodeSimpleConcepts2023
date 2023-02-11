const dbCollection = require('./mongodb');





// first way to connect to mongodb
// dbCollection().then((resp, err) => {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         resp.find({}).toArray().then((resp, err) => {
//             if (err) {
//                 console.log(err);
//             }
//             else {
//                 console.log(resp);
//             }
//         }
//         )
//     }
// }
// );


// second way to connect to mongodb

const main = async () => {
    let data = await dbCollection();
    data.find({}).toArray().then((resp, err) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log(resp);
        }
    }
    )

}

main();

