BaserMongoRepository = require('./base-mongo.repository');

class ArticleRepository extends BaserMongoRepository {

  constructor() {
    super();
    this.model = require('../models/article.model');
  }

  
  async findArticles(conditions, projection, options) {
    this.formQuery(conditions);
    
    return await super.find(conditions, projection, options);
  }
  
  formQuery(conditions) {
    if (conditions && conditions.tags) {
      let tags = conditions.tags;
      conditions.tags = {};
      conditions.tags.$in = tags;
    }
  }

}

module.exports = ArticleRepository;