/** @format */

"use strict"

const DefaultSettings = {
  enabled: true,
  lock: true,
  ran: false,
  bl: [9, 213, 214, 26],
  safe: [0, 27, 3],
  colors: { pink: "#FF00DC", blue: "#56B4E9", red: "#FF0000", yellow: "#E69F00", grey: "#A0A0A0" },
  colore: ["#F0FF89", "#FFFFFF", "#AAA7FF", "#0196FF", "#40FB40", "#C37A81", "#FF7D00", "#FF7EFF", "#D5FFC6", "#D5FFC6", "#FFB9B9", "#80DCAB", "#12B581", "#D9D9D9", "#FFB368", "#FF4F88", "#ED145B", "#FF4F88", "#FFF799", "#EE1C24", "#40FB40", "#FF6565", "#EE1C24", "#FFE03F", "#FFE03F", "#FFE03F"],
}

module.exports = function MigrateSettings(from_ver, to_ver, settings) {
  if (from_ver === undefined) {
    // Migrate legacy config file
    return Object.assign(Object.assign({}, DefaultSettings), settings)
  } else if (from_ver === null) {
    // No config file exists, use default settings
    return DefaultSettings
  } else {
    // Migrate from older version (using the new system) to latest one
    if (from_ver + 1 < to_ver) {
      // Recursively upgrade in one-version steps
      settings = MigrateSettings(from_ver, from_ver + 1, settings)
      return MigrateSettings(from_ver + 1, to_ver, settings)
    }

    // If we reach this point it's guaranteed that from_ver === to_ver - 1, so we can implement
    // a switch for each version step that upgrades to the next version. This enables us to
    // upgrade from any version to the latest version without additional effort!
    switch (to_ver) {
      // keep old settings, add new ones
      default:
        let oldsettings = settings

        settings = Object.assign(DefaultSettings, {})

        for (let option in oldsettings) {
          if (settings[option]) {
            settings[option] = oldsettings[option]
          }
        }

        break
    }

    return settings
  }
}
