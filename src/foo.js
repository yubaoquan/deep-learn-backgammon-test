module.exports = function() {
    const foo = 1234
    const obj = {
        bar() {
            console.info(`this is bar`)
        }
    }

    obj.bar(12)
    console.info(`foo called`)
}
