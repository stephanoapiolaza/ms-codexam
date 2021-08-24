exports.setRoutes = (app) => {

    // controllers
    app.use('/api/v1/', require('./api/assesment/assesment.routes'))

    // All undefined asset or api routes should return a 404
    app.route('/:url(config|controllers|middlewares|models|node_modules|routes|services)/*').get((req, res) => res.status(404).send())
    app.route('/*').get((req, res) => res.status(404).send())
}
