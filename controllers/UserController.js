const Model = require('../models')

module.exports = {
    index: (req, res) => {
        Model
            .User
            .all({include: [Model.Feature]})
            .then( users => {
                // res.json(users)
                res.render('user/index', {users})
            })
    },

    add: (req, res) => {
        res.render('user/add')
    },

    create: (req, res) => {
        let obj = {
            username: req.body.username,
            password: req.body.password,
            name: req.body.name,
            address: req.body.address
        }
        Model
            .User
            .create( obj )
            .then( () => {
                res.redirect('/users?msg=Success for add new user')
            })
    },

    edit: (req, res) => {
        let id = req.params.id
        Model
            .User
            .findById(id)
            .then( (user => {
                res.render('user/edit', {user})
            }))
    },

    update: (req, res) => {
        let id = req.params.id
        let obj = {
            username: req.body.username,
            password: req.body.password,
            name: req.body.name,
            address: req.body.address
        }
        Model
            .User
            .update( obj , {where:{id}} )
            .then( () => {
                res.redirect('/users?msg=Success for update new user')
            })
    },

    delete: (req, res) => {
        let id = req.params.id
        Model
            .User
            .destroy({where:{id}})
            .then(() => {
                res.redirect('/users?msg=Success for delete a user')
            })
    },
}