//imports 
const router = require('express').Router();
const ctrl = require('../controllers');

//routes
router.get('/', ctrl.audits.index);
router.get('/:id', ctrl.audits.show);
router.post('/', ctrl.audits.create);
router.put('/:id', ctrl.audits.update);
router.delete('/:id', ctrl.audits.destroy);

// exports
module.exports = router;