var express = require('express')
var router = express.Router()

const mongoose = require('mongoose')
mongoose.connect(process.env.MONGO_URI)


/* GET home page. */
router.get('/', function(req, res) {

  const Cat = mongoose.model('Cat', { name: String })

const kitty = new Cat({ name: 'Zildjian2' })
kitty.save().then(() => console.log('meow'))

  res.render('index', { title: 'Express' })
})

module.exports = router
