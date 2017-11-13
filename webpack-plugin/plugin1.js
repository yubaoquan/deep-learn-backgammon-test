function Test(options) {
    console.info(options)
}

Test.prototype.apply = function(compiler) {
    compiler.plugin('compilation', (compilation, data) => {
        console.info(`start compilation`)
    })
    compiler.plugin('emit', (compilation, callback) => {
        console.info(compilation.assets)
        callback()
    })
}

module.exports = Test
