mongoose = require('mongoose');

class DbConnection {

  constructor() {
    this.url = process.env.DB_URI;
    mongoose.Promise = global.Promise;
  }

  async connect() {
    return await mongoose.connect(this.url, { useMongoClient: true });
  }

  async getUrl() {
    return this.url;
  }

}

module.exports = DbConnection;