const logger = require('../logger/logger')

exports.setupErrorHandler = (app) => {
    const logErrors = (err, req, res, next) => {
        console.error(err.stack);
        logger.log({
            level: 'error',
            label: `origen: ${res.req.originalUrl} , method: ${res.req.method}, user: ${res.req.user._doc.email}`,
            message: err.stack
        });
        next(err);
    }

    const clientErrorHandler = (err, req, res, next) => {
        if (req.xhr) {
            logger.log({
                level: 'error',
                label: `origen: ${res.req.originalUrl} , method: ${res.req.method}, user: ${res.req.user._doc.email}`,
                message: err
            });
            res.status(500).send({ error: err });
        } else {
            logger.log({
                level: 'error',
                label: `origen: ${res.req.originalUrl} , method: ${res.req.method}, user: ${res.req.user._doc.email}`,
                message: err
            });
            next(err);
        }
    }

    app.use(logErrors)
    app.use(clientErrorHandler)
}
