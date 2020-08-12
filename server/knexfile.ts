// Update with your config settings.

const path = require('path')

module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      database: 'nlw2',
      user: 'nlw2',
      password: 'nextlevelweek2'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: path.resolve(__dirname, 'src', 'database', 'migrations'),
      tableName: 'knex_migrations'
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'nlw2',
      user: 'nlw2',
      password: 'nextlevelweek2'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: path.resolve(__dirname, 'src', 'database', 'migrations'),
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'nlw2',
      user: 'nlw2',
      password: 'nextlevelweek2'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: path.resolve(__dirname, 'src', 'database', 'migrations'),
      tableName: 'knex_migrations'
    }
  }
};
