const express = require('express');
const bodyParser = require('body-parser');
const uri = require('./connection/mongoDbCredentials');
const HARD_CODE_NEWS = require('./data/news');
const blueBird = require('bluebird');

const { MongoClient } = require('mongodb');

const app = express();

const port = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', (req, res) => {
  res.send('MAXIM LOH');
});

app.get('/news', async (req, res) => {
  
  let db = await MongoClient.connect(uri);

  try {
    const skip = req.query.skip || 0;
    const top = req.query.top || 1000;

    let collection = db.collection('Article');
    let articles = await collection.find().toArray();

    res.send(articles);
  } catch (e) {
    console.log(e.stack);
  } finally {
    db.close();
  }

});

app.get('/article', (req, res) => {
  const id = req.query.id;

  const article = HARD_CODE_NEWS.find((item) => {
    return item.id === id
  });

  res.send(article);
});


app.listen(port, function () {
  console.log('Our app is running on http://localhost:' + port);
});



















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



