const express = require('express')
const router = express.Router()

const FeatureController = require('../controllers/FeatureController')

router.get('/', FeatureController.index)
router.post('/', FeatureController.create)
router.get('/add', FeatureController.add)
router.get('/:id/edit', FeatureController.edit)
router.post('/:id/update', FeatureController.update)
router.get('/:id/delete', FeatureController.delete)

module.exports = router