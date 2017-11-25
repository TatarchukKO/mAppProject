const ArticleRepository = require('../repositories/article-mongo.repository');

const articleRep = new ArticleRepository();

class ArticleController {

  constructor() { }

  async getArticles(req, res) {
    let projection = req.body.projection || null,
      conditions = req.body.conditions || {},
      options = {
        skip: Number(req.query.skip) || 0,
        limit: Number(req.query.top) || 10,
        sort: req.body.sort || null
      };

    try {
      let articles = await articleRep.findArticles(conditions, projection, options);

      if (articles && articles.length === 0) {
        return res.status(404).end();
      }

      res.send(articles);
    } catch (e) {
      console.log(e.message);
      res.status(422).send(e.message);
    }
  }

  async getArticleById(req, res) {

    let id = req.query.id,
      projection = req.query.projection || null;

    try {

      // move it the validation in the future
      if (!id.match(/^[0-9a-fA-F]{24}$/)) {
        return res.status(422).end();
      }

      let article = await articleRep.findById(id, projection);

      if (!article) {
        return res.status(404).end();
      }

      res.send(article);
    } catch(e) {
      console.log(e.message);
      return res.status(e.message).end();
    }

  }

}

module.exports = ArticleController;