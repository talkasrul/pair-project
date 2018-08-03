const Model = require('../models')

module.exports = {
    index: (req, res) => {
        Model
            .Feature
            .all()
            .then( features => {
                res.render('feature/index', {features})
            })
    },

    add: (req, res) => {
        res.render('feature/add')
    },

    create: (req, res) => {
        let obj = {
            name: req.body.name,
        }
        Model
            .Feature
            .create( obj )
            .then( () => {
                res.redirect('/features?msg=Success for add new feature')
            })
            .catch((err)=> {
                let msg = err.message
                res.redirect(`/features/add?msg=${msg}`)
            })
    },

    edit: (req, res) => {
        let id = req.params.id
        Model
            .Feature
            .findById(id)
            .then( (feature => {
                res.render('feature/edit', {feature})
            }))
    },

    update: (req, res) => {
        let id = req.params.id
        let obj = {
            name: req.body.name,
            startAt: req.body.startAt,
            deadLine: req.body.deadLine,
            description: req.body.description
        }
        Model
            .Feature
            .update( obj , {where:{id}} )
            .then( () => {
                res.redirect('/features?msg=Success for update new feature')
            })
            .catch((err)=> {
                let msg = err.message
                res.redirect(`/features/${id}/edit?msg=${msg}`)
            })
    },

    delete: (req, res) => {
        let id = req.params.id
        Model
            .Feature
            .destroy({where:{id}})
            .then(() => {
                res.redirect('/features?msg=Success for delete a feature')
            })
    },
}