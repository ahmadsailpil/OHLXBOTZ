let handler = async (m, { conn }) => {
let info = `
*${htki} VIRUS ${htka}*
          
 🔥BY OHLX🔥
          
                  
–––––– *ᴋᴇʙɪᴊᴀᴋᴀɴ* ––––––
*📮Gunakan Dengan tujuan yang benar. Jangan untuk merugikan orang lain tanpa alasan!*
`
const sections = [
   {
    title: `✃ VIRTEX`,
	rows: [
	    {title: "😈Virtex 1", rowId: '.virtex1', description: 'SUBSCRIBE OHLX GT' },
	    {title: "😈Virtex 2", rowId: '.virtex2', description: 'SUBSCRIBE OHLX GT' },
	{title: "😈Virtex 3", rowId: '.virtex3', description: 'SUBSCRIBE OHLX GT' },
	{title: "😈Virtex 4", rowId: '.virtex4', description: 'SUBSCRIBE OHLX GT' },
	{title: "😈Virtex 5", rowId: '.virtex5', description: 'SUBSCRIBE OHLX GT' },
	{title: "😈Virtex 6", rowId: '.virtex6', description: 'SUBSCRIBE OHLX GT' },
    {title: "😈Virtex 7", rowId: '.virtex7', description: 'SUBSCRIBE OHLX GT' },
	{title: "😈Virtex 8", rowId: '.virtex8', description: 'SUBSCRIBE OHLX GT' },
	{title: "😈Virtex 9", rowId: '.virtex9', description: 'SUBSCRIBE OHLX GT' },
	{title: "😈Virtex 10", rowId: '.virtex10', description: 'SUBSCRIBE OHLX GT' },
	{title: "😈Virtex 11", rowId: '.virtex11', description: 'SUBSCRIBE OHLX GT' },
	{title: "😈Virtex 12", rowId: '.virtex12', description: 'SUBSCRIBE OHLX GT' },
	{title: "😈Virtex 13", rowId: '.virtex13', description: 'SUBSCRIBE OHLX GT' },
	{title: "😈Virtex 14", rowId: '.virtex14', description: 'SUBSCRIBE OHLX GT' },
    {title: "😈Virtex 15", rowId: '.virtex15', description: 'SUBSCRIBE OHLX GT' },
	{title: "😈Virtex 16", rowId: '.virtex16', description: 'SUBSCRIBE OHLX GT' },
	{title: "😈Virtex 17", rowId: '.virtex17', description: 'SUBSCRIBE OHLX GT' },
	{title: "😈Virtex 18", rowId: '.virtex18', description: 'SUBSCRIBE OHLX GT' },
	{title: "😈Virtex 19", rowId: '.virtex19', description: 'SUBSCRIBE OHLX GT' },
    {title: "😈Virtex 20", rowId: '.virtex20', description: 'SUBSCRIBE OHLX GT' },

	]
    }, {
    title: `✃ INFO`,
	rows: [
	    {title: "🔥Download WhatsApp Imune", rowId: '.waantivirus', description: 'Download WhatsApp Kebal' },
	    {title: "🔥Virus Troli", rowId: '.virustroli', description: 'SUBSCRIBE OHLX GT BOT' },
	    {title: "🔥Virus Power", rowId: '.powerlist', description: 'SUBSCRIBE OHLX GT' },
	    ]
        }, {
    title: `✃ BUY`,
	rows: [
	    {title: "💸Upgrade Premium", rowId: '.sewa', description: 'Dan unclock Fitur premium lainya!' },
	    ]
        },
]

const listMessage = {
  text: ' ',
  footer: info,
  title: null,
  buttonText: "👺GASS",
  sections
}
await conn.sendMessage(m.chat, listMessage, { quoted: m})
//conn.sendHydrated(m.chat, info, wm, null, sgc, "🌎 Group Official", null,null, [['Owner','.owner']], m)
}
handler.help = ['virtex']
handler.tags = ['virus']
handler.command = /^virtex$/i
handler.premium = true
handler.owner = true

export default handler
