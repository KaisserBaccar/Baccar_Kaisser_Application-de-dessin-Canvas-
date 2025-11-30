const COLORS = [
    "#000000", "#FF0000", "#ff9500", "#ffea00",
    "#51ff00", "#00ffee", "#003180", "#2600ff", "#FFFFFF"
];

const colorsElement = document.getElementById("colors");
const drawingCanvas = document.getElementById("canvas");
const context = drawingCanvas.getContext("2d");

 drawingCanvas.width = drawingCanvas.offsetWidth;
drawingCanvas.height = drawingCanvas.offsetHeight;

COLORS.forEach(function(colorValue) {
    const colorButton = document.createElement("button");
    colorButton.className = "color-btn";
    colorButton.style.backgroundColor = colorValue;

    colorButton.addEventListener("click", function() {
        selectedColor = colorValue;
        activeTool = "brush";
    });

    colorsElement.appendChild(colorButton);
});

let isDrawing = false;
let activeTool = "brush";
let brushSize = 6;
let selectedColor = "#000000";

const brushButton = document.getElementById("brushBtn");
const eraserButton = document.getElementById("eraserBtn"); 
const clearButton = document.getElementById("ClearBtn");
const saveButton = document.getElementById("SaveBtn");
const sizeSlider = document.getElementById("size");

brushButton.onclick = function() {
    activeTool = "brush";
};

eraserButton.onclick = function() {
    activeTool = "eraser";
};

sizeSlider.oninput = function(event) {
    brushSize = event.target.value;
};

drawingCanvas.addEventListener("mousedown", function(event) {
    isDrawing = true;
    context.beginPath();
});

drawingCanvas.addEventListener("mouseup", function() {
    isDrawing = false;
    context.beginPath();
});

drawingCanvas.addEventListener("mousemove", function(event) {
    if (!isDrawing) return;

    const canvasRect = drawingCanvas.getBoundingClientRect();
    const mouseX = event.clientX - canvasRect.left;
    const mouseY = event.clientY - canvasRect.top;

    context.lineWidth = brushSize;
    context.lineCap = "round";
    
    if (activeTool === "eraser") {
        context.strokeStyle = "#FFFFFF";
    } else {
        context.strokeStyle = selectedColor;
    }

    context.lineTo(mouseX, mouseY);
    context.stroke();
    context.beginPath();
    context.moveTo(mouseX, mouseY);
});

clearButton.onclick = function() {
    context.clearRect(0, 0, drawingCanvas.width, drawingCanvas.height);
};

saveButton.onclick = function() {
    const imageData = drawingCanvas.toDataURL("image/png");
    const downloadLink = document.createElement("a");
    downloadLink.href = imageData;
    downloadLink.download = "taswira.png";
    downloadLink.click();
};
