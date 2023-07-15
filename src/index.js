import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello World!</h1>
<main>
<button id="my-button">My-button</button>
</main>


`;

const myButton = document.getElementById("my-button");

myButton.addEventListener("click", function() {
  console.log("hello world")
});
