import numpy
import scipy.special

# neural net class definition
class neuralNetwork:
    def __init__(self, inputnodes, hiddennodes, outputnodes, learningrate):
        self.inodes = inputnodes
        self.hnodes = hiddennodes
        self.onodes = outputnodes

        # learning rate
        self.lerate = learningrate

        # link weight matrices
        self.weight_input_hidden = numpy.random.normal(0.0, pow(self.inodes, -0.5), (self.hnodes, self.inodes))
        self.weight_hidden_output = numpy.random.normal(0.0, pow(self.hnodes, -0.5), (self.onodes, self.hnodes))

        self.activation_function = lambda x: scipy.special.expit(x)
        pass

    def train(self, inputs_lists, targets_list):
        # convers inputs and targets to 2d arrays
        inputs = numpy.array(inputs_lists, ndmin=2).T
        targets = numpy.array(targets_list, ndmin=2).T

        # calculate signals into hidden layer
        hidden_inputs = numpy.dot(self.weight_input_hidden, inputs)
        # calculate signals emerging from from the hidden layer
        hidden_outputs = self.activation_function(hidden_inputs)

        # clculate signals into final layer
        final_inputs = numpy.dot(self.weight_hidden_output, hidden_outputs)
        # calculate signals emerging from final layer
        final_outputs = self.activation_function(final_inputs)

        output_errors = targets - final_outputs
        # calculate the back-propagated errors into the hidden layer by
        # multiplying the transpose weights_output matrix by the output errors
        hidden_errors = numpy.dot(self.weight_hidden_output.T, output_errors)

        # update the weights between the output and the hidden middle layes
        inputs_t = numpy.transpose(inputs)
        self.weight_hidden_output += self.learningrate * numpy.dot((output_errors * final_outputs * (1.0 - final_outputs)), hidden_outputs_t)

        # update the weights between the middle and the input layes
        middle_outputs_t = numpy.transpose(hidden_outputs)
        self.weight_input_hidden += self.learningrate * numpy.dot((hidden_errors * hidden_outputs * (1.0 - hidden_outputs)), inputs_t)

        pass


    def query(self, inputs_lists):
        # convert inputs list to 2d array
        inputs = numpy.array(inputs_lists, ndmin=2).T
        
        # multiply the weight matrix of the hidden layer by the inputs:
        # calculate the signals into the hidden layer
        hidden_inputs = numpy.dot(self.weight_input_hidden, inputs)
        
        # calculate the signals emerging from the hidden layer
        hidden_outputs = self.activation_function(hidden_inputs)
                
        # multiply the weight matrix of the final layer by the inputs(the output from the middle layer):
        # calculate the signals into the final layer
        final_inputs = numpy.dot(self.weight_hidden_output, hidden_outputs)
        
        # calculate the ouput from the final layer
        final_outputs = self.activation_function(final_inputs)
        
        return final_outputs

input_nodes = 3
hidden_nodes = 3
output_nodes = 3

learning_rate = 0.3

net = neuralNetwork(input_nodes, hidden_nodes, output_nodes, learning_rate)