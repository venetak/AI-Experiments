import Network from './network'
import Neuron from './neuron'

const net = new Network(3, 3)
const weightsMatrix = net.layers[0].serializeWeights()

net.input([1,2,3])
console.log(weightsMatrix.data)

console.log(net.inputLayer.serializeInput().data)


