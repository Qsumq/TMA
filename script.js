function greetUser() {
  var nameInput = document.getElementById("nameInput");
  var greetingElement = document.getElementById("greeting");

  var name = nameInput.value.trim();
  if (name) {
    var greeting = "Hello, " + name + "!";
    greetingElement.textContent = greeting;
  } else {
    greetingElement.textContent = "Please enter your name.";
  }
}
