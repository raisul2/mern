const express = require('express');
const app = express()
const cors = require('cors')
const path = require('path')
require('dotenv').config({path:"./cofig.env"})
//user middlewere

app.use(cors())
app.use(express.json())



 /// using  routers
 
 app.use(require('./routes/route'))


/// here is port 

/// server static assets if in production 

if(process.env.NODE_ENV === 'production'){

    ///set static folder

    app.use(express.static('../client/build'))

    app.get('*', (req, res)=>{
res.sendFile(path.relative(__dirname, 'client', 'build', 'index.html'))
    })

}



const port = process.env.PORT || 5000


///  mongodb connecttion 
 const conn = require('./db/connection');
const res = require('express/lib/response');

 
 conn.then(db =>{
     if(!db) return process.exit(1)

     app.listen(port, () => {
        console.log(`Server started on ${port}`);
    });

    app.on('error', err => console.log(`failed to connnect ${err}`))
    
    /// error in mongodb connnectin
 }).catch(error =>{
     console.log(`Connection Faied...${error}`)
 })

 
