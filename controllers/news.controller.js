const News = require('../models/News.model.js');

module.exports.contactsController = {
    getNews: (req, res) => {
        News.find({}).populate('category').then((data) => res.json(data)).catch((err) => res.json(err))
    },
    getNewsById: (req, res) => {
      News.findById(req.params.id)
      .then((data) => {
        if (!data) {
          return res.status(403).json({ error: "Invalid user." });
        }
        return res.status(200).json(data);
      })
      .catch((err) => console.error(err));
    },
    getNewsByIdCategory : (req, res) => {
        News.find({category: req.params.categoryId}).then((data) => res.json(data)).catch((err) => res.json(err))
    },
    addNews: (req, res) => {
      News.create({
         title: req.body.title,
         desc: req.body.desc,
         category: req.body.category
      }).then(() => {
        res.json("Новость добавлена")
      }).catch((err) => res.json(err))
    },
    deleteNews: (req, res) => {
      News.findByIdAndRemove(req.params.id)
      .then(() => {
        res.json("Новость удалена");
      })
      .catch((error) => {
        res.status(500).json("Произошла ошибка при удалении новости");
      });
      
    },
    editNews: (req, res) => {
      News.findByIdAndUpdate( req.params.id, {title: req.body.title, desc: req.body.desc}).then((data) => res.json(data)).catch((err) => res.json(err))
    }

}