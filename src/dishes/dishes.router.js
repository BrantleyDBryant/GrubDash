const router = require('express').Router({ mergeParams: true }); 
const controller = require('./dishes.controller'); 
const methodNotAllowed = require('../errors/methodNotAllowed'); 

//dishes route 
router 
    .route('/')
    .get(controller.list)
    .post(controller.create)
    .all(methodNotAllowed);

    // dishes/:dishId route 

    router  
        .route('/:dishId')
        .get(controller.read)
        .put(controller.update)
        .all(methodNotAllowed);

        module.exports = router;