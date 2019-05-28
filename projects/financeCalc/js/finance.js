console.log("Entered finance.js");

var principle;

function calcTax() {
  console.log("Entered calcTax()");
  var price = parseInt(document.querySelector("#cost").value);
  var tax = parseInt(document.querySelector("#down").value) / 100;
  var taxresult;
  var pricetax;

  taxresult = price * tax; 
  pricetax = price + taxresult;

  console.log("The tax result is " + taxresult);

  document.getElementById("taxresult").value = taxresult;
  document.getElementById("pricetax").value = pricetax;
}

function calcPrinc() {
    console.log("Entered calcPrinc()");
    var cost = parseInt(document.querySelector("#pricetax").value);
    var down = parseInt(document.querySelector("#down").value);

    principle = cost - down;

    console.log("The Principle is " + principle);
    document.getElementById("princ").value = principle;
  }

function calcResult() {
  console.log("Entered calcResult()");
    var apr = parseInt(document.querySelector("#apr").value) / 100;
    var months = parseInt(document.querySelector("#months").value);
    var monthrate = apr/12;
    var result;

    console.log("The entered APR is:", apr);
    console.log("The entered monthly payments are:", months);

    var numerator = principle * (monthrate) * ((1 + (monthrate)) ** months);

    console.log("The numerator is " + numerator);

    var denominator = ((1+(monthrate)) ** months) - 1;

    console.log("The denominator is " + denominator);

    result = (numerator/denominator).toFixed(2);

    console.log("The monthly payment is " + result);
    document.getElementById("result").value = result;
}