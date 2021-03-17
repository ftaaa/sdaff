const Discord = require("discord.js");

exports.run = function(client, message) {
  const embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setTitle("» FTA BOT Komut Sistemleri")
    .setTimestamp()
    .addField("» !ban", " İstediğiniz Kullanıcıyı Banlamanızı Sağlar.")
    .addField("» !kick ", "sKullanıcıyı Kicklemenizi Sağlar.")
    .addField("» !ever-engel aç-kapat", " veryone Ve Here Açar/kapatır.")
    .addField("» !link-engel ", "Link Engellemeyi Açar..")
    .addField("» !mod-log-ayarla ", "Mod Log Kanalı Belirler. .")
    .addField("» !reklam-engel ", "Reklam Engellemeyi Açar.")
    .addField("» !koruma ", "Rol Korumayı Ayarlar..")
    .addField("» !yavaş-mod ", "Yazı Yazma Süresini Ayarlar.")
    .addField("» !temizle ", "Belirtilen Sayı Kadar Mesaj Siler.")
    .addField("» !uyarı-kaldır ", " Kişinin Uyarısını Kaldırır.")
    .addField("» !kanal-koruma  ", "Kanal Korumayı Aktif Hale Getirir.")
    .addField("» !kanal-koruma-sıfırla ", "Kanal Korumayı Kapatır.")
   

    .setFooter("© 2020 FTA Bot", client.user.avatarURL)
    .setTimestamp()
    .setThumbnail(client.user.avatarURL);
  message.channel.send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "yardım",
  description: "Tüm komutları gösterir.",
  usage: "yardım"
};
