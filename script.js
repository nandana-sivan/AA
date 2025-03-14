// Sample Data
const teamMembers = [
  { name: "Anirud M", role: "Captain", photo: "anirudd.jpg" },
  { name: "Aparna Raju", role: "Vice Captain", photo: "aparna.jpg" },
  { name: "Ajay Raj", role: "Technical Lead", photo: "ajay.jpg" },
  { name: "Anand A", role: "Coordinator", photo: "anand.jpg" },
  { name: "Alex Justy", role: "Social media head", photo: "alex.jpg" },
  { name: "David Martin", role: "Content Head", photo: "david.jpg" },
  { name: "Anirudh Menon", role: "Creative Head", photo: "anirudhmenon.jpg" },
  { name: "Femy Benny", role: "Design Lead", photo: "femy.jpg" },
  { name: "Devika S Menon", role: "Co-creative head", photo: "devika.jpg" },
];

// Display Team Members
const membersList = document.getElementById("members-list");
teamMembers.forEach(member => {
  const memberDiv = document.createElement("div");
  memberDiv.className = "member";
  memberDiv.innerHTML = `
    <img src="${member.photo}" alt="${member.name}">
    <h3>${member.name}</h3>
    <p>${member.role}</p>
  `;
  membersList.appendChild(memberDiv);
});

// Tab Switching Functionality
const tabs = document.querySelectorAll("nav ul li a");
const tabContents = document.querySelectorAll(".tab-content");

tabs.forEach(tab => {
  tab.addEventListener("click", (e) => {
    e.preventDefault();

    // Remove active class from all tabs and contents
    tabs.forEach(t => t.classList.remove("active"));
    tabContents.forEach(content => content.classList.remove("active"));

    // Add active class to the clicked tab and corresponding content
    tab.classList.add("active");
    const target = tab.getAttribute("href");
    document.querySelector(target).classList.add("active");
  });
});

// Chat Functionality
const chatWindow = document.getElementById("chat-window");
const chatInput = document.getElementById("chat-input");
const sendButton = document.getElementById("send-button");

sendButton.addEventListener("click", () => {
  const message = chatInput.value.trim();
  if (message) {
    const messageElement = document.createElement("div");
    messageElement.textContent = `You: ${message}`;
    chatWindow.appendChild(messageElement);
    chatInput.value = "";
    chatWindow.scrollTop = chatWindow.scrollHeight; // Scroll to the latest message
  }
});

chatInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    sendButton.click();
  }
});