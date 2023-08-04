const data = require('./training-data');
const fs = require('fs');
const { createCanvas } = require('canvas')


console.log(data)
const train = require('./train');
const classifier = train(0.25, data);

console.log('classifier==========', classifier)

const x = data[data.length-1].width;
const y = x * classifier;

const canvas = createCanvas(150, 150)
const ctx = canvas.getContext('2d')
ctx.translate(0, canvas.height);
ctx.scale(1, -1);

ctx.fillStyle = '#ebebeb';
ctx.fillRect(0, 0, canvas.width, canvas.height);

function drawCircle(context, centerX, centerY, color) {
    context.beginPath();
    context.arc(centerX, centerY, 1, 0, 2 * Math.PI);
    context.fillStyle = color;
    context.fill();
}

for (const item of data) {
    const color = item.type === 'spider' ? 'red' : 'green';
    drawCircle(ctx, item.width * 10, item.height * 10, color);
}


// // Draw line under text
ctx.strokeStyle = 'rgba(0,0,0,0.5)'
ctx.beginPath();
ctx.lineTo(0, 0);
ctx.lineTo(x, y);
ctx.lineTo(x+100, (x+100) * classifier);
// for (const item of data) {
//     ctx.lineTo(item.width * classifier, item.height)
// }

ctx.stroke()


const out = fs.createWriteStream(__dirname + '/test.png')
const stream = canvas.createPNGStream()
stream.pipe(out)
out.on('finish', () => console.log('The PNG file was created.'));
