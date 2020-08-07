const Discord = require("discord.js");
const client = new Discord.Client();
const proton = require("proton-io")
const db = require("wio.db")

let komutDosya = "./komutlar"
let event = "./eventlar"
let gelistiricler = ["ID"]
let owner = true;
let defaultCommands = ["ping"]; 

const komutYukle = new proton(client,komutDosya,event,gelistiricler,{owner,defaultCommands})

let botlaraCevapVer = false;
let etiketlePrefixOgren = true; 
let etiketiPrefixOlarakKullan = true;

client.on('message', async(msg) => {

    if(!await db.has("prefix_" + msg.guild.id)) {
       var prefix = "!"
    } else {
       var prefix = await db.fetch("prefix_" + msg.guild.id)
    }

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

client.login("NzMzMDMwNTYwMzc2ODE1Njk3.Xw9N6A.xgflpR0GSnRy4Ofe4f_14pi3KQQ")