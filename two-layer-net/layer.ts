class Layer {
    public neurons: Neuron[]

    get data () {
        return this.neurons.map(neuron => neuron.input)
    }
}
