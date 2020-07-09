// Write your JavaScript code here.
// Remember to pay attention to page loading!

window.addEventListener("load", function(){

    let takeOffButton = document.getElementById("takeoff");
    let landButton = document.getElementById("landing");
    let abortButton = document.getElementById("missionAbort");
    let upButton = document.getElementById("up");
    let downButton = document.getElementById("down");
    let leftButton = document.getElementById("left");
    let rightButton = document.getElementById("right");
    let shuttleBackground = document.getElementById("shuttleBackground");
    let flightStatus = document.getElementById("flightStatus");
    let shuttleHeight = document.getElementById("spaceShuttleHeight");
    let rocket = document.getElementById("rocket");
    rocket.style.position = "relative";

    takeOffButton.addEventListener("click", function(){
        let answer = confirm("Confirm that the shuttle is ready for takeoff.");
        if(answer){
            flightStatus.innerHTML = "Shuttle in flight.";
            shuttleBackground.setAttribute("style", "background-color: blue");
            shuttleHeight.innerHTML = Number(shuttleHeight.innerHTML) + 10000;
        }
    });

    landButton.addEventListener("click", function(){
        window.alert("The shuttle is landing. Landing gear engaged.");
        flightStatus.innerHTML = "The shuttle has landed.";
        shuttleBackground.setAttribute("style", "background-color: green");
        shuttleHeight.innerHTML = "0";
    });

    abortButton.addEventListener("click", function(){
        let answer = confirm("Confirm that you want to abort the mission.");
        if(answer){
            flightStatus.innerHTML = "Mission aborted.";
            shuttleBackground.setAttribute("style", "background-color: green");
            shuttleHeight.innerHTML = "0";
        }
    });

    upButton.addEventListener("click", function(){
        let positionString = rocket.style.top;
        let position = positionString.slice(0, positionString.length - 2);
        rocket.style.top = Number(position) - 10 + "px";
    });

    downButton.addEventListener("click", function(){
        let positionString = rocket.style.top;
        let position = positionString.slice(0, positionString.length - 2);
        rocket.style.top = Number(position) + 10 + "px";
    });

    leftButton.addEventListener("click", function(){
        let positionString = rocket.style.left;
        let position = positionString.slice(0, positionString.length - 2);
        rocket.style.left = Number(position) - 10 + "px";
    });

    rightButton.addEventListener("click", function(){
        let positionString = rocket.style.left;
        let position = positionString.slice(0, positionString.length - 2);
        rocket.style.left = Number(position) + 10 + "px";
    });

    

})