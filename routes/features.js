var express = require('express');
var router = express.Router();
const links = require('./routes');
const data = {
    title:"Riskgratis - Features - Insurance System",
    links:links("Plaform"),
    features:[{
        title:"Policy maintenance",
        is_ready:false,
    },{
        title:"Schedule maintenance",
        is_ready:false,
    },{
        title:"Composite policy maintenance",
        is_ready:false,
    },{
        title:"Claim enquiry",
        is_ready:false,
    },{
        title:"Reserve",
        is_ready:false,
    },{
        title:"Policy maintenance",
        is_ready:true,
    },{
        title:"Schedule maintenance",
        is_ready:false,
    },{
        title:"Composite policy maintenance",
        is_ready:false,
    },{
        title:"Claim enquiry",
        is_ready:true,
    },{
        title:"Reserve",
        is_ready:false,
    }]



}
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('features',data);
});

module.exports = router;
