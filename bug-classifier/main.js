const generateResults = require('./index');
const generateAccumulatedData = require('./training-data');

for(let i=0; i < 20; i++) {
    setTimeout(() => {
        generateResults(generateAccumulatedData())
    }, 0);
}
