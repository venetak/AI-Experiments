class Neuron {
    public input: any
    public linksCount: number
    public linkWeights: number[] = []

    constructor (linksCount: number) {
        this.linksCount = linksCount
        this.generateLinkWeights(linksCount)
    }

    generateLinkWeights (linkedNeuronsCount) {
        while (linkedNeuronsCount !== 0) {
            this.linkWeights.push(Number(Math.random().toFixed(1)))
            linkedNeuronsCount--
        }
    }

    activate (x: number) {
        // apply a sigmoid function
        return 1 / (1 + Math.exp(-x))
    }
}

export default Neuron
