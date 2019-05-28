function calc() {
  var value1 = parseInt(document.querySelector("#value1").value);
  var value2 = parseInt(document.querySelector("#value2").value);
  var op = document.querySelector("#operator").value;
  var calculate;

  if (op == "add") {
    calculate = value1 + value2;
  } else if (op == "sub") {
    calculate = value1 - value2;
  } else if (op == "mul") {
    calculate = value1 * value2;
  } else if (op == "div") {
    calculate = value1 / value2;
  } else {
    alert("Oops! Something went wrong!");
  }

  document.getElementById("result").innerHTML = calculate;
} // end of function
