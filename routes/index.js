var express = require('express')
var router = express.Router()

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express', publicKey: process.env.MONGO_ATLAS_PUBLIC_KEY })
})

module.exports = router
