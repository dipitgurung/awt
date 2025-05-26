const express = require('express')
const app = express();


app.get('/',  (req,res)={
    res.status(200).json({
        status: "success",
        message: "Initialized Successfully"
    })
})

app.listen(3000, (err)=>{
    if (err) console.log(err)
    console.log("Server listening at http://localhost:3000/")
})