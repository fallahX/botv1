let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
〘 INFO BOT 〙
DIBUAT DENGAN NODEJS
DENGAN FILE JAVASCRIPT
〘 F-BOT 〙 
`.trim(), m)
}
handler.command = /^(info)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

