module.exports = (req, res, next) => {
    console.log('Masuk')
    if(req.session.user) {
        next()
    } else {
        let msg = `You didn't have access, please login!`
        res.send(msg)
    }
}