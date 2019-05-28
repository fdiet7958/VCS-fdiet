var canvas;
        var context;
        var Val_max;
        var Val_min;
        var sections;
        var xScale;
        var yScale;
        // Values for the Data Plot, they can also be obtained from an external file
        var Thanos = [338, 147, 80, 38, 27, 15, 11, 8, 4, 2, 1.4, 1];
        var Panther = [291, 143, 85, 57, 35, 25, 17, 11, 7.9, 7.1, 6, 4];
        var Dino = [204, 99, 43, 25, 17, 10, 6, 2, 1.6, 1, 2, 0.5];
        var Incredible = [269, 124, 81, 44, 26, 19, 12, 8, 5, 3, 2, 5];
        var Aquaman = [4, 132, 92, 41, 23, 15, 9, 6, 4, 2, 1, 0.6];
        var Queen = [69, 43, 25, 18, 11, 8, 6, 4, 4.4, 4, 4.4, 3.6];

        function init() {
            // set these values for your data 
            sections = 12;
            Val_max = 340;
            Val_min = 0;
            var stepSize = 10;
            var columnSize = 50;
            var rowSize = 100;
            var margin = 10;
            var xAxis = [" ", "Week 1", "Week 2", "Week 3", "Week 4", "Week 5", "Week 6", "Week 7", "Week 8", "Week 9", "Week 10", "Week 11", "Week 12"];


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

            context.strokeStyle = "#eef106";
            plotData(Thanos);
            context.strokeStyle = "#000000";
            plotData(Panther);
            context.strokeStyle = "#0083b7";
            plotData(Dino);
            context.strokeStyle = "#df0000";
            plotData(Incredible);
            context.strokeStyle = "#23b100";
            plotData(Aquaman);
            context.strokeStyle = "#a909f3";
            plotData(Queen);
        }

        function plotData(dataSet) {
            context.beginPath();
            context.moveTo(0, dataSet[0]);
            for (i = 1; i < sections; i++) {
                context.lineTo(i * xScale, dataSet[i]);
            }
            context.stroke();
        }

        function update() {
            console.log("Hooray! My button click has taken me to the update function");
            var company = document.querySelector("#company").value;
            console.log("I read the company as: ", company);
            var month = document.querySelector("#month").value;
            console.log("I read the month as: ", month);
            var profit = parseFloat(document.querySelector("#profit").value);
            console.log("I read the profit as: ", profit);

            var monthIndex;
            if (month === "Jan") {
                monthIndex = 0;
            } else if (month === "Feb") {
                monthIndex = 1;
            } else if (month === "Mar") {
                monthIndex = 2;
            } else if (month === "Apr") {
                monthIndex = 3;
            } else if (month === "May") {
                monthIndex = 4;
            } else if (month === "Jun") {
                monthIndex = 5;
            } else if (month === "Jul") {
                monthIndex = 6;
            } else if (month === "Aug") {
                monthIndex = 7;
            } else if (month === "Sep") {
                monthIndex = 8;
            } else if (month === "Oct") {
                monthIndex = 9;
            } else if (month === "Nov") {
                monthIndex = 10;
            } else if (month === "Dec") {
                monthIndex = 11;
            } else {
                console.log("Something went wrong in my month conditional!");
            }
            console.log("Month Index: ", monthIndex);

            if (company === "Thanos") {
                Thanos[monthIndex] = profit;
                context.strokeStyle = "#eef106";
                plotData(Thanos);
            } else if (company === "Panther") {
                Panther[monthIndex] = profit;
                context.strokeStyle = "#000000";
                plotData(Panther);
            } else if (company === "Dino") {
                Dino[monthIndex] = profit;
                context.strokeStyle = "#0083b7";
                plotData(Dino);
            } else if (company === "Incredible") {
                Incredible[monthIndex] = profit;
                context.strokeStyle = "#df0000";
                plotData(Incredible);
            } else if (company === "Aquaman") {
                Aquaman[monthIndex] = profit;
                context.strokeStyle = "#23b100";
                plotData(Aquaman);
            } else if (company === "Queen") {
                Queen[monthIndex] = profit;
                context.strokeStyle = "#a909f3";
                plotData(Queen);
            } else {
                console.log("Something went wrong with my company update!")
            }
            context.setTransform(1, 0, 0, 1, 0, 0);
            context.clearRect(0, 0, canvas.width, canvas.height);
            init();
        }