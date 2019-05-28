var canvas;
        var context;
        var Val_max;
        var Val_min;
        var sections;
        var xScale;
        var yScale;
        // Values for the Data Plot, they can also be obtained from an external file
        var Systolic = [120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120];
        var Diastolic = [80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80];
        var Glucose = [70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70];
        var Glucose = [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100];
        var Pulse = [140, 140, 140, 140, 140, 140, 140, 140, 140, 140, 140, 140, 140, 140, 140, 140, 140, 140, 140, 140, 140, 140, 140, 140, 140, 140, 140, 140, 140, 140, 140];
        var Well = [200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200];
    
        function init() {
            // set these values for your data 
            sections = 31;
            Val_max = 220;
            Val_min = 40;
            var stepSize = 10;
            var columnSize = 50;
            var rowSize = 55;
            var margin = 10;
            var xAxis = [" ", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", 
            "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"];


            canvas = document.getElementById("canvas");
            context = canvas.getContext("2d");
            context.fillStyle = "#FF0000";
            context.font = "18pt Verdana";

            yScale = (canvas.height - columnSize - margin) / (Val_max - Val_min);
            xScale = (canvas.width - rowSize) / sections;

            context.strokeStyle = "#00008B"; // color of grid lines
            context.beginPath();
            // print Parameters on X axis, and grid lines on the graph
            for (i = 1; i <= sections; i++) {
                var x = i * xScale;
                context.fillText(xAxis[i], x, columnSize - margin);
                context.moveTo(x, columnSize);
                context.lineTo(x, canvas.height - margin);
            }
            // print row header and draw horizontal grid lines
            var count = 0;
            for (scale = Val_max; scale >= Val_min; scale = scale - stepSize) {
                var y = columnSize + (yScale * count * stepSize);
                context.fillText(scale, margin, y + margin);
                context.moveTo(rowSize, y)
                context.lineTo(canvas.width, y)
                count++;
            }
            context.stroke();

            context.translate(rowSize, canvas.height + Val_min * yScale);
            context.scale(1, -1 * yScale);

            // Color of each dataplot items

            context.strokeStyle = "#ec0000";
            plotData(Systolic);
            context.strokeStyle = "#5fec00";
            plotData(Diastolic);
            context.strokeStyle = "#ca0093";
            plotData(Glucose);
            context.strokeStyle = "#0026ff";
            plotData(Pulse);
            context.strokeStyle = "#ffee00";
            plotData(Well);
        }

        function plotData(dataSet) {
            context.beginPath();
            context.moveTo(0, dataSet[0]);
            for (i = 1; i < sections; i++) {
                context.lineTo(i * xScale, dataSet[i]);
            }
            context.stroke();
        }

        function updateGraph() {
            console.log("Entered updateGraph()");
        
            for (s = 0; s < Systolic.length; s++){
                if (document.getElementById("s" + (s + 1).toString()).value != "") {
                    Systolic[s] = parseInt(document.getElementById("s" + (s + 1).toString()).value);
                }
            }
        
            for (d = 0; d < Diastolic.length; d++){
                if (document.getElementById("d" + (d + 1).toString()).value != "") {
                    Diastolic[d] = parseInt(document.getElementById("d" + (d + 1).toString()).value);
                }
            }
        
            for (g = 0; g < Glucose.length; g++){
                if (document.getElementById("g" + (g + 1).toString()).value != "") {
                    Glucose[g] = parseInt(document.getElementById("g" + (g + 1).toString()).value);
                }
            }
        
            for (p = 0; p < Pulse.length; p++){
                if (document.getElementById("p" + (p + 1).toString()).value != "") {
                    Pulse[p] = parseInt(document.getElementById("p" + (p + 1).toString()).value);
                }
            }
        
            for (w = 0; w < Well.length; w++){
                if (document.getElementById("w" + (w + 1).toString()).value != "") {
                    Well[w] = parseInt(document.getElementById("w" + (w + 1).toString()).value);
                }
            }
        
            console.log("Testing Systolic: ", Systolic.toString());
            console.log("Testing Diastolic: ", Diastolic.toString());
            console.log("Testing Glucose: ", Glucose.toString())
            context.setTransform(1, 0, 0, 1, 0, 0);
            context.clearRect(0, 0, canvas.width, canvas.height);
            init();
        }