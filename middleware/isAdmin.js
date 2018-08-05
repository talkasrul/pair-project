module.exports = (req, res, next) => {
    if(req.session.user.role = 'admin') {
        next()
    } else {
        let msg = `You didn't have access to admin`
        redirect('/', {msg})
    }
}