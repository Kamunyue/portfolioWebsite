const {MongoClient} = require('mongodb');
const dotenv = require('dotenv');
dotenv.config('./config.env');


function main (){
    try
    {
    const DB = process.env.MONGO_URI
    const client = new MongoClient(DB)

    client.connect()

    console.log('Connected to MongoDB')
    }

    catch(e){
        console.error('MongoDB connection error:', e)
    }
}