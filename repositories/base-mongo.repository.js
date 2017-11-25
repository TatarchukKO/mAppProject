class BaseRepository {

	constructor() {
		this.model = null;
	}

	async findById(id, projection, options) {

		if (typeof id === 'undefined') {
			id = null;
		}

		let document = await this.model.findById({ _id: id }, projection, options, callback);

		if (!document) {
			throw new Error('500');
		}

		return document;

	};

	async find(conditions, projection, options) {
		let document = await this.model.find(conditions, projection, options);

		if (!document) {
			throw new Error('404');
		}

		return document;
	};

	async create(document) {
		let id = await this.model.create(document);

		if (!id) {
			throw new Error('500');
		}

		return id;
	}

}

module.exports = BaseRepository;