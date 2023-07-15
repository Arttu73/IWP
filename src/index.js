import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello World!</h1>
<main>
  <button id="my-button">My-button</button>
  <button id="add-data">Add-data</button>
  <ul></ul>
  <textarea name="textarea" id="textarea" rows="10" cols="30" placeholder="Add text..."></textarea>

</main>


`;

const myButton = document.getElementById("my-button");
const addData = document.getElementById("add-data");

myButton.addEventListener("click", function() {
  console.log("hello world")
  const text = document.getElementsByTagName("h1")[0];
  text.innerText = "My notebook";
});

addData.addEventListener("click", function(){
  const unoList = document.getElementsByTagName("ul");
  const listItem = document.createElement("li")
  /*listItem.innerText = "arbitrary text";*/
  listItem.innerText = document.getElementById("textarea").value;
  unoList.append(listItem);
} );
