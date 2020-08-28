
//const pg = require('pg');


require('dotenv').config();

const localSQLConnection = {
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_DATA,
};

const SQLConnection = localSQLConnection;

module.exports = {

  development: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: './database/migrations',
      tablename: 'knex_migrations',
    },
    seeds: {
      directory: './database/seeds',
    },
    useNullAsDefault: true,
    ssl: true,
  },

  staging: {
    client: 'pg',
    connection: SQLConnection,
    migrations: {
      directory: './database/migrations',
      tablename: 'knex_migrations',
    },
    seeds: {
      directory: './database/seeds',
    },
    useNullAsDefault: true,
    pool: {
      min: 2,
      max: 10
    },
  },

  production: {
    client: 'pg',
    connection: process.env.CLEARDB_DATABASE_URL,
    migrations: {
      directory: './database/migrations',
      tablename: 'knex_migrations',
    },
    seeds: {
      directory: './database/seeds',
    },
    useNullAsDefault: true,
    pool: {
      min: 2,
      max: 10
    },
  }

};
