const { ApolloServer } = require ('apollo-server-express')
const { ApolloServerPluginLandingPageGraphQLPlayground } = require('apollo-server-core')
const { loadFiles } = require('@graphql-tools/load-files')
const { buildContext } = require ('graphql-passport')
const resolvers = require('./resolvers')
const {
  typeDefs: scalarsTypeDefs,
  resolvers: scalarsResolvers
 } = require('graphql-scalars')

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

const useGraphql = async (app) => {
  const typeDefs = [
    ...await loadFiles('./src/**/*.graphql'),
    scalarsTypeDefs
  ]
  const AllResolvers = [
    resolvers,
    scalarsResolvers
  ]
  const server = new ApolloServer({
    typeDefs,
    resolvers: AllResolvers,
    context: ({req, res}) => buildContext({req, res}),
    playground: true,
    plugins: [
      ApolloServerPluginLandingPageGraphQLPlayground
    ]
  })
  await server.start()
  server.applyMiddleware({ app })
}

module.exports = useGraphql
