//! =====Age Checker====
//Create a project that takes in a user's age and checks if they are eligible to vote, drink, or drive, displaying different messages accordingly.

document.getElementById("checkButton").addEventListener("click", function () {
  //get the value from the input
  const ageValue = parseInt(document.getElementById("ageInput").value);
  //select where to display the results
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = "";

  if (ageValue >= 18) {
    resultDiv.innerHTML += "You are eligible to vote <br/>";
  } else {
    resultDiv.innerHTML += "You are not eligible to vote <br/>";
  }

  if (ageValue >= 21) {
    resultDiv.innerHTML += "You are eligible to drink juice <br/>";
  } else {
    resultDiv.innerHTML += "You are not eligible to drink juice <br/>";
  }
  //check for drive
  if (ageValue >= 16) {
    resultDiv.innerHTML += "You are eligible to drive <br/>";
  } else {
    resultDiv.innerHTML += "You are not eligible to drive <br/>";
  }
});
