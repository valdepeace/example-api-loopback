import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';


const config = {
  name: 'dbfintonic',
  connector: 'mongodb',
  url: '',
  host:  process.env.MONGODB_HOST ?? 'localhost',
  port: process.env.MONGODB_PORT ?? 27017,
  user: process.env.MONGODB_USER ?? 'fintonic',
  password:  process.env.MONGODB_PASS ?? 'xxxxx',
  database: process.env.MONGODB_DB ?? 'dbfintonic',
  useNewUrlParser: true
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class DbfintonicDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'dbfintonic';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.dbfintonic', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
