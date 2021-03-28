/** @format */

module.exports = function Color(mod) {
  let pink = false,
    bleu = false,
    red = false,
    golden = false,
    lock = true
  mod.command.add("color", (arg) => {
    switch (arg) {
      case "unlock":
        lock = !lock
        mod.command.message(`Perma Color Unlocked for ALL channel: ${lock ? "disabled" : "enabled"}`)
        mod.command.message(`Stay safe !`)
        break
      case "pink":
        pink = !pink
        bleu = false
        red = false
        golden = false
        mod.command.message(`Perma Pink Color: ${pink ? "enabled" : "disabled"}`)
        break
      case "blue":
        bleu = !bleu
        pink = false
        red = false
        golden = false
        mod.command.message(`Perma Blue Color: ${bleu ? "enabled" : "disabled"}`)
        break
      case "red":
        red = !red
        pink = false
        bleu = false
        golden = false
        mod.command.message(`Perma Red Color: ${red ? "enabled" : "disabled"}`)
        break
      case "gold":
        golden = !golden
        pink = false
        bleu = false
        red = false
        mod.command.message(`Perma Gold Color: ${golden ? "enabled" : "disabled"}`)
        break
      case "off":
        pink = false
        bleu = false
        red = false
        golden = false
        mod.command.message(`Perma Color: disabled`)
        break
      default:
        mod.command.message(`. pink / , blue / ; red / : yellow`)
        break
    }
  })
  let bl = [9, 213, 214, 26]
  let safe = [0, 27, 3]
  mod.hook("C_CHAT", 1, (e) => {
    if (bl.includes(e.channel)) return
    if (safe.includes(e.channel) && lock) return
    if (e.message.includes("ChatLinkAction param=")) return
    // PERMA
    if (e.message.includes("") && pink) {
      mod.send("C_CHAT", 1, {
        channel: e.channel,
        message: '<FONT color="#FF00DC"><ChatLinkAction param="1#####0@0@name">' + e.message.replace(/<[^>]*>/g, "") + "</ChatLinkAction>",
      })
      return false
    }
    if (e.message.includes("") && bleu) {
      mod.send("C_CHAT", 1, {
        channel: e.channel,
        message: '<FONT color="#56B4E9"><ChatLinkAction param="1#####0@0@name">' + e.message.replace(/<[^>]*>/g, "").replace("", "") + "</ChatLinkAction>",
      })
      return false
    }
    if (e.message.includes("") && red) {
      mod.send("C_CHAT", 1, {
        channel: e.channel,
        message: '<FONT color="#FF0000"><ChatLinkAction param="1#####0@0@name">' + e.message.replace(/<[^>]*>/g, "").replace("", "") + "</ChatLinkAction>",
      })
      return false
    }
    if (e.message.includes("") && golden) {
      mod.send("C_CHAT", 1, {
        channel: e.channel,
        message: '<FONT color="#E69F00"><ChatLinkAction param="1#####0@0@name">' + e.message.replace(/<[^>]*>/g, "").replace("", "") + "</ChatLinkAction>",
      })
      return false
    }
    //WITH KEY
    if (e.message.includes(".")) {
      mod.send("C_CHAT", 1, {
        channel: e.channel,
        message: '<FONT color="#FF00DC"><ChatLinkAction param="1#####0@0@name">' + e.message.replace(/<[^>]*>/g, "").replace(".", "") + "</ChatLinkAction>",
      })
      return false
    }
    if (e.message.includes(",")) {
      mod.send("C_CHAT", 1, {
        channel: e.channel,
        message: '<FONT color="#56B4E9"><ChatLinkAction param="1#####0@0@name">' + e.message.replace(/<[^>]*>/g, "").replace(",", "") + "</ChatLinkAction>",
      })
      return false
    }
    if (e.message.includes(";")) {
      mod.send("C_CHAT", 1, {
        channel: e.channel,
        message: '<FONT color="#FF0000"><ChatLinkAction param="1#####0@0@name">' + e.message.replace(/<[^>]*>/g, "").replace(";", "") + "</ChatLinkAction>",
      })
      return false
    }
    if (e.message.includes(":")) {
      mod.send("C_CHAT", 1, {
        channel: e.channel,
        message: '<FONT color="#E69F00"><ChatLinkAction param="1#####0@0@name">' + e.message.replace(/<[^>]*>/g, "").replace(":", "") + "</ChatLinkAction>",
      })
      return false
    }
  })
}
