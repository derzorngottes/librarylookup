module.exports = {

  development: {
    client: 'postgresql',
    connection: 'postgres://localhost/librarylookup'
  },

  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL
  }

};
