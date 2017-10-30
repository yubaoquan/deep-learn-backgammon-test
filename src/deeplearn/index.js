const Perceptron = require('./Perceptron')

const activator = (x) => {
    return x > 0 ? 1 : 0
}


function getTainingDataset() {
    return {
        inputVecs: [
            [1, 1],
            [0, 0],
            [1, 0],
            [0, 1],
        ],
        labels: [1, 0, 0, 0],
    }
}

function trainAndPerception() {
    const perceptron = Object.create(Perceptron).init(2, activator)
    const data = getTainingDataset()
    perceptron.train(data.inputVecs, data.labels, 10, 0.1)
    return perceptron
}

function main() {
    const perceptron = trainAndPerception()
    perceptron.print()
    console.info(`1 and 1 = ${perceptron.predict([1, 1])}`)
    console.info(`0 and 0 = ${perceptron.predict([0, 0])}`)
    console.info(`1 and 0 = ${perceptron.predict([1, 0])}`)
    console.info(`0 and 1 = ${perceptron.predict([0, 1])}`)
}

main()
