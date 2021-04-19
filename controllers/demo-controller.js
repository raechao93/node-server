

module.exports = (app) => {
    const add = (request, response)=>{
        const a = request.parseInt(request.params['paramA'])
        const b = request.parseInt(request.params.paramB)
        response.send(`${a+b}`)
    }
    app.get('/add/:paramA/:paramB', add)
    app.get('/can/be/anything', function (req, res) {
        res.send('Hello World')
    })
}
