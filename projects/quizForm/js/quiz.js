function fun() {
  var theClass = document.getElementById("theClass").value;
  var teacherName = document.getElementById("teacherName").value;
  var topic = document.getElementById("topic").value;
  var secret = document.getElementById("secret").value;
  var res = document.getElementById("res");

  res.style.display = "block";
  if (theClass == "" || teacherName == "" || topic == "" || secret == "") {
    res.style.backgroundColor = "red";
    res.style.color = "white";
    res.innerHTML = "Please fill in All the Fields";
  } else if (secret.length < 7) {
    res.style.backgroundColor = "red";
    res.style.color = "white";
    res.innerHTML = "Secret word is too short";
  } else if (theClass == "US History" && teacherName == "Storey" &&
    topic == "American Revolution" && secret == "Teaparty") {

    alert("Yay! It is working!");
    //window.open("https://www.google.com");  // opens in a new tab
    //location.replace("https://www.google.com"); // opens on top of this tab
    location.replace("histQuiz.html");
  } else {
    res.style.backgroundColor = "green";
    res.style.color = "white";
    res.innerHTML = "Sorry, I do not recognize that information - please try again!";
  }

}
