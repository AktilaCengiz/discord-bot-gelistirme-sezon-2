module.exports = {
    name: "test",
    aliases: ["test","test1"],
    description: "sdsdsdsdsdsd",
    usage: "test",
    ownerOnly: false,
    //herkese açık mı yöneticilere özel mi?
    run: async (message,args,client) => {
   
   message.channel.send("Bu bir test mesajıdır.")
    }
}