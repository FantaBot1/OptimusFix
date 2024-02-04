const handler = async (m, {conn}) => {
  m.reply(global.lideres);
};
handler.command = /^(Lideres|lideres)$/i;
export default handler;
handler.admin = false
handler.group = false
handler.botAdmin = false

global.Lideres = `
*Hola Si Deseas Hablarle A los Lideres Y Ceos Del Team Hydra Estos Son Sus Numeros :* 
*1 :* +51 926 933 818 *Ceo Hydra*
*2 :* +51 980 269 276 *Co Ceo Hydra*
*3 :* +51 978 420 752 *Co Lider Hydra*
*4 :* +54 9 291 513 9790 *Decana Hydra*
`;
