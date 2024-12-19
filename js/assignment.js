import {CURRENTYEAR, RESOLUTION, CURRENTDAY} from './constants.js';
"use strict";

// Declaring constant variables to store references to the elements
// that will be updated by your code.
const yearElement = document.getElementById("year");
const resolutionElement = document.getElementById("resolution")
const willMeetResolutionElement = document.getElementById("will-meet-resolution")
const submissionBtn = document.getElementById("submission-btn")

// Declare your variables here.
//constants in constants.js
let willMeetResolution = true;
const currentDay = new Date().getDate();
console.log(currentDay);  // e.g., 19

function isEven(number) {
    return number % 2 === 0;
}

function isOdd(number) {
    return number % 2 !== 0;
}


function updateYear() {
    // Update this function
    yearElement.innerText = CURRENTYEAR;
}

function updateResolution() {
    // Update this function 
    resolutionElement.innerText = RESOLUTION;
}

function updateWillMeetResolution() {
    // Update this function
    if (isEven(CURRENTDAY) ){
        willMeetResolution == true
        willMeetResolution = "✔";
    } else {
        willMeetResolution = "X";
    }


    willMeetResolutionElement.innerText = willMeetResolution;

}

function render() {
    // Update this function
    updateYear();
    updateResolution();
    updateWillMeetResolution();
}

submissionBtn.addEventListener("click", function() {
    // Update this function
    render();
})
