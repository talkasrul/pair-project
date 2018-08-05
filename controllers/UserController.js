const Model = require('../models')
const encrypHelper = require('../helpers/encriptHelpers')

module.exports = {
    index: (req, res) => {
        Model
            .User
            .all({include: [Model.Feature]})
            .then( users => {
                // res.json(users)
                res.render('user/index', {users})
            })

        // Model
        //     .User
        //     .findById(1)
        //     .then( user => {
        //         console.log(encrypHelper('data', user.username))
        //     })
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

    login: (req, res) => {
        res.render('user/login')
    },

    dologin: (req, res) => {
        let username = req.body.username
        let password = req.body.password
        Model  
            .User
            .findOne({where:{
                username: username,
                password: password
            }})
            .then( user => {
                if(user.username == username && user.password == password) {
                    let objSession = {
                        id : user.id,
                        username : user.username
                    }
                    req.session.user = objSession
                    res.redirect('/')
                }
                
            })
    }
}