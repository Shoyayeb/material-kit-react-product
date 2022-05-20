const { MongoClient } = require("mongodb");


export default async function handler(req, res) {
    const uri = `mongodb+srv://<${process.env.DB_USERNAME}>:<${process.env.DB_PASSWORD}>@cluster0.4f4qc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
    // mongodb config
    const client = new MongoClient(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    client.connect();
    const database = client.db("productData");
    const productCollection = database.collection("products");
    if (req.method === 'POST') {
        console.log('post', req.body);
        const { name, description, price } = req.body;
        const productData = {
            name,
            description,
            price
        }
        productCollection.insertOne(productData).then((result) => {
            console.log(result);
            res.status(200).send({ message: result, status: '200' })
        }).catch((err) => {
            console.log(err);
            res.status(500).send({
                message: 'The server has encountered a error adding the product.', status: '500'
            })
        });
    }
    else {
        res.status(405).send({ message: 'Method not allowed', status: '405' })
    }
}