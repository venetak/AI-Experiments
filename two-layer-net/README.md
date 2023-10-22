# How it Works

## Structure

- the network consists of layers
- each layer has
    - neurons
    - input
    - output (except the input layer; its output is the input)
    - error
- each neuron has
    - weights

## Propagating Forward and Generating Error

The neural net receives an input that is propagated forward through each layer. On each pass it is weighted using the neuron link weights and is activated using an activation function.

1. First we setup the input layer by passing the input data in the form of a matrix
2. Then we add weights to each layer which are then distributed among the neurons
3. Then we need to propagate the input forward through each layer. The following steps are executed, starting from the layer after the Input:
    - get the input matrix `InputM`
    - construct the weights matrix for the current layer `WeightsM`
    - multiply `InputM` by `WeightsM`
    - apply an activation [sigmoid function](https://en.wikipedia.org/wiki/Sigmoid_function) to the dot product calculated by the multiplication above
    - use the activated dot product as an input the text layer and repeat
3. Once we reach the final - Output layer we compare the result to the target data and generate error
    - the difference between the output and the target is the error

## Back Propagating the error

1. Once we calculate the error of the output layer we pass it back to the previous layer and multiply it by the transpose matrix of its output weights (which is the same as the input wights of the previous layer, in this case the output):

`L0` --`[L0 out wight | L1 input weight]`--> L1 --`[L1 output weight | L3 input weight]`--> L3

After all layers have their errors set we can update the wights

## Updating the Weights

We do gradient decent over the error function in order to find its minimum
