const { Router } = require('express');
const { contactsController } = require('../controllers/news.controller.js');

const router = Router();

//router.get('/news', contactsController.getNews);
router.get('/news', contactsController.getNews)
router.get('/news/:id', contactsController.getNewsById)
router.post('/news', contactsController.addNews)
router.patch('/news/:id', contactsController.editNews)
router.delete('/news/:id', contactsController.deleteNews)
router.get('/newss/:categoryId', contactsController.getNewsByIdCategory)

module.exports = router;