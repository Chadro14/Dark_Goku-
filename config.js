const fs = require('fs')
const file = require.resolve(__filename)


global.ownerNumber = ["243905526836@s.whatsapp.net"]
global.nomerOwner = "243905526836"
global.nomorOwner = ['243905526836']
global.namaDeveloper = "Son Altesse Royal" //jangn diubh bng
global.namaOwner = "Son Altess Royal"
global.namaBot = "Dark-Goku"
global.versionBot = "ꪜ1"
global.packname = "Dark Goku ꪜ1"
global.author = "✨ Dark Goku ✨"
global.ThM = 'https://iili.io/2yFPx0F.png'
global.prefa = ['','!','.',',','🐤','⛓️'] 
global.travaSend = "1" // total travas a ser enviado



fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Update ${__filename}`)
delete require.cache[file]
require(file)
})
