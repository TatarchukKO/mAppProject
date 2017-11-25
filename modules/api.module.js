const express = require('express');
const bodyParser = require('body-parser');

const ArticleController = require('../controllers/article.controller');

const articleController = new ArticleController();

class ApiModule {

  constructor(dbConnection, port) {
    this.db = new dbConnection().connect();
    this.port = process.env.PORT || 8080;
  }

  initModule() {
    this.app = express();
    
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Server is listening on port ${this.port}`);
    });
  }

  initRequestHandlers() {
    this.app.get('/', async (req, res) => {
      res.send('WOA');
    });
    this.app.put('/articles', articleController.getArticles);
    this.app.get('/articles/detailed-view', articleController.getArticleById);
  }

}

module.exports = ApiModule;