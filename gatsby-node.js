const path = require("path")
const _ = require("lodash")

exports.createPages = async({ actions, graphql, reporter}) => {
  const { createPage } = actions

  const tagTemplate = path.resolve("src/templates/tags.js")

  const result = await graphql(`
    {
      tagsGroup: allDataJson {
        group(field: type) {
          fieldValue
        }
      }
    }
  `)

  const tags = result.data.tagsGroup.group

  tags.forEach(tag => {
    createPage({
      path: `/${_.kebabCase(tag.fieldValue)}/`,
      component: tagTemplate,
      context: {
        tag: tag.fieldValue
      }
    })
  })
}