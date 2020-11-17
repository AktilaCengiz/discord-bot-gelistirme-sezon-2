module.exports = {
    name: "kuyruk",
    aliases: ["kuyruk","kuyruk1"],
    description: "sdsdsdsdsdsd",
    usage: "kuyruk",
    ownerOnly: false,
    run: async (message,args,client) => {

    if(client.player.isPlaying(message.guild.id) == true) { 
       
        if(!message.guild.members.cache.get(message.author.id).voice.channel) {
            return message.channel.send(" Lütfen şarkı açmak için bir kanala giriş yapınız.")
        }
       
        let queue = await client.player.getQueue(message.guild.id);
        message.channel.send('Sunucu şarkı listesi:\n'+(queue.songs.map((song, i) => {
            return `${i === 0 ? 'Şuanda oynatılıyor:' : `#${i+1}`} - ${song.name} | ${song.author}`
        }).join('\n')));

    } else {
        return message.channel.send("Şuanda bir şarkı çalmıyor.")
    }
     

    }}