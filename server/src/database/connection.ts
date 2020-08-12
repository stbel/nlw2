import knex from 'knex'

const db = knex({
  client: 'postgresql',
  connection: {
    host: 'localhost',
    user: 'nlw2',
    password: 'nextlevelweek2',
    database: 'nlw2'
  }
})

export default db

