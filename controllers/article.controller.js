const ArticleRepository = require('../repositories/article-mongo.repository');

const articleRep = new ArticleRepository();

class ArticleController {

  constructor() { }

  async getArticles(req, res) {
    let projection = req.body.projection || null,
      conditions = req.body.conditions || {},
      options = {
        skip: Number(req.query.skip) || 0,
        top: Number(req.query.top) || 5,
        sort: req.body.sort || null
      };

    try {
      let articles = await articleRep.find(conditions, projection, options);

      if (articles && articles.length === 0) {
        return res.status(404).end();
      }

      res.send(articles);
    } catch (e) {
      console.log(e.message);
      res.send(e.message);
    }
  }

}

module.exports = ArticleController;