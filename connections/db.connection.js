mongoose = require('mongoose');

class DbConnection {

  constructor() {
    this.url = 'mongodb://kozya:kozya@ds117156.mlab.com:17156/m-app-project';
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