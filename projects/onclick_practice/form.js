const txt1 = document.getElementById("name");
const button = document.getElementById("submit");
const output = document.getElementById("output");

function submit() {
  output.innerHTML = "you are " + txt1.value;
}