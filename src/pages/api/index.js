const { MongoClient } = require("mongodb");

const uri = process.env.MONGODB_URI;
const options = {}
export default async function handler(req, res) {
    if (req.method != 'POST') {
        return res.status(405).send({ message: 'Method not allowed', status: '405' })
    }
    // mongodb config
    const client = new MongoClient(uri, options)
    client.connect().then((result) => {
        const database = client.db("productData");
        const productCollection = database.collection("products");
        console.log('post', req.body);
        const { name, description, price } = req.body;
        const productData = {
            name,
            description,
            price
        }
        productCollection.insertOne(productData).then((result) => {
            console.log(result);
            return res.status(200).send({ message: result, status: '200' });
        }).catch((err) => {
            console.log(err);
            return res.status(500).send({
                message: 'The server has encountered a error adding the product.', status: '500'
            });
        });
    }).catch((err) => {
        console.log(err);
        return res.status(500).send({
            message: 'The server has encountered a error adding the product.', status: '500'
        });
    });
}