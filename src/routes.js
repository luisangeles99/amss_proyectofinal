const express = require('express')
const router = express.Router()



router.get('*', function(req, res) {
    res.send({
      error: 'Working currently in the development of Restaurant App; sorry for the trouble'
    })
})


module.exports = router