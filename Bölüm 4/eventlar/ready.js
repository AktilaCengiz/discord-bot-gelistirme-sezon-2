// -Bot giriş kısmı- 
module.exports = (client) => {

var oynuyorkısımları = [
"Prefix: !",
"Aktila bot",
"Kurban bayramınız mübarek olsun."
]


setInterval(function() {

        var random = Math.floor(Math.random()*(oynuyorkısımları.length-0+1)+0);
       client.user.setActivity(oynuyorkısımları[random], { type: 'LISTENING' });
        }, 2 * 3000);

    console.log("Bot başarı ile giriş yaptı.")
}
