const router = require('express').Router();
const contacts = require('../controllers/contacts');

router.get('/', contacts.findAll);
router.get('/:id', contacts.findOne);
router.post('/', contacts.create);
router.put('/:id', contacts.update);
router.delete('/:id', contacts.delete);

module.exports = router;