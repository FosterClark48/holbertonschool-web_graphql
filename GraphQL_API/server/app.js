const express = require('express');
const {graphqlHTTP} = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');

const app = express();

app.use('/graphql',graphqlHTTP({
  schema,
  graphiql: true,
}));

mongoose.connect('mongodb+srv://5538:Vlcoh0XaRl92YtYF@graphqlcluster.qi4ingp.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', () => {
  console.log('Connected to database');
});

app.listen(4000,()=>{
  console.log('now listening for request on port 4000');
});
