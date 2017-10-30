
const Perceptron = {
    init(inputNum, activator) {
        this.activator = activator
        this.weights = []
        for (let i = 0; i < inputNum; i++) {
            this.weights.push(0.0)
        }
        this.bias = 0.0
        return this
    },
    print() {
        console.info(this.weights, this.bias)
    },
    predict(inputVec) {
        const x = inputVec.reduce((sum, item, index) => {
            return sum + item * this.weights[index]
        }, 0.0) + this.bias
        return this.activator(x)
    },
    train(inputVecs, labels, iteration, rate) {
        for (let i = 0; i < iteration; i++) {
            this.oneIteration(inputVecs, labels, rate)
        }
    },
    oneIteration(inputVecs, labels, rate) {
        const samples = inputVecs.map((vec, index) => {
            return [vec, labels[index]]
        })
        samples.forEach((item, index) => {
            const output = this.predict(item[0])
            this.updateWeights(item[0], output, item[1], rate)
        })
    },
    updateWeights(inputVec, output, label, rate) {
        const delta = label - output
        this.weights = this.weights.map((weight, index) => {
            return weight + inputVec[index] * delta * rate
        })
        this.bias += rate * delta
    },
}

module.exports = Perceptron
