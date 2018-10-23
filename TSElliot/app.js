var express     = require("express"),
    app         = express();
    
app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", function(req, res) {
    res.render("home");
});

//Bottom Essentials:

app.get("*", function(req, res) {
    res.send("Are you trying to hack me bro??? Stop it.");
});

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("server started");
});