console.log("Entered mousedraw.js")

var mousePressed = false;
var lastX, lastY;
var ctx;

function InitMouseDraw() {
    console.log("Entered InitMouseDraw()")
    canvas = document.getElementById('drawCanvas');
    ctx = canvas.getContext("2d");

    $('#drawCanvas').mousedown(function (e) {
        mousePressed = true;
        Draw(e.pageX - $(this).offset().left, e.pageY - $(this).offset().top, false);
    });

    $('#drawCanvas').mousemove(function (e) {
        if (mousePressed) {
            Draw(e.pageX - $(this).offset().left, e.pageY - $(this).offset().top, true);
        }
    });

    $('#drawCanvas').mouseup(function (e) {
        mousePressed = false;
    });

    $('#drawCanvas').mouseleave(function (e) {
        mousePressed = false;
    });
}

function Draw(x, y, isDown) {
    if (isDown) {
        ctx.beginPath();
        ctx.strokeStyle = $('#selColor').val();
        ctx.lineWidth = $('#selWidth').val();
        ctx.lineJoin = "round";
        ctx.moveTo(lastX, lastY);
        ctx.lineTo(x, y);
        ctx.closePath();
        ctx.stroke();
    }
    lastX = x;
    lastY = y;
}

function closeStroke() {
    ctx.closePath();
    ctx.stroke();
}

function ticTacToe() {
    tictac = document.getElementById("tictac").value;
    clearArea()
    ctx.strokeStyle = $('#selColor').val();
    ctx.lineWidth = $('#selWidth').val();
    for (i = 1; i < tictac; i++) {
        ctx.beginPath();
        ctx.moveTo((ctx.canvas.width / tictac) * i, 0);
        ctx.lineTo((ctx.canvas.width / tictac) * i, ctx.canvas.height);
        closeStroke();
        ctx.beginPath();
        ctx.moveTo(0, (ctx.canvas.height / tictac) * i);
        ctx.lineTo(ctx.canvas.width, (ctx.canvas.height / tictac) * i);
        closeStroke();
    }
}

function clearArea() {
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}