import mongoose from 'mongoose';

//const url = 'mongodb://localhost:27017/rollingnews'
const url = 'mongodb+srv://Alejomartinezgrau:Tumama12)(@cluster0.teoz2.mongodb.net/rollingnews'

mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true});

const connection = mongoose.connection;

connection.once('open', ()=>{
    console.log('BD Conectada');
});