// jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

var items = [];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req, res){
    var today = new Date();

    var options = {
        weekday: "long", 
        day: "numeric",
        month: "long"
    };
    var day = today.toLocaleDateString("en-US", options);
   
    res.render('list', {KindOfDay: day, newListItems: items});
    
});


app.listen(3000, function(){
    console.log("server is running on port 3000");
});

app.post("/", function(req, res){
       var item = req.body.newItem;

       items.push(item);

    res.redirect("/");
    
})

 // var currentDay = today.getDay();
    // var day = "";

    // // if (currentDay === 6 || currentDay === 0) {
    // //     day = "weekend";
     
    // // } else {
    // //     day = "weekday";
    // // }
    // switch (currentDay) {
    //     case 0:
    //         day = "Sunday";
    //         break;
            
    //         case 1:
    //         day = "Monday";
    //         break;
    //         case 2:
    //         day = "Tuesday";
    //         break;
    //         case 3:
    //         day = "Wednesday";
    //         break;
    //         case 4:
    //         day = "Thursday";
    //         break;
    //         case 5:
    //         day = "Friday";
    //         break;
    //         case 6:
    //         day = "Satday";
    //         break;

    //     default:
    //         console.log ("Error current day is equal to" + currentDay);
    // }
