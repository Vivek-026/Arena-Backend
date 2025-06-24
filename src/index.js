const express = require('express');
const bodyParser = require('body-parser');

const {PORT} = require('./config/serverConfig');
const connect = require('./config/database');
const User = require('./models/user');
const apiRoutes = require('./routes/index')

const app = express();

const startServer=()=>{

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
    
    app.use('/api', apiRoutes);

    app.listen(PORT,async ()=>{
        console.log("Server started on port", PORT );
        await connect();


        
        



    })

}

startServer();