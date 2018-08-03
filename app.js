const express = require("express");
const app = express();
const AuthController = require('./controllers/AuthController')

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.set("view engine", "ejs")

const timeHelper = require('./helpers/timeHelper')
app.use((req, res, next) => {
    res.locals.msg = req.query.msg
    res.locals.dateHelper = timeHelper
    next()
})

const UsersRouter = require('./routers/userRouter')
const ProjectRouter = require('./routers/projectRouter')
const FeatureRouter = require('./routers/featureRouters')
const ProjectFeatureRouter = require('./routers/projectFeature')

app.get('/', (req, res) => {
    res.render('home')
})

app.use('/users', UsersRouter)
app.use('/projects', ProjectRouter)
app.use('/features', FeatureRouter)
app.use('/projectfeatures', ProjectFeatureRouter)

app.get('/login', AuthController.login)

app.listen(3000, ()=>{
    console.log("Running at 3000")
});