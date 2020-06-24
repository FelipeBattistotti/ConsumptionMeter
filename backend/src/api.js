const express = require('express');
const { celebrate, Segments, Joi } = require('celebrate');

const UserController = require('./controllers/UserController');
const SessionController = require('./controllers/SessionController');
const MeterController = require('./controllers/MeterController');
const BillController = require('./controllers/BillController');

const routes = express.Router();

/**
 * GET user
 */
routes.get('/user', UserController.index);

/**
 * POST user
 */
routes.post('/user', celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        pwd: Joi.string().required(),
        cpf: Joi.string().required(),
    })
}), UserController.create);

/**
 * DELETE user
 */
routes.delete('/user/:id', UserController.delete);

/**
 * POST session
 */
routes.post('/session', SessionController.create);

/**
 * POST medicao
 */
routes.post('/medicao', MeterController.create);

/**
 * GET bill
 */
routes.get('/bill', celebrate({
    [Segments.QUERY]: Joi.object().keys({
        page: Joi.number(),
    })
}), BillController.index);

/**
 * POST bill
 */
routes.post('/bill', BillController.create);

/**
 * DELETE bill
 */
routes.delete('/bill/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required(),
    })
}), BillController.delete);

module.exports = routes;
