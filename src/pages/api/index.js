const { MongoClient } = require("mongodb");

const uri = process.env.MONGODB_URI;
const options = {}
const client = new MongoClient(uri, options);


export default async function handler(req, res) {
    if (req.method != 'POST' && req.method != 'GET') {
        return res.status(405).send({ message: 'Method not allowed', status: '405' })
    }

    await (async () => {
        await client.connect().then((result) => {
            console.log('DB connected');
        }).catch((err) => {
            console.log(err);
            return res.status(500).send({
                message: 'The server has encountered a error connecting.', status: '500'
            });
        });
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
            await productCollection.insertOne(productData).then((result) => {
                console.log(result);
                return res.status(200).send({ message: 'Product added successfully.', result, status: '200' });
            }).catch((err) => {
                console.log(err);
                return res.status(500).send({
                    message: 'The server has encountered a error adding the product.', status: '500'
                });
            });
        } else if (req.method === 'GET') {
            const cursor = productCollection.find({});
            const users = await cursor.toArray();
            // res.send(users);
            return res.status(200).send({ users, message: 'Got products successfully.', status: '200' });
        }
    })();
}