const canvas = document.getElementById('drawing-canvas');
const ctx = canvas.getContext('2d');

let buildingPlan;
let drawingTool;

// Initialize the building plan and drawing tool
buildingPlan = new BuildingPlan(10, 10);
drawingTool = new DrawingTool(buildingPlan);

// Handle drawing events
canvas.addEventListener('mousedown', (event) => {
    const x = event.clientX;
    const y = event.clientY;
    const width = 10;
    const height = 10;
    drawingTool.handleDrawRoomRequest(x, y, width, height);
    drawRoom(x, y, width, height);
});

// Handle annotation events
canvas.addEventListener('click', (event) => {
    const x = event.clientX;
    const y = event.clientY;
    const annotation = prompt('Enter annotation');
    drawingTool.handleAnnotateRoomRequest(x, y, annotation);
});

// Draw the building plan
function drawBuildingPlan() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < buildingPlan.width; i++) {
        for (let j = 0; j < buildingPlan.height; j++) {
            const room = buildingPlan.getRoom(i, j);
            if (room != null) {
                ctx.fillStyle = 'rgba(255, 0, 0, 0.5)';
                ctx.fillRect(i * 20, j * 20, room.getWidth() * 20, room.getHeight() * 20);
                ctx.fillStyle = 'black';
                ctx.font = '12px Arial';
                ctx.textAlign = 'left';
                ctx.textBaseline = 'top';
                ctx.fillText(room.getAnnotation(), i * 20 + 5, j * 20 + 5);
            }
        }
    }
}

// Draw a room
function drawRoom(x, y, width, height) {
    ctx.fillStyle = 'rgba(255, 0, 0, 0.5)';
    ctx.fillRect(x * 20, y * 20, width * 20, height * 20);
}

// Update the canvas
setInterval(() => {
    drawBuildingPlan();
}, 100);
s