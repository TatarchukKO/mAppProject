BaserMongoRepository = require('./base-mongo.repository');

class ArticleRepository extends BaserMongoRepository {

  constructor() {
    super();
    this.model = require('../models/article.model');
  }

}

module.exports = ArticleRepository;