import Network from './network'
import Neuron from './neuron'
import Matrix from './matrix'

const weights = [
    [1, 1, 1],
    [1, 1, 1],
    [1, 1, 1]
]

const target = new Matrix()
target.data = [
    [1, 1, 1],
    [1, 1, 1],
    [1, 1, 1]
]

const net = new Network(3, 3, weights)
const weightsMatrix = net.layers[0].serializeWeights()

net.inputLayer.input([[0.5], [0.5], [0.5]])

const output = net.propagateForward()
const errorOutput = target.subtract(output)
console.log(errorOutput)
console.log(output)
net.outputLayer.error = errorOutput
net.backPropagateErrors()

console.log(net)

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

