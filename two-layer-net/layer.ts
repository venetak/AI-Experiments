import Neuron from './neuron'
import Matrix from './matrix'

class Layer {
    public neurons: Neuron[] = []
    public neuronsCount: number
    public index: number
    // TODO: consider adding as members of the Neuron
    public error: Matrix
    public output: Matrix

    constructor (neuronsCount: number, wights, index) {
        this.index = index
    
        for (let i = 0; i < neuronsCount; i++) {
            this.neurons.push(new Neuron(neuronsCount, wights[i]))
        }
    }

    get data () {
        return this.neurons.map(neuron => neuron.input)
    }

    serializeWeights (): Matrix {
        const matrix = new Matrix()
        const data = matrix.data

        for(const [index, neuron] of this.neurons.entries()) {
            if (data[index] === undefined) data[index] = []
            for (const [weightIndex, linkWeight] of neuron.linkWeights.entries()) {
                data[index][weightIndex] = linkWeight
            }
        }

        return matrix
    }

    input (data) {
        if (data.length !== this.neurons.length) {
            return console.error('Data entries must be the same length as the neurons in the layer!')
        }

        // pass single data to each neuron
        // we can use the neuron's index interchangeably because the length
        // of the neurons and the data entries is required to be the same
        this.neurons.forEach((neuron, index) => neuron.input = data[index])
    }


    serializeInput (): Matrix {
        const inputMatrix = new Matrix()
        this.neurons.forEach((neuron, index) => inputMatrix.data[index] = neuron.input)
        return inputMatrix
    }

    calculateError(previousLayer: Layer) {
        const weightMatrixT = previousLayer.serializeWeights().transpose();
        return weightMatrixT.multiply(previousLayer.error);
    }
}
 
export default Layer
