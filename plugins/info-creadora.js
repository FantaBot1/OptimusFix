var handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
let fkont ak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let pp = gataImg.getRandom()	
const cat = ` *Hola Si Deseas Hablarle A los Lideres Y Ceos Del Team Hydra Estos Son Sus Numeros :*

*1 :* +51 926 933 818 *Ceo Hydra*
*2 :* +51 980 269 276 *Co Ceo Hydra*
*3 :* +51 978 420 752 *Co Lider Hydra*
*4 :* +54 9 291 513 9790 *Decana Hydra*
`

await conn.sendFile(m.chat, pp, 'gata.mp4', cat, fkontak)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']
handler.command = /^(owner|creator|propietario|dueño|dueña|propietaria|dueño|creadora|creador)$/i

export default handler
 
