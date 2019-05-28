console.log("Entered doctor.js");

function selectPatient() {

    console.log("Entered selectPatient()");
    var patient = document.querySelector("#selectPatient").value;
    console.log("The selected patient is " + patient);

    if (patient === "fenixd")
    window.location.href = "http://www.westada.tech/a1/fenixd/projects/healthGraph/patientdata.html";
    if (patient === "julianf")
    window.location.href = "http://www.westada.tech/a1/julianf/projects/patientdata/";
    if (patient === "samm")
    window.location.href = "http://www.westada.tech/a1/samm/projects/patientdata/";
    if (patient === "bodenr")
    window.location.href = "http://www.westada.tech/a1/bodenr/projects/patientdata.html";
    if (patient === "cameronr")
    window.location.href = "http://www.westada.tech/a1/cameronr/projects/patientdata/";
    if (patient === "hannahs")
    window.location.href = "http://www.westada.tech/a1/hannahs/projects/medChart/";
    if (patient === "nateb")
    window.location.href = "http://www.westada.tech/a1/nateb/projects/~PatientCharts/";
    if (patient === "ethanm")
    window.location.href = "http://www.westada.tech/a1/ethanm/projects/doctorGraphs/patientData/a.html";
    if (patient === "lucap")
    window.location.href = "http://www.westada.tech/a1/lucap/projects/BloodGraph/index.html";
    if (patient === "kamlyno")
    window.location.href = "http://www.westada.tech/a1/kamlyno/projects/patientdata/index.html";
    if (patient === "natee")
    window.location.href = "http://www.westada.tech/a1/natee/projects/BloodPressure/";
    if (patient === "alexzandera")
    window.location.href = "http://www.westada.tech/a1/alexzandera/p/patientdata/index.html";
}