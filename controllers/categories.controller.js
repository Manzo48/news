const Category = require('../models/Category.model.js');

module.exports.contactsController = {
    addCategory: (req, res) => {
        Category.create({name: req.body.name}).then(() => res.json("Категория добавлена")).catch((err) => res.json(err))
    },
    getCategory: (req, res) => {
        Category.find({}).then((data) => res.json(data)).catch((err) => res.json(err))
    },
    deleteCategory: (req, res) => {
        Category.findByIdAndRemove(req.params.id).then((data) => res.json(data)).catch((err) => res.json(err))
    }
}
