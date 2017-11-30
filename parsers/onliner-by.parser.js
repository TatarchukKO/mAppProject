const { get } = require('request');
const { load } = require('cheerio');

const Parser = require('./parser');
const articleModel = require('../models/article.model');

class OnlinerParser extends Parser {

  constructor() {
    super();

    this.sources = require('./sources/onliner-by.source');
    this.article = articleModel;
  }

  getLinks() {
    console.log(this.sources.people);
    get('https://people.onliner.by/?fromDate=1510153113', (err, res, data) => {
      if (err) {
        throw err;
      }

      let $ = load(data);
      let result = [];
      // tiles and tidings
      $('.news-tidings__stub').each(function(key, value) {
        let link = $(this).attr('href');

        console.log(link);

        result.push(link);
      });

    });
    //   this.request.get(this.sources.people, (err, res, data) => {
    //     try {
    //       if (err) {
    //         throw err;
    //       }

    //       let $ = this.cheerio.load(data),
    //           result = [];

    //       $('.news-tiles__stub').each(function(key, value){
    //         let link = $(this).attr('href');
    //         console.log('link', link);
    //         // if (!link) {
    //         //   continue;
    //         // }
    //         if (!result[link]) {
    //           result[link] = link;
    //         }

    //         // fs.appendFile('../data/sources.txt', `${link}\n`, err => ({}));

    //       });
    //     } catch(err) {
    //       console.log(err.stack);
    //     }
    //   });
  }

}

const op = new OnlinerParser();

op.getLinks();

