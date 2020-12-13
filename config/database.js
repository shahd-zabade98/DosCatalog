var sqlite3 = require('sqlite3').verbose()
var md5 = require('md5')

const DBSOURCE = "sqlite.db"

const db = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
      // Cannot open database
      console.error(err.message)
      throw err
    }else{
        console.log('Connected to the SQLite database.')
        db.run(`CREATE TABLE  Book (
            Book_id INTEGER PRIMARY KEY AUTOINCREMENT,
            name text NOT NULL, 
            price INTEGER NOT NULL, 
            amount INTEGER NOT NULL, 
            Book_topic text NOT NULL
            )`,
            (err) => {
                if (err) {
                    // Table already created
                }else{
                    // Table just created, creating some rows
                    console.log("Table just created, creating some rows");
                    var insert = 'INSERT INTO Book (name, price, amount, topic) VALUES (?,?,?,?)'
                    db.run(insert, ["How to get a good grade in DOS in 20 minutes a day",25,5,"Distributed Systems"])
                    db.run(insert, ["RPCs for Dummies",20,7,"Distributed Systems"])
                    db.run(insert, ["Xen and the Art of Surviving Graduate School",13,4,"Graduate School"])
                    db.run(insert, ["Cooking for the Impatient Graduate Student",15,6,"Graduate School"])
                }
            });  
            
    } 
}); 


module.exports = db
