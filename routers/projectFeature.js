const express = require('express')
const router = express.Router()

const ProjectFeatureController = require('../controllers/ProjectFeatureController')

router.get('/', ProjectFeatureController.index)
router.post('/', ProjectFeatureController.create)
router.get('/add', ProjectFeatureController.add)
router.get('/:id/edit', ProjectFeatureController.edit)
router.post('/update', ProjectFeatureController.update)
router.get('/:id/delete', ProjectFeatureController.delete)

module.exports = router