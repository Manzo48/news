const { Router } = require('express');
const { contactsController } = require('../controllers/categories.controller.js');

const router = Router();

router.get('/categories', contactsController.getCategory);
router.post('/category', contactsController.addCategory);
router.delete('/categories/:id', contactsController.deleteCategory)


module.exports = router;