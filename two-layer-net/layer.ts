import Neuron from './neuron'
import Matrix from './matrix'

class Layer {
    public neurons: Neuron[] = []
    public neuronsCount: number

    constructor (neuronsCount: number) {
        for (let i = 0; i < neuronsCount; i++) {
            this.neurons.push(new Neuron(neuronsCount))
        }
    }

    get data () {
        return this.neurons.map(neuron => neuron.input)
    }

    get linkWeightsMatrix () {
        const matrix = new Matrix()
        const data = matrix.data

        for(const [index, neuron] of this.neurons.entries()) {
            if (data[index] === undefined) data[index] = []
            for (const [weightIndex, linkWeight] of neuron.linkWeights.entries()) {
                data[index][weightIndex] = linkWeight
            }
        }

        return matrix.data
    }
}
 
export default Layer
