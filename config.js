const fs = require('fs')
const file = require.resolve(__filename)


global.ownerNumber = ["50938025349@s.whatsapp.net"]
global.nomerOwner = "50938025349"
global.nomorOwner = ['50938025349']
global.namaDeveloper = "乃匚ㄒㄖㄖㄥ丂" //jangn diubh bng
global.namaOwner = "乃匚ㄒㄖㄖㄥ丂"
global.namaBot = "bctools-bot"
global.versionBot = "ꪜ1"
global.packname = "𝐁𝐂𝐓𝐎𝐎𝐋𝐒 𝐎𝐅𝐂 ꪜ1"
global.author = "✨ BCTOOLS OFC MD ✨"
global.ThM = 'https://iili.io/2yFPx0F.png'
global.prefa = ['','!','.',',','🐤','⛓️'] 
global.travaSend = "1" // total travas a ser enviado



fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Update ${__filename}`)
delete require.cache[file]
require(file)
})