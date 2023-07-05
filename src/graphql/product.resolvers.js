const ProductsService = require('./../services/product.service')
const service = new ProductsService()

// Los rsolvers ya son una promesas por ende no es necesario
// especificar un async/await
const getProduct = (_, { id }) => service.findOne(id)

const getProducts = () => service.find({})

const addProduct = (_, { dto }) => service.create(dto)

const updateProduct = (_, { id, dto }) => service.update(id, dto)

const deleteProduct = async (_, { id }) => {
  await service.delete(id)
  return id
}

const getProductsByCategory = ({dataValues}) => service.getByCategory(dataValues.id)

module.exports = {
  getProduct,
  getProducts,
  addProduct,
  updateProduct,
  deleteProduct,
  getProductsByCategory
}
