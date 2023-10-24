const router = require('express').Router();
const controller = require('./orders.controller');
const methodNotAllowed = require('../errors/methodNotAllowed');

// '/orders' route
router
    .route('/')
    .get(controller.list)
    .post(controller.create)
    .all(methodNotAllowed);
    // 'orders/:orderId' route
    router 
        .route('/:orderId')
        .get(controller.read)
        .put(controller.update)
        .delete(controller.delete)
        .all(methodNotAllowed); 

        module.exports = router;
