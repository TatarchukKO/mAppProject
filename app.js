const express = require('express');
const bodyParser = require('body-parser');

const HARD_CODE_NEWS = require('./data/news');


const app = express();


const mongo = require('mongodb');
const uri = 'mongodb://kozya:kozya@ds117156.mlab.com:17156/m-app-project';

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/news', (req, res) => {
  const skip = req.query.skip || 0;
  const top = req.query.top || 1000;

  const requestedNews = HARD_CODE_NEWS.slice(skip, top);

  res.send(requestedNews);
});

app.get('/article', (req, res) => {
  const id = req.query.id;

  const article = HARD_CODE_NEWS.find((item) => {
    return item.id === id
  });

  res.send(article);
});


app.listen(app.port());



















// request.get('https://sneakerhead.ru/shoes/sneakers/', (err, res, body) => {
//   try {
//     if (err) {
//       console.log('dsdsd');
//       throw err;
//     }
//     const result = [];
//     var $ = cheerio.load(body);

//     let link;
//     $('.metro-link-product-right').each(function (key, value) {          // arrow function не работает, нет привязки контекста
//       var a = $(this).prev();                                            // и, значит, this не сработает
//       link = a.attr('href');
//       if (!result[link]) {
//         result[link] = link;
//       }
//       fs.appendFile('./data/sources.txt', `${link}\n`, err => ({}));
//     })
//     console.log(result);
//   } catch (err) {
//     console.log(err.stack);
//   }
// });

// request.get('https://brandshop.ru/muzhskoe/?mfp=31-kategoriya[%D0%9A%D1%80%D0%BE%D1%81%D1%81%D0%BE%D0%B2%D0%BA%D0%B8]', (err, res, body) => {
//   try {
//     if (err) {
//       console.log('dsdsd');
//       throw err;
//     }
//     const result = [];
//     var $ = cheerio.load(body);

//     let link;
//     $('.product-image').each(function (key, value) {          // arrow function не работает, нет привязки контекста                                          // и, значит, this не сработает
//       link = $(this).attr('href');
//       if (!result[link]) {
//         result[link] = link;//
//       }
//       fs.appendFile('./data/sources.txt', `${link}\n`, err => ({}));
//     })
//     console.log(result);
//   } catch (err) {
//     console.log(err.stack);
//   }
// });



