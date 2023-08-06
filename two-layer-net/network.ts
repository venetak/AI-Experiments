import Layer from './layer'
import Matrix from './matrix'

class Network {
    public layersCount: number
    public neuronsPerLayer: number
    public layers: Layer[] = []
    public linkWeights: Matrix // generate weights for each neuron in each layer

    constructor (layersCount: number, neuronsPerLayer: number) {
        while (layersCount !== 0) {
            this.layers.push(new Layer(neuronsPerLayer))
            layersCount--
        }
    }

    get inputLayer (): Layer {
        return this.layers[0]
    }

    input (data) {
        if (data.length !== this.inputLayer.neurons.length) {
            return console.error('Data entries must be the same length as the neurons in the layer!')
        }

        // pass single data to each neuron
        // we can use the neuron's index interchangeably because the length
        // of the neurons and the data entries is required to be the same
        this.inputLayer.neurons.forEach((neuron, index) => neuron.input = data[index])
        // create layer
        // create neurons
        // distribute data to the first layer
    }


    // loop all layers
     // 1. Get all input from the nodes and construct a matrix
     // 2. Get all weights
     // 3. multiply matrices
     // 4. Generate output by running each matrix element through a sigmoid function
}

export default Network
