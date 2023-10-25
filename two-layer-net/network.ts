import Layer from './layer'
import Matrix from './matrix'
import Neuron from './neuron';

class Network {
    public neuronsPerLayer: number
    public layers: Layer[] = []
    public linkWeights: Matrix // generate weights for each neuron in each layer
    public learningRate

    constructor (layersCount: number, neuronsPerLayer: number, weights, learningRate = 0.5) {
        this.learningRate = learningRate;
    
        let i = 0
        while (i !== layersCount) {
            // console.log(weights[layersCount-1])
            this.layers.push(new Layer(neuronsPerLayer, weights, i))
            i++
        }
    }

    get inputLayer (): Layer {
        return this.layers[0]
    }

    get outputLayer (): Layer {
        return this.layers[this.layersCount - 1]
    }

    get layersCount () {
        return this.layers.length
    }

    propagateForward() {
        let input = this.inputLayer.serializeInput()
        let output
        let i = 1

        do {
            const layer = this.layers[i];
            const weights = layer.serializeWeights()
            input = output = this.activate(input.multiply(weights))
            layer.output = output
            i++
        } while(i < this.layers.length)

        return output
    }

    activate(output: Matrix) {
        const data = output.data

        for (let i = 0; i < data.length; i++) {
            for (let k = 0; k < data[i].length; k++) {
                data[i][k] = Neuron.activate(data[i][k])
            }
        }
        return output
    }

    backPropagateErrors() {
        let i = this.layersCount - 2
        let currentError = this.outputLayer.error

        do {
            const layer = this.layers[i]
            layer.error = currentError = layer.calculateError(this.outputLayer)
            i--
        }
        while (i >= 0)
    }

    getLinkWeightsDelta() {
        const weightsDeltas = {}

        for (let i = 1; i < this.layersCount; i++) {
            const currentLayer = this.layers[i]
            const previousLayer = this.layers[i - 1]

            const weightIndexes = `${i-1}-${i}`
            weightsDeltas[weightIndexes] = currentLayer.getWeightDelta(this.learningRate, previousLayer)
        }

        return weightsDeltas
    }
}

export default Network
