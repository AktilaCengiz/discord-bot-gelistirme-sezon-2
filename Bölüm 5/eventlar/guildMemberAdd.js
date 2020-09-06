const db = require("wio.db")

module.exports = async(client, member) => {

if(! await db.has("otorol_" + member.guild.id)) {
   return;
}

var role = await db.fetch("otorol_" + member.guild.id)

var kisi = client.guilds.cache.get(member.guild.id).members.cache.get(member.id)

kisi.roles.add(role)

}
