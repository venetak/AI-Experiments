import Network from './network'
import Neuron from './neuron'
import Matrix from './matrix'

const weights = [
    [0.9, 0.3, 0.4],
    [0.2, 0.8, 0.2],
    [0.1, 0.5, 0.6]
]

const net = new Network(3, 3, weights)
const weightsMatrix = net.layers[0].serializeWeights()

net.input([[0.9], [0.1], [0.8]])
console.log(weightsMatrix.data)

console.log(net.inputLayer.serializeInput().data)

const output = net.layers[0].serializeWeights().multiply(net.inputLayer.serializeInput())

console.log(output)

for (let i = 0; i < output.length; i++) {
    for (let k = 0; k < output[i].length; k++) {
        output[i][k] = Neuron.activate(output[i][k])
    }
}

console.log(output)

// const a = new Matrix()
// a.data = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ]
// const b = new Matrix()
// b.data = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ]

// console.log(a.multiply(b))

