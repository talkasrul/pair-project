const express = require('express')
const router = express.Router()

const UserController = require('../controllers/UserController')

router.get('/', UserController.index)
router.post('/', UserController.create)
router.get('/add', UserController.add)
router.get('/:id/edit', UserController.edit)
router.post('/:id/update', UserController.update)
router.get('/:id/delete', UserController.delete)

router.get('/login', UserController.login)
router.post('/dologin', UserController.dologin)


module.exports = router