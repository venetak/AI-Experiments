function getRandomArbitrary(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function generateDataSet(widthRange, heightRange, type) {
    const [minWidth, maxWidth] = widthRange;
    const [minHeight, maxHeight] = heightRange;
    let i = 0;
    const data = [];

    while (i !== 5) {
        data.push({
            type: type,
            width: getRandomArbitrary(minWidth, maxWidth),
            height: getRandomArbitrary(minHeight, maxHeight),
        });
        i++;
    }

    return data;
}

function generateBugData() {
    return [
        ...generateDataSet([3, 5], [1, 2], 'spider'),
        ...generateDataSet([1, 2], [6, 9], 'mantis')
    ]
}

function generateAccumulatedData() {
    const data = generateBugData()

    const spiderDataAcc = {
        type: 'spider',
        width: 0,
        height:0,
    }
    const mantisDataAcc = {
        type: 'mantis',
        width: 0,
        height:0,
    }
    
    data.forEach(item => {
        if(item.type === 'spider') {
            spiderDataAcc.width += item.width;
            spiderDataAcc.height += item.height;
        } else {
            mantisDataAcc.width += item.width;
            mantisDataAcc.height += item.height;
        }
    })

    return [spiderDataAcc, mantisDataAcc];
}

module.exports = generateAccumulatedData;
