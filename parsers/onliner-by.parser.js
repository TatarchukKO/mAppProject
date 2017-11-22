const Parser = require('./parser');
const Article = require('../models/article.model');

class onlinerbyParser extends Parser {

  constructor() {
    super();

    this.sources = require('./sources/onliner-by.source');
    this.article = new Article();
  }

  getLinks() {
    console.log(this.sources.people);
    this.request.get('https://people.onliner.by/?fromDate=1510153113', (err, res, data) => {
      console.log(data);
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

