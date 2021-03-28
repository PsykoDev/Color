/** @format */

module.exports = function Color(mod) {
  let colors = { pink: "#FF00DC", blue: "#56B4E9", red: "#FF0000", yellow: "#E69F00" }
  let color = ""
  let lock = true
  let bl = [9, 213, 214, 26]
  let safe = [0, 27, 3]

  mod.command.add("color", (arg) => {
    switch (arg) {
      case "unlock":
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
      case "off":
        color = ""
        break
      default:
        mod.command.message(`. pink / , blue / ; red / : yellow`)
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
      }
    }
    if (temp_color) {
      return '<FONT color="' + temp_color + '"><ChatLinkAction param="1#####0@0@name">' + message.replace(/<[^>]*>/g, "") + "</ChatLinkAction>"
    }
    return message
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
