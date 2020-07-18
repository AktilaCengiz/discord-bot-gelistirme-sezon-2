const Discord = require("discord.js");
const client = new Discord.Client();

// -Bot giriş kısmı- 
client.on("ready", () => {
console.log("Bot başarı ile giriş yaptı.")
})

client.login("TOKEN BİLGİNİZ")