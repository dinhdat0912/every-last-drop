const path = require("path");
const {server} = require(path.join(__dirname,"backend","server.js"));
const {database} = require(path.join(__dirname,"backend","database.js"));

database.init();
//server.route("desc/:table", req => database.get(`DESC ${req.params.table}`));
//server.route("select/:table", req => database.get(`SELECT * FROM ${req.params.table}`));
//server.route("insertTest", req => database.insert("glass",{id:11,name:"Bucket"}));

server.route("drinks", req => database.get(`SELECT * FROM drinkRecipe`));


server.start();