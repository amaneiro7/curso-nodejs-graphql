const { getProduct, getProducts, addProduct, updateProduct, deleteProduct }= require('./product.resolvers')
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
    addProduct,
    updateProduct,
    deleteProduct
  }
}

module.exports = resolvers
