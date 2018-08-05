const Model = require('../models')

module.exports = {
    index: (req, res) => {
        Model
            .Project
            .all(
                {
                    include: {
                        model: Model.Feature, 
                        include: Model.User 
                    }
                }
            )
            .then( projects => {
                res.json(projects)
                // res.render('project/index', {projects})
            })
    },

    add: (req, res) => {
        res.render('project/add')
    },

    create: (req, res) => {
        let obj = {
            name: req.body.name,
            startAt: req.body.startAt,
            deadLine: req.body.deadLine,
            description: req.body.description
        }
        Model
            .Project
            .create( obj )
            .then( () => {
                res.redirect('/projects?msg=Success for add new project')
            })
    },

    edit: (req, res) => {
        let id = req.params.id
        Model
            .Project
            .findById(id)
            .then( (project => {
                res.render('project/edit', {project})
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
            .Project
            .update( obj , {where:{id}} )
            .then( () => {
                res.redirect('/projects?msg=Success for update new project')
            })
    },

    delete: (req, res) => {
        let id = req.params.id
        Model
            .Project
            .destroy({where:{id}})
            .then(() => {
                res.redirect('/projects?msg=Success for delete a project')
            })
    },
}