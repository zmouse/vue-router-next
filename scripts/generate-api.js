const { ApiModel } = require('@microsoft/api-extractor-model')
const path = require('path')

const apiModel = new ApiModel()
const apiPackage = apiModel.loadPackage(
  path.join(__dirname, '../temp/vue-router.api.json')
)

for (const package of apiPackage.members) {
  for (const member of package.members) {
    console.log(member.displayName)
    // member.
  }
}
