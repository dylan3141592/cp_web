const express = require("express");
const app = express();
const PORT =3000;

app.get("/", (req,res)=>{
    res.send("Hello 호로로world");
})

app.listen(PORT, ()=>{
    console.log("server is running")
});


