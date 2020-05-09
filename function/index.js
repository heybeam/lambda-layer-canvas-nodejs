let {createCanvas} = require("canvas");

exports.handler = async (event) => {
	let canvas = createCanvas(200, 200),
		ctx = canvas.getContext('2d');

	// Write "Awesome!"
	ctx.font = '30px Impact';
	ctx.rotate(0.1);
	ctx.fillText('Awesome!', 50, 100);

	// Draw line under text
	let text = ctx.measureText('Awesome!');
	ctx.strokeStyle = 'rgba(0,0,0,0.5)';
	ctx.beginPath();
	ctx.lineTo(50, 102);
	ctx.lineTo(50 + text.width, 102);
	ctx.stroke();

    return {
        statusCode: 200,
        headers: {
            'Content-Type': 'image/png'
        },
        body: canvas.toDataURL().replace(/data:image\/png;base64,/, ''),
        isBase64Encoded: true
    }
}
