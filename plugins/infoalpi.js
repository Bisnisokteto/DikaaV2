let handler  = async (m, { conn, usedPrefix }) => { 
conn.reply(m.chat, `
╭─˗ˏˋ *INFORMASI Alpi* ´ˎ˗
│ ✎ _Nama_ : Dikaa
│ ✎ _Sekolah_ : SMK MANBA'UL ULUM
│ ✎ _Umur_ : 15
│ ✎ _Asal_ : JAWA BARAT
│ ✎ _Status_ : Pelajar SMK
│ ✎ _WhatsApp_ :
│    wa.me/6288223674569
╰──────────────
`.trim(), m)
}

handler.help = ['infoalpi']
handler.tags = ['main', 'utama']
handler.command = /^(infoalpi)$/i

handler.exp = 150

module.exports = handler
