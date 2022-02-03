express=require("express")
app=express()
app.use(express.static('public'));
app.use(express.static('jsfiles'));


app.listen(4321,function(){
    console.log("Server Started")
})

app.get("/",function(req,res){
    res.send("Hello Express GET");
})
app.get("/",function(req,res){
    res.sendFile("/html/index2.html");
})

