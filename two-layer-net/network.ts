import Layer from './layer'
import Matrix from './matrix'
import Neuron from './neuron';

class Network {
    public layersCount: number
    public neuronsPerLayer: number
    public layers: Layer[] = []
    public linkWeights: Matrix // generate weights for each neuron in each layer

    constructor (layersCount: number, neuronsPerLayer: number, weights) {
        while (layersCount !== 0) {
            console.log(weights[layersCount-1])
            this.layers.push(new Layer(neuronsPerLayer, weights))
            layersCount--
        }
    }

    get inputLayer (): Layer {
        return this.layers[0]
    }

    passSignals() {
        let input = this.inputLayer.serializeInput()
        let output
        let i = 1

        do {
            const weights = this.layers[i].serializeWeights()
            input = output = this.activate(input.multiply(weights))
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
    // loop all layers
     // 1. Get all input from the nodes and construct a matrix
     // 2. Get all weights
     // 3. multiply matrices
     // 4. Generate output by running each matrix element through a sigmoid function
}

export default Network
