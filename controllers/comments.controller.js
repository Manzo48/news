const Comment = require('../models/Comment.model');


module.exports.contactsController = {
            addComment: (req, res) => { 
                Comment.create({
                    content: req.body.content,
                    news: req.params.news})
                    .then(() => {
                        res.json('Коммент добавлен');
                      })
                      .catch((err) => {
                        res.status(500).json(err);
                      });
            },
    deleteComment: (req, res) => {
        Comment.findByIdAndRemove(req.params.id).then(() => {
            res.json("Новость удалена");
          })
          .catch((error) => {
            res.status(500).json("Произошла ошибка при удалении новости");
          });
    },
    getCommentsByNews: (req, res) => {
        const newsId = req.params.newsId;
    
        Comment.find({ news: newsId }).populate('news')
          .then((comments) => {
            res.json({ success: true, comments });
          })
          .catch((err) => {
            res.status(500).json({ success: false, error: err.message });
          });
      }

}