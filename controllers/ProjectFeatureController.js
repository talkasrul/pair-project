const Model = require('../models')

module.exports = {
    index: (req, res) => {
        Model
            .User
            .all()
            .then( users => {
                res.render('user/index', {users})
            })
    },

    add: (req, res) => {
        res.render('user/add')
    },

    create: (req, res) => {
        Model
            .User
            .create( obj )
            .then( () => {
                
            })
    },

    edit: (req, res) => {
        let id = req.params.id
        let obj = {}
        Model
            .User
            .findById(id)
            .then( (user => {
                res.render('user/edit', {user})
            }))
    },

    update: (req, res) => {
        let id = req.params.id
    },
    
    delete: (req, res) => {},
}