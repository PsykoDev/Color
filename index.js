/** @format */

module.exports = function Color(mod) {
  let colors = { pink: "#FF00DC", blue: "#56B4E9", red: "#FF0000", yellow: "#E69F00", grey: "#A0A0A0" }
  let colore = ["#F0FF89", "#FFFFFF", "#AAA7FF", "#0196FF", "#40FB40", "#C37A81", "#FF7D00", "#FF7EFF", "#D5FFC6", "#D5FFC6", "#FFB9B9", "#80DCAB", "#12B581", "#D9D9D9", "#FFB368", "#FF4F88", "#ED145B", "#FF4F88", "#FFF799", "#EE1C24", "#40FB40", "#FF6565", "#EE1C24", "#FFE03F", "#FFE03F", "#FFE03F"]
  let color = ""
  let lock = true
  let ran = false
  let bl = [9, 213, 214, 26]
  let safe = [0, 27, 3]

  mod.command.add("color", (arg) => {
    switch (arg) {
      case "unlock":
      case "lock":
        lock = !lock
        mod.command.message(`Perma Color Unlocked for ALL channel: ${lock ? "disabled" : "enabled Stay safe !"}`)
        return
      case "pink":
        color = colors.pink
        break
      case "blue":
        color = colors.blue
        break
      case "red":
        color = colors.red
        break
      case "gold":
        color = colors.yellow
        break
      case "grey":
        color = colors.grey
        break
      case "random":
        ran = !ran
        mod.command.message(`Random Color: ${ran ? "enabled" : "disabled"}`)
        color = colore[Math.floor(Math.random() * colore.length)]
        return
      case "off":
        color = ""
        break
      default:
        mod.command.message(`. pink / , blue / ; red / : yellow / § : grey`)
        return
    }
    mod.command.message(`Perma Color: ${arg}`)
  })

  function format_message(message) {
    if (message.includes("ChatLinkAction param=")) return message
    let temp_color = color
    if (!color) {
      if (message.includes(".")) {
        temp_color = colors.pink
        message = message.replace(".", "")
      } else if (message.includes(",")) {
        temp_color = colors.blue
        message = message.replace(",", "")
      } else if (message.includes(";")) {
        temp_color = colors.red
        message = message.replace(";", "")
      } else if (message.includes(":")) {
        temp_color = colors.yellow
        message = message.replace(":", "")
      } else if (message.includes("§", "")) {
        temp_color = colors.grey
        message = message.replace("§", "")
      }
    }
    if (temp_color && ran === false) {
      let reg_msg = message
        .replace(/<[^>]*>/g, "")
        .replace(/&lt/g, "<")
        .replace(/&gt/g, ">")
      return '<FONT color="' + temp_color + '"><ChatLinkAction param="1#####0@0@name">' + reg_msg + "</ChatLinkAction>"
    } else if (ran === true) {
      let temp_colorR = colore[Math.floor(Math.random() * colore.length)]
      let reg_msg = message
        .replace(/<[^>]*>/g, "")
        .replace(/&lt/g, "<")
        .replace(/&gt/g, ">")
      return '<FONT color="' + temp_colorR + '"><ChatLinkAction param="1#####0@0@name">' + reg_msg + "</ChatLinkAction>"
    }
    return message.replace(/&lt/g, "<").replace(/&gt/g, ">")
  }

  mod.hook("C_CHAT", 1, (e) => {
    if (bl.includes(e.channel)) return
    if (safe.includes(e.channel) && lock) return
    e.message = format_message(e.message)
    return true
  })

  mod.hook("C_WHISPER", 1, (e) => {
    e.message = format_message(e.message)
    return true
  })
}

/*
   static var CHAT_NOTICE = 15794057; // F0FF89
   static var CHAT_NORMAL = 16777215; // FFFFFF
   static var CHAT_GUARD = 11184127; // AAA7FF
   static var CHAT_PARTY = 104191; // 0196FF
   static var CHAT_GUILD = 4258624; // 40FB40
   static var CHAT_TRADE = 12810881; // C37A81
   static var CHAT_BATTLEFIELD = 16743680; // FF7D00
   static var CHAT_WHISPER = 16744191; // FF7EFF
   static var CHAT_PRIVATE_1 = 14024646; // D5FFC6
   static var CHAT_CLUB = 14024646; // D5FFC6
   static var CHAT_BARGAIN = 16760719; // FFBF8F
   static var CHAT_SEARCH_PARTY = 4508927; // 44CCFF
   static var CHAT_PARTYMASTER_MESSAGE = 6750207; // 66FFFF
   static var CHAT_COMMANDER_MESSAGE = 16763904; // FFCC00
   static var CHAT_SENATOR_MESSAGE = 16764006; // FFCC66
   static var CHAT_RAID_MEMBER = 16763904; // FFCC00
   static var CHAT_RAID_MASTER = 16743680; // FF7D00
   static var CHAT_GENERAL = 15794057; // F0FF89
   static var CHAT_RP = 16759225; // FFB9B9
   static var CHAT_UNION = 8445099; // 80DCAB
   static var CHAT_UNION_ELLIT = 1226113; // 12B581
   static var CHAT_SYSTEM_ATTACK_MY = 14277081; // D9D9D9
   static var CHAT_SYSTEM_ATTACK_MY_CRITICAL = 16757608; // FFB368
   static var CHAT_SYSTEM_DEMAGE_MY = 16732040; // FF4F88
   static var CHAT_SYSTEM_DEMAGE_MY_CRITICAL = 15537243; // ED145B
   static var CHAT_SYSTEM_DEMAGE_MY_FALLING = 16732040; // FF4F88
   static var CHAT_SYSTEM_INFO = 16775065; // FFF799
   static var CHAT_SYSTEM_INFO_WORLD = 14277081; // D9D9D9
   static var CHAT_SYSTEM_INFO_ERROR = 15604772; // EE1C24
   static var CHAT_SYSTEM_INFO_PARTY = 14277081; // D9D9D9
   static var CHAT_SYSTEM_INFO_TEAM = 14277081; // D9D9D9
   static var CHAT_SYSTEM_INFO_GUILD = 4258624; // 40FB40
   static var CHAT_SYSTEM_INFO_INTERACTION = 16737637; // FF6565
   static var CHAT_SYSTEM_WARNING = 15604772; // EE1C24
   static var CHAT_SYSTEM_GET_ITEM = 16769087; // FFE03F
   static var CHAT_SYSTEM_GET_EXP = 16769087; // FFE03F
   static var CHAT_SYSTEM_GET_GOLD = 16769087; // FFE03F
   static var CHAT_LINK_ITEM = "0xfffa64"; // fffa64
   static var CHAT_LINK_QUEST = "0xf6da21"; // f6da21
   static var CHAT_LINK_MARKER = "0x00e114"; // 00e114
   static var CHAT_LINK_BARGAIN = "0xff9a68"; // ff9a68
   static var CHAT_LINK_SEARCH_PARTY = "0x9BF0FF"; // 9BF0FF
   static var CHAT_LINK_CHOICE = "0xfffa64"; // fffa64
*/
