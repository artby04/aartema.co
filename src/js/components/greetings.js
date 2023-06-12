var greetings = [
  "Hello",
  "Привет",
  "Bonjour",
  "Hola",
  "Hallo",
  "Ciao",
  "こんにちは",
  "안녕하세요",
  "你好",
  "Olá",
  "Hej",
  "Hei",
  "سلام",
  "שלום",
  "Merhaba",
  "Γειά σου",
  "Zdravo",
];
var emojis = [
  "👋",
  "🖖",
  "👍",
  "😃",
  "🤚",
  "👌",
  "🙌",
  "✌️",
  "👏",
  "😊",
  "🤝",
  "👐",
  "🙏",
];

function changeGreeting() {
  var randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];
  var randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
  var greetingElement = document.getElementById("greeting");

  // Animate out
  gsap.to(greetingElement, {
    opacity: 0,
    duration: 0.5,
    onComplete: function () {
      // Change text when animation is complete
      greetingElement.innerHTML = randomGreeting + " " + randomEmoji;

      // Animate in
      gsap.to(greetingElement, { opacity: 1, duration: 0.5 });
    },
  });
}

// Change greeting after 5 seconds
setTimeout(changeGreeting, 5000);

// Change greeting every 5 seconds
setInterval(changeGreeting, 5000);
