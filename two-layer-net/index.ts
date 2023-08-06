import Network from './network'
import Neuron from './neuron'

const net = new Network(3, 3)
const weights = net.layers[0].linkWeightsMatrix

console.log(weights)
