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

// const data = [
//     {
//         type: 'spider',
//         width: 3.0,
//         height: 1.0,
//     },
//     {
//         type: 'mantis',
//         width: 1.0,
//         height: 3.0,
//     },
//     {
//         type: 'spider',
//         width: 4.0,
//         height: 1.0,
//     },
//     {
//         type: 'mantis',
//         width: 1.0,
//         height: 4.0,
//     },
//     {
//         type: 'spider',
//         width: 5.0,
//         height: 2.0,
//     },
//     {
//         type: 'mantis',
//         width: 1.0,
//         height: 5.0,
//     },
//     {
//         type: 'spider',
//         width: 5.0,
//         height: 3.0,
//     },
//     {
//         type: 'mantis',
//         width: 2.0,
//         height: 8.0,
//     },
// ];

const data = generateBugData()

module.exports = data;
