//const { bool } = require("joi");
//const pool = require("../../config/database");
//var db = require("./database.js");
const {BookLookup, Bookfetch} = require("./catalog.service");
const {BookSearch} = require("./catalog.service");
//const {BookUpdate} = require("./Catalog.service");

module.exports ={
    BookLookup : (req, res) =>{ 
       // const body = req.body
        const Book_id = req.body.Book_id;
        BookLookup(Book_id, (err,results) =>{
                if (err){
                    console.log(err);
                    console.log("error")
                    return;
                }
                if(!results){
                    return res.json({
                       "success":0,
                       data:"Book does not found!"
                       
                  });
                   }
                 return res.send({
                     success :1,
                     data: results
                 });
                
            
        });
             
             
            },
            
            BookSearch : (req, res) =>{ 
                const topic = req.params.topic;
                //const topic = req.body.topic;
                BookSearch(topic, (err,rows) =>{
                        if (err){
                            console.log(err);
                            return;
                        }
                        
                        
                         return res.send({
                             success :1,
                             data: rows
                         });
                      
                        
                        
                    
                });
                     
                     
                    },
                    BookFetch : (req, res) =>{ 
                        //const topic = req.params.topic;
                        //const topic = req.body.topic;
                        Bookfetch( (err,rows) =>{
                                if (err){
                                    console.log(err);
                                    return;
                                }
                                
                                
                                 return res.send({
                                     success :1,
                                     data: rows
                                 });
                               
                                
                                
                            
                        });
                             
                             
                            } /*,
                    BookUpdate : (req, res) =>{ 
                       // const body = req.body
                        const Book_id = req.body.Book_id;
                        const warning = "No Books";
                        const status = "available";
                        pool.query('SELECT Book_inStock FROM Book WHERE Book_id = ?',[Book_id],async function (error, results, fields) {
                            if (error) {
                              res.send({
                                "code":400,
                                "failed":"error ocurred"
                              });
                            }
                            else{
                                results.forEach(function(results) {
                                    if(results.Book_inStock > 0){
                                        console.log(results.Book_inStock + 1);
                                        const number = results.Book_inStock 
                                        res.send({
                                            status,
                                            number
                                          
                                               });
                                               let data = [results.Book_inStock - 1, Book_id];
                                               let sql = `UPDATE Book
                                                           SET Book_inStock = ?
                                                           WHERE Book_id = ?`;

                                                           pool.query(sql, data, function(err) {
                                                            if (err) {
                                                              return console.error(err.message);
                                                            }
                                                            console.log(`Row(s) updated: ${this.changes}`);
                                                          
                                                          });


                                    }
                                    else{
                                        res.send({
                                            warning
                                           
                                               });
                                        console.log("no books");  
                                    }
                                    
                                  });
                             
                              }
                           // }
                            });
                             
                             
                            }      */         

        };