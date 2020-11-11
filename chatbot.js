var WebSocket = require("ws");
var chatClient = new WebSocket("http://localhost:3001");
var myName = "jazmin";

chatClient.on("open", function open() {
  chatClient.send("Hello, I am a chatbot name " + myName);
});

chatClient.on("message", function incoming(data) {
  if (data.indexOf(myName) == 0) {
    var ask = data.substring(myName.length); // remove myName
    ask = ask.replace(/^[ ,]+/, ""); // remove initial commas and spaces
    chatClient.send("Hello, I am a chatbot named " + myName);
  }
});
