const checkRolesGql = require('./../utils/checkRolesGql')
const checkJwtGql = require('./../utils/checkJwtGql')
const CategoryService = require('./../services/category.service')
const service = new CategoryService()

const addCategory = async (_, { dto }, context) => {
  const user = await checkJwtGql(context)
  checkRolesGql(user,'admin')
  // Se realizo el shadow copy debdio a que la definicion de tipos
  // de Scalars modifica la forma en que se envia la imagen
  // y lo envia como una imagen con diferentes atributos
  return service.create({
    ...dto,
    image: dto.image.href
  })
}

module.exports = { addCategory }
