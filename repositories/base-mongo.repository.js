

class BaseRepository {

  constructor(errorHandler, model) {
    this.errorHandler = errorHandler;
    this.model = model;
  }

  async findById(id, projection, options, callback) {
    if (typeof id === 'undefined') {
      id = null;
    }

  }
}