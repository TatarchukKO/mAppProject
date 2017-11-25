const Joi = require('joi');

let getArticles = {
  options: {
    allowUnknownBody: true,
    allowUnknownQuery: false,
    allowUnknownParams: false,
  },
  query: {
    skip: Joi.number().integer().greater(-1),
    top: Joi.number().integer().greater(0),
  },
  body: {
    projection: Joi.object().keys({
      title: Joi.number().integer().less(2).greater(-1),
      description: Joi.number().integer().less(2).greater(-1),
      content: Joi.number().integer().less(2).greater(-1),
      images: Joi.number().integer().less(2).greater(-1),
      img: Joi.number().integer().less(2).greater(-1),
      tags: Joi.number().integer().less(2).greater(-1),
      date: Joi.number().integer().less(2).greater(-1),
    }),
    conditions: Joi.object().keys({
      title: Joi.string().trim(),
      description: Joi.string().trim(),
      content: Joi.string().trim(),
      images: Joi.array().items(Joi.string().uri().required()),
      img: Joi.string().uri().trim(),
      tags: Joi.array().items(Joi.string().required()),
      date: Joi.string().isoDate().trim(),
    }),
  }
}

module.exports = {
  getArticles,
};