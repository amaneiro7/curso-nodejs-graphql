const { ApolloServer } = require ('apollo-server-express')
const { ApolloServerPluginLandingPageGraphQLPlayground } = require('apollo-server-core')
const { loadFiles } = require('@graphql-tools/load-files')

/**
 *  Get = Query
 *  POST, PUT, DELETE = Mutations
 *  Graphql siempre va por post
 *  POST = 201
 *  POST = CREATE = 201
 *  GET = GET DATA
 *  PUT = Update
 *  DELETE = remove
 *
 *  Lists
 *  [String]
 *  [INT]
 *  por defecto las listas permite enviar
 *  *null
 *  [empty]
 *  [null]
 */

const resolvers = {
  Query: {
    hello: () => 'hola mundo',
    getPerson: (_, args) => `Hello, my nmae is ${args.name}, I'm ${args.age} years old`,
    getInt: (_,args) => args.age,
    getFloat: (_,args) => args.price,
    getString: () => 'String',
    getBoolean: () => true,
    getID: () => '12121221',
    getNumbers: (_, args) => args.numbers,
    getProduct: () => ({
        id: '123',
        name: 'product 1',
        price: 1000.12,
        description: 'blabababa',
        image: 'http://image.sasas',
        createdAt: new Date().toISOString()}
    )}
}

const useGraphql = async (app) => {
  const server = new ApolloServer({
    typeDefs: await loadFiles('./src/**/*.graphql'),
    resolvers,
    playground: true,
    plugins: [
      ApolloServerPluginLandingPageGraphQLPlayground
    ]
  })
  await server.start()
  server.applyMiddleware({ app })
}

module.exports = useGraphql
