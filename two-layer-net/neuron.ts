class Neuron {
    public input: any
    public linksCount: number
    public linkWeights: number[] = []

    constructor (linksCount: number, weights?: number[]) {
        this.linksCount = linksCount
        if (weights) {
            this.linkWeights = weights
        } else {
            this.generateLinkWeights(linksCount)
        }
    }

    generateLinkWeights (linkedNeuronsCount) {
        while (linkedNeuronsCount !== 0) {
            this.linkWeights.push(Number(Math.random().toFixed(1)))
            linkedNeuronsCount--
        }
    }

    static activate (x: number) {
        // apply a sigmoid function
        return 1 / (1 + Math.exp(-x))
    }
}

export default Neuron
