const express = require('express')
const router = express.Router()

const ProjectController = require('../controllers/ProjectController')

const isLogin = require('../middleware/isLogin')

router.get('/', ProjectController.index)
router.post('/', ProjectController.create)
router.get('/add', isLogin, ProjectController.add)
router.get('/:id/edit', ProjectController.edit)
router.post('/:id/update', ProjectController.update)
router.get('/:id/delete', ProjectController.delete)

module.exports = router