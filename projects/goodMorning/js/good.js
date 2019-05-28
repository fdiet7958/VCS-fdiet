let date = new Date();
let currentHour = date.getHours();

function goodMorn() {
    let getBody = document.body;
    let newElement = document.createElement("h1");
    let createTxtMsg;
    
    if (currentHour >= 4 && currentHour < 10) {
        createTxtMsg = "Good Morning!";
    } else if (currentHour >= 10 && currentHour < 12) {
        createTxtMsg = "Good Day!";
    } else if (currentHour >= 12 && currentHour < 18) {
        createTxtMsg = "Good Afternoon!";
    } else if (currentHour >= 18 && currentHour < 22) {
        createTxtMsg = "Good Evening!";
    } else if (currentHour >= 22 && currentHour < 4) {
        createTxtMsg = "Good Night!";
    } else {
        createTxtMsg = "Whoops! Something went wrong!"
    }
    
    let createEleTxt = document.createTextNode(createTxtMsg);
    
    newElement.appendChild(createEleTxt);
    
    getBody.appendChild(newElement);
    
    newElement.setAttribute("class", "welcome");
    
    newElement.style.cssText = "text-align: center; font-size: 30px;";
}

function getPeriod() {
    let currentDay = date.getDay();
    let currentMin = date.getMinutes();
    let fillMin = (currentHour * 60) + currentMin;
    let h3Element = document.createElement("h3");
    let getBody = document.body;
    let createPerMsg;

    if (currentDay == 0 || currentDay == 6) {
        createPerMsg = "I am not at school";
    } else if (currentDay > 0 && currentDay < 6) {
        if (fullMin >= 465 && fullMin < 560) {
            createPerMsg = "I am in period 1";
        } else if (fullMin >= 560 && fullMin < 652) {
            createPerMsg = "I am in period 2";
        } else if (fullMin >= 652 && fullMin < 697) {
            createPerMsg = "I am at linch";
        } else if (fullMin >= 697 && fullMin < 787) {
            createPerMsg = "I am in period 3";
        } else if (fullMin >= 787 && fullMin < 882) {
            createPerMsg = "I am in period 4";
        } else {
            createPerMsg = "I am not at school";
        }
    } else {
        createPerMsg = "OOPS! An error occured!";
    }

    let createPerNode = document.createTextNode(createPerMsg);
    h3Element.appendChild(createPerNode);
    getBody.appendChild(h3Element);
    h3Element.setAttribute("class", "period")
    h3Element.style.cssText = "text-align: center; font-size: 30px;";
}
