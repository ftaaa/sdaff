const Discord = require("discord.js");

const mapping = { // Emojiler
   "0": "**0**",
  "1": "**1**",
  "2": "**2**",
  "3": "**3** ",
  "4": "**4**",
  "5": "**5**",
  "6": "**6**",
  "7": "**7**",
  "8": ":**8**:",
  "9": "**9**",
  "!": "❕",
  "?": "❔",
  "#": "#️⃣",
  "*": "*️⃣"
};
"abcdefghijklmnopqr".split("").forEach(c => {
  mapping[c] = mapping[c.toUpperCase()] = `:regional_indicator_${c}:`;
});

exports.run = function(client, message, args) {
  
  let offlinesayi = message.guild.members.cache.filter(
    m => m.user.presence.status === "offline"
  ).size; 
  let offline = '**Çevrimdışı Kişi** ' +
     `${offlinesayi}`
     .split("")
     .map(c => mapping[c] || c)
     .join(" ")
  let toplam = message.guild.memberCount;
  let sunucu = '**Sunucudaki Kişi:** ' + 
      `${toplam}`
      .split("")
      .map(c => mapping[c] || c)
      .join(" ")
  let online = message.guild.members.cache.filter(m => !m.user.bot && m.user.presence.status !== "offline").size;;
  let offline2 =  '**Çevrimiçi Kişi:** ' +
     `${online}`
     .split("")
     .map(c => mapping[c] || c)
     .join(" ")

const embed = new Discord.MessageEmbed()
.setTitle('Sunucu İstatistikleri')
.setColor('BLACK')
.setDescription('' + sunucu + '\n \n' + offline2 + '\n \n' + offline + '')
.setFooter('')

  message.channel.send(embed)
  let onnl = `** ${sunucu}\n** ${offline2}`
message.channel.setTopic(onnl)

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["onlinesayi"],
  permLevel: 0
};

exports.help = {
  name: "say",
  usage: "Sunucudaki Online Kişileri Sayar",
  desscription: "say"
};