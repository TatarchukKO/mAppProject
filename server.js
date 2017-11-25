const ApiModule = require('./modules/api.module');
const DbConnection = require('./connections/db.connection');

const apiModule = new ApiModule(DbConnection);

apiModule.initModule();
apiModule.listen();
apiModule.initRequestHandlers();

