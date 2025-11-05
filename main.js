const nameInput = document.getElementById("nameInput");
const sayHelloBtn = document.getElementById("sayHelloBtn");
const greeting = document.getElementById("greeting");

sayHelloBtn.addEventListener("click", () => {
  const name = nameInput.value.trim();

  if (name) {
    greeting.textContent = `Hello, ${name}!`;
  } else {
    greeting.textContent = "Hello, world!";
  }
});