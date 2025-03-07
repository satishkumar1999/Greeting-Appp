document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("greetButton");
  button.addEventListener("click", getGreeting);
});

function getGreeting() {
  const name = document.getElementById("nameInput").value.trim();
  const messageElement = document.getElementById("message");

  if (!name) {
    messageElement.innerText = "Error: Name is required.";
    messageElement.style.color = "red";
    return;
  }

  // API से डेटा लाने के लिए Fetch Request
  fetch(`http://localhost:3000/api/greet?name=${encodeURIComponent(name)}`)
    .then((response) => response.json())
    .then((data) => {
      if (data.error) {
        messageElement.innerText = `Error: ${data.error}`;
        messageElement.style.color = "red";
      } else {
        messageElement.innerText = data.message;
        messageElement.style.color = "green";
      }
    })
    .catch((error) => {
      messageElement.innerText = "Error: Could not connect to server.";
      messageElement.style.color = "red";
    });
}
