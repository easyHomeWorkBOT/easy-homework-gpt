const messages = document.getElementById("messages");
const input = document.getElementById("userInput");
const send = document.getElementById("send");

send.onclick = () => {
  if (!input.value) return;

  addMessage(input.value, "user");

  setTimeout(() => {
    addMessage("Я Easy Homework GPT 🤖 Я скоро буду відповідати як ChatGPT.", "bot");
  }, 600);

  input.value = "";
};

function addMessage(text, type) {
  const div = document.createElement("div");
  div.className = `message ${type}`;
  div.innerText = text;
  messages.appendChild(div);
  messages.scrollTop = messages.scrollHeight;
}
