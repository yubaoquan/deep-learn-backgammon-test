const Perceptron = require('./Perceptron')

const activator = (x) => x


function getTainingDataset() {
    return {
        inputVecs: [
            [5],
            [3],
            [8],
            [1.4],
            [10.1],
        ],
        labels: [5500, 2300, 7600, 1800, 11400],
    }
}

function trainAndPerception() {
    const perceptron = Object.create(Perceptron).init(1, activator)
    const data = getTainingDataset()
    perceptron.train(data.inputVecs, data.labels, 10, 0.01)
    return perceptron
}

function main() {
    const perceptron = trainAndPerception()
    perceptron.print()
    console.info(`Work 3.4 years, monthly salary = ${perceptron.predict([3.4])}`)
    console.info(`Work 15 years, monthly salary = ${perceptron.predict([15])}`)
    console.info(`Work 1.5 years, monthly salary = ${perceptron.predict([1.5])}`)
    console.info(`Work 6.3 years, monthly salary = ${perceptron.predict([6.3])}`)
}

main()
