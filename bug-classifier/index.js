const fs = require('fs');
const { createCanvas } = require('canvas')

const train = require('./train');

/* eslint-disable-next-line max-lines-per-function */
module.exports = (data) => {
    const classifier = train(0.25, data);

    const x = data[data.length - 1].width;
    const y = x * classifier;

    const canvas = createCanvas(150, 150)
    const ctx = canvas.getContext('2d')
    ctx.translate(0, canvas.height);
    ctx.scale(1, -1);

    ctx.fillStyle = '#ebebeb';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    function drawCircle(context, centerX, centerY, color) {
        context.beginPath();
        context.arc(centerX, centerY, 2, 0, 2 * Math.PI);
        context.fillStyle = color;
        context.fill();
    }

    for (const item of data) {
        const color = item.type === 'spider' ? 'red' : 'green';
        drawCircle(ctx, item.width, item.height, color);
    }

    // // Draw line under text
    ctx.strokeStyle = 'rgba(0,0,0,0.5)'
    ctx.beginPath();
    ctx.lineTo(0, 0);
    ctx.lineTo(x, y);
    ctx.lineTo(x + 100, (x + 100) * classifier);
    ctx.stroke()

    const out = fs.createWriteStream(__dirname + `/results/${new Date().getTime()}.png`);
    const stream = canvas.createPNGStream();
    stream.pipe(out);
    out.on('finish', () => console.log('The PNG file was created.'));
}
