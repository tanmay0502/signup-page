const marvel = require("marvel-comics-characters");

var names = ["Amogh", "Chinmay", "Prathamesh", "Shreyas", "Tanmay" , "Yash_M", "Yash_T"];

function intellectuals() {
    var i =0;
    var a= marvel.random();
    console.log(names[i] ," = ", a);
    i++;

    var b= marvel.random();
    console.log(names[i] ," = ", b);
    i++;

    var c= marvel.random();
    console.log(names[i] ," = ", c);
    
    i++;
    var d= marvel.random();
    console.log(names[i] ," = ", d);
    
    i++;
    var e= marvel.random();
    console.log(names[i] ," = ", e);
    
    i++;
    var f= marvel.random();
    console.log(names[i] ," = ", f);
    i++;

    var g= marvel.random();
    console.log(names[i] ," = ", g);
    i++;

}
console.log(intellectuals());
