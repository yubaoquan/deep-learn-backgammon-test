const { getOptions } = require('loader-utils')

module.exports = function(source) {
    const result = `['` + source.replace(/\n/g, `',\n'`) + `']`
    return `export default ${JSON.stringify(result)}`
}
