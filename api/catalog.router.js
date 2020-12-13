const { BookLookup} = require ("./catalog.controller");
const { BookSearch} = require ("./catalog.controller");
const { BookFetch} = require ("./catalog.controller");
//const { BookUpdate} = require ("./Catalog.controller");
const router55 = require ("express").Router();

router55.post("/BookLookup", BookLookup);
router55.get("/BookSearch/:topic", BookSearch);
router55.get("/BookFeatch", BookFetch);
//router55.put("/BookUpdate", BookUpdate);
///:product_label
//routers
module.exports = router55; 