const db = require("../config/database");
module.exports = {
   BookLookup: (Book_id, callBack) =>{
     
    var sql = "select * from Book where Book_id = ?"
    //var params = [req.params.id]
    db.get(sql, [Book_id], (err, results) => {
      if(err){
                console.log("error")
                return callBack(err);
            }
                
            return callBack(null , results);
                    
            }
    
        );
   
    
        //
    
    },

    BookSearch: (topic , callBack) =>{
      var sql = "select * from Book where topic = ?"
      //var params = []
      db.all(sql,[topic], function (error, rows, fields) {
            if(error){
                return callBack(error);
            }
                
            return callBack(null , rows);
                    
            }
    
        );
   
    
        
    
    },
    Bookfetch: (callBack) =>{
      var sql = "select * from Book "
      //var params = []
      db.all(sql, function (error, results, fields) {
            if(error){
                return callBack(error);
            }
                
            return callBack(null , results);
                    
            }
    
        );
   
    
        
    
    }
    
   
      


//     BookUpdate: (Book_id , callBack) =>{
     

//         pool.query('SELECT Book_inStock FROM Book WHERE Book_id = ?',[Book_id],async function (error, results, fields) {
//             if (error) {
//               res.send({
//                 "code":400,
//                 "failed":"error ocurred"
//               });
//             }else{
//               if(results >0){
               
// console.log("good")
//               }
//               else{
//                 res.send({
//                   "code":206,
//                   "success":"books"
//                     });
//               }
//             }
//             });
   
    
        
    
//     }

};