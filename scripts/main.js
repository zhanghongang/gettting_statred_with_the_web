let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === './images/run.jpg') {
        myImage.setAttribute('src', './images/airplane.jpeg');
    } else {
        myImage.setAttribute('src', './images/run.jpg')
    }
}

let myHeading = document.querySelector('h1');
let myButton = document.querySelector('button');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Mozilla is cool, ' + myName;
    }
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Web is cool, ' + storedName
}

myButton.onclick = function() {
    setUserName();
}
