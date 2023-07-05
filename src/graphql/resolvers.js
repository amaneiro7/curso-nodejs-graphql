const { getProduct, getProducts, addProduct, updateProduct, deleteProduct }= require('./product.resolvers')
const { login } = require('./auth.resolvers')
const { addCategory } = require('./category.resolvers')
const { RegularExpression } = require('graphql-scalars')

const CategoryNameType = new RegularExpression('CategoryNameType', /^[a-zA-Z0-9]{3,8}$/)

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
    // Products
    product: getProduct,
    products: getProducts,
  },
  Mutation: {
    login,
    addProduct,
    updateProduct,
    deleteProduct,
    addCategory
  },
  CategoryNameType
}

module.exports = resolvers
