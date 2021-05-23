// require everything first:
const express= require("express");
const bodyParser= require("body-parser");
const https = require("https");
const request= require("request");
const { post } = require("request");


const app= express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


//for getting the first page or html
app.get("/", function(req, res){
    res.sendFile(__dirname +"/signup.html");
});

// Important
app.post("/", function(req, res){

    const fName = req.body.fName;
    const lName = req.body.lName;
    const email = req.body.email;

    const data={
        members:[
            {
                email_address: email,
                status: "subscribed",
                merge_fields:{
                    FNAME: fName,
                    LNAME: lName,
                }
            }
        ]
    }

    const jsonData= JSON.stringify(data);
    const url = "https://us6.api.mailchimp.com/3.0/lists/fd650a7989"
    const options ={
            method:"POST",
            auth: "tanmay:7ee63358e836cf4af65d1aa163f5ff6f-us6"
    }


    const request= https.request(url, options, function(response){

        if (response.statusCode === 200){
            res.sendFile(__dirname + "/success.html");
        }
        else{
            res.sendFile(__dirname+ "/failure.html");
        }
        response.on("data", function(data){
            console.log(JSON.parse(data));
        })
    })
    request.write(jsonData);
    request.end();
});

// for try again button on failure
app.post("/failure", function(req, res){
    res.redirect("/")
});

// for listening at port 
app.listen(process.env.PORT || 3000, function(){
    console.log("started on 3k")
})

// 7ee63358e836cf4af65d1aa163f5ff6f-us6
// fd650a7989