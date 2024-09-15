const canvas = document.getElementById('matrix');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const fontSize = 14;
const columns = canvas.width / fontSize;
const drops = [];

// Initialize the drops
for (let i = 0; i < columns; i++) {
    drops[i] = 1;
}

function draw() {
    // Add a semi-transparent black rectangle to create the fade effect
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#00FF00'; // Bright green color
    ctx.font = fontSize + 'px monospace';

    for (let i = 0; i < drops.length; i++) {
        const text = Math.random() > 0.5 ? '1' : '0';
        const x = i * fontSize;
        const y = drops[i] * fontSize;
        
        // Randomize the brightness of each character
        const brightness = Math.random() * 255;
        ctx.fillStyle = `rgb(0, ${brightness}, 0)`;

        ctx.fillText(text, x, y);

        // Reset the drop when it reaches the bottom
        if (y > canvas.height && Math.random() > 0.99) {
            drops[i] = 0;
        }

        drops[i]++;
    }
}

setInterval(draw, 50);

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    drops.length = Math.floor(canvas.width / fontSize);
    for (let i = 0; i < drops.length; i++) {
        drops[i] = 1;
    }
});