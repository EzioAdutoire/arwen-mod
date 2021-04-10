const Discord = require('discord.js')

const ayarlar = require('../ayarlar.json')

let prefix = ayarlar.prefix

exports.run = async (client, message, args) => { 

  

  const nameles = new Discord.MessageEmbed()

  .setColor("BLACK")

  .setTitle('A R W È N | M O D E R A T I O N')

  .addField("• | a!ban",`__Etiketlediğiniz kullanıcıyı banlarsınız.__`)
  .addField("• | a!unban",`__ID sini yazdığınız kişinin banını kaldırırsınız.__`)
  .addField("• | a!ban-bilgi",`__Etiketlediğiniz kullanıcının ban siciline bakarsınız.__`)
  .addField("• | a!sorgula",`__Seste kaç üye olduğunu görürsünüz.__`)
  .addField("• | a!sesteki-yetkililer",`__Seste kaç yetkili olduğunu görürsünüz.__`)
  .addField("• | a!gel",`__Sesli odaya gelme teklifi yaparsınız.__`)
  .addField("• | a!git",`__Sesli odaya gitme teklifi yaparsınız.__`)
  .addField("• | a!küfür-engel",`__Küfür engel özelliğini aktifleştirirsiniz.__`)
  .addField("• | a!reklam",`__Reklam engel sistemini açarsınız.__`)
  .addField("• | a!jail",`__Etiketlediğiniz kişiye jail atarsınız.__`)
  .addField("• | a!unjail",`__Etiketlediğiniz kişinin jailini kaldırırsınız.__`)
  .addField("• | a!mute",`__Etiketlediğiniz kişiye mute atarsınız.__`)
  .addField("• | a!unmute",`__Etiketlediğiniz kişinin mutesini açarsınız.__`)
  .addField("• | a!vmute",`__Etiketlediğiniz kişiye sesli mute atarsınız.__`)
  .addField("• | a!vunmute",`__Etiketlediğiniz kişinin sesli mutesini açarsınız.__`)
  .addField("• | a!sicil",`__Sicilinize bakarsınız.__`)
  .addField("• | a!sicil-sıfırla",`__Etiketlediğiniz kişinin sicilini sıfırlarsınız sadece **sahipler** içindir.__`)
  .addField("• | a!rol-al",`__Etiketlediğiniz kişiden belirttiğiniz rolü alırsınız.__`)
  .addField("• | a!rol-ver",`__Etiketlediğiniz kişiye belirttiğiniz rolü verirsiniz.__`)
  .addField("• | a!say",`__Sunucudaki üye sayısını görürsünüz.__`)
  .addField("• | a!tag-say",`__Sunucuda kaç taglı üye olduğunu görürsünüz.__`)
  .addField("• | a!ses-kes",`__Etiketlediğiniz kişiyi sesten atarsınız.__`)
  .addField("• | a!temizle",`__100 e kadar belirtilen sayıda mesaj silersiniz.__`)
  .addField("• | a!snipe",`__Son silinen mesajları gösterir.__`)

  .setDescription("A R W È N | M O D E R A T I O N bilgilendirme menüsü" )
  .setThumbnail("https://i.hizliresim.com/6X35Vo.gif")
  

 message.channel.send(nameles)

}

exports.conf = {

  enabled: true,

  guildOnly: false,

  permLevel: 0,

  aliases: ['help', 'h', 'y', 'yardım']

}

exports.help = {

  name: 'yardım',

  description: 'Yardım Menüsünü Açar',

  usage: 'yardım'

}