const handler = async (m, {isOwner, isAdmin, conn, text, participants, args, command, usedPrefix}) => {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  if (!(isAdmin || isOwner)) {
    global.dfail('admin', m, conn);
    throw false;
  }
  const pesan = args.join` `;
  const oi = `${pesan}`;
  let teks = `𝗘𝘆 𝗡𝗶ñ@ 𝗔𝗰𝘁𝗶𝘃𝗮𝘁𝗲 𝗧𝗶𝗲𝗻𝗲𝘀 𝗤𝘂𝗲 𝗔𝗻𝗼𝘁𝗮𝗿𝘁𝗲 𝗢 𝗘𝗿𝗲𝘀 𝗖𝘂𝗽𝗼 ? 🌱\n${oi}\n`;
  for (const mem of participants) {
    teks += `ִ໋ღ @${mem.id.split('@')[0]}\n`;
  }
  teks += `\n𝗧𝗲𝗮𝗺 𝗛𝘆𝗱𝗿𝗮 𝗕𝗼𝘁`;
  conn.sendMessage(m.chat, {text: teks, mentions: participants.map((a) => a.id)} );
};
handler.help = ['tagall <mesaje>', 'invocar <mesaje>'];
handler.tags = ['group'];
handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i;
handler.admin = true;
handler.group = true;
export default handler;
