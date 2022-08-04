const text = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis totam alias accusantium eveniet porro rem! Dicta, ipsa, quia numquam est labore, cumque natus amet veritatis corrupti repellat saepe incidunt blanditiis.';
const arrayText = text.match(/./g);

monitor.textContent = '';

const write = setInterval(() => {
    monitor.textContent += arrayText[0];
    arrayText.shift();
    if(!arrayText[0]) {
        clearInterval(write);
    }
},50);