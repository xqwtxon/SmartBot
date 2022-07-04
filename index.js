const dbd = require("dbd.js")

const bot = new dbd.Bot({
token: "Nzg4NzUwMjUwMDAwMTIxODk2.X9oC6Q.WpEglPatnpfj_nPyRoITDB7HmJo", 
prefix: "!" 
})
// Status //
bot.status({
  text: "Over $serverCount Server!",
  type: "STREAMING",
  time: 1
})
bot.status({
  text: "smartbot.tk",
  type: "STREAMING",
  time: 1
})
bot.status({
  text: "My Prefix Is !",
  type: "STREAMING",
  time: 1
})
bot.status({
  text: "Type !help",
  type: "STREAMING",
  time: 1
})
bot.status({
  text: "By LawlessHen10097",
  type: "STREAMING",
  time: 1
})
bot.status({
  text: "Type !invite",
  type: "STREAMING",
  time: 1
})

bot.onMessage()
// Basic //
bot.command({
name: "ping", 
code: `
$botTyping
$deletecommand
**Pong!**
Current Ping : \`$pingms\`
Current Shard ID : \`$shardID\`
$editIn[5s;
**Pong!**
Edited Ping : \`$ping\`
Edited Shard ID : \`$shardID\`
]
`
})
// Help Disk //
bot.command({
  name: "help",
  code: `
  Helpfull Commands
  Signs :
  \`<>\` - Required
  
  \`[]\` - Optional
  
  Moderation ⚙️
  
  \`!kick <@mention>\` - Kick A Member With Countdown!
  
  \`!ban <@mention>\` - Ban A Member With Countdown!
  
  \`!unban <@mention>\` - Unban A Member!
  

  Misc 📣
  \`!whois\` - Checks Member info
  
  \`!server\` - Checks The Server info
  
  \`!invite-server/bot\` - Instant Invitation!
  
  \`!addwiki <wiki>\` - Add Wiki!
  
  \`!lyrics <song name>\` - Lyrics!
  
  \`!meme\` - Random Memes!
  
  \`!cov\` - Checks Covid-19 Stats!
  
  \`!clear <no.messages>\` - Clears Messages!
  \`!hack <@mention>\` - Funny Hack Command
  

  Premium 💎
  \`!premium\` - Buy premium!
  
  \`!join\` - Join In Our Server!
  
  \`!status\` - Checks Status Of Bot!
  
  \`!ping\` - Checks Ping status
  
  \`!info\` - Checks Information That Provided
$deletecommand
$botTyping
  `
})
bot.command({
 name: "play",
 aliases: ["p"],
 code: `
$color[RANDOM]
$thumbnail[$jsonRequest[http://api.somecool.repl.co/yt-search?search=$message;thumbnail]]
$title[**__Song Added to Queue__**]
$description[**Succesfully added** [$songInfo[title]\\]($songInfo[url]) to the **Queue**]
$addField[:stopwatch:| Duration:;**__$jsonRequest[http://api.somecool.repl.co/yt-search?search=$message;duration]__**]
$addField[:dvd: | Views:;**__$jsonRequest[http://api.somecool.repl.co/yt-search?search=$message;views]__**]
$addField[:coffee: | Author:;**__$jsonRequest[http://api.somecool.repl.co/yt-search?search=$message;uploader_name]__**]
$addField[:clock10: Uploaded:;**__$jsonRequest[http://api.somecool.repl.co/yt-search?search=$message;uploaded]__**]
$playSong[$message;{title:Error}{description:There was an error while making the request.}{color:RED}]
$onlyIf[$message!=;{title:Error}{description:I need Song name to find a \`song\`...}]
$onlyIf[$voiceID!=;You are Not in a Voice channel! Join a voice channel]
$cooldown[5s;Wait **%time** to use this command again]
`
})
// Moderation //
bot.command({
  name: "kick",
  code: `
  1:00
  $editIn[1s;0:59;0:58;0:57;0:56;0:55;0:54;0:53;0:52;0:51;0:50;0:49;0:48;0:47;0:46;0:45;0:44;0:43;0:42;0:41;0:40;0:39;0:38;0:37;0:36;0:35;0:34;0:33;0:32;0:31;0:30;0:29;0:28;0:27;0:26;0:25;0:24;0:23;0:22;0:21;0:20;0:19;0:18;0:17;0:16;0:15;0:14;0:13;0:12;0:11;0:10;0:09;0:08;0:07;0:06;0:05;0:04;0:03;0:02;00:00;00:00;00:00;**00:00**;**TIME IS UP!**;TIME IS UP!;**TIME IS UP!**;<@$mentioned[1;yes] Was Kicked Successfully!]
  $kick[$mentioned[1;yes]]
  $deletecommand
  $argsCheck[>1;Please Mention That You Been Kicked]
  $botTyping
  $onlyPerms[kick;You Do Have Permission To Kick Member On This Server!]
  $deleteIn[10s]
  `
})
bot.command({
  name: "ban",
  code: `
  1:00
  $editIn[1s;0:59;0:58;0:57;0:56;0:55;0:54;0:53;0:52;0:51;0:50;0:49;0:48;0:47;0:46;0:45;0:44;0:43;0:42;0:41;0:40;0:39;0:38;0:37;0:36;0:35;0:34;0:33;0:32;0:31;0:30;0:29;0:28;0:27;0:26;0:25;0:24;0:23;0:22;0:21;0:20;0:19;0:18;0:17;0:16;0:15;0:14;0:13;0:12;0:11;0:10;0:09;0:08;0:07;0:06;0:05;0:04;0:03;0:02;00:00;00:00;00:00;**00:00**;**TIME IS UP!**;TIME IS UP!;**TIME IS UP!**;<@$mentioned[1;yes] Was Banned Successfully!]
  $deletecommand
  $deleteIn[10s]
  $ban[$mentioned[1;yes]]
  `
})
bot.command({
  name: "unban",
  code: `
  1:00
  $editIn[1s;0:59;0:58;0:57;0:56;0:55;0:54;0:53;0:52;0:51;0:50;0:49;0:48;0:47;0:46;0:45;0:44;0:43;0:42;0:41;0:40;0:39;0:38;0:37;0:36;0:35;0:34;0:33;0:32;0:31;0:30;0:29;0:28;0:27;0:26;0:25;0:24;0:23;0:22;0:21;0:20;0:19;0:18;0:17;0:16;0:15;0:14;0:13;0:12;0:11;0:10;0:09;0:08;0:07;0:06;0:05;0:04;0:03;0:02;00:00;00:00;00:00;**00:00**;**TIME IS UP!**;TIME IS UP!;**TIME IS UP!**;<@$mentioned[1;yes] Was Unbanned Successfully!]
  $deletecommand
  $unban[$mentioned[1;yes]]
  $deleteIn[10s]
  `
})
// End Moderation //

// Misc //
bot.command({
  name: "whois",
  code: `
  $deletecommand
  $botTyping
  $color[00ff00]
  $title[Who Is?]
  $description[
  Username:question:
  $username[$mentioned[1;yes]]#$discriminator[$mentioned[1;yes]]
  
  Roles:question:
  $userRoles[$mentioned[1;yes]]
  
  Status:question:
  $status[$mentioned[1;yes]]
  
  Custom Status:question:
  $getCustomStatus[$mentioned[1;yes]]
  
  Date Joined:question:
  $memberJoinedDate[$mentioned[1;yes]]
  
  ID:question:
  \`$mentioned[1;yes]\`
  ]
  `
});
bot.command({
  name: "server",
  code: `
  $deletecommand
  $botTyping
  $color[00ffff]
  $thumbnail[$authorIcon[$mentioned[1;yes]]]
  $title[Server Info]
  $description[
  Server Name:question:
  $serverName
  
  Owner:question:
  $username[$ownerID]
  
  Members:question:
  Online : $membersCount[$guildID;online]
  Offline : $membersCount[$guildID;offline]
  Total : $allMembersCount
  
  Bot Count:question:
  $botCount
  
  Verification Level:question:
  $serverVerificationLevel
  
  Server Boost Count:question:
  $serverBoostCount
  
  Server Emoji:question:
  $serverEmoji
  ]
  $footer[$parseDate[$timeStamp;date]]
  `
})
bot.command({
  name: "invite-bot",
  code: `
  $deletecommand
  $botTyping
  $color[ff0000]
  $title[Invite Me To Your Server! $username!]
  $description[
  [Invite\\]($getBotInvite)
  ]
  `
})
bot.command({
  name: "invite-server",
  code: `
  $botTyping
  $deletecommand
  $color[ff0000]
  $title[Invite To $serverName! $username]
  $description[
  [Invite\\]($getServerInvite)
  ]
  `
})
bot.command({
  name: "addwiki",
  aliases: ['wiki','newwiki','sendwiki'],
  code: `
  $botTyping
  $deletecommand
  $title[New Wiki! By $username!]
  $description[$message]
  $footer[$parseDate[$timeStamp;date]
  $useChannel[788001600336953346]
  `
})
bot.command({
  name: "addwiki",
  aliases: ['newwiki','wiki','sendwiki'],
  code: `Wiki Sent $editIn[1s;**Wiki Sent**;Wiki Sent;**Wiki Sent**;Wiki By $username;Check On <#788001600336953346>]`
})
bot.command({
  name: "clear",
  aliases: ['clean','delete','DelMsg'],
  code: `
  $botTyping
  $deletecommand
  $clear[$message]
  $color[RANDOM]
  $title[Cleared Successfully $message Messages!]
  $deleteIn[5s]
  `
})
bot.command({
    name: "premium",
    aliases: ['vip','platinum','donate'],
    code: `
    $botTyping
    $deletecommand
    $title[Buy Premium?]
    $description[
    Premium Its Starts On $5.99!
    [Join In Our Server](https://discord.gg/3tpZZrXcCy)
    Donate by boosting & pay $5.99 From our admin/Owner
    For more info, just type !info For Information!
    ]
    $footer[$parseDate[$timeStamp;date]]
    `
})
bot.command({
    name: "info",
    aliases: ['information','about','details','moreinfo','i','in','inf'],
    code: `
    $botTyping
    $deletecommand
    $title[Information❓]
    $description[
    Links:question:
    [Hen Github](http://github.com/Hen-Official) \`|\` [Support Server](https://discord.gg/3tpZZrXcCy) \`|\` [Bot Invitation]($getBotInvite)
    Information:question:
    Owner👑 : LawlessHen10097
    Support Server📢 : Smart™
    Developers : LawlessHen10097
    Software📥 : [Repl.it](http://repl.it/)
    About:question:
    This Is Smart That Moderates, Helpfull Misc, Setting Commands,Covid Commands,And More!⚙️
    Thanks To : **Cyclone** Community!
    ]
    `
})
bot.command({
        name: "lyrics",
        code: `
$title[Lyrics]
$description[$jsonRequest[https://some-random-api.ml/lyrics?title=$replaceText[$message; ;+];lyrics;No Lyrics Found for this song.]]
$footer[https://discord.gg/TSxEAUT]
$color[RANDOM]`
})
bot.command({
  name: "status",
  code: `
  $botTyping
  $deletecommand
  $title[Status Of Bot]
  $description[
  Ping : \`$pingms\`
  Shard ID : \`$shardID\`
  Bot Status : \`$status[788750250000121896]\`
  ]
  $footer[$parseDate[$timeStamp;date]]
  `
})
bot.command({
        name: "lyrics",
        code: `
$title[Lyrics]
$description[$jsonRequest[https://some-random-api.ml/lyrics?title=$replaceText[$message; ;+];lyrics;No Lyrics Found for this song.]]
$footer[https://discord.gg/TSxEAUT]
$color[RANDOM]`
})
bot.command({
 name:"meme",
 code:`$title[Here is a meme!] $description[$jsonRequest[https://sv443.net/jokeapi/v2/joke/Any?type=single;joke;]]
$color[RANDOM]`
 })
// End Misc + Premium //
