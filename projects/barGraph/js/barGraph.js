console.log("Entered barGraph.js");

var canvas;
var context;
var Val_Max;
var Val_Min;
var sections;
var xScale;
var yScale;
var y;
var itemName = ["USA", "China", "India", "Japan", "Germany", "Canada", "UK", "Australia", 
    "Mexico", "Russia", "Brazil", "Spain", "France", "Italy", "Poland"];
var itemValue = [19.4, 23.3, 9.5, 5.5, 4.2, 1.7, 2.8, 1.2, 2.4, 3.8, 3.2, 1.8, 2.9, 2.4, 1.1];

function init() {
    console.log("Entered init()");
    var maxItemValue = Math.max.apply(Math, itemValue);
    sections = itemValue.length;
    Val_Max = Math.ceil(maxItemValue);
    var stepSize = 1;
    var columnSize = 40;
    var rowSize = 35;
    var margin = 10;
    var header = "In Trillion $USD";

    canvas = document.getElementById("canvas");
    context = canvas.getContext("2d");
    context.fillStyle = "#cc0000";

    yScale = (canvas.height - columnSize - margin) / (Val_Max);
    xScale = (canvas.width - rowSize) / (sections + 1);

    context.strokeStyle = "#000";
    context.beginPath();
    context.font = "8pt Arial";
    context.fillText(header, 0, columnSize - margin);
    context.font = "14pt Verdana";
    var count = 0;
    for (scale = Val_Max; scale >= 0; scale = scale - stepSize) {
        y = columnSize + (yScale * count * stepSize);
        context.fillText(scale, margin, y + margin);
        context.moveTo(rowSize, y);
        context.lineTo(canvas.width, y);
        count++;
    }
    context.stroke();

    context.font = "9pt Helvetica";
    context.textBaseline = "bottom";
    for (i = 0; i < itemValue.length; i++) {
        computeHeight(itemValue[i]);
        context.fillText(itemName[i], xScale * (i + 1), y - margin);
    }

    context.fillStyle = "#001488";
    context.shadowColor = "#000000";

    context.shadowOffsetX = 1;
    context.shadowOffsetY = 1;

    context.translate(0, canvas.height - margin);
    context.scale(xScale, -1 * yScale);

    for (i = 0; i < itemValue.length; i++) {
        context.fillRect(i + 1, 0, 0.3, itemValue[i]);
    }
}

function computeHeight(value) {
    y = canvas.height - value * yScale;
}

function update() {
    console.log("Now in update()");
    var country = document.querySelector("#country").value;
    console.log("The counrtry is " + country);
    var gdp = document.querySelector("#gdp").value;
    console.log("The GDP is " + gdp);

    if (country === "usa") {
        itemValue[0] = gdp;
    } else if (country === "china") {
        itemValue[1] = gdp;;
    } else if (country === "india") {
        itemValue[2] = gdp;
    } else if (country === "japan") {
        itemValue[3] = gdp;
    } else if (country === "germany") {
        itemValue[4] = gdp;
    } else if (country === "canada") {
        itemValue[5] = gdp;
    } else if (country === "uk") {
        itemValue[6] = gdp;
    } else if (country === "austrailia") {
        itemValue[7] = gdp;
    } else if (country === "mexico") {
        itemValue[8] = gdp;
    } else if (country === "russia") {
        itemValue[9] = gdp;
    } else if (country === "brazil") {
        itemValue[10] = gdp;
    } else if (country === "spain") {
        itemValue[11] = gdp;
    } else if (country === "france") {
        itemValue[12] = gdp;
    } else if (country === "italy") {
        itemValue[13] = gdp;
    } else if (country === "poland") {
        itemValue[14] = gdp;
    } else {
        console.log("Something went wrong in the country!")
    }

    context.shadowOffsetX = 0;
    context.shadowOffsetY = 0;
    context.setTransform(1, 0, 0, 1, 0, 0);
    context.clearRect(0, 0, canvas.width, canvas.height);
    init();
}