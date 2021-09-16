const express = require('express');
const app = express();

app.set("view engine", "ejs");


app.get("/", function(req, res) {

    const items = [
        {
            title: "D", 
            message: "esenvolver aplicações de forma fácil"
        },
        {
            title: "E", 
            message: "js usa javascript para renderizar html"
        },
        {
            title: "M", 
            message: "uito fácil de usar uma porra, mas"
        },
        {
            title: "A", 
            message: " atitude de aprender mais"
        },
        {
            title: "I", 
            message: "rá me fazer voar"
        },
        {
            title: "S", 
            message: "em medo algum"
        },
        
    ];

    const subtitle = "EJS é uma linguagem de modelagem de html por javascript"

    res.render("pages/index",{
        qualitys: items,
        subtitle: subtitle,
    });
});


app.get("/sobre", function(req, res) {
    res.render("pages/about");
});

app.listen(8080);
console.log("Rodando");