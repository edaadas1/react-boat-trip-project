const express = require('express')
const { createUser } = require('../controllers/User.js')
const router = express.Router()


router.post('/create/user',createUser)

module.exports = router