let myImage = document.querySelector("img");

myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/firefox-icon.png") {
    myImage.setAttribute("src", "images/realfox.jpg");
  } else {
    myImage.setAttribute("src", "images/firefox-icon.png");
  }
};

let myButton = document.querySelector("button"),
  myHeading = document.querySelector("h1");

document.onload = localStorage.clear();

function setUserName() {
  let myName = prompt("Please enter your name.");

  if (!myName) {
    myHeading.textContent = "Mozilla is cool";
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = "Mozilla is cool, " + myName;
  }
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  let storedName = localStorage.getItem("name");
  myHeading.textContent = "Your name is, " + storedName;
}

myButton.onclick = function () {
  setUserName();
};
