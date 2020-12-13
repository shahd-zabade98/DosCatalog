//require("dotenv").config();
const express = require('express');
const app = express();
//const Joi = require('joi');
//const CatalogRouter = require("./api/Catalog/Catalog.router");
//const db = require("./database.js");
//const bookSearch = require("./api/catalogLookup");
//app.use("/api", bookSearch);
const CatalogRouter = require("./api/catalog.router");
app.use(express.json());
app.use("/api", CatalogRouter);
/*app.get("/api/Book/:id", (req, res, next) => {
    var sql = "select * from Book where Book_id = ?"
    var params = [req.params.id]
    db.get(sql, params, (err, results) => {
        if (err) {
          res.status(400).json({"error":err.message});
          return;
        }
        if(results.length >0){
            return  res.send({
             success :1,
             data: results
             });
         }
         return res.send({
             success :0,
             data: "Book is not found try agaain!"
         });
      });
    });
app.get("/api/Book/:topic", (req, res, next) => {
    var sql = "select * from Book where topic = ?"
    var params = [req.params.id]
    db.get(sql, params, (err, results) => {
        if (err) {
          res.status(400).json({"error":err.message});
          return;
        }
        //if(results.length >0){
            return  res.send({
             success :1,
             data: results
             });

         /*}
         return res.send({
             success :0,
             data: "Book is not found!"
         });
      });
});*/
//app.use(express.json());
//app.use("/api/Catalog", CatalogRouter);
app.listen(3306, () =>{
    console.log("Server up and running on PORT:",3306);
});