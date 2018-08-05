module.exports = (req, res, next) => {
    if(req.session.user.role = 'member') {
        next()
    } else {
        let msg = `You didn't have access to member`
        redirect('/', {msg})
    }
}