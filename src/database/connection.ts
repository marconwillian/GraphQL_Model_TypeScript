import knex from 'knex';
import config from './config';

const connection = knex(config["dev"]);
export default connection;