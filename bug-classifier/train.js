// y = Ax - linear function
const y = (a, x) => a * x;
// the spiders should be above the line
const modifier = 1;
const spiderModifier = 1 * modifier;
const mantisModifier = -1 * modifier;
const learningRate = 0.5;

function train(a, data) {
    // use A and an x from the data to generate y
    for (const item of data) {
        const { width, height } = item;
        const calculatedY = y(a, width);

        // compare y to target value (the actual value if y in the data) and calculate error
        // error = target value - actual output = actual value + modifier - actual output
        const currentModifier = item.type === 'spider' ? spiderModifier : mantisModifier;
        const targetValue = height + currentModifier;

        const error = targetValue - calculatedY;
        const deltaA = learningRate * (error / width);

        a = a + deltaA;
    }

    return a;
}

module.exports = train;
