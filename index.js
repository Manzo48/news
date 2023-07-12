const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());
app.use(require("./routes/news.router.js"));
app.use(require("./routes/category.router.js"))
app.use(require("./routes/comment.router.js"))

mongoose.connect("mongodb+srv://kantaevm778:Lazy26speedking@cluster0.xflpdav.mongodb.net/news-bd?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Успешно соединились с сервером MongoDB'))
  .catch(() => console.log('Ошибка при соединении с сервером MongoDB'))

app.listen(3000, () => {
  console.log('Сервер запущен успешно')
})