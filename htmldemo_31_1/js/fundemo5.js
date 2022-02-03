function cookVeg(fooditem){
   
  setTimeout(chef(fooditem),5000);

}
function chef(fooditem){
    return  "Food ITem " + foodItem + "ready";
}



// function cookNonVeg(fooditem){
//     console.log("food item Non Veg" + fooditem + " ready")
// }
function waiter(fooditem , callback){
    console.log("Your Food Has Been ordered : " + fooditem)
    cookedfood = cookVeg(fooditem);
    return callback(cookedfood);
}


waiter("laddu", function(x){
    console.log("Please enjoy " + x);
} );


console.log("End of app")
