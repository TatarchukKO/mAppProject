const router = require('express').Router();
const validate = require('express-validation');
const { getArticles } = require('../validation/article.validation');
const ArticleController = require('../controllers/article.controller');

const articleController = new ArticleController();

router.get('/articles/detailed-view', articleController.getArticleById);
router.put('/articles', validate(getArticles), articleController.getArticles);

module.exports = router;