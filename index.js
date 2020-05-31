

const app = document.getElementById("index");
window.run = () => app.innerText="hers me cal!";
app.innerHTML = '<button onclick="run()">Load</button>';


function openNav() {
  document.getElementById("myNav").style.width = "40%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}
function change_page(){
  window.location.href = "test.html";
} 
