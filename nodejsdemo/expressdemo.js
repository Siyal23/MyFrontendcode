express=require("express")
app=express()
app.use(express.static('public'));
app.listen(4321,function(){
    console.log("Server Started")
})
app.get("/",function(req,res){
    res.send("Hello Express GET");
})
app.post("/",function(req,res){
    res.send("Hello Express GET");
})
app.put("/",function(req,res){
    res.send("Hello Express GET");
})

