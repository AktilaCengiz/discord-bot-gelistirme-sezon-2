const Discord = require("discord.js");
const client = new Discord.Client();
const proton = require("proton-io")

let komutDosya = "./komutlar"
let event = "./eventlar"
let gelistiricler = ["ID"]
let owner = true;
let defaultCommands = ["ping"]; 

const komutYukle = new proton(client,komutDosya,event,gelistiricler,{owner,defaultCommands})

let botlaraCevapVer = false;
let etiketlePrefixOgren = true; 
let etiketiPrefixOlarakKullan = true;
let prefix = "!"; 

client.on('message', async (msg) => {
    komutYukle.message(msg,prefix,{botlaraCevapVer,etiketiPrefixOlarakKullan,etiketlePrefixOgren})
})

client.on("message", (message) => {
   if(message.content.toLowerCase() === "selam") {
       message.channel.send("Aleyküm selam.")
   }
   if(message.content.toLowerCase() === "sea") {
    message.channel.send("Aleyküm selam.")
}
})

client.login("TOKEN BİLGİNİZ")