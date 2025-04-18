const express = require('express');
const { ensureAuthenticated } = require('../MIddlewares/ProductAuth');
const router = express.Router();

router.get('/',ensureAuthenticated,(req,res)=> {
    res.status(200)
    .json([
        {
            name: "mobile",
            price: 10000
        },
        {
            name: "car",
            price: 500000
        }
    ])
})

module.exports = router;