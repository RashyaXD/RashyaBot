//SCRIP BY EHZ GUA MASIH BELAJAR
//NOTE : SCRIP INI GRATIS UNTUK SEMUA ORANG
//ADA YANG JUAL SCRIPT INI NERAKA MENUNGGUMU🔥🔥
//SCRIPT INI MASIH ERROR BELUM SEMPURNA
//ERROR KUNJUNGI GROUP ( https://chat.whatsapp.com/Fguw4KxsP6qCBm9RfZvHOS )
//CUMA BISA COPAS OM😓
//HUBUNGI 6281316643491 JIKA ADA ORANG YANG JUAL SCRIPT INI💢💭

require('./setting')
const { WA_DEFAULT_EPHEMERAL, getAggregateVotesInPollMessage, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, downloadContentFromMessage, areJidsSameUser, getContentType } = require("@whiskeysockets/baileys")
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const os = require('os')
const axios = require('axios')
const fsx = require('fs-extra')
const crypto = require('crypto')
const ffmpeg = require('fluent-ffmpeg')
const ms = require("parse-ms")
const speed = require("performance-now")
const imageToBase64 = require ('image-to-base64')
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const cheerio = require( 'cheerio')
const fetch = require('node-fetch')
const { Primbon } = require('scrape-primbon')
const { Configuration, OpenAIApi } = require('openai')
const primbon = new Primbon()
const hxz = require('hxz-api')
const ytdl = require("ytdl-core")
const calip = require ('caliph-api')
const yts = require("yt-search")
const { exec, spawn, execSync } = require("child_process")
const {  tiktokdl, tiktokdlv2, lyricsv2,  lyrics,tiktokdlv3, savefrom, instagramdlv3, instagramdlv2 } = require('@bochilteam/scraper')
//========== Via LIB =========//
let afk = require("./lib/afk");
const { userXp, userLeveling, } = require("./lib/user");
const { addblockcmd, deleteblockcmd, checkblockcmd } = require ("./lib/blockcmd");
const { addError,clearAllError, deleteError, checkError } = require("./lib/totalerror")
const { msgFilter, addSpam, SpamExpired, cekSpam} = require('./lib/antispam')
const { Nothing,Failed,Succes,addAutoClear,autoClearChat, checkDataName, createDataId, addDataId, removeDataId, checkDataId, getHit, cmdAdd, expiredCmd } = require("./lib/totalcmd");
const _sewa = require('./lib/sewa')
const _prem = require("./lib/premium");
const { clearAllBan, addBanned, unBanned, cekBannedUser } = require("./lib/banned")
const ntilink = JSON.parse(fs.readFileSync('./all/antilink.json'))
const wlcmm = JSON.parse(fs.readFileSync('./all/antipushkontak.json'))
const antidel = JSON.parse(fs.readFileSync("./all/antidel.json"))
const ntimsm = JSON.parse(fs.readFileSync("./all/antibokep.json"))
const ntiwame = JSON.parse(fs.readFileSync("./all/antiwame.json"))
const ntiyete = JSON.parse(fs.readFileSync("./all/antilinkyt.json"))
const ntilinktree = JSON.parse(fs.readFileSync("./all/antilinktree.json"))
const ntitt = JSON.parse(fs.readFileSync("./all/antitiktok.json"))
const ntinsta = JSON.parse(fs.readFileSync("./all/antiinstagram.json"))
 const VnRashya = JSON.parse(fs.readFileSync('./src/media/vn.json'))
const StickerRashya = JSON.parse(fs.readFileSync('./src/media/sticker.json'))
const ImageRashya = JSON.parse(fs.readFileSync('./src/media/image.json'))
const VideoRashya = JSON.parse(fs.readFileSync('./src/media/video.json'))
const ntiefbeh = JSON.parse(fs.readFileSync("./all/antifacebook.json"))
let _afk = JSON.parse(fs.readFileSync('./src/data/user/afk-user.json'))
const { color, bgcolor } = require('./lib/color')
const { TelegraPh, UploadFileUgu } = require('./lib/uploader.js')
const { smsg, tanggal, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, formatp, parseMention, getRandom, h2k, makeid, randomNomor, reSize, getGroupAdmins, sendMedia, FileSize, generateProfilePicture } = require('./lib/myfunc')
//=================================================//

/* ~~~~~~~~~ WAKTU SETEMPAT ~~~~~~~~~ */
moment.tz.setDefault("Asia/Jakarta").locale("id")

const hariini = moment.tz('Asia/Jakarta').format('dddd, DD MMMM YYYY')
const wib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
const waktu = moment().tz('Asia/Jakarta').format('HH:mm:ss')
if (waktu < "23:59:00") {
    var ucapanWaktu = 'Selamat Malam 🏙️'
}
if (waktu < "19:00:00") {
    var ucapanWaktu = 'Selamat Petang 🌆'
}
if (waktu < "18:00:00") {
    var ucapanWaktu = 'Selamat Sore 🌇'
}
if (waktu < "15:00:00") {
    var ucapanWaktu = 'Selamat Siang 🌤️'
}
if (waktu < "10:00:00") {
    var ucapanWaktu = 'Selamat Pagi 🌄'
}
if (waktu < "05:00:00") {
    var ucapanWaktu = 'Selamat Subuh 🌆'
}
if (waktu < "03:00:00") {
    var ucapanWaktu = 'Selamat Tengah Malam 🌃'
}
//database
const AntiSpam = db.data.antispam
const DataId = db.data.data
const ban = db.data.banned
const premium = db.data.premium
const listcmdblock = db.data.blockcmd 
const listerror = db.data.listerror
const hitnya = db.data.hittoday
const dash = db.data.dashboard 
const anonChat = db.data.anonymous 
const allcommand = db.data.allcommand 
const sewa = db.data.sewa
const spammer = []

//=================================================//
module.exports = ehz = async (ehz, m, chatUpdate, store) => {
    
  var ownerNumber = [`${nomerOwner}@s.whatsapp.net` ,`${nomerOwner2}@s.whatsapp.net`,`${ehz.user.jid}`]
const Tnow = (new Date()/1000).toFixed(0)
const { type, now, args, sender, fromMe,from,botNumber,groupMetadata,senderNumber,groupName,groupId,groupMembers,groupDesc,groupOwner,pushname,itsMe,isGroup,mentionByTag,mentionByReply,users,budy,content,body,} = m

 try {
const from = m.key.remoteJid
const fatkuns = (m.quoted || m)
const quoted = (fatkuns.mtype == 'buttonsMessage') ? fatkuns[Object.keys(fatkuns)[1]] : (fatkuns.mtype == 'templateMessage') ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]] : (fatkuns.mtype == 'product') ? fatkuns[Object.keys(fatkuns)[0]] : m.quoted ? m.quoted : m
        
const body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectnewReply.selectedRowId : (m.mtype == 'templateButtonnewReplyMessage') ? m.message.templateButtonnewReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectnewReply.selectedRowId || m.text) : ''
        const budy = (typeof m.text == 'string' ? m.text : '')
const prefix = /^[°zZ#$@+,.?=''():√%!¢£¥€π¤ΠΦ&><`™©®Δ^βα¦|/\\©^]/.test(body) ? body.match(/^[°zZ#$@+,.?=''():√%¢£¥€π¤ΠΦ&><!`™©®Δ^βα¦|/\\©^]/gi) : '.'
const isCmd = body.startsWith(prefix)
const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase() //kalau mau pasang prefix ganti jadi ini : const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : '' 
const args = body.trim().split(/ +/).slice(1)
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001) 
const mime = (quoted.msg || quoted).mimetype || ''
const text = q = args.join(" ")
const replyCommand = isCmd? isCmd : allcommand.includes(toFirstCase(command))
const timestampp = speed();
const latensi = speed() - timestampp
//const numberQuery = q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`
//const Input = mentionByTag[0]? mentionByTag[0] : mentionByReply ? mentionByReply : q? numberQuery : false
const isGroup = from.endsWith('@g.us')
const botNumber = await ehz.decodeJid(ehz.user.id)
const sender = m.key.fromMe ? (ehz.user.id.split(':')[0]+'@s.whatsapp.net' || ehz.user.id) : (m.key.participant || m.key.remoteJid)
const senderNumber = sender.split('@')[0]
const pushname = m.pushName || `${senderNumber}`
const isBot = botNumber.includes(senderNumber)
const groupMetadata = isGroup ? await ehz.groupMetadata(m.chat).catch(e => {}) : ''
const groupName = isGroup ? groupMetadata.subject : ''
const participants = isGroup ? await groupMetadata.participants : ''
const groupAdmins = isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
const groupOwner = isGroup ? groupMetadata.owner : ''
const groupMembers = isGroup ? groupMetadata.participants : ''
const isBotAdmins = isGroup ? groupAdmins.includes(botNumber) : false
const isBotGroupAdmins = isGroup ? groupAdmins.includes(botNumber) : false
const isGroupAdmins = isGroup ? groupAdmins.includes(sender) : false
const isAdmins = isGroup ? groupAdmins.includes(sender) : false 
 const isAfkOn = afk.checkAfkUser(m.sender, _afk)
const pler = JSON.parse(fs.readFileSync('./all/database/idgrup.json').toString())
const jangan = m.isGroup ? pler.includes(m.chat) : false
const antilink = m.isGroup ? ntilink.includes(from) : false
const welcmm = m.isGroup ? wlcmm.includes(from) : false
const antimesum = m.isGroup ? ntimsm.includes(from) : false
const antiwame = m.isGroup ? ntiwame.includes(from) : false
const antiyete = m.isGroup ? ntiyete.includes(from) : false
const antilinktree = m.isGroup ? ntilinktree.includes(from) : false
const antitiktok = m.isGroup ? ntitt.includes(from) : false
const antiinsta = m.isGroup ? ntinsta.includes(from) : false
const antifb = m.isGroup ? ntiefbeh.includes(from) : false
const autodelete = from && isCmd ? antidel.includes(from) : false 
//bot respon jika button nya di tekan 
const user = global.db.data.users[m.sender]
const chat = isGroup? global.db.data.chats[m.chat] : false 
const kickon = global.db.data.kickon[m.chat]
// Database
const contacts = JSON.parse(fs.readFileSync("./all/database/contacts.json"))
const hitnya = db.data.hittoday
//const prem = JSON.parse(fs.readFileSync("./all/database/premium.json"))
const ownerNumber = JSON.parse(fs.readFileSync("./all/database/owner.json"))
// C Database
const isContacts = contacts.includes(sender)
//const isPremium = prem.includes(sender)
const isOwner = ownerNumber.includes(senderNumber) || isBot
const isPremium = isOwner ? true : _prem.checkPremiumUser(sender, premium)
const gcount = isPremium ? gcounti.prem : gcounti.user
const isUrl = (url) => {
return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
}
const pickRandom = (arr) => {
return arr[Math.floor(Math.random() * arr.length)]
}
const math = (teks) => {
return Math.floor(teks)
}  
//===========================================================//  
let colors = ['red','white','black','blue','yellow','green','magenta','cyan','pink','gold','purple','navy','gray']
        const isMedia = /image|video|sticker|audio/.test(mime)
        const isImage = (type == 'imageMessage')
        const isVideo = (type == 'videoMessage')
        const isAudio = (type == 'audioMessage')
        const isText = (type == 'textMessage')
        const isSticker = (type == 'stickerMessage')
        const isQuotedText = type === 'extendexTextMessage' && content.includes('textMessage')
        const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
        const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')
        const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
        const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
        const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
        const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')
        const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')

//===========================================================//

//FAKE REPLY  
const ftoko = { key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: {"productMessage": {"product": {"productImage":{"mimetype": "image/jpeg","jpegThumbnail": fs.readFileSync('./media/quoted.jpg')},"title": `${pushname}`,"description": `${ucapanWaktu} kak`,"currencyCode": "IDR", "priceAmount1000": `${pushname}`, "retailerId": `Rp10`,"productImageCount": 1},"businessOwnerJid": `0@s.whatsapp.net`}}}
const fkontak = { key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `0@s.whatsapp.net` } : {}) }, message: { 'contactMessage': { 'displayName': `${pushname}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': fs.readFileSync('./media/thumb.jpeg')}}}
//persen online
if(m.myButton) {return}  
ehz.readMessages([m.key])
//Presence Online
if (isCmd){
ehz.sendPresenceUpdate('recording', from)
} else {
ehz.sendPresenceUpdate('recording', from)
}
 //User 
const userLevel = user? db.data.users[m.sender].level : false
const userExp = user? db.data.users[m.sender].exp : false
const userId = user? db.data.users[m.sender].id : false
const amountExp = Math.floor(Math.random() * 10) + 50
const requiredExp = 10000 * userLevel
const userPersen = userExp/requiredExp*100
const userVerified = user? db.data.users[m.sender].date : false
// Random Color
const listcolor = ['red','green','yellow','blue','magenta','cyan','white']
const randomcolor = listcolor[Math.floor(Math.random() * listcolor.length)]
const createSerial = (size) => {
        return crypto.randomBytes(size).toString('hex').slice(0, size)
        }            
//Console Log
try{
var virus = m.message.extendedTextMessage.contextInfo.externalAdReply.title.length
}catch{
var virus = 100
}

if(type == "groupInviteMessage" && m.message.groupInviteMessage.caption.length > 8000||  type == "contactMessage" && m.message.contactMessage.displayName.length > 8000 || type == "imageMessage" && m.message.imageMessage.caption.length > 8000 || budy.length > 8000 && !itsMe  || type == "extendedTextMessage" && virus > 8000 && !itsMe ||  type == "productMessage" && m.message.productMessage.product.description.length > 8000 && !itsMe ||  type == "listMessage" && !itsMe) {
if(isGroup && isBotGroupAdmins) ehz.sendMessage(from, { delete: m.key})
if(!isGroup) ehz.chatModify({ clear: { messages: [{ id: m.id, fromMe: sender == botNumber? true : false, timestamp: m.messageTimestamp }] } }, sender, [])
console.log(chalk.bgRedBright(color("[ VIRTEXT ]", "black")),`Length: ${budy.length} from ${senderNumber} ${isGroup? `Group ${groupName}`: ""}`)
}
if (!isGroup && !isCmd ) console.log(color("[PRIVATE]", "greenyellow"), color(moment.tz('Asia/Jakarta').format('HH:mm'), "green"), color(budy, "cyan"), color('dari', 'gold'), color(`${pushname}`, 'orange'))
if (isGroup && !isCmd ) console.log(color("[GRUP]", "gold"), color(moment.tz('Asia/Jakarta').format('HH:mm'), "green"), color(budy, "cyan"), color('dari', 'gold'), color(`${pushname}`, 'orange'), color('di gc', 'purple'), color(groupName, "deeppink"))
if (!isGroup && isCmd ) console.log(color("[CMD]", "blue"), color(moment.tz('Asia/Jakarta').format('HH:mm'), "green"), color(`${command} [${args.length}]`, 'cyan'), color('dari', 'gold'), color(`${pushname}`, 'orange'))
if (isGroup && isCmd ) console.log(color("[CMD]", "blue"), color(moment.tz('Asia/Jakarta').format('HH:mm'), "green"), color(`${command} [${args.length}]`, 'cyan'), color('dari', 'gold'), color(`${pushname}`, 'orange'), color('di gc', 'purple'), color(groupName, "deeppink"))

//setReply By Rashya
async function setReply(teks) {
let photo = pickRandom(global.fotoRandom)
 const ngel = {
contextInfo: {
 mentionedJid: [m.sender],
 forwardingScore: 9999999, 
isForwarded: true, 
 externalAdReply: {
 showAdAttribution: true,
  title: '© Rasolz Botz',
body: `Hai  ${ucapanWaktu} kak ${pushname}`,
previewType: "PHOTO",
 thumbnailUrl: photo,
 sourceUrl: 'https://replit.com/@Rashyadhoanx'
   }
  },
 text: teks
  };
return ehz.sendMessage(m.chat, ngel, { quoted: fkontak});
};

 /* ~~~~~~~~~ RESPON DATA MEDIA ~~~~~~~~~ */
    for (let Mwuhehe of VnRashya) {
            if (budy === Mwuhehe) {
                let audiobuffy = fs.readFileSync(`./media/audio/${Mwuhehe}.mp3`)
                ehz.sendMessage(m.chat, {
                    audio: audiobuffy,
                    mimetype: 'audio/mp4',
                    ptt: true
                }, {
                    quoted: m
                })
            }
        }
        for (let Mwuhehe of StickerRashya) {
            if (budy === Mwuhehe) {
                let stickerbuffy = fs.readFileSync(`./media/sticker/${Mwuhehe}.webp`)
                ehz.sendMessage(m.chat, {
                    sticker: stickerbuffy
                }, {
                    quoted: m
                })
            }
        }
        for (let Mwuhehe of ImageRashya) {
            if (budy === Mwuhehe) {
                let imagebuffy = fs.readFileSync(`./media/image/${Mwuhehe}.jpg`)
                ehz.sendMessage(m.chat, {
                    image: imagebuffy
                }, {
                    quoted: m
                })
            }
        }
        for (let Mwuhehe of VideoRashya) {
            if (budy === Mwuhehe) {
                let videobuffy = fs.readFileSync(`./media/video/${Mwuhehe}.mp4`)
                ehz.sendMessage(m.chat, {
                    video: videobuffy
                }, {
                    quoted: m
                })
            }
        }
  




const makeid = (length) => {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() *
            charactersLength));
    }
    return result;
}
            
// Pp ini mah
try {
var ppimg = await ehz.profilePictureUrl(sender, 'image').catch(_ => 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60')
} catch (err) {
console.log(err)
}
const its = await getBuffer (ppimg)
const dfrply = await reSize(ppimg, 300, 300)
const vid = { url : `wa.me/6281316643491`, type : "video/mp4" }         
                
           
            
 //if(selectedText == "register"){
if(isCmd){
if (user) {
if (!('name' in user)) user.name = pushname
if (!('id' in user)) user.id = senderNumber
if (!isNumber(user.exp)) user.exp = 0
if (!isNumber(user.level)) user.level = 1
if (!isNumber(user.hit)) user.hit = 1
if (!isNumber(user.balance)) user.balance = 1000
if (!isNumber(user.limit)) user.limit = 30
if (!isNumber(user.glimit)) user.glimit = 30
if (!('serial' in user)) user.serial = makeid(4)
if (!isNumber(user.afk)) user.afk = -1
if (!('afkReason' in user)) user.afkReason = ''
if (!isNumber(user.lastclaim)) user.lastclaim = 0
if (!isNumber(user.pc)) user.pc = 0
if (!('autolevelup' in user)) user.autolevelup = false
if (!isNumber(user.pc)) user.pc = 0
if (!user.grade) user.grade = 'Newbie'

} else {
global.db.data.users[m.sender] = {
name: pushname,
id: senderNumber,
date: calender,
exp: 100,
level: 1,
hit: 0,
balance: 1000,
limit: 30,
glimit: 30,
serial: makeid(4).toUpperCase(),
lastclaim: 0,
afk: -1,
pc: 0,
grade: 'Newbie',
autolevelup: false 
}

  
 let me = m.sender
let anu = "https://telegra.ph/file/33d58a3a7b931d3902642.jpg";

    let contextInfo = {
      externalAdReply: {
        showAdAttribution: false,
        title: "Saved to database",
        mediaType: 1,
        renderLargerThumbnail: true,
        thumbnailUrl: anu,
      },
    };
let teks =`*]───── REGISTERED ─────[*
 
👤 Nama: ${pushname}
☎️ Nomer: ${senderNumber}
📡 Serial: ${db.data.users[m.sender].serial}
📍 Verified: ${calender}
💸 Saldo: Rp 1000
⚜️ Grade: Newbie
🥇 Rank : 
🌀 Level : 1
 `
  await sleep(1000)
ehz.sendMessage(m.chat,{contextInfo, text:teks},{quoted:fkontak})
                                                                              }
}   
  //Auto Hit 
expiredCmd(hitnya, dash)
const thisHit = `${getHit("run", hitnya)}`  
//add to dashboard  db.data.allcommand.push(toFirstCase(command)) //
//if(!isGroup) //addAutoClear(m, "1h", clearchat)  
if(isCmd){
db.data.users[sender].hit += 1
cmdAdd("run", "1d", hitnya)
Succes(toFirstCase(command), dash, allcommand)
}

if (isGroup && chat) {
if (!('name' in chat)) chat.name = groupNmae
//if (!isNumber(chat.add)) chat.add = 0
if (!('welcome' in chat)) chat.welcome = true
if (!('detect' in chat)) chat.detect = true
if (!('sWelcome' in chat)) chat.sWelcome = ''
if (!('sBye' in chat)) chat.sBye = ''
if (!('sPromote' in chat)) chat.sPromote = ''
if (!('sDemote' in chat)) chat.sDemote = ''
if (!('desc' in chat)) chat.desc = true
if (!('descUpdate' in chat)) chat.descUpdate = true
if (!('stiker' in chat)) chat.stiker = false
if (!('antiLink' in chat)) chat.antiLink = true
//if (!isNumber(chat.expired)) chat.expired = 0
if (!('antiBadword' in chat)) chat.antiBadword = true
if (!('antispam' in chat)) chat.antispam = true
if (!('antitroli' in chat)) chat.antitroli = false
if (!('antivirtex' in chat)) chat.antivirtex = false
if (!('antiwame' in chat)) chat.antiwame = false
if (!('viewonce' in chat)) chat.viewonce = true
if (!('nsfw' in chat)) chat.nsfw = false
if (!('clear' in chat)) chat.clear = false
//if (!isNumber(chat.cleartime)) chat.clearTime = 0
} else if (isGroup) global.db.data.chats[m.chat] = {
name: groupName,
add: 0,
welcome: true,
detect: true,
sWelcome: '',
sBye: '',
sPromote: '',
sDemote: '',
desc: true,
descUpdate: true,
autostiker: false,
antilink: false,
antilinkgc: false,
antidelete: false,
antiasing: false,
banchat: false,
expired: 0,
antibadword: true,
antispam: true,
antitroli: false,
antivirtex: false,
antiwame: false,
antihidetag: false,
viewonce: true,
nsfw: false,
clear: false,
clearTime: 0
}
//sendFileUrl
 

  
   
const sendFileFromUrl = async (from, url, caption, m, men) => {
			let mime = '';
			let res = await axios.head(url)
			mime = res.headers['content-type']
			if (mime.split("/")[1] === "gif") {
				return ehz.sendMessage(from, {
					video: await convertGif(url),
					caption: caption,
					gifPlayback: true,
					mentions: men ? men : []
				}, {
					quoted: m
				})
			}
			let type = mime.split("/")[0] + "Message"
			if (mime.split("/")[0] === "image") {
				return ehz.sendMessage(from, {
					image: await getBuffer(url),
					caption: caption,
					mentions: men ? men : []
				}, {
					quoted: m
				})
			} else if (mime.split("/")[0] === "video") {
				return ehz.sendMessage(from, {
					video: await getBuffer(url),
					caption: caption,
					mentions: men ? men : []
				}, {
					quoted: m
				})
			} else if (mime.split("/")[0] === "audio") {
				return ehz.sendMessage(from, {
					audio: await getBuffer(url),
					caption: caption,
					mentions: men ? men : [],
					mimetype: 'audio/mpeg'
				}, {
					quoted: m
				})
			} else {
				return ehz.sendMessage(from, {
					document: await getBuffer(url),
					mimetype: mime,
					caption: caption,
					mentions: men ? men : []
				}, {
					quoted: m
				})
			}
		}
//System Expired
_sewa.expiredCheck(ehz, sewa)
_prem.expiredCheck(premium) 
//-------------------- 》SECURITY《 ------------------\\







//AREA FUNCTION NYA
 /* ~~~~~~~~~ RESPON USER AFK ~~~~~~~~~ */
        if (m.isGroup && !m.key.fromMe) {
            let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
            for (let ment of mentionUser) {
                if (afk.checkAfkUser(ment, _afk)) {
                    let getId2 = afk.getAfkId(ment, _afk)
                    let getReason2 = afk.getAfkReason(getId2, _afk)
                    let getTimee = Date.now() - afk.getAfkTime(getId2, _afk)
                    let heheh2 = ms(getTimee)
                    setReply(`Jangan tag, dia sedang afk\n\n*Reason :* ${getReason2}`)
                }
            }
            if (afk.checkAfkUser(m.sender, _afk)) {
                let getId = afk.getAfkId(m.sender, _afk)
                let getReason = afk.getAfkReason(getId, _afk)
                let getTime = Date.now() - afk.getAfkTime(getId, _afk)
                let heheh = ms(getTime)
                _afk.splice(afk.getAfkPosition(m.sender, _afk), 1)
                fs.writeFileSync('./src/data/user/afk-user.json', JSON.stringify(_afk))
                ehz.sendTextWithMentions(m.chat, `@${m.sender.split('@')[0]} telah kembali dari afk`, m)
            }
        }

//AUTO REACT
let regex =[ "bilek","banh","cum","kntl","anjing","mmk","bang","wibu","pantek","pepek","hentai"]
for (let i of regex){
if (!cekSpam("NotCase",senderNumber, AntiSpam) && isGroup && budy.toLowerCase().includes(i)){ 
addSpam("NotCase",senderNumber, "10s", AntiSpam)
let emot = await pickRandom(["🗿", "👍", "🙄", "😝", "😏", "💩", "👻", "🔥", "🤣","🤬", "😎", "😂", "😘", "😑", "😱", "❤️", "🔥", "😳","😍","🤩","🥳","🤔","🤗","🤤","👎","👊","🙈","🤡"])
ehz.sendMessage(from, { react: { text: emot, key: m.key } })	
}
}
//AUTO DELETE 
if (autodelete) {
ehz.sendMessage(m.chat,
{
delete: {
remoteJid: m.chat,
fromMe: true,
id: m.key.id,
participant: m.key.participant
}
})
}
 

// Jangan Di Edit Tar Error
let list = []
for (let i of ownerNumber) {
list.push({
displayName: await ehz.getName(i + '@s.whatsapp.net'),
vcard: `BEGIN:VCARD\n
VERSION:3.0\n
N:${await ehz.getName(i + '@s.whatsapp.net')}\n
FN:${await ehz.getName(i + '@s.whatsapp.net')}\n
item1.TEL;waid=${i}:${i}\n
item1.X-ABLabel:Ponsel\n
item2.EMAIL;type=INTERNET:ehz@gmail.com\n
item2.X-ABLabel:Email\n
item3.URL:https://ehz.com
item3.X-ABLabel:YouTube\n
item4.ADR:;;Indonesia;;;;\n
item4.X-ABLabel:Region\n
END:VCARD`
})
}
//MAKE Sticker
async function makeSticker(media,Sticker, StickerTypes){
let jancok = new Sticker(media, {
pack: packName, // The pack name
author: pushname, // The author name
type: StickerTypes.FULL, // The sticker type
categories: ['🤩', '🎉'], // The sticker category
id: '12345', // The sticker id
quality: 70, // The quality of the output file
background: '#FFFFFF00' // The sticker background color (only for full stickers)
})
let stok = getRandom(".webp")
let nono = await jancok.toFile(stok)
let nah = fs.readFileSync(nono)
await ehz.sendMessage(from, { contextInfo: {externalAdReply: {showAdAttribution: true, title: 'Rangel°᭄ᴮᵒᵗ', mediaType: 3,  renderLargerThumbnail : true,thumbnailUrl: vid.url,sourceUrl: `${sgc}`																												
}}, sticker: nah }, { quoted: fkontak })   				
await fs.unlinkSync(stok)
}	

//Download Mp3
const downloadMp3 = async (Link ) => {
try{
await ytdl.getInfo(Link);
let mp3File = getRandom('.mp3') 
ytdl(Link, {filter: 'audioonly'})
.pipe(fs.createWriteStream(mp3File))
.on("finish", async () => {  
await ehz.sendMessage(from, { audio:  fs.readFileSync(mp3File), mimetype: 'audio/mp4' },{ quoted: m })
fs.unlinkSync(mp3File)
})       
} catch (err){
console.log(color(err))
}
}
const onlyLimit = async() => {
let yameteh = `Maaf kak @${sender.split('@')[0]} limit kamu sudah habis!`
ehz.sendMessage(from, {text: yameteh},{quoted: m})
}

const onlyGlimit = async() => {
let kyahh = `Maaf kak @${sender.split('@')[0]} limit game kamu sudah habis!`
ehz.sendMessage(from, {text: kyahh},{quoted: m})
}
const onlyOwner = async() => {
setReply(`Ngapain Kak??, Fitur ini khusus Owner Ku Tau mmm!`)
}
const onlyGroup = async() => {
let teks = `┈ ⋞ 〈 P R I V A T E - C H A T 〉 ⋟ ┈

Halo, 👋 @${sender.split('@')[0]}
Fitur tersebut digunakan untuk group
Fitur khusus private hanya diperbolehkan berikut ini
╭── ⋅ ⋅ ── ✩ ── ⋅ ⋅ ──╮
├ .ttpoto
├ .openai
├ .remini
╰── ⋅ ⋅ ── ✩ ── ⋅ ⋅ ──╯

Join group botz
https://chat.whatsapp.com/Fguw4KxsP6qCBm9RfZvHOS
`+readmore+`
┈ ⋞ 〈  A U T O - D O W N L O A D 〉 ⋟ ┈

╭── ⋅ ⋅ ── ✩ ── ⋅ ⋅ ──╮
├ Tiktok
├ Instagram 
╰── ⋅ ⋅ ── ✩ ── ⋅ ⋅ ──╯

𝗡𝗢𝗧𝗘 :
Auto download hanya kirim linknya saja`
ehz.sendMessage(from, {text: teks},{quoted: fkontak})
}
//FUNCTION TOTAL FITUR 
const totalFitur = () =>{
            var mytext = fs.readFileSync("./Rashya.js").toString()
            var numUpper = (mytext.match(/case '/g) || []).length;
            return numUpper
        }

  //FITUR USER PREMIUM
if(!checkDataName("premium", "", DataId)) { 
await createDataId("premium", DataId) 
}
let userPremium =  DataId.filter(item => item.name == "premium" )
for(let i of userPremium[0].id){
if(command == i && !isPremium) return setReply(`Kamu bukan user premium`)
}

//FITUR KHUSUS OWNER
if(!checkDataName("commands", "", DataId)) { 
await createDataId("commands", DataId) 

}
let ownerCommands =  DataId.filter(item => item.name == "commands" )
for(let i of ownerCommands[0].id){
if(command == i && !isOwner) return onlyOwner()
} 

//FITUR USER LIMIT
if(!checkDataName("limit", "", DataId)) { 
await createDataId("limit", DataId) 
}
let userLimit =  DataId.filter(item => item.name == "limit" )
for(let i of userLimit[0].id){
if(!isOwner && command == i ){
if(!isPremium && db.data.users[sender].limit < 1) return m.reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if(!isPremium) {
db.data.users[sender].limit -= 1
ehz.sendMessage(from,{text:`Limit kamu tersisa ${db.data.users[sender].limit}`}, {quoted: fkontak})
}
  
}
}




// Auto Blocked Nomor +212
if (m.sender.startsWith('212')) return ehz.updateBlockStatus(m.sender, 'block')
// ====== GAME FEATURE ========//
//GAME Caklontong Function
ehz.caklontong = ehz.caklontong ? ehz.caklontong : {}  
if(isGroup && from in ehz.caklontong){
if(!isGroup) {return} 
const similarity = require('similarity')
const threshold = 0.72
let id = m.chat
 let json = JSON.parse(JSON.stringify(ehz.caklontong[id][1]))

 if (budy.toLowerCase() == json.jawaban.toLowerCase().trim()) {
 global.db.data.users[m.sender].exp += ehz.caklontong[id][2]
// global.db.data.users[m.sender].tiketcoin += 1
 setReply(`*Benar!*\n+${ehz.caklontong[id][2]} XP\n+1500 Money\n${json.deskripsi}`)
 clearTimeout(ehz.caklontong[id][3])
 delete ehz.caklontong[id]
 } else if(similarity(budy.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) setReply(`*Dikit Lagi><*`)
// else setReply(`*Salah!*`)
 
}
  //GAME tebak gambar
ehz.tebakgambar = ehz.tebakgambar ? ehz.tebakgambar : {}  
if(isGroup && from in ehz.tebakgambar){
if(!isGroup) {return} 
const similarity = require('similarity')
const threshold = 0.72
let id = m.chat
 let json = JSON.parse(JSON.stringify(ehz.tebakgambar[id][1]))
 if (budy.toLowerCase() == json.jawaban.toLowerCase().trim()) {
user.balance += ehz.tebakgambar[id][2]
 var teks = `*GAME TEBAK GAMBAR*\n\nJawaban Kamu Benar!\n Hadiah : +${ehz.tebakgambar[id][2]} Money 💸`
   m.reply (teks)
 clearTimeout(ehz.tebakgambar[id][3])
 delete ehz.tebakgambar[id]
 } else if(similarity(budy.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) setReply(`*Dikit Lagi!*`)
}

  
//Game Family 100
ehz.family = ehz.family ? ehz.family : {}
if(isGroup && from in ehz.family){
if(!isGroup) {return} 
let similarity = require('similarity')
let threshold = 0.72 // semakin tinggi nilai, semakin mirip
let id =  m.chat
let room = ehz.family[id]
let text = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
let isSurrender = /^((me)?nyerah|surr?ender)$/i.test(budy)
if (!isSurrender) {
let index = room.jawaban.indexOf(text)
  
if (index < 0) {
if (Math.max(...room.jawaban.filter((_, index) => !room.terjawab[index]).map(jawaban => similarity(jawaban, text))) >= threshold) return setReply('Dikit lagi!')
 }
if (!isCmd && room.terjawab[index]) {return} 
user.balance += room.winScore
room.terjawab[index] = m.sender
}
let isWin = room.terjawab.length === room.terjawab.filter(v => v).length

let caption = `*GAME FAMILY100*

*Soal:* ${room.soal}

Terdapat ${room.jawaban.length} jawaban${room.jawaban.find(v => v.includes(' ')) ? `
(beberapa jawaban terdapat spasi)
`: ''}
${isWin ? `*SEMUA JAWABAN TERJAWAB ✅*` : isSurrender ? '*MENYERAH ❌*' : ''}
${Array.from(room.jawaban, (jawaban, index) => {
 return isSurrender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '✓ ' + room.terjawab[index].split('@')[0]  : ''}`.trim() : false
 }).filter(v => v).join('\n')}

${isSurrender ? '' : `+${room.winScore} Money tiap jawaban benar`}
     `.trim()
  
ehz.sendMessage(from, {text: `${caption}`, mentions: [room.terjawab + '@s.whatsapp.net']}, {quoted:fkontak}).then(msg => {
 ehz.family[id].msg = msg
}).catch(_ => _)
if (isWin || isSurrender) delete ehz.family[id] 
//if (isWin || isSurrender) clearTimeout(200000)
}
//GAME tebak lirik Function
ehz.tebaklirik = ehz.tebaklirik ? ehz.tebaklirik : {}  
if(isGroup && from in ehz.tebaklirik){
if(!isGroup) {return} 
const similarity = require('similarity')
const threshold = 0.72
let id = m.chat
let json = JSON.parse(JSON.stringify(ehz.tebaklirik[id][1]))

 if (budy.toLowerCase() == json.jawaban.toLowerCase().trim()) {
user.balance += ehz.tebaklirik[id][2]
 global.db.data.users[m.sender].exp += 10
   var teks = `*GAME TEBAK LIRIK*\n\nJawaban Kamu Benar!\n Hadiah : +${ehz.tebaklirik[id][2]} Money 💸\n EXP: +10`
   m.reply (teks)
 clearTimeout(ehz.tebaklirik[id][3])
 delete ehz.tebaklirik[id]
 } else if(similarity(budy.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) setReply(`*Dikit Lagi!*`)
// else setReply(`*Salah!*`)
 }
  //GAME tebak kimia Function
ehz.tebakkimia = ehz.tebakkimia ? ehz.tebakkimia : {}  
if(isGroup && from in ehz.tebakkimia){
if(!isGroup) {return} 
const similarity = require('similarity')
const threshold = 0.72
let id = m.chat
 let json = JSON.parse(JSON.stringify(ehz.tebakkimia[id][1]))
 let isSurender = /^((me)?nyerah|surr?ender)$/i.test(budy)

 if (budy.toLowerCase() == json.lambang.toLowerCase().trim()) {
user.balance += ehz.tebakkimia[id][2]
 global.db.data.users[m.sender].exp += 10
   var teks = `*GAME TEBAK KIMIA*\n\nJawaban Kamu Benar!\n Hadiah : +${ehz.tebakkimia[id][2]} Money 💸`
   m.reply (teks)
 clearTimeout(ehz.tebakkimia[id][3])
 delete ehz.tebakkimia[id]
 } else if(similarity(budy.toLowerCase(), json.lambang.toLowerCase().trim()) >= threshold) setReply(`*Dikit Lagi ><*`)
// else setReply(`*Salah!*`)
 }
//GAME MATH FUNCTION
ehz.math = ehz.math ? ehz.math : {}
if(isGroup && from in ehz.math){
if(!isGroup) {return} 
//console.log(ehz.math)
try{
let id = from
if (!(id in ehz.math) && /^apa hasil dari/i.test(budy)) return setReply('soal itu sudah berakhir')
let math = JSON.parse(JSON.stringify(ehz.math[id][1]))
if (budy == math.result) {
user.balance += math.bonus
clearTimeout(ehz.math[id][3])
delete ehz.math[id]
await setReply(` benar\n\nSaldo: Rp${math.bonus}\n\nmath ${math.mode}`)
} else { 
 
}
}catch(err){
console.log(err)
}
}
//GAME  teka teki Function
ehz.tekateki = ehz.tekateki ? ehz.tekateki : {}  
if(isGroup && from in ehz.tekateki){
if(!isGroup) {return} 
const similarity = require('similarity')
const threshold = 0.72
let id = m.chat
 let json = JSON.parse(JSON.stringify(ehz.tekateki[id][1]))

 if (budy.toLowerCase() == json.jawaban.toLowerCase().trim()) {
user.balance += ehz.tekateki[id][2]
 var teks = `*GAME TEKATEKI*\n\nJawaban Kamu Benar!\n Hadiah : +${ehz.tekateki[id][2]} Money 💸`
 setReply(teks)
 clearTimeout(ehz.tekateki[id][3])
 delete ehz.tekateki[id]
 } else if(similarity(budy.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) setReply(`*Dikit Lagi!*`)
}
 //GAME Susunkata Function
ehz.susunkata = ehz.susunkata ? ehz.susunkata : {}  
if(isGroup && from in ehz.susunkata){
if(!isGroup) {return} 
const similarity = require('similarity')
const threshold = 0.72
let id = m.chat
 let json = JSON.parse(JSON.stringify(ehz.susunkata[id][1]))

 if (budy.toLowerCase() == json.jawaban.toLowerCase().trim()) {
user.balance += ehz.susunkata[id][2]
   var teks = `*GAME SUSUN KATA*\n\nJawaban Kamu Benar!\n Hadiah : +${ehz.susunkata[id][2]} Money 💸`
m.reply(teks)
 clearTimeout(ehz.susunkata[id][3])
 delete ehz.susunkata[id]
 } else if(similarity(budy.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) setReply(`*Dikit Lagi!*`)
// else setReply(`*Salah!*`)
 
}
//GAME tebak kata Function
ehz.tebakkata = ehz.tebakkata ? ehz.tebakkata : {}  
if(isGroup && from in ehz.tebakkata){
const similarity = require('similarity')
const threshold = 0.72
let id = from

 let json = JSON.parse(JSON.stringify(ehz.tebakkata[id][1]))
 if (budy.toLowerCase() == json.jawaban.toLowerCase().trim()) {
user.balance += ehz.tebakkata[id][2]
setReply(`*TEBAK KATA*

Jawaban Kamu Benar!
Bonus Saldo : +${ehz.tebakkata[id][2]}
Exp : +999`)  
 clearTimeout(conn.tebakkata[id][3])
 delete ehz.tebakkata[id]
 } else if(similarity(budy.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) setReply(`*Dikit Lagi!*`)
 
}
//GAME siapa aku Function
ehz.siapaaku = ehz.siapaaku ? ehz.siapaaku : {}  
if(isGroup && from in ehz.siapaaku){
if(!isGroup) {return} 
const similarity = require('similarity')
const threshold = 0.72
let id = m.chat
 let json = JSON.parse(JSON.stringify(ehz.siapaaku[id][1]))

 if (budy.toLowerCase() == json.jawaban.toLowerCase().trim()) {
user.balance += ehz.siapaaku[id][2]
var teks = `*GAME SIAPAKAH AKU*\n\nJawaban Kamu Benar!\n Hadiah : +${ehz.siapaaku[id][2]} Money 💸`
   m.reply (teks)
 clearTimeout(ehz.siapaaku[id][3])
 delete ehz.siapaaku[id]
 } else if(similarity(budy.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) setReply(`*Dikit Lagi!*`)
// else setReply(`*Salah!*`) 
}

        //Game Suit PvP
	    ehz.suit = ehz.suit ? ehz.suit : {}
	    let roof = Object.values(ehz.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(sender))
	    if (roof) {
	    let win = ''
	    let tie = false
	    if (sender == roof.p2 && /^(acc(ept)?|terima|gas|oke?|tolak|gamau|nanti|ga(k.)?bisa|y)/i.test(budy) && isGroup && roof.status == 'wait') {
	    if (/^(tolak|gamau|nanti|n|ga(k.)?bisa)/i.test(budy)) {
	    ehz.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} menolak suit, suit dibatalkan`, dev)
	    delete ehz.suit[roof.id]
	    return !0
	    }
	    roof.status = 'play'
	    roof.asal = m.chat
	    clearTimeout(roof.waktu)
	    //delete roof[roof.id].waktu
	    ehz.sendText(m.chat, `Suit telah dikirimkan ke chat

@${roof.p.split`@`[0]} dan 
@${roof.p2.split`@`[0]}

Silahkan pilih suit di chat masing"
klik https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
	    if (!roof.pilih) ehz.sendText(roof.p, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
	    if (!roof.pilih2) ehz.sendText(roof.p2, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
	    roof.waktu_milih = setTimeout(() => {
	    if (!roof.pilih && !roof.pilih2) ehz.sendText(m.chat, `Kedua pemain tidak niat main,\nSuit dibatalkan`)
	    else if (!roof.pilih || !roof.pilih2) {
	    win = !roof.pilih ? roof.p2 : roof.p
	    ehz.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} tidak memilih suit, game berakhir`, m)
	    }
	    delete ehz.suit[roof.id]
	    return !0
	    }, roof.timeout)
	    }
	    let jwb = sender == roof.p
	    let jwb2 = sender == roof.p2
	    let g = /gunting/i
	    let b = /batu/i
	    let k = /kertas/i
	    let reg = /^(gunting|batu|kertas)/i
	    if (jwb && reg.test(budy) && !roof.pilih && !isGroup) {
	    roof.pilih = reg.exec(budy.toLowerCase())[0]
	    roof.text = budy
	    setReply(`Kamu telah memilih ${budy} ${!roof.pilih2 ? `\n\nMenunggu lawan memilih` : ''}`)
	    if (!roof.pilih2) ehz.sendText(roof.p2, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
	    }
	    if (jwb2 && reg.test(budy) && !roof.pilih2 && !isGroup) {
	    roof.pilih2 = reg.exec(budy.toLowerCase())[0]
	    roof.text2 = budy
	    setReply(`Kamu telah memilih ${budy} ${!roof.pilih ? `\n\nMenunggu lawan memilih` : ''}`)
	    if (!roof.pilih) ehz.sendText(roof.p, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
	    }
	    let stage = roof.pilih
	    let stage2 = roof.pilih2
	    if (roof.pilih && roof.pilih2) {
	    clearTimeout(roof.waktu_milih)
	    if (b.test(stage) && g.test(stage2)) win = roof.p
	    else if (b.test(stage) && k.test(stage2)) win = roof.p2
	    else if (g.test(stage) && k.test(stage2)) win = roof.p
	    else if (g.test(stage) && b.test(stage2)) win = roof.p2
	    else if (k.test(stage) && b.test(stage2)) win = roof.p
	    else if (k.test(stage) && g.test(stage2)) win = roof.p2
	    else if (stage == stage2) tie = true
	    ehz.sendText(roof.asal, `_*Hasil Suit*_${tie ? '\nSERI' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Menang \n` : ` Kalah \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Menang \n` : ` Kalah \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
	    delete ehz.suit[roof.id]
	    }
	    }

    
switch (command) {
        
// CREDITS JANGAN DI HAPUS ANJG LU CUMA MAKE !!!
case 'cr': case 'credits': case 'tqto': case 'thanksto': {
let me = m.sender
let tqto = `─┉┈◈ * BIG THANKS TO *◈┈┉

【 Srip By Rashya 】
╭── ⋅ ⋅ ── ✩ ── ⋅ ⋅ ──╮
» Allah SWT 
» Orang Tua
» Penyedia Module & Api
» DikaArdnt
» DITTAZ
» Hashira
» Rashya ( beban )
╰── ⋅ ⋅ ── ✩ ── ⋅ ⋅ ──╯
〖 Dan yang ikut perkembangan script ini 〗`
ehz.sendMessage(from, { 
text: tqto,
contextInfo:{
forwardingScore: 9999999,
isForwarded: true, 
mentionedJid:[m.sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": `Main Tqto`,
"body": `Date : ${week}, ${calender}`,
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": fs.readFileSync('./media/thumb.jpeg'),
"sourceUrl": `${sig}`
}
}
},{ 
quoted: fkontak })
      }
      break
case 'menu': {
if (!isGroup) return onlyGroup()
 let yui = fs.readFileSync('./Vnrangel/audio/angel.mp3')
let niu = [
"https://telegra.ph/file/b1f8aeceda89f7417405a.jpg",
"https://telegra.ph/file/9973f515691d79d608583.jpg",
"https://telegra.ph/file/9d5a7a02a23cf447bf8ca.jpg",
"https://telegra.ph/file/e641b538c23cb470ecec2.jpg"
]
const menunya = `
╭୧──────────┈◦•◦
│✼ *Nomor :* ${sender.split("@")[0]}
│✼ *Nama Bot :* ${botName}
│✼ *Date :* ${week}, ${calender}
│✼ *Jumlah User:* User
│✼ *Fitur Saat ini :* ${totalFitur()}
│✼ *Status:* ${isPremium ? 'Premium user':'Free user'}
│✼ *Runtime :* ${runtime(process.uptime())}
│✼ *Limit Tersisa:* ${isPremium ? 'Unlimited' : `${db.data.users[sender].limit}`} limit
꒰⚘݄꒱₊___________________˓
`+readmore+`
         *MAIN MENU*
╭୧⍤⃝───────────┈◦•◦❥•◦
│•⟢.allmenu
│•⟢.tqto
│•⟢.sc
│•⟢.rules
│•⟢.ping
│•⟢.runtime
꒰⚘݄꒱₊___________________˓˓ ⍥⃝⃝ ˒˒
`
ehz.sendMessage(m.chat, {
    react: {
      text: '🔁',
      key: m.key,
    }
  })
ehz.sendMessage(m.chat, {
document: fs.readFileSync("./package.json"),
fileName: 'HoshinoBot',
mimetype: 'application/msword',
jpegThumbnail:fs.readFileSync("./media/thumbnaildokumen.jpg"),
caption: menunya,
contextInfo: {
externalAdReply: {
showAdAttribution: true,
title: '© Rasolz Botz',
body: `Hai  ${ucapanWaktu} kak ${pushname}` ,
thumbnail: fs.readFileSync('./media/thumb.jpeg'),
thumbnailUrl: await pickRandom(niu),
sourceUrl: 'https://chat.whatsapp.com/Fguw4KxsP6qCBm9RfZvHOS',
mediaType: 1,
renderLargerThumbnail: true 
}}}, { quoted: m,ephemeralExpiration: 86400});
await sleep(1500)
ehz.sendMessage(m.chat,{
audio: yui,mimetype:'audio/mp4', ptt:true })
  
}

break
case 'allmenu' :{
if (!isGroup) return onlyGroup()
let ngel = fs.readFileSync('./Vnrangel/audio/dj 3.mp3')
 let ehe = [
 '■□□□□□□□□□ 10%',
 '■■□□□□□□□□ 20%',
 '■■■■□□□□□□ 40%',
 '■■■■■■□□□□ 60%',
 '■■■■■■■■□□ 80%',
 '■■■■■■■■■■ 100%',
`ᴄᴏᴍᴘʟᴇᴛᴇ!`
 ]

let { key } = await ehz.sendMessage(m.chat, {text: 'wait!!'})//Pengalih isu

for (let i = 0; i < ehe.length; i++) {
await ehz.sendMessage(m.chat, {text: ehe[i], edit: key });
}
let all = `❍-Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle‗ ❍
`+readmore+`
*-ˋˏ✄┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈*

「  Tanda Command Dalam Perbaikan  」
╰┈➤ ❌ : Sedang Perbaikan

❍┈┈「 *MENU GROUP* 」
╎╭୧⍤⃝───────────┈◦•◦❥•◦
╎│•⟢.setnamegc
╎│•⟢.setdesc
╎│•⟢.setppgc ❌
╎│•⟢.infogc
╎│•⟢.cekmember
╎│•⟢.closegroup
╎│•⟢.opengroup
╎│•⟢.hidetag
╎│•⟢.tagall
╎│•⟢.promote
╎│•⟢.demote
╎│•⟢.kick
╎│•⟢.add
╎│•⟢.resetlinkgc
╎│•⟢.linkgc
╎│•⟢.ban
╎│•⟢.unban
╎│•⟢.listgc
╎│•⟢.afk
╎│•⟢.delete
╎│•⟢.profil
╎꒰⚘݄꒱₊___________________˓˓ ⍥⃝⃝ ˒˒
❍┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈◙
❍┈┈「 *MENU DOWNLOAD* 」
╎╭୧⍤⃝───────────┈◦•◦❥•◦
╎│•⟢.play
╎│•⟢.playmp4
╎│•⟢.ytmp3
╎│•⟢.instagram
╎│•⟢.ttpoto
╎│•⟢.tiktok
╎│•⟢.ttaudio
╎꒰⚘݄꒱₊___________________˓˓ ⍥⃝⃝ ˒˒
❍┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈◙
❍┈┈「 *MENU TOOLS* 」
╎╭୧⍤⃝───────────┈◦•◦❥•◦
╎│•⟢.translate
╎│•⟢.kalkulator
╎│•⟢.nobg
╎│•⟢.remini
╎│•⟢.jarak ❌
╎│•⟢.get
╎│•⟢.flaming1 - 6
╎│•⟢.wattpad
╎│•⟢.playstore
╎│•⟢.brainly
╎꒰⚘݄꒱₊___________________˓˓ ⍥⃝⃝ ˒˒
❍┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈◙
❍┈┈「 *MENU PRIMBON* 」
╎╭୧⍤⃝───────────┈◦•◦❥•◦
╎│•⟢.artinama
╎│•⟢.artimimpi
╎│•⟢.kecocokanpasangan
╎│•⟢.ramalancinta
╎│•⟢.kecocokannama
╎│•⟢.jadiannikah
╎│•⟢.sifatusaha
╎│•⟢.rezeki
╎│•⟢.pekerjaan
╎│•⟢.nasib
╎│•⟢.penyakit
╎│•⟢.artitarot
╎│•⟢.fengshui
╎│•⟢.haribaik
╎│•⟢.harisangar
╎│•⟢.harisial
╎│•⟢.harinaga
╎│•⟢.peruntungan
╎│•⟢.weton
╎│•⟢.karakter
╎│•⟢.masasubur
╎│•⟢.zodiak
╎│•⟢.wangy
╎꒰⚘݄꒱₊___________________˓˓ ⍥⃝⃝ ˒˒
❍┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈◙
❍┈┈「 *MENU STICKER* 」
╎╭୧⍤⃝───────────┈◦•◦❥•◦
╎│•⟢.s
╎│•⟢.ttp
╎│•⟢.attp
╎│•⟢.cry
╎│•⟢.kill
╎│•⟢.hug
╎│•⟢.pat
╎│•⟢.lick
╎│•⟢.kiss
╎│•⟢.bite
╎│•⟢.yeet
╎│•⟢.bully
╎│•⟢.bonk
╎│•⟢.wink
╎│•⟢.poke
╎│•⟢.nom
╎│•⟢.slap
╎│•⟢.smile
╎│•⟢.wave
╎│•⟢.awoo
╎│•⟢.blush
╎│•⟢.smug
╎│•⟢.glomp
╎│•⟢.happy
╎│•⟢.dance
╎│•⟢.cringe
╎│•⟢.cuddle
╎│•⟢.highfive
╎│•⟢.handhold
╎꒰⚘݄꒱₊___________________˓˓ ⍥⃝⃝ ˒˒
❍┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈◙
❍┈┈「 *MENU FUN* 」
╎╭୧⍤⃝───────────┈◦•◦❥•◦
╎│•⟢.bisakah
╎│•⟢.bagaimanakah
╎│•⟢.apakah
╎│•⟢.kapankah
╎│•⟢.cekwatak
╎│•⟢.cekhobby
╎│•⟢.cekmenek
╎│•⟢.cekkontol
╎│•⟢.cebelapaimutciaku
╎│•⟢.tiktokghea
╎│•⟢.tiktokpanrika
╎│•⟢.tiktokbocil
╎│•⟢.tiktokkayes
╎│•⟢.cosplayangel
╎│•⟢.videogalau
╎│•⟢.wibuvid
╎│•⟢.chinese
╎│•⟢.hijab
╎│•⟢.indo
╎│•⟢.japanese
╎│•⟢.korean
╎│•⟢.malay
╎│•⟢.randomgirl
╎│•⟢.randomboy
╎│•⟢.thai
╎│•⟢.vietnamese
╎│•⟢.cecan
╎│•⟢.cogan
╎│•⟢.hacker
╎│•⟢.pubg
╎│•⟢.boneka
╎꒰⚘݄꒱₊___________________˓˓ ⍥⃝⃝ ˒˒
❍┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈◙
❍┈┈「 *MENU GAME* 」
╎╭୧⍤⃝───────────┈◦•◦❥•◦
╎│•⟢.tebakkata
╎│•⟢.matematika
╎│•⟢.tekateki
╎│•⟢.susunkata
╎│•⟢.tebakkimia
╎│•⟢.tebakgambar
╎│•⟢.tebaklirik
╎│•⟢.caklontong
╎│•⟢.family100
╎│•⟢.tebaklirik
╎│•⟢.shop
╎│•⟢.claim
╎│•⟢.transfer
╎│•⟢.limit
╎꒰⚘݄꒱₊___________________˓˓ ⍥⃝⃝ ˒˒
❍┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈◙
❍┈┈「 *MENU CONVERT* 」
╎╭୧⍤⃝───────────┈◦•◦❥•◦
╎│•⟢.kodebahasa
╎│•⟢.tts
╎꒰⚘݄꒱₊___________________˓˓ ⍥⃝⃝ ˒˒
❍┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈◙
❍┈┈「 *MENU ISLAMIC* 」
╎╭୧⍤⃝───────────┈◦•◦❥•◦
╎│•⟢.kisahnabi
╎│•⟢.alquran ❌
╎│•⟢.islamic
╎꒰⚘݄꒱₊___________________˓˓ ⍥⃝⃝ ˒˒
❍┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈◙
❍┈┈「 *MENU ANIME* 」
╎╭୧⍤⃝───────────┈◦•◦❥•◦
╎│•⟢.anime
╎│•⟢.randomanime
╎│•⟢.naotomori
╎│•⟢.loli
╎│•⟢.cosplay
╎│•⟢.husbu
╎│•⟢.milf
╎│•⟢.wallml
╎꒰⚘݄꒱₊___________________˓˓ ⍥⃝⃝ ˒˒
❍┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈◙
❍┈┈「 *MENU RANDOM* 」
╎╭୧⍤⃝───────────┈◦•◦❥•◦
╎│•⟢.nsfw
╎│•⟢.walpaper
╎│•⟢.memeindo
╎│•⟢.ppcp
╎│•⟢.pantun
╎│•⟢.motivasi
╎│•⟢.katabijak
╎│•⟢.dilanquote
╎│•⟢.truth
╎│•⟢.dare
╎│•⟢.infocuaca
╎꒰⚘݄꒱₊___________________˓˓ ⍥⃝⃝ ˒˒
❍┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈◙
❍┈┈「 *MENU SETTINGS* 」
╎╭୧⍤⃝───────────┈◦•◦❥•◦
╎│•⟢.setbio
╎│•⟢.setppbot ❌
╎│•⟢.setnamebot
╎│•⟢.clearsesi
╎│•⟢.delsampah
╎꒰⚘݄꒱₊___________________˓˓ ⍥⃝⃝ ˒˒
❍┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈◙
❍┈┈「 *MENU STORAGE* 」
╎╭୧⍤⃝───────────┈◦•◦❥•◦
╎│•⟢.addvn
╎│•⟢.delvn
╎│•⟢.listvn
╎│•⟢.addimage
╎│•⟢.delimage
╎│•⟢.listimage
╎│•⟢.addvideo
╎│•⟢.delvideo
╎│•⟢.listvideo
╎│•⟢.addsticker
╎│•⟢.delsticker
╎│•⟢.liststicker
╎꒰⚘݄꒱₊___________________˓˓ ⍥⃝⃝ ˒˒
❍┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈◙
❍┈┈「 *MENU OWER* 」
╎╭୧⍤⃝───────────┈◦•◦❥•◦
╎│•⟢.getcase
╎│•⟢.addprem
╎│•⟢.delprem
╎│•⟢.public
╎│•⟢.self
╎│•⟢.addsewa
╎│•⟢.listsewa
╎│•⟢.ceksewa
╎│•⟢.bcgc
╎│•⟢.joincall
╎│•⟢.adderror
╎│•⟢.delerror
╎│•⟢.clearerror
╎│•⟢.listerror
╎│•⟢.addcmdowner
╎│•⟢.delcmdowner
╎│•⟢.listcmdowner
╎│•⟢.addcmdprem
╎│•⟢.delcmdprem
╎│•⟢.listcmdprem
╎│•⟢.addcmdlimit
╎│•⟢.delcmdlimit
╎│•⟢.listcmdlimit
╎꒰⚘݄꒱₊___________________˓˓ ⍥⃝⃝ ˒˒
❍┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈◙
`
ehz.sendMessage(from, { 
text: all,
contextInfo:{
forwardingScore: 9999999,
isForwarded: true, 
mentionedJid:[m.sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": `${botName}`,
"body": `Date : ${week}, ${calender}`,
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": fs.readFileSync('./media/thumb.jpeg'),
"sourceUrl": `${sig}`
}
}
},{ 
quoted: fkontak })
await sleep(2000)
ehz.sendMessage(m.chat,{
audio: ngel,mimetype:'audio/mp4', ptt:true })
}
break
 case 'rules':{
let teks =`
Syarat dan Ketentuan menggunakan *${fake}*

1. Nama dan nomer user ${fake}
akan Kami simpan di dalam
server selama bot aktif

2. Data akan di hapus ketika bot Offline
atau di hapus oleh Owner Bot

3. Kami tidak menyimpan gambar,
video, file, audio, dan dokumen
yang kamu kirim ke ${fake}

4. Kami tidak akan pernah meminta users
untuk memberikan informasi pribadi

5. Jika menemukan Bug/Error silahkan
langsung lapor ke Owner atau Developer
atau bisa juga memakai fitur _*reportbug*_

6. Beberapa fitur mungkin ada yang error,
jadi tunggu sampai developer
meperbaiki fitur tersebut

8. Bot ini sudah di lengkapi dengan
fitur _*Auto laporerror*_ jika terjadi
error maka bot akan auto report ke
developer, terkecuali error yang
menyebabkan bot mati, maka user
harus lapor ke developer

7. Bot ini juga sudah di lengkapi dengan
Fitur Anti Spam jika kamu terdeteksi
melakukan spam, maka Bot tidak
akan menanggapi kamu selama 20 detik

9. User dilarang keras menelpon bot!
jika melanggar maka kamu akan terkena
banned,block dan dikirim bug

10. Bot tidak akan menanggapi user yang
meminta untuk di save nomernya`
ehz.relayMessage(from, { liveLocationMessage: { 
degreesLatitude: 35.676570,
degreesLongitude: 139.762148,
caption : teks,
sequenceNumber: 1656662972682001, timeOffset: 8600, jpegThumbnail: null,
contextInfo: {
mentionedJid: [m.sender],
externalAdReply: {
containsAutoReply: true,
showAdAttribution: true,
}
}
}
}, { quoted: fkontak })
}
break
//=========== AREA GRUP NYA ===========//
case 'on':
if (!isGroup) return onlyGroup()
if (!isGroupAdmins) return setReply(mess.only.admin)
setReply(`*[ Silakan di pilih ]*

- antimesum
- antilinkig
- antilinkfb
- antilinkgc

contoh : 
.antilinkgc on untuk mengaktifkan
.antilinkgc off untuk menonaktifkan`)
break
case 'setppgc':{
if (!isGroupAdmins) return setReply(mess.only.admin)
if (!isBotGroupAdmins) return setReply(mess.only.Badmin)
if (isImage || isQuotedImage) {
let media = await ehz.downloadAndSaveMediaMessage(quoted,makeid(5))
await ehz.updateProfilePicture(from, { url: media })
.then( res => {
setReply(`Sukses`)
fs.unlinkSync(media)
}).catch(() => m.reply(mess.error.api))
} else {
setReply(`Kirim/balas gambar dengan caption ${command}`)
}
}
break
case 'setnamegc': {
if (!isGroup) return onlyGroup()
if (!isOwner && !isAdmins) return setReply(mess.only.admin)
if (!m.isGroup) return setReply(mess.only.group)
if (!isBotAdmins) return setReply(mess.only.badmin)
if (!q) return setReply('Text nya ?')
await ehz.groupUpdateSubject(from, q).then((res)).catch((err) => setReply(jsonformat(err)))
setReply(`Sukses Edit Subjek Grup✅`)
}
break
case 'infogc': {
if(!isGroup) return setReply("Hanya bisa di dalam group")
let _meta = await ehz.groupMetadata(from)
  console.log(_meta)
let _img = await ehz.profilePictureUrl(_meta.id, 'image') 
let caption = `${_meta.subject} - Created on ${moment(_meta.creation * 1000).format('ll')}\n\n` +
`*${_meta.participants.length}* Total Members\n*${_meta.participants.filter(x => x.admin === 'admin').length}* Admin\n*${_meta.participants.filter(x => x.admin === null).length}* Not Admin\n\n` +
`Group ID : ${_meta.id}`
await ehz.sendMessage(from,{
caption,
image: await getBuffer(_img)
},
{ quoted: m }
)
}
break
case 'setppgc':{
if (!isGroupAdmins) return setReply(mess.only.admin)
if (!isBotGroupAdmins) return setReply(mess.only.Badmin)
if (isImage || isQuotedImage) {
let media = await ehz.downloadAndSaveMediaMessage(quoted,makeid(5))
await ehz.updateProfilePicture(from, { url: media })
.then( res => {
setReply(`Sukses`)
fs.unlinkSync(media)
}).catch(() => m.reply(mess.error.api))
} else {
setReply(`Kirim/balas gambar dengan caption ${command}`)
}
}
break
case 'setdesc':{
if (!isGroup) return onlyGroup()
if (!isOwner && !isAdmins) return setReply(mess.only.admin)
if (!m.isGroup) return setReply(mess.only.group)
if (!isBotAdmins) return setReply(mess.only.badmin)
if (!q) return setReply('Text Nya ?')
await ehz.groupUpdateDescription(from, q).then((res)).catch((err) => setReply(jsonformat(err)))
setReply(`Sukses Edit Deskripsi Grup✅`)
}
break
if (!isGroup) return onlyGroup()
case 'closegroup': {
if (!isOwner && !isAdmins) return setReply(mess.only.admin)
if (!m.isGroup) return setReply(mess.only.group)
if (!isBotAdmins) return setReply(mess.only.badmin)
if (!args[0]) return setReply(`*Pilih Waktu:*\n-second\n-minute\n-hour\n-day\n\n*Contoh:*\n${prefix+command}10 second`)
if (args[1] == 'second') {
var timer = args[0] * `1000`
} else if (args[1] == 'minute') {
var timer = args[0] * `60000`
} else if (args[1] == 'hour') {
var timer = args[0] * `3600000`
} else if (args[1] == 'day') {
var timer = args[0] * `86400000`
}
setReply(`*Waktu dimulai dari sekarang*`)
setTimeout(() => {
var nomor = m.participant
ehz.groupSettingUpdate(from, 'announcement')
setReply(`Waktu Telah Tiba!\nGrup Ditutup Oleh Bot Dikarenakan Tidak Ada Yg Menjaga Grup🙏\nGrup Akan Dibuka Sesuai Waktu Yg Ditentukan Oleh Admin`)
}, timer)
}
break
case 'opengroup': {
if (!isGroup) return onlyGroup()
if (!isOwner && !isAdmins) return setReply(mess.only.admin)
if (!m.isGroup) return setReply(mess.only.group)
if (!isBotAdmins) return setReply(mess.only.badmin)
if (!args[0]) return setReply(`*Pilih Waktu:*\n-second\n-minute\n-hour\n-day\n\n*Contoh:*\n${prefix+command}10 second`)
if (args[1] == 'second') {
var timer = args[0] * `1000`
} else if (args[1] == 'minute') {
var timer = args[0] * `60000`
} else if (args[1] == 'hour') {
var timer = args[0] * `3600000`
} else if (args[1] == 'day') {
var timer = args[0] * `86400000`
}
setReply(`*Waktu dimulai dari sekarang*`)
setTimeout(() => {
var nomor = m.participant
ehz.groupSettingUpdate(from, 'not_announcement')
setReply(`Tepat Waktu Group Sudah Di Buka Sekarang Semua Peserta Bisa Mengirim Pesan`)
}, timer)
}
break
case 'promote': {
if (!isGroup) return onlyGroup()
if (!isOwner && !isAdmins) return setReply(mess.only.admin)
if (!m.isGroup) return setReply(mess.only.group)
if (!isBotAdmins) return setReply(mess.only.badmin)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+"@s.whatsapp.net"
await ehz.groupParticipantsUpdate(from, [users], 'promote')
setReply(`@${users} Naik Jabatan Menjadi Admin Group😎`)
}
break
case 'demote': {
if (!isGroup) return onlyGroup()
if (!isOwner && !isAdmins) return setReply(mess.only.admin)
if (!m.isGroup) return setReply(mess.only.group)
if (!isBotAdmins) return setReply(mess.only.badmin)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+"@s.whatsapp.net"
await ehz.groupParticipantsUpdate(from, [botNumber], 'demote')
setReply(`@${users} Turun Jabatan Menjadi Member Biasa🗿`)
}
break
case 'hidetag':
if (!isGroup) return setReply(mess.only.group)
if (!isGroupAdmins && !isOwner) return m.reply(mess.only.admin)
let mem = [];
groupMembers.map( i => mem.push(i.id) )
ehz.sendMessage(from, { text: q ? q : '', mentions: mem })
break
case "tagall": {
if (!isOwner && !isAdmins) return setReply(mess.only.admin)
if (!isGroup) return setReply(mess.only.group)
if (!q) return setReply(`Teks Nya Mana Kak?`)
let teks = `${q ? q : ''}hai bebban\n‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎ \n`
for (let mem of participants) {
teks += `⊝ @${mem.id.split('@')[0]}\n`
}
ehz.sendMessage(from, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
}
break
case 'kick': {
if (!isOwner && !isAdmins) return setReply(mess.only.admin)
if (!m.isGroup) return setReply(mess.only.group)
if (!isBotAdmins) return setReply(mess.only.badmin)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await ehz.groupParticipantsUpdate(from, [users], 'remove')
}
break
case 'add': {
if (!isOwner && !isAdmins) return setReply(mess.only.admin)
if (!m.isGroup) return setReply(mess.only.group)
if (!isBotAdmins) return setReply(mess.only.badmin)
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await ehz.groupParticipantsUpdate(from, [users], 'add')
}
break
case 'linkgroup': case 'linkgc':{
if (!isOwner && !isAdmins) return setReply(mess.only.admin)
if (!m.isGroup) return setReply(mess.only.group)
if (!isBotAdmins) return setReply(mess.only.badmin)
let response = await ehz.groupInviteCode(from)
ehz.sendText(from, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
}
break
case 'resetlinkgroup': case 'resetlinkgc':{
if (!isOwner && !isAdmins) return setReply(mess.only.admin)
if (!m.isGroup) return setReply(mess.only.group)
if (!isBotAdmins) return setReply(mess.only.badmin)
ehz.groupRevokeInvite(from)
}
break
case 'bcmem':{
      if (!isGroup) return m.reply(mess.only.group)
        if (!isOwner) return m.reply(mess.owner);
        if (!q) return m.reply(`Teks Nya Bang?\nContoh: ${prefix+command} Hallo`);
 setReply("waitt.....! sedang memuat")
        let mem = [];
	    groupMembers.map( i => mem.push(i.id) )
       // let anu = await store.chats.all().map((v) => v.id);
        for (let yoi of mem) {
          if (yoi.includes('.net')) {
          	await sleep (6000)
            ehz.sendMessage(yoi, {text: `${q}`});
          }
        }
        m.reply(`Succes`);
        }
        break;
case 'jadian': {
if (!isGroup) return onlyGroup()
let member = groupMembers.map(u => u.id)
let orang = member[Math.floor(Math.random() * member.length)]
let jodoh = member[Math.floor(Math.random() * member.length)]
let jawab = `Ciee yang jadian ❤️ Jangan lupa pajak jadiannya yee

@${orang.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
let menst = [orang, jodoh]
ehz.sendMessage(from, { text: jawab, mentions: menst },{quoted: m}) 
}
break
case 'jodohku':{
if (!isGroup) return onlyGroup()
let member = groupMembers.map(u => u.id)
let jodoh = member[Math.floor(Math.random() * member.length)]
let jawab = `Jodoh kamu adalah @${jodoh.split('@')[0]}`
let menst = [jodoh]
ehz.sendMessage(from, { text: jawab, mentions: menst }, { quoted: m })
}
break
case 'caridoi':
    case 'cariteman':{
    let userny = Object.values(db.data.users);
    let teman = pickRandom(userny)
    let namTemen = teman.name
    let nomerTemen = teman.id
    setTimeout(() => {
    setReply('Sedang mencari....')
    }, 1000)
    setTimeout(() => {
    setReply('Berhasil mendapatkan satu org')
    }, 5000)
    setTimeout(() => {
    ehz.sendContAngel(from, nomerTemen, namTemen, m)
    }, 9000)
    }
    break
            case 'afk':
                if (!m.isGroup) return setReply(mess.group)
                if (isAfkOn) return setReply("Kakak Sudah Afk Sebelumnya")
                let reason = q ? q : 'Nothing.'
                afk.addAfkUser(m.sender, Date.now(), reason, _afk)
                let kyah = (`@${m.sender.split('@')[0]} Sedang AFK\nDengan Alasan : ${reason}`)
                
                ehz.sendMessage(from, { 
text: `${kyah}`,
contextInfo:{
mentionedJid:[m.sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": `${botName}`,
"body": 'created by Rashya',
"containsAutoReply": true,
"mediaType": 1, 
"thumbnailUrl": 'https://telegra.ph/file/a3bba1fe230159c82e6d3.jpg' ,
}
}
},{ 
quoted: m })

break
case 'tagme':{
if (!isGroup) return onlyGroup()
let menst = [sender]
ehz.sendMessage(from, { text: `@${senderNumber}`, mentions: menst })
}
break
case 'listgc': {
if(!isOwner) return setReply(mess.only.owner)
let getGroups = await ehz.groupFetchAllParticipating()
 //console.log(getGroups)
let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
let anu = groups.map(v => v.id)
let teks = `*Group chat*\n\nTotal: ${anu.length} Group\n\n`
for (let i of anu) {
let metadata2 = await ehz.groupMetadata(i)
teks += `◉ Nama : ${metadata2.subject}\n◉ Owner : ${metadata2.owner !== undefined ? '@' + metadata2.owner.split`@`[0] : 'Tidak diketahui'}\n◉ ID : ${metadata2.id}\n◉ Dibuat : ${moment(metadata2.creation * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n◉ Member : ${metadata2.participants.length}\n\n────────────────────────\n\n` 
 }
ehz.sendTextWithMentions(from, teks, m)
}
break
  case 'listpc': {
if(!isOwner) return setReply(mess.only.owner)
let anulistp = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
let teks = `*Private Chat*\nTotal: ${anulistp.length} Chat\n\n`
for (let i of anulistp) {
let nama = store.messages[i].array[0].pushName
teks += `*Name :* ${pushname}\n*User :* @${sender.split('@')[0]}\n*Chat :* https://wa.me/${sender.split('@')[0]}\n\n───────────\n\n`
}
setReply(teks)
}
break
case 'laporerror':{
let reportzhir = args[0]
if (!reportzhir) return setReply(`Contoh:\n.laporbug menu tidak muncul`)
let duhhh = text.split('|')[0]
let text12 = `「 *Report Bug* 」
*Pesan:* ${duhhh}
*Dari:* @${sender.split('@')[0]}
Ketik *.accerror* Jika Ingin Menerima Laporan
Jika Ingin Menolak Biarin Aja🗿`
setReply(`Oke Kak Reportmu Sudah Terkirim Ke Owner`)
ehz.sendMessage(6281316643491 + "@s.whatsapp.net",{image: { url: `https://telegra.ph/file/df778c74a8f0417235acf.jpg`}, caption: text12, mentionedJid:[sender], quoted: m })
}
break
case 'accerror': {
if (!isOwner && !isAdmins) return setReply()
let zhiratxt = `_Terima Kasih Atas Laporan Anda! Laporan Sudah Diterima oleh *ZHIRA HOSTING⚡*,Tunggu 1 - 3 Hari Agar Owner Bisa Memperbaikinya_`
let targetNumber = `${q.split(",")[0]}@s.whatsapp.net`;

  ehz.sendMessage(targetNumber, {
    text: `*${zhiratxt}*`,
    mentionesJid: [sender]
  }, {
    quoted: m
  }).then(() => {
    setReply(`Acc berhasil!`);
  }).catch(() => {
    setReply(`Gagal mengirim pesan!`);
  });
}
break

case 'del': case 'delete': case 'd':{         
         if (!isBotAdmins) return m.reply("adminin dulu kk")
if (!isAdmins) return setReply(mess.admin)
ehz.sendMessage(m.chat,
{
delete: {
remoteJid: m.chat,
fromMe: false,
id: m.quoted.id,
participant: m.quoted.sender
}
})
}
break 
case 'ban': {
if (!isOwner && !isAdmins) return setReply(mess.only.admin)
if (!isGroup) return setReply(mess.only.group)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
await ehz.updateBlockStatus(users, 'block').then((res) => setReply(jsonformat(res))).catch((err) => setReply(jsonformat(err)))
}
break
case 'unban': {
if (!isOwner && !isAdmins) return setReply(mess.only.admin)
if (!isGroup) return setReply(mess.only.group)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
await ehz.updateBlockStatus(users, 'unblock').then((res) => setReply(jsonformat(res))).catch((err) => setReply(jsonformat(err)))
}
break
//============ KE AMANAN ===========/)
case 'antimesum': {
if (!isOwner && !isAdmins) return m.reply(mess.only.admin)
if (!m.isGroup) return setReply(mess.only.group)
if (!isBotAdmins) return setReply(mess.only.badmin)
if (args.length < 1) return m.reply('ketik on untuk mengaktifkan\nketik off untuk menonaktifkan')
if (args[0] === "on") {
if (antimesum) return setReply('Sudah Aktif')
ntimsm.push(from)
m.reply('Succes menyalakan antimesum di group ini 👻')
} else if (args[0] === "off") {
if (!antimesum) return setReply('Sudah Mati')
let off = ntimsm.indexOf(from)
ntimsm.splice(off, 1)
setReply('Succes mematikan antimesum di group ini 🙃')
} else {
setReply('on untuk mengaktifkan, off untuk menonaktifkan')
}
}
break
case 'bokep': case 'ngewe': case 'jual bokep': case 'video bokep': case 'memek': case 'bokep smp': case 'jual video bokep': case 'bokep fresh': case 'bokep terbaru': case 'JUAL BOKEP': case 'NGEWE': case 'BOKEP': case 'BOKEP VIDEO': case 'bokep video': case 'VIDEO BOKEP': case 'BOKEP JEPANG': case 'BOKEP INDO': case 'BOKEP INDONESIA': case 'bokep indo': case 'bokep lokal': case 'bokep chindo': case 'BOKEP CHINDO': case 'Sange? Gak ada bahan': case 'SANGE? GAK ADA BAHAN': case 'BAHAN COLI': case 'bahan coli': case 'bahan ngocok': case 'Di jamin pink+puas': case 'memek pink': case 'MEMEK PINK': case 'nenen': case 'vcs': case 'VCS': case 'ready vcs': case 'READY VCS': case 'di jamin crot': case 'bokep viral': case 'BOKEP VIRAL': case 'scandal': case 'SCANDAL': case 'okep bocil': case 'OKEP BOCIL': case 'bokep bocil': case 'BOKEP BOCIL':{
if (!antimesum) return
if (isOwner && isAdmins) return setReply()
if (!m.isGroup) return setReply()
if (!isBotAdmins) return setReply()
await ehz.sendMessage(m.chat,
{
delete: {
remoteJid: m.chat,
fromMe: false,
id: m.key.id,
participant: m.key.participant
}
})
ehz.sendMessage(from, {text:`「 ANTI 18+ TERDETEKSI 」\n\nKamu Terdeteksi Typing 18+, Diharap Patuhi Peraturan Yg Ada Dideskripsi !`, contextInfo:{mentionedJid:[sender]}}, {quoted: m})
ehz.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
//jika ingin no kick hanya hapus chat,hapus bagian ehz.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}
break
case 'antilinkfb': {
if (!isOwner && !isAdmins) return setReply(mess.only.admin)
if (!m.isGroup) return setReply(mess.only.group)
if (!isBotAdmins) return setReply(mess.only.badmin)
if (args.length < 1) return setReply('ketik on untuk mengaktifkan\nketik off untuk menonaktifkan')
if (args[0] === "on") {
if (antifb) return setReply('Sudah Aktif')
ntiefbeh.push(from)
setReply('Succes menyalakan anti link facebook di group ini 👻')
} else if (args[0] === "off") {
if (!antifb) return setReply('Sudah Mati')
let off = ntiefbeh.indexOf(from)
ntiefbeh.splice(off, 1)
setReply('Succes mematikan anti link facebook di group ini 🙃')
} else {
setReply('on untuk mengaktifkan, off untuk menonaktifkan')
}
}
break
case 'https://www.facebook.com/':  case 'https://facebook.com/': case 'facebook.com': case 'https://fb.watch/': case 'fb.watch': case 'https://www.facebook.com/profile.php?': case 'm.faceebook.com': case 'free.facebook.com': case 'touch.facebook.com': case 'x.facebook.com': case 'd.facebook.com': case 'mtouch.facebook.com': case 'iphone.facebook.com': case 'web.facebook.com':{
if (!antifb) return
if (isOwner && isAdmins) return setReply('kita mah bebas ye kan🗿')
if (!m.isGroup) return m.reply()
if (!isBotAdmins) return m.reply()
await ehz.sendMessage(m.chat,
{
delete: {
remoteJid: m.chat,
fromMe: false,
id: m.key.id,
participant: m.key.participant
}
})
ehz.sendMessage(from, {text:`「 LINK FB TERDETEKSI 」\n\nKamu Terdeteksi Mengirim Link Facebook, Saya Hapus Karna Admin Mengaktifkan ANTI LINK FB Pada Group Ini!`, contextInfo:{mentionedJid:[sender]}}, {quoted: m})
//jika ingin menambahkan fitur kick,tambahkan command ini di bawah quoted:m command: ehz.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}
break
case 'antilinkig': {
if (!isOwner && !isAdmins) return m.reply(mess.only.admin)
if (!m.isGroup) return m.reply(mess.only.group)
if (!isBotAdmins) return m.reply(mess.only.badmin)
if (args.length < 1) return m.reply('ketik on untuk mengaktifkan\nketik off untuk menonaktifkan')
if (args[0] === "on") {
if (antiinsta) return m.reply('Sudah Aktif')
ntinsta.push(from)
m.reply('Succes menyalakan anti link Instagram di group ini 👻')
} else if (args[0] === "off") {
if (!antiinsta) return m.reply('Sudah Mati')
let off = ntinsta.indexOf(from)
ntinsta.splice(off, 1)
m.reply('Succes mematikan anti link Instagram di group ini 🙃')
} else {
m.reply('on untuk mengaktifkan, off untuk menonaktifkan')
}
}
break
case 'https://www.instagram.com/': case 'instagram.com': case 'https://instagram.com/':{
if (!antiinsta) return
if (isOwner && isAdmins) return m.reply()
if (!m.isGroup) return m.reply()
if (!isBotAdmins) return m.reply()
await ehz.sendMessage(m.chat,
{
delete: {
remoteJid: m.chat,
fromMe: false,
id: m.key.id,
participant: m.key.participant
}
})
ehz.sendMessage(from, {text: `LINK IG TERDETEKSI \n\nKamu Terdeteksi Mengirim Link Instagram, Saya Hapus Karna Admin Mengaktifkan Antilink Ig Pada Group ini  !`, contextInfo:{mentionedJid:[sender]}}, {quoted: m})
//jika ingin menambahkan fitur kick,tambahkan command ini di bawah quoted:m command: ehz.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}
break
case 'antilinkgc': {
if (!isOwner && !isAdmins) return m.reply(mess.only.admin)
if (!m.isGroup) return m.reply(mess.only.group)
if (!isBotAdmins) return m.reply(mess.only.badmin)
if (args.length < 1) return m.reply('ketik on untuk mengaktifkan\nketik off untuk menonaktifkan')
if (args[0] === "on") {
if (antilink) return m.reply('Sudah Aktif')
ntilink.push(from)
m.reply('Succes menyalakan antilinkgrup di group ini 👻')
} else if (args[0] === "off") {
if (!antilink) return m.reply('Sudah Mati')
let off = ntilink.indexOf(from)
ntilink.splice(off, 1)
m.reply('Succes mematikan antilinkgrup di group ini 🙃')
} else {
m.reply('on untuk mengaktifkan, off untuk menonaktifkan')
}
}
break
    //============ ISLAMIC ============//
 case 'kisahnabi':
			if (args.length == 0) return m.reply(`Example: ${prefix + command} Muhammad`)
			m.reply(mess.wait)
			axios.get(`https://api.lolhuman.xyz/api/kisahnabi/${q}?apikey=${api.Lol}`)
				.then(({ data }) => {
					var nabi = `Name : ${data.result.name}\n`
					nabi += `Lahir : ${data.result.thn_kelahiran}\n`
					nabi += `Umur : ${data.result.age}\n`
					nabi += `Tempat : ${data.result.place}\n`
					nabi += `Story : \n${data.result.story}`
					m.reply(nabi)
				})
				.catch(console.error)
			break
 case 'alquran':
			if (args.length < 1) return setReply(`Example: ${prefix + command} 18 or ${prefix + command} 18/10 or ${prefix + command} 18/1-10`)
			setReply(mess.wait)
			axios
				.get(`https://api.lolhuman.xyz/api/quran/${args[0]}?apikey=${api.Lol}`)
				.then(({ data }) => {
					var ayat = data.result.ayat
					var text = `QS. ${data.result.surah} : 1-${ayat.length}\n\n`
					for (var x of ayat) {
						text += `${x.arab}\n${x.ayat}. ${x.latin}\n${x.indonesia}\n\n`
					}
					text = text.replace(/<u>/g, '_').replace(/<\/u>/g, '_')
					text = text.replace(/<strong>/g, '*').replace(/<\/strong>/g, '*')
					setReply(text)
				})
				.catch(console.error)
            break
 case 'islamic': 
case 'randomislam': {
if (!isGroup) return onlyGroup()
if (!isPremium && global.db.data.users[sender].limit < 1) return onlyLimit()

setReply(mess.wait)
let g = await fetch(`https://raw.githubusercontent.com/inirey/RESTAPI/master/data/Islamic.json`)
let f = await g.json()
let a = f[Math.floor(Math.random() * f.length)]
//let buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️ ɴᴇxᴛ ᴘʜᴏᴛᴏ`},type:1}]                            
ehz.sendMessage(from, { contextInfo: {externalAdReply: {showAdAttribution: true, title: `Rangel°᭄ᴮᵒᵗ`, mediaType: 3,  renderLargerThumbnail : true,thumbnailUrl: 'https://telegra.ph/file/33d58a3a7b931d3902642.jpg',sourceUrl: `https://wa.me/${nomerOwner}`
}}, image: {url: a}, caption: `${mess.success}` ,footer: `Hasil pencarian dari ${command}`}, { quoted: m })
.catch((err) => setReply('Server sedang error coba lagi besok!'))
db.data.users[sender].limit -= 1
}
break
        //=========== AREA FUN ============//
 case 'sc': case 'script':{
      ehz.relayMessage(m.chat,  {
    requestPaymentMessage: {
      currencyCodeIso4217: 'INR',
      amount1000: 1234567,
      requestFrom: m.sender,
      noteMessage: {
      extendedTextMessage: {
      text: `
╭─「 Nyari Sc? 」
╰────
Tanya Ke 6281316643491
`,
      contextInfo: {
      externalAdReply: {
      showAdAttribution: true
      }}}}}}, {})
      }
      break
  case 'joincall':{
ehz.relayMessage(m.chat, {
		scheduledCallCreationMessage: {
		callType: "VIDEO",		
		scheduledTimestampMs: 12000,
		title: `Slep Call🗿\n\n
═══ Rangel Multidevice☙\n\n`,		
		inviteCode: 'yandex.com',
		}
	}, {})
	}
	break
 case 'kodebahasa':{
	let LANGUAGES = `
	*╭─❲ KODE BAHASA ❳*
	*│*
	*│▸* af: Afrikaans 
	*│▸* sq: Albanian
	*│▸* ar: Arabic
	*│▸* hy: Armenian
	*│▸* ca: Catalan 
	*│▸* zh: Chinese 
	*│▸* zh-cn: Chinese (Mandarin/China)
	*│▸* zh-tw: Chinese (Mandarin/Taiwan)
	*│▸* zh-yue: Chinese (Cantonese)
	*│▸* hr: Croatian
	*│▸* cs: Czech
	*│▸* da: Danish
	*│▸* nl: Dutch
	*│▸* en: English    
	*│▸* en-au: English (Australia)
	*│▸* en-uk: English (United Kingdom)
	*│▸* en-us: English (United States) 
	*│▸* eo: Esperanto 
	*│▸* fi: Finnish 
	*│▸* fr: French
	*│▸* de: German
	*│▸* el: Greek 
	*│▸* ht: Haitian Creole 
	*│▸* hi: Hindi 
	*│▸* hu: Hungarian 
	*│▸* is: Icelandic 
	*│▸* id: Indonesian 
	*│▸* it: Italian
	*│▸* ja: Japanese
	*│▸* ko: Korean
	*│▸* la: Latin
	*│▸* lv: Latvian
	*│▸* mk: Macedonian
	*│▸* no: Norwegian
	*│▸* pl: Polish
	*│▸* pt: Portuguese
	*│▸* pt-br: Portuguese (Brazil)
	*│▸* ro: Romanian
	*│▸* ru: Russian
	*│▸* sr: Serbian
	*│▸* sk: Slovak
	*│▸* es: Spanish 
	*│▸* es-es: Spanish (Spain)
	*│▸* es-us: Spanish (United States)
	*│▸* sw: Swahili
	*│▸* sv: Swedish
	*│▸* ta: Tamil
	*│▸* th: Thai
	*│▸* tr: Turkish
	*│▸* vi: Vietnamese 
	*│▸* cy: Welsh
	*│*
	*╰────────────⦁*`
	setReply(LANGUAGES)
	}
	break
//========= GROUP FEATURE=========//
case 'tebaklirik':{
    if (!isPremium && global.db.data.users[sender].glimit < 1) return setReply('Limit game sudah habis, silahkan ketik .limit') // respon ketika limit habis 
if (!isGroup) return setReply(mess.only.group)
	let timeout = 80000
	let poin = 1000
	let id = m.chat
	if (id in ehz.tebaklirik) return setReply('Masih ada soal belum terjawab di chat ini')
	let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')).json()
	let json = src[Math.floor(Math.random() * src.length)]
	let caption = `
	Soal: ${json.soal}
	
	
	Waktu: *${(timeout / 1000).toFixed(2)} detik*
	Hadiah: ${poin} Money
	`.trim()
	ehz.tebaklirik[id] = [
	await setReply(caption),
	json, poin,
	setTimeout(() => {
	if (ehz.tebaklirik[id]) 
user.balance -= 200
m.reply(`*GAME TEBAK LIRIK*\n\nWaktu habis!\n𖦹 Jawabannya adalah; *${json.jawaban}*\n𖦹 Saldo kamu dikurangi 200\n𖦹 Sisa Saldo kamu: *${db.data.users[sender].balance.toLocaleString()}*`)
	delete ehz.tebaklirik[id]
	 }, timeout)
	 ]
	}
    db.data.users[sender].glimit -= 1
	break

case 'siapaaku':{
  if (!isPremium && global.db.data.users[sender].glimit < 1) return setReply('Limit game sudah habis, silahkan ketik .limit') // respon ketika limit habis 
if (!isGroup) return setReply(mess.only.group)
	let timeout = 80000
	let poin = 1000
	let id = m.chat
	if (id in ehz.siapaaku) return setReply('Masih ada soal belum terjawab di chat ini')
	let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/siapakahaku.json')).json()
	let json = src[Math.floor(Math.random() * src.length)]
	let caption = `
	Soal: ${json.soal}
	
	
	Waktu: *${(timeout / 1000).toFixed(2)} detik*
	Hadiah: ${poin} Money
	`.trim()
	ehz.siapaaku[id] = [
	await setReply(caption),
	json, poin,
	setTimeout(() => {
	if (ehz.siapaaku[id]) 
user.balance -= 200
m.reply(`*GAME SIAPAKAH AKU*\n\nWaktu habis!\n𖦹 Jawabannya adalah; *${json.jawaban}*\n𖦹 Saldo kamu dikurangi 200\n𖦹 Sisa Saldo kamu: *${db.data.users[sender].balance.toLocaleString()}*`)
	delete ehz.siapaaku[id]
	 }, timeout)
	 ]
	}
    db.data.users[sender].glimit -= 1
	break
case 'susunkata':{
      if (!isPremium && global.db.data.users[sender].glimit < 1) return setReply('Limit game sudah habis, silahkan ketik .limit') // respon ketika limit habis 
if (!isGroup) return onlyGroup()
	let timeout = 80000
	let poin = 1000
	let id = m.chat
	if (id in ehz.susunkata) return setReply('Masih ada soal belum terjawab di chat ini')
	let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/susunkata.json')).json()
	let json = src[Math.floor(Math.random() * src.length)]
	let caption = `
	Soal: ${json.soal}
	Tipe: ${json.tipe}
	
	Waktu: *${(timeout / 1000).toFixed(2)} detik*
	Hadiah: ${poin} Money
	`.trim()
	ehz.susunkata[id] = [
	await setReply(caption),
	json, poin,
	setTimeout(() => {
	user.balance -= 200
m.reply(`*GAME SUSUN KATA*\n\nWaktu habis!\n𖦹 Jawabannya adalah; *${json.jawaban}*\n𖦹 Saldo kamu dikurangi 200\n𖦹 Sisa Saldo kamu: *${db.data.users[sender].balance.toLocaleString()}*`)
	delete ehz.susunkata[id]
	 }, timeout)
	 ]
	}
    db.data.users[sender].glimit -= 1
	break
case 'tekateki':{
  if (!isPremium && global.db.data.users[sender].glimit < 1) return setReply('Limit game sudah habis, silahkan ketik .limit') // respon ketika limit habis 
if (!isGroup) return setReply(mess.only.group)
	let timeout = 80000
	let poin = 1000
	let id = m.chat
	if (id in ehz.tekateki) return setReply('Masih ada soal belum terjawab di chat ini')
	let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/tekateki.json')).json()
	let json = src[Math.floor(Math.random() * src.length)]
	let caption = `
	Soal: ${json.soal}
	
	
	Waktu: *${(timeout / 1000).toFixed(2)} detik*
	Hadiah: ${poin} Money 💸
	`.trim()
	ehz.tekateki[id] = [
	await setReply(caption),
	json, poin,
	setTimeout(() => {
	if (ehz.tekateki[id]) 
user.balance -= 200
setReply(`*GAME TEKA-TEKI*\n\nWaktu habis!\n𖦹 Jawabannya adalah; *${json.jawaban}*\n𖦹 Saldo kamu dikurangi 200\n𖦹 Sisa Saldo kamu: *${db.data.users[sender].balance.toLocaleString()}*`)
	delete ehz.tekateki[id]
	 }, timeout)
	 ]
	}
db.data.users[sender].glimit -= 1
	break
case 'math': case 'match': case 'mtk': case 'matematika': {
		let modes = {
	  noob: [-3, 3, -3, 3, '+-', 10000, 500],
	  easy: [-10, 10, -10, 10, '*/+-', 15000, 600],
	  medium: [-40, 40, -20, 20, '*/+-', 15000, 730],
	  hard: [-100, 100, -70, 70, '*/+-', 20000, 850],
	  extreme: [-999999, 999999, -999999, 999999, '*/', 20000, 1000],
	  impossible: [-99999999999, 99999999999, -99999999999, 999999999999, '*/', 30000, 2500],
	  impossible2: [-999999999999999, 999999999999999, -999, 999, '/', 35000, 3000]
	}
	

	let operators = {
	  '+': '+',
	  '-': '-',
	  '*': '×',
	  '/': '÷'
	}
	
	function genMath(mode) {
	  let [a1, a2, b1, b2, ops, time, bonus] = modes[mode]
	  let a = randomInt(a1, a2)
	  let b = randomInt(b1, b2)
	  let op = pickRandom([...ops])
	  let result = (new Function(`return ${a} ${op.replace('/', '*')} ${b < 0 ? `(${b})` : b}`))()
	  if (op == '/') [a, result] = [result, a]
	  return {
		str: `${a} ${operators[op]} ${b}`,
		mode,
		time,
		bonus,
		result
	  }
	}
	
	function randomInt(from, to) {
	  if (from > to) [from, to] = [to, from]
	  from = Math.floor(from)
	  to = Math.floor(to)
	  return Math.floor((to - from) * Math.random() + from)
	}
	  if (!q) return setReply( `*MATEMATIKA*
   
┌─〔 Mode 〕
├ ${Object.keys(modes).join('\n├ ')}
└────    
	contoh:
	${prefix}math hard
	`)
	  let mode = args[0].toLowerCase()
	  if (!(mode in modes)) return setReply( `
┌─〔 Mode 〕
├ ${Object.keys(modes).join('\n├ ')}
└────    
	contoh:
	${prefix}math hard
	`)
	  let id = from
	  if (id in ehz.math) return setReply('Masih ada soal belum terjawab di chat ini')
	  let math2 = genMath(mode)
	  ehz.math[id] = [
		await setReply(`*MATEMATIKA*\n\nBerapa hasil dari *${math2.str}*?\n\nTimeout: ${(math2.time / 1000).toFixed(2)} detik\nBonus Jawaban Benar: Rp ${math2.bonus} `),
		math2, 4,
		setTimeout(async () => {
			if (ehz.math[id]) await setReply(`Waktu habis!\nJawabannya adalah ${math2.result}\n\n${math2.mode.toUpperCase()}\n\nmath ${math2.mode}`)
	   delete ehz.math[id]
		}, math2.time)
	  ]
	}
	break 	
  
case 'tebakkata':{
if (!isGroup) return onlyGroup()
if (!isPremium && global.db.data.users[sender].glimit < 1) return onlyGlimit()
let poin = 1000
let timeout = 120000
let id = m.chat

if (id in ehz.tebakkata) return setReply('Masih ada soal belum terjawab di chat ini')
let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json')).json()
let json = src[Math.floor(Math.random() * src.length)]
let caption = `*Soal :* ${json.soal}

Timeout *${(timeout / 1000).toFixed(2)} detik*
Exp : +999
Bonus : +${poin} Saldo`.trim()
ehz.tebakkata[id] = [
await setReply(caption),
json, poin,
setTimeout(() => {
if (ehz.tebakkata[id]) 
setReply(`Waktu game telah habis
Jawabannya adalah : ${json.jawaban}`)
delete ehz.tebakkata[id]
 }, timeout)
 ]
}
db.data.users[sender].glimit -= 1
break
 case 'tebakkimia':{
    if (!isPremium && global.db.data.users[sender].glimit < 1) return setReply('Limit game sudah habis, silahkan ketik .limit') // respon ketika limit habis 
if (!isGroup) return onlyGroup()
	let timeout = 30000
	let poin = 1000
	let id = m.chat
	if (id in ehz.tebakkimia) return setReply('Masih ada soal belum terjawab di chat ini')
	let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkimia.json')).json()
	let json = src[Math.floor(Math.random() * src.length)]
	let caption = `*TEBAK KIMIA*
	Unsur: ${json.unsur}
	Soal: Singkatan atau lambang di atas adalah...
	
	Waktu: *${(timeout / 1000).toFixed(2)} detik*
	Hadiah: ${poin} Money
	`.trim()
	ehz.tebakkimia[id] = [
	await setReply(caption),
	json, poin,
	setTimeout(() => {
	if (ehz.tebakkimia[id]) 
user.balance -= 200
m.reply(`*GAME TEBAK KIMIA*\n\nWaktu habis!\n𖦹 Jawabannya adalah; *${json.jawaban}*\n𖦹 Saldo kamu dikurangi 200\n𖦹 Sisa Saldo kamu: *${db.data.users[sender].balance.toLocaleString()}*`)
	delete ehz.tebakkimia[id]
	 }, timeout)
	 ]
	}
    db.data.users[sender].glimit -= 1
	break
  case 'tebakgambar':{
    if (!isPremium && global.db.data.users[sender].glimit < 1) return setReply('Limit game sudah habis, silahkan ketik .limit') // respon ketika limit habis 
    if (!isGroup) return setReply(mess.only.group)
	let timeout = 80000
	let poin = 2000
	let id = m.chat
	if (id in ehz.tebakgambar) return setReply('Masih ada soal belum terjawab di chat ini')
  async function tebakgambar() {
  let random_level = Math.floor(Math.random() * 136)
  let random_eq = Math.floor(Math.random() * 20)
  return axios.get(`https://jawabantebakgambar.net/level-${random_level}/`).then((val) => {
    let url = "https://jawabantebakgambar.net"
    const $ = cheerio.load(val.data)
    let href = $("ul > * > a").eq(random_eq)
    let jwbn = href.find("span").text()
    let img = href.find("img").attr("data-src")
    let src = url + img
    let petunjuk = jwbn.replace(/[AIUEO|aiueo]/g, "_")
    return {
      img: src,
      jawaban: jwbn,
      petunjuk,
    }
  })
    }
  let tos = await tebakgambar ()
  console.log(tos)
	let caption = `*GAME TEBAK GAMBAR*
	
	Waktu: *${(timeout / 1000).toFixed(2)} detik*
	Hadiah: ${poin} Money
	`.trim()
	
	ehz.tebakgambar[id] = [
    await ehz.sendMessage(from, {caption: caption, image: {url: tos.img}}, {quoted: fkontak}),
	tos, poin,
	setTimeout(() => {
	if (ehz.tebakgambar[id]) 
user.balance -= 200
m.reply(`*GAME TEBAK GAMBAR*\n\nWaktu habis!\n𖦹 Jawabannya adalah; *${tos.jawaban}*\n𖦹 Saldo kamu dikurangi 200\n𖦹 Sisa Saldo kamu: *${db.data.users[sender].balance.toLocaleString()}*`)
	delete ehz.tebakgambar[id]
	 }, timeout)
	 ]
	}
    db.data.users[sender].glimit -= 1
	break
 case 'caklontong':{
  if (!isPremium && global.db.data.users[sender].glimit < 1) return setReply('Limit game sudah habis, silahkan ketik .limit') // respon ketika limit habis 
if (!isGroup) return setReply(mess.only.group)
	let timeout = 80000
	let poin = 3000
	let tiketcoin = 1500
	let id = m.chat
	if (id in ehz.caklontong) return setReply('Masih ada soal belum terjawab di chat ini')
	let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json')).json()
	let json = src[Math.floor(Math.random() * src.length)]
	let caption = `
	${json.soal}
	
	Timeout *${(timeout / 1000).toFixed(2)} detik*
	Bonus: ${poin} XP
	Balance: +${tiketcoin} Money
	`.trim()
	ehz.caklontong[id] = [
	await setReply(caption),
	json, poin,
	setTimeout(() => {
	user.balance -= 200
m.reply(`*GAME CAK LONTONG*\n\nWaktu habis!\n𖦹 Jawabannya adalah; *${json.jawaban}*\n𖦹 Saldo kamu dikurangi 200\n𖦹 Sisa Saldo kamu: *${db.data.users[sender].balance.toLocaleString()}*`)
	delete ehz.caklontong[id]
	 }, timeout)
	 ]
	}
    db.data.users[sender].glimit -= 1
	break
case 'family100': {
    if (!isPremium && global.db.data.users[sender].glimit < 1) return setReply('Limit game sudah habis, silahkan ketik .limit') // respon ketika limit habis 
if (!isGroup) return setReply(mess.only.group)
	let winScore = 1000
  let timeot = 200000  
  let timeout = 80000
	let id = m.chat
	if (id in ehz.family) return setReply('Masih ada kuis yang belum terjawab di chat ini') 
	let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/family100.json')).json()
	let json = src[Math.floor(Math.random() * src.length)]
	let caption = `*GAME FAMILY100*
	
	*Soal:* ${json.soal}

	Terdapat ${json.jawaban.length} jawaban${json.jawaban.find(v => v.includes(' ')) ? `
	(beberapa jawaban terdapat spasi)
	`: ''}
	
	+${winScore} Money tiap jawaban benar

		`.trim()
		ehz.family[id] = {
			id,
      
			msg: await m.reply(caption),
			...json,
			terjawab: Array.from(json.jawaban, () => false),
      winScore,  
        }

  
	}
    db.data.users[sender].glimit -= 1
	break
    case 'suitpvp': case 'suit': {
      if (!isPremium && global.db.data.users[sender].glimit < 1) return setReply('Limit game sudah habis, silahkan ketik .limit') // respon ketika limit habis 
	if (!isGroup) return setReply (mess.group)
            ehz.suit = ehz.suit ? ehz.suit : {}
            let poin = 10
            let poin_lose = 10
            let timeout = 60000
            if (Object.values(ehz.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(sender))) setReply(`Selesaikan suit mu yang sebelumnya`)
	    if (m.mentionedJid[0] === sender) return setReply(`Tidak bisa bermain dengan diri sendiri !`)
	if (m.mentionedJid[0] === botNumber) return setReply (`Tidak bisa bermain dengan Bot !`)
            if (!m.mentionedJid[0]) return setReply(`_Siapa yang ingin kamu tantang?_\nTag orangnya..\n\nContoh : ${prefix}suit @${nomerOwner}`, m.chat, { mentions: [nomerOwner + '@s.whatsapp.net'] })
            if (Object.values(ehz.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) return setReply ( `Orang yang kamu tantang sedang bermain suit bersama orang lain :(`)
            let id = 'suit_' + new Date() * 1
            let caption = `_*GAME SUIT PvP*_

@${sender.split`@`[0]} menantang @${m.mentionedJid[0].split`@`[0]} untuk bermain suit

Silahkan @${m.mentionedJid[0].split`@`[0]} untuk ketik terima/tolak`
            ehz.suit[id] = {
            chat: await ehz.sendText(m.chat, caption, m, { mentions: parseMention(caption) }),
            id: id,
            p: sender,
            p2: m.mentionedJid[0],
            status: 'wait',
            waktu: setTimeout(() => {
            if (ehz.suit[id]) ehz.sendText(m.chat, `_Waktu suit habis_`, m)
            delete ehz.suit[id]
            }, 60000), poin, poin_lose, timeout
            }
            }
            db.data.users[sender].glimit -= 1
            break  
 case 'limit':
	case 'ceklimit': 
	if(mentionByReply){
	let nomer = mentionByReply.split("@")[0]
	 setReply(`*${await conn.getName(mentionByReply)}*\n\nLimit : ${isPremium ? 'Unlimited' : `${db.data.users[mentionByReply].limit}/${limitCount}`}\nLimit Game : ${isPremium ? 'Unlimited' : `${db.data.users[mentionByReply].glimit}/${gcount}`}\nSaldo : Rp ${db.data.users[mentionByReply].balance.toLocaleString()}\n\nKamu dapat membeli limit dengan ${prefix}buylimit dan ${prefix}buyglimit untuk membeli game limit\nAtau ketik .buyprem untuk membeli unlimited limit`) 
	} else {   
	setReply(`*${pushname}*\n\nLimit : ${isPremium ? 'Unlimited' : `${db.data.users[sender].limit}/${limitCount}`}\nLimit Game : ${isPremium ? 'Unlimited' : `${db.data.users[sender].glimit}/${gcount}`} \nSaldo : Rp ${db.data.users[sender].balance.toLocaleString()}\n\nKamu dapat membeli limit dengan ${prefix}buylimit dan ${prefix}buyglimit untuk membeli game limit\nAtau ketik .buyprem untuk membeli unlimited limit`)
	
	}
	break
 case 'buylimit':{
	if (!q) return setReply(`Kirim perintah *${prefix}buylimit* jumlah limit yang ingin dibeli\n\nHarga 1 limit = Rp1000`)
	if (q.includes('-')) return setReply(`Jangan menggunakan -`)
	if (isNaN(q)) return setReply(`Harus berupa angka`)
	let ane = Number(math(q) * 1000)
	if (db.data.users[sender].balance < ane) return setReply(`Saldo kamu tidak mencukupi untuk pembelian ini`)
	db.data.users[sender].balance -= ane
	db.data.users[sender].limit += math(q)
	setReply(`Pembeliaan limit sebanyak ${q} berhasil\n\nSisa Saldo : Rp ${db.data.users[sender].balance.toLocaleString()}\nSisa Limit : ${db.data.users[sender].limit}/${limitCount}`)
	}
	break
case 'buyglimit':{
	if (!q) return setReply(`Kirim perintah *${prefix}buyglimit* jumlah limit yang ingin dibeli\n\nHarga 1 game limit = Rp 700`)
	if (q.includes('-')) return setReply(`Jangan menggunakan -`)
	if (isNaN(q)) return setReply(`Harus berupa angka`)
	let ane = Number(math(q) * 700)
	if (db.data.users[sender].balance < ane) return setReply(`Saldo kamu tidak mencukupi untuk pembelian ini`)
	db.data.users[sender].balance -= ane
	db.data.users[sender].glimit += math(q)
	setReply(`Pembeliaan game limit sebanyak ${q} berhasil\n\nSisa Saldo : Rp ${db.data.users[sender].balance.toLocaleString()}\nSisa Limit : ${db.data.users[sender].glimit}/${limitCount}`)
	}
	break
 case 'claim':
	case 'daily':{
	const limi = ['2','4','1','5','9','3','8','7','6','10','11']
    const randomny = limi[Math.floor(Math.random() * limi.length)]
	const limitfree = randomny
	const free = 3000
	const prem = 10000
	const moneyfree = 3000
	const moneyprem = 10000
	const timeout = 86400000
	let time = global.db.data.users[m.sender].lastclaim + 86400000
	 if (new Date - global.db.data.users[m.sender].lastclaim < 86400000) return setReply( `Anda sudah mengklaim, klaim harian hari ini\ntunggu selama ${conn.msToTime(time - new Date())} lagi`)
	 global.db.data.users[m.sender].exp += isPremium ? prem : free
     global.db.data.users[m.sender].limit += limitfree
	 global.db.data.users[m.sender].balance += isPremium ? moneyprem : moneyfree
	setReply(`Selamat kamu mendapatkan:\n\n+${limitfree} Limit\n+${isPremium? prem : free} Exp\n+${isPremium? moneyprem : moneyfree} Balance`)
	global.db.data.users[m.sender].lastclaim = new Date * 1
	} 
	break 
 case 'me': case 'profil': {
	let ppimg = await ehz.profilePictureUrl(sender, 'image').catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png')
	try{
	 let sol = await ehz.fetchStatus(sender)
	var stst = sol.status == undefined ? '' : sol.status 
	} catch(err){
	var stst = ""
	  
	}
	let persenya =`${userPersen}`
	let nana =`${userExp}/${requiredExp}`
	
	let prmm = isPremium? isOwner? 'Premium' : user? user.premiumDate : '' : 'Not Premium'
	 //
	let teks = `*]────「 Profile User 」────[*
	
	🆔 Nama : ${pushname} 
	💳 Saldo  : Rp ${db.data.users[sender].balance.toLocaleString()}
	✅ Verified : ${userVerified}
	📇 Status : ${isPremium ? 'Premium':'Free'}
	🧬 Level : ${userLevel}
	🔰 Grade : ${userLeveling(`${db.data.users[sender].level}`)}
	⚡ Exp :  ${userXp(userPersen)} ${persenya.split(".")[0]}%
	♻️ Total Exp : ${nana}
	📟 User Hit : ${db.data.users[sender].hit}
	🤖 Status Bot : ${isOwner ? 'Owner':'User'}
	🕔 Expired : ${prmm}
	📉 Limit : ${isPremium ? 'Unlimited' : `${db.data.users[sender].limit}/${limitCount}`}
	📈 Limit Game : ${isPremium ? 'Unlimited' : `${db.data.users[sender].glimit}/${gcounti.user}`}
	📲 No : wa.me/${sender.split("@")[0]}
	🧸 Bio : ${stst}`
	
	
	let its = await getBuffer (ppimg)
	
	const canvacord = require("canvacord");
	  let image3 = new canvacord.Rank()
	  .setAvatar(its)
	  .setCurrentXP(math(userExp))
	  .setRequiredXP(requiredExp)
	  .setStatus("online")
	  .setProgressBar("#FFFFFF", "COLOR")
	  .setBackground( "COLOR","#141414")
	  .setCustomStatusColor("#ff1a8c")  
	  .setUsername(`EXP: ${persenya.split(".")[0]}%,`)
	  .setLevel(userLevel)
	  .setRank(4)
	  .setOverlay("#3d3d3d")
	  .setDiscriminator("0007");
	  
	  let foto = await getRandom(".png")
	  image3.build()
	  .then(async data => {
	  await canvacord.write(data,foto);
	  let gambar = await fs.readFileSync(foto)
	ehz.sendMessage(from, { caption: teks, image: gambar}, {quoted: fkontak})
	  await fs.unlinkSync(foto)
			  });
	
	}
	 
	break
  case 'shop':{
	let teks = `
	*]────「 SHOP」────[*
	
	Halo ${pushname} 
	Saldo : Rp ${db.data.users[sender].balance.toLocaleString()}
	
	• List Harga
	1 Limit : Rp 1000
	1 Limit Game : Rp 700
	
	NOTE :
	Untuk membeli Limit ketik ${prefix}buylimit jumlah limit
	Contoh : ${prefix}buylimit 10
	
	Untuk membeli Limit Game ketik ${prefix}buyglimit jumlah limit
	Contoh : ${prefix}buyglimit 10
 
Atau ketik .buyprem untuk membeli unlimited limit`
	setReply(teks)
	}
	break 
  case 'tf':
	case 'transfer':{
    try{
	if(!q) return setReply(`Masukan angka\nContoh: .transfer 100`)
   if(!mentionByReply) return setReply("Reply targetnya")
         if(budy.includes('-') || budy.includes('+')) return setReply ("Harus angka blok")
	if (isNaN(q)) return setReply(`Masukan angka\nContoh: .transfer 100`)
	
	let ane = q
      if(100 > ane) return setReply('Minimal transaksi 100 rupiah')
	if (db.data.users[sender].balance < ane) return setReply(`Saldo kamu tidak mencukupi`)
    	db.data.users[mentionByReply].balance += parseInt(ane)
	db.data.users[sender].balance -= parseInt(ane)
	setReply(`Berhasil mentransfer saldo ke nomer ${mentionByReply.split("@")[0]} sebesar Rp.${Number(q).toLocaleString()}`)
	}catch(err){
      setReply ('User tersebut belum terdaftar di database bot, silahkan suruh ketik .menu terlebih dahulu')
  }
  }
	break
//======= MENU DOWNLOAD =====//
 case 'ai':
    case 'openai' : {
		if (!q) return setReply(`Ada Yang Bisa rangel Bantu?`)			
m.reply(mess.wait)
			var { data } = await axios.get(`https://api.betabotz.org/api/search/openai-logic?text=${q}&logic=Halo%20Nama%20Saya%20Adalah%20Rangel%20saya%20akan%20membalas%20c hat%20mu%20dengan%20emote%20sesuai%obrolan%20kita&apikey=2fbgCgOB`)
	setReply(`${data.message}`.trim())
    }
			break
case 'ig': case 'instagram' :{
                if (!q) return setReply("Link?")
    setReply(mess.wait)
                let ag = await fetchJson(`https://api.lolhuman.xyz/api/instagram?apikey=${api.Lol}&url=${q}`)
                for (var i = 0; i < ag.result.length; i++) {
                    let pap = ag.result[i].includes('.jpg') ? 'image' : 'video'
                    await ehz.sendMessage(m.chat, {
                        [pap]: {
                            url: ag.result[i]
                        },
                        caption: 'DOWNLOADER INSTAGRAM'
                    }, {
                        quoted: m
                    })
                }
            }
            break
case 'tt':
case 'tiktok':
 if (!q) return setReply('link nya mana:b')
 setReply(mess.wait)
 let e = await fetchJson(`https://api.lolhuman.xyz/api/tiktok?apikey=${api.Lol}&url=${q}`)
 let ee = `*DOWNLOADER TIKTOK*\n ketik .ttaudio jika ingin mengunduh audio nya`
 await ehz.sendMessage(m.chat, {video: { url: e.result.link }, caption: ee }, { quoted: m })
 break
        case 'ttmp3': 
case 'tiktokaudio':
            case 'ttaudio': {
                if (!q) return setReply('where is the link')
setReply(mess.wait)
                let i = await fetchJson(`https://api.lolhuman.xyz/api/tiktokmusic?apikey=${api.Lol}&url=${q}`)
                ehz.sendMessage(m.chat, { audio: { url: i.result }, mimetype: 'audio/mp4' }, { quoted: fkontak })
            }
            break

case 'play': 
case 'ytaudio':
case 'playmusik':
case 'playmusic': {
if (!isGroup) return onlyGroup()
if (!q) return setReply("Kirim perintah judul lagu/link youtube nya bwang")
try {
setReply(mess.wait)
let rus = await yts(q)
if (rus.all.length == "0") return setReply("Video tidak bisa di download")
let data = await rus.all.filter(v => v.type == 'video')
try{
var res = data[0]
var info = await ytdl.getInfo(res.url);
} catch{
var res = data[1]
var info = await ytdl.getInfo(res.url);
}
let audio = ytdl.filterFormats(info.formats, 'audioonly');
let format = ytdl.chooseFormat(info.formats, { quality: '18' });
try{
var thumbnya =`https://i.ytimg.com/vi/${res.videoId}/hqdefault.jpg`
} catch(err) {
var thumbnya =`https://i.ytimg.com/vi/${res.videoId}/default.jpg`
}
let inithumb = await getBuffer(thumbnya)
let teks = `*💢 Y O U T U B E - M P 3*

🔶 Channel : ${res.author.name}
🔶 Viewers : ${h2k(res.views)} Kali
🔶 Duration : ${res.timestamp}
🔶 Url : ${res.url}`


ehz.sendMessage(from, { contextInfo: { externalAdReply: { showAdAttribution: true, 
title: `${res.title}`,
body: `${week} , ${calender}`,																													
mediaType: 2,  
renderLargerThumbnail : true,
thumbnail: inithumb,
mediaUrl: res.url,
sourceUrl: res.url
}}, image: {url: inithumb},text: teks},{quoted: m})                                        
downloadMp3(`${res.url}`) 
} catch (err){
console.log(err)
setReply(`Server sedang error`)
}
}
break
        case 'ttpoto':{

      if (!q) return m.reply (`Example : ${prefix + command} https://vt.tiktok.com/ZSNhbmwU1/`)

      let url = `https://dlpanda.com/id?url=${q}&token=G7eRpMaa`

      let response = await axios.get(url)
          const html = response.data;
          const $ = cheerio.load(html);

          let asd = []
          let imgSrc = []
          let creator = 'Jikarinka'

      $('div.col-md-12 > img').each((index, element) => {
            imgSrc.push($(element).attr('src'));
          });

          asd.push({ creator, imgSrc })
        let fix = imgSrc.map((e,i) => {
        return {img: e, creator: creator[i] } 
        })

      m.reply('media Akan Rangel Kirim Lewat Pc')
      for (let i of asd[0].imgSrc) {
           let lol = m.mentionedJid[0] || m.sender || ehz.parseMention(args[0]) || (args[0].replace(/[@.+-]/g, '').replace(' ', '') + '@s.whatsapp.net') || ''
           ehz.sendFile(lol, i, '', null, m)
           }
      }

      break
case 'ytmp3':
case 'playmp3':
if (!isGroup) return onlyGroup()
if (!isPremium && global.db.data.users[sender].limit < 1) return onlyLimit()
if (!isUrl) return setReply("Masukan link youtube nya kak")

setReply(mess.wait)
try{
let info = await ytdl.getInfo(q);
let audioFormats = ytdl.filterFormats(info.formats, 'audioonly');
try{
var low = audioFormats[2].contentLength
} catch (err){
var low = audioFormats[0].contentLength
}
if (Number(low) > 15000000 ) return setReply(`Bjir sizenya ${FileSize(low)}\nAu ah ga mao download 😤`)
if (audioFormats[0].contentLength == "undefined"){
var rus = await yts(q)
//var data = await rus.all.filter(v => v.type == 'video')
var res = data[0]
if (res.timestamp.split(":") > "10") return setReply("Tidak bisa mendownload audio lebih dari 10 menit")
}
downloadMp3(q) 
} catch (err){
console.log(err)
db.data.users[sender].limit -= 1 
}
break 
case 'ytmp4':
case 'playmp4':
 if (!isGroup) return onlyGroup()
if (args.length == 0) return setReply(`Example: ${prefix + command} https://www.youtube.com/watch?v=qZIQAk-BUEc`)
setReply(mess.wait)
axios.get(`https://api.lolhuman.xyz/api/ytvideo2?apikey=${api.Lol}&url=${args[0]}`)
.then(({ data }) => {
var caption = `❖ Title    : *${data.result.title}*\n`
caption += `❖ Size     : *${data.result.size}*`
ehz.sendMessage(m.chat, { image: { url: data.result.thumbnail }, caption }).then(() => {
ehz.sendMessage(m.chat, { video: { url: data.result.link }, mimetype: 'video/mp4', fileName: `${data.result.title}.mp4` })})
})
.catch(console.error)
break
case 'remini':
            case 'hd': {
                if (!isMedia) return setReply("Where The A Image")
setReply(mess.wait)
                let media = await ehz.downloadAndSaveMediaMessage(quoted)
                let anu = await TelegraPh(media)
                ehz.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/upscale?apikey=${api.Lol}&img=${anu}` }, caption: "nih kak >\<" }, { quoted: m })}
            break

 
break
    
case 'ttsearch':{
if (!isPremium && global.db.data.users[sender].limit < 1) return setReply(mess.wait) // respon ketika limit habis
if(!q) return m.reply (`Mau cari apa??\nCara penggunaan: ${prefix+command} judul|jumlah\n\nContoh: ${prefix+command} taubat|3`)
setReply(mess.wait)
let res = await fetchJson(`https://skizo.tech/api/ttsearch?search=${q}&apikey=${api.ehz}`)
let caption = `*TIKTOK SEARCH*

*𖦹 Judul:* ${res.title}
*𖦹 Region:* ${res.region}
*𖦹 Durasi:* ${res.duration}
*𖦹 Musik:* ${res.music}
  *- Musik Info:*
      *• Judul:* ${res.music_info.title}
      *• Link:* ${res.music_info.play}
      *• Author:* ${res.music_info.author}
`
ehz.sendMedia(from, res.play, m, {caption: caption})
db.data.users[sender].limit -= 1 // -1 limit
}
break
case 'jarak':{
if(!q.includes("|")) return setReply("Contoh Tasik|Bandung")
let Dari = q.split("|")[0]
let Ke = q.split("|")[1]
async function jarak(dari, ke) {
  let url = `https://www.google.com/search?q=${encodeURIComponent("jarak " + dari + " ke " + ke)}&hl=id`
  let { data } = await axios(url)
  let $ = cheerio.load(data)
  let img = data.split("var s=\'")[1].split("\'")[0]
  let res = {
   result: {
    img: /^data:.*?\/.*?;base64,/i.test(img) ? Buffer.from(img.split`,`[1], 'base64') : '',
    desc: $("div.BNeawe.deIvCb.AP7Wnd").text()
    }
  }
  return res
}
let nana = await jarak(Dari,Ke)
let image = nana.result.img
let caption = `*Google Maps* \n\n${nana.result.desc}`
ehz.sendMessage(from,{image, caption},{quoted: m})
} 
break
case 'nsfw': {
    if (!isPremium) return onlyPrem()
let anu = `╭─❒ 「  𝘕𝘚𝘍𝘞 」    
│
├  .xhentai
├  .loli 
├  .milf 
├  .husbu 
├  .cosplay 
├  .zettai
├  .thighs
├  .panties
├  .pussy
├  .tentacles
├  .masturbasi
├  .jahy
├  .glases
├  .foot
├  .hentai
├  .hentai gifs
├  .blowjob
├  .orgy
├  .nekopoi
├  .manga
├  .ass
├  .ahegao
├  .bdsm
├  .cuckold
├  .cum
├  .femdom
├  .ero
├  .yuri
│
╰────────────˧
`
await sleep(1000)
ehz.sendMessage(from, { contextInfo: { externalAdReply: { showAdAttribution: true,
title: `Rangel°᭄ᴮᵒᵗ`,
body:`Bot aktif ${runtime(process.uptime())}`,
previewType:"PHOTO", 
thumbnail: fs.readFileSync('./media/reply.jpg'),
sourceUrl:`https://chat.whatsapp.com/Fguw4KxsP6qCBm9RfZvHOS`
}}, image: fs.readFileSync('./media/thumb.jpeg'), caption: anu}, { quoted: m })
}
break
case 'zettai': case 'thighs': case 'panties': case 'pussy': case 'tentacles':
case 'masturbasi': case 'jahy': case 'glases':  case 'foot': case 'hentai': 
case 'orgy': case 'nekopoi': case 'manga': case 'ass': case 'ahegao': case 'hentai gifs': case 'cuckold': case 'hentai': case 'blowjob': case 'gangbang': case 'yuri': case 'bdsm': case 'cuckold': case 'cum': case 'femdom': case 'ero':{
  if (!isPremium && !isOwner) return onlyPrem()
if (!isPremium && global.db.data.users[sender].limit < 1) return onlyLimit()
setReply('waittt....\nmedia akan di kirim lewat private chat')
ehz.sendMessage(m.sender, { caption: `Random Anime ${command}`, image: { url: `https://botapi.takimtod.repl.co/api/nsfw/${command}?apikey=BetaBotz`}, quoted: m })
  db.data.users[sender].limit -= 1  
}
break
        case 'cry': case 'kill': case 'hug': case 'pat': case 'lick': case 'kiss': case 'bite': case 'yeet': case 'bully': case 'bonk': case 'wink': case 'poke': case 'nom': case 'slap': case 'smile': case 'wave': case 'awoo': case 'blush': case 'smug': case 'glomp': case 'happy': case 'dance': case 'cringe': case 'cuddle': case 'highfive': case 'handhold':
if (!isGroup) return onlyGroup()
setReply(mess.wait)
axios.get(`https://api.waifu.pics/sfw/${command}`)
.then(({data}) => {
ehz.sendImageAsSticker(m.chat, data.url, m, { packname: global.packName, author: global.authorName })
})
break
case 'anime':{
if (!isGroup) return onlyGroup()
if (!isPremium && global.db.data.users[sender].limit < 1) return onlyLimit()
	
setReply(mess.wait)
await fetch('https://raw.githubusercontent.com/pajaar/grabbed-results/master/pajaar-2020-gambar-anime.txt')
.then(res => res.text())
.then(body => {
let tod = body.split("\n");
let pjr = tod[Math.floor(Math.random() * tod.length)];
imageToBase64(pjr)
.then((response) => {
var media =  Buffer.from(response, 'base64');
//let buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️ ɴᴇxᴛ ᴘʜᴏᴛᴏ`},type:1}]                       
ehz.sendMessage(from, { contextInfo: {externalAdReply: {showAdAttribution: true, title: `${TextT}`, mediaType: 3,  renderLargerThumbnail : true,thumbnail:'',sourceUrl: `https://wa.me/${nomerOwner}`																
}}, image: media, caption: `_${command}_` ,footer: `Hasil pencarian dari ${command}`}, { quoted: m })								
/*}}, image: media, caption: `${mess.success}`, buttons: buttons , footer: `Hasil pencarian dari ${command}`}, { quoted: m })*/
.catch((err) => setReply('Server sedang error coba lagi besok!'))
db.data.users[sender].limit -= 1 
});
})
}
break
 case 'animerandom':
case 'randomanime':
if (!isGroup) return onlyGroup()
setReply(`
Silakan pilih salah satu

akira || akiyama || anna || asuna || ayuzawa ||| boruto || chitanda || chitoge ||| deidara || elaina || emilia || asuna || erza || gremory || hestia || hinata || inori || itachi || isuzu || itori || kaga  || kakasih || kaori || kaneki || kosaki || kotori || kuriyama || kuroha || kurumi || madara || mikasa || miku || minato || naruto || natsukawa || nekohime || nezuko || nishimiya || onepiece || rem || rize || sagiri || sakura || sasuke || shina || shinka || shizuka || shota || tomori || toukachan || tsunade || yatogami || yuki

Contoh : .shina`)
break
case 'akira': case 'akiyama': case 'anna': case 'asuna': case 'ayuzawa': case 'boruto': case 'chitanda': case 'chitoge': case 'deidara': case 'doraemon': case 'elaina': case 'emilia': case 'asuna': case 'erza': case 'gremory': case 'hestia': case 'hinata': case 'inori': case 'itachi': case 'isuzu': case 'itori': case 'kaga': case 'kagura': case 'kakasih': case 'kaori': case 'kaneki': case 'kosaki': case 'kotori': case 'kuriyama': case 'kuroha': case 'kurumi': case 'madara': case 'mikasa': case 'miku': case 'minato': case 'naruto': case 'natsukawa': case 'nekohime': case 'nezuko': case 'nishimiya': case 'onepiece': case 'pokemon': case 'rem': case 'rize': case 'sagiri': case 'sakura': case 'sasuke': case 'shina': case 'shinka': case 'shizuka': case 'shota': case 'tomori': case 'toukachan': case 'tsunade': case 'yatogami': case 'yuki':{
if (!isGroup) return onlyGroup()
let res = await (await fetch(`https://raw.githubusercontent.com/KazukoGans/database/main/anime/${command}.json`)).json()
let cita = res[Math.floor(Math.random() * res.length)]
await ehz.sendFile(m.chat, cita, 'image.jpg', `_${command}_`, m)

}
break
   case 'wallpaper':
if (!isGroup) return onlyGroup()
try{
setReply(mess.wait)
ehz.sendMessage(from, { image: { url: `https://api.lolhuman.xyz/api/random2/${command}?apikey=${api.Lol}` } })
}catch(err){
console.log((err) => setReply(mess.err))
}
break
case 'loli':
  case 'cosplay': 
  case 'husbu':
  case 'milf':
case 'wallml':{
if (!isGroup) return onlyGroup()
if (!isPremium && global.db.data.users[sender].limit < 1) return onlyLimit()
	
setReply(mess.wait)
//let data = global.db.data.others['runtime']
//let time = (new Date - data.runtime) || "Tidak terdeteksi" 
let wipu = (await axios.get(`https://raw.githubusercontent.com/Arya-was/endak-tau/main/${command}.json`)).data
let wipi = wipu[Math.floor(Math.random() * (wipu.length))]
let kentir = await getBuffer(wipi)                             
ehz.sendMessage(from, { contextInfo: {externalAdReply: {showAdAttribution: true, title: `${TextT}`, mediaType: 3,  renderLargerThumbnail : true,thumbnail:'',sourceUrl: `https://wa.me/${nomerOwner}`																										
}}, image: kentir, caption: `_${command}_` ,footer: `Hasil pencarian dari ${command}`}, { quoted: m })
.catch((err) => setReply('Server sedang error coba lagi besok!'))
db.data.users[sender].limit -= 1 
}
break
case 'nao':
case 'naotomori':{
if (!isGroup) return onlyGroup()

setReply(mess.wait)
let hehe = `https://api.zahwazein.xyz/randomanime/v2/tomori?apikey=${api.angel}`
ehz.sendMessage(m.chat, { image: { url: hehe }, caption: `_${command}_`}, { quoted: m})
}
break
 //========== TOOLS ===========//
 
 case 'tr':
case 'translate':{
if (!isGroup) return onlyGroup()
let translate = require('translate-google-api')
let defaultLang = 'en'
let tld = 'cn'
let toks = `
Contoh:
${prefix + command} <lang> [text]
${prefix + command} id your messages
Daftar bahasa yang didukung: https://cloud.google.com/translate/docs/languages
`.trim()

let lang = args[0]
let text = args.slice(1).join(' ')
if ((args[0] || '').length !== 2) {
lang = defaultLang
text = args.join(' ')
}
if (!text && m.quoted && m.quoted.text) text = m.quoted.text
let result
try {
result = await translate(`${text}`, {to: lang})
} catch (e) {
result = await translate(`${text}`, {to: defaultLang,})
setReply(toks)
} finally {
setReply(result[0])
}
}
break
 case 'differentme': {
if (!isGroup) return onlyGroup()
if (!quoted) return setReply(`Fotonya Mana?`)
if (!/image/.test(mime)) return setReply(`Send/Reply Foto Dengan Caption ${prefix + command}`)
setReply('Proses Ayangg')
const media = await ehz.downloadAndSaveMediaMessage(quoted)
const anu = await TelegraPh(media)
const img = await fetch (`https://skizo.tech/api/aimirror?&apikey=${api.ehz}&url=${anu}&filter=${q}`) 
const p = await img.json()
const imgs = p.generated_image_addresses
const capt = p.time_processing
ehz.sendMessage(m.chat, { image: { url: imgs }, caption: `Done Kak\nWaktu Selesai ${capt}`}, { quoted: m})
}
break
 case 'toanime':
case 'jadianime':{
if (!isGroup) return onlyGroup()
if (!isImage && !isQuotedImage) return setReply(`Kirim gambar lalu reply ${prefix + command} atau tag gambar yang sudah dikirim`)
setReply(mess.wait)
try{
let ahah = await ehz.downloadAndSaveMediaMessage(quoted)
let dimss = await TelegraPh(ahah)
let ini_gen = `${command}`
let get_result = await getBuffer(`https://skizo.tech/api/toanime?url=${dimss}&apikey=${api.ehz}`)
ehz.sendMessage(from, { contextInfo: { externalAdReply: { showAdAttribution: true,
title: `${botName}`,
body:`Bot aktif ${runtime(process.uptime())}`,
previewType:"PHOTO", 
thumbnail: fs.readFileSync('./media/reply.jpg'),
sourceUrl:`https://replit.com/@Rashya`
}}, image: get_result, caption: `*Nih Kak Kamu jadi Anime*`}, { quoted: m })
fs.unlinkSync(ahah) 
}catch(err){
console.log((err) => setReply('Error coba lagi kak'))
}
}
break
 case 'lirik':{
if(!q) return setReply("Masukan judul lagu")	
function lirik(judul){
  return new Promise(async(resolve, reject) => {
      axios.get('https://www.musixmatch.com/search/' + judul)
      .then(async({ data }) => {
      const $ = cheerio.load(data)
      const hasil = {};
      let limk = 'https://www.musixmatch.com'
      const link = limk + $('div.media-card-body > div > h2').find('a').attr('href')
        await axios.get(link)
        .then(({ data }) => {
          const $$ = cheerio.load(data)
          hasil.thumb = 'https:' + $$('div.col-sm-1.col-md-2.col-ml-3.col-lg-3.static-position > div > div > div').find('img').attr('src')
          $$('div.col-sm-10.col-md-8.col-ml-6.col-lg-6 > div.mxm-lyrics').each(function(a,b) {
       hasil.lirik = $$(b).find('span > p > span').text() +'\n' + $$(b).find('span > div > p > span').text()
       })
     })
     resolve(hasil)
   })
   .catch(reject)
   })
}
let data = await lirik(q)
let teks =`
Judul: ${q}

Lirik:
${data.lirik}
`
setReply(teks)

}
break
case'toptv':{
try {
  if (!isGroup) return onlyGroup()
    setReply(mess.wait)
if
	(m.message.extendedTextMessage) 
{
  var dataVideo = { ptvMessage: m.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage }
    ehz.relayMessage(m.chat, dataVideo, {})
 }
    } catch (error) {
        m.reply(error);
        }
        }
        break
  case "get":
case "fetch":
  if (!q) {
    return m.reply(`Contoh:\n${prefix + command} https://github.com/RangelChan`);
  }
  if (!/^https?:\/\//.test(q)) {
    return m.reply("URL is Invalid!");
  }
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };
  if (body.match(/(mp4)/gi)) {
    fetch(`${q}`, requestOptions)
      .then((res) => ehz.sendMessage(from, { video: { url: `${q}` }, mimetype: "video/mp4", caption: "Success" }, { quoted: m }))
      .catch((error) => m.reply("Error", error));
  } else if (body.match(/(mp3)/gi)) {
    fetch(`${q}`, requestOptions)
      .then((res) => ehz.sendMessage(from, { audio: { url: `${q}` }, mimetype: "audio/mp4", fileName: "Audio" }, { quoted: m }))
      .catch((error) => m.reply("Error", error));
  } else if (body.match(/(png|jpg|jpeg)/gi)) {
    fetch(`${q}`, requestOptions)
      .then((res) => ehz.sendMessage(from, { image: { url: `${q}` }, caption: "Success" }, { quoted: m }))
      .catch((error) => m.reply("Error", error));
  } else {
    fetch(`${q}`, requestOptions)
      .then((response) => response.text())
      .then((result) => m.reply(result))
      .catch((error) => m.reply("Error", error));
  }
  break;
  case 'removebg':
  case 'nobg': {
 if (!isGroup) return onlyGroup()
 if (!isMedia) return setReply("Where The A Image")
                setReply(mess.wait)
                let media = await ehz.downloadAndSaveMediaMessage(quoted)
                let anu = await TelegraPh(media)
                ehz.sendMessage(m.chat, {
                    image: { url: `https://api.lolhuman.xyz/api/removebg?apikey=${api.Lol}&img=${anu}` },caption: "nih kak>\<" }, { quoted: m}) }
            break
  case 'flaming1':{
if (!isGroup) return onlyGroup()
if (args.length == 0) return setReply(`Example: ${prefix + command} Teks`)
if (!isPremium && global.db.data.users[sender].limit < 1) return onlyLimit()

setReply(mess.wait)
let ini_txt = args.join(" ")
var buffer = `https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&script=fluffy-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=${ini_txt}`
ehz.sendMessage(from, { contextInfo: {externalAdReply: {showAdAttribution: true, title: `Rangel°᭄ᴮᵒᵗ`, mediaType: 3,  renderLargerThumbnail : true,thumbnailUrl:"https://telegra.ph/file/33d58a3a7b931d3902642.jpg",sourceUrl: `https://wa.me/${nomerOwner}`
}}, image: {url:buffer}, caption: `${mess.success}`}, { quoted: m})
.catch((err) => setReply('Server sedang error coba lagi besok!'))
db.data.users[sender].limit -= 1
}
break
 case 'flaming2':{
if (!isGroup) return onlyGroup()
if (args.length == 0) return setReply(`Example: ${prefix + command} Teks`)
if (!isPremium && global.db.data.users[sender].limit < 1) return onlyLimit()

setReply(mess.wait)
let ini_txt = args.join(" ")
var buffer = `https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text=${ini_txt}`
ehz.sendMessage(from, { contextInfo: {externalAdReply: {showAdAttribution: true, title: `Rangel°᭄ᴮᵒᵗ`, mediaType: 3,  renderLargerThumbnail : true,thumbnailUrl: 'https://telegra.ph/file/33d58a3a7b931d3902642.jpg',sourceUrl: `https://wa.me/${nomerOwner}`
}}, image: {url:buffer}, caption: `${mess.success}`}, { quoted: m})
.catch((err) => setReply('Server sedang error coba lagi besok!'))
db.data.users[sender].limit -= 1
}
break
// ===================================== //
case 'flaming3':{
if (!isGroup) return onlyGroup()
if (args.length == 0) return setReply(`Example: ${prefix + command} Teks`)
if (!isPremium && global.db.data.users[sender].limit < 1) return onlyLimit()

setReply(mess.wait)
let ini_txt = args.join(" ")
var buffer = `https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=${ini_txt}`
ehz.sendMessage(from, { contextInfo: {externalAdReply: {showAdAttribution: true, title: `${botName}`, mediaType: 3,  renderLargerThumbnail : true,thumbnailUrl: 'https://telegra.ph/file/33d58a3a7b931d3902642.jpg',sourceUrl: `https://wa.me/${nomerOwner}`
}}, image: {url:buffer}, caption: `${mess.success}`}, { quoted: m})
.catch((err) => setReply('Server sedang error coba lagi besok!'))
db.data.users[sender].limit -= 1
}
break
// ===================================== //
case 'flaming4':{
if (!isGroup) return onlyGroup()
if (args.length == 0) return setReply(`Example: ${prefix + command} Teks`)
if (!isPremium && global.db.data.users[sender].limit < 1) return onlyLimit()

setReply(mess.wait)
let ini_txt = args.join(" ")
var buffer = `https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text=${ini_txt}`
ehz.sendMessage(from, { contextInfo: {externalAdReply: {showAdAttribution: true, title: `${botName}`, mediaType: 3,  renderLargerThumbnail : true,thumbnailUrl:'https://telegra.ph/file/33d58a3a7b931d3902642.jpg',sourceUrl: `https://wa.me/${nomerOwner}`
}}, image: {url:buffer}, caption: `${mess.success}`}, { quoted: m})
.catch((err) => setReply('Server sedang error coba lagi besok!'))
db.data.users[sender].limit -= 1
}
break
// ===================================== //
case 'flaming5':{
if (!isGroup) return onlyGroup()
if (args.length == 0) return setReply(`Example: ${prefix + command} Teks`)
if (!isPremium && global.db.data.users[sender].limit < 1) return onlyLimit()

setReply(mess.wait)
let ini_txt = args.join(" ")
var buffer = `https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=${ini_txt}`
ehz.sendMessage(from, { contextInfo: {externalAdReply: {showAdAttribution: true, title: `${botName}`, mediaType: 3,  renderLargerThumbnail : true,thumbnailUrl:'https://telegra.ph/file/33d58a3a7b931d3902642.jpg',sourceUrl: `https://wa.me/${nomerOwner}`
}}, image: {url:buffer}, caption: `${mess.success}`}, { quoted: m})
.catch((err) => setReply('Server sedang error coba lagi besok!'))
db.data.users[sender].limit -= 1
}
break
// ===================================== //
case 'flaming6':{
if (!isGroup) return onlyGroup()
if (args.length == 0) return setReply(`Example: ${prefix + command} Teks`)
if (!isPremium && global.db.data.users[sender].limit < 1) return onlyLimit()

setReply(mess.wait)
let ini_txt = args.join(" ")
var buffer = `https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=0&backgroundColor=%23101820&text=${ini_txt}`
ehz.sendMessage(from, { contextInfo: {externalAdReply: {showAdAttribution: true, title: `${botName}`, mediaType: 3,  renderLargerThumbnail : true,thumbnail: fs.readFileSync('./media/thumb.jpeg'),sourceUrl: `https://wa.me/${nomerOwner}`
}}, image: {url:buffer}, caption: `${mess.success}`}, { quoted: m})
.catch((err) => setReply('Server sedang error coba lagi besok!'))
db.data.users[sender].limit -= 1
}
break
 case 'attp':
                if (!q) return setReply('Masukan Text')
                setReply(mess.wait)
                ehz.sendMessage(m.chat, { sticker: { url: `https://api.lolhuman.xyz/api/attp?apikey=${api.Lol}&text=${q}`} }, { quoted: m })
                break
case 'ttp':{
	const text2png = require('text2png');
	await fs.writeFileSync('out.png', text2png(q, {font: '100px coolvetica rg',
		localFontPath: 'src/font/coolvetica rg.otf',
	  localFontName: 'coolvetica rg',                                            
	  color: 'white',
	  textAlign: "left",
	  lineSpacing: 10,
	  strokeColor: "black",
	  strokeWidth : 2,
	  padding: 20}))
	let { Sticker, createSticker, StickerTypes } = require('wa-sticker-formatter')
	let media = fs.readFileSync('out.png')
	let jancok = new Sticker(media, {
		pack: packName, // The pack name
		author: authorName, // The author name
		type: StickerTypes.FULL, // The sticker type
		categories: ['🤩', '🎉'], // The sticker category
		id: '12345', // The sticker id
		quality: 70, // The quality of the output file
		background: '#FFFFFF00' // The sticker background color (only for full stickers)
	})
	let stok = getRandom(".webp")
	let nono = await jancok.toFile(stok)
	let nah = fs.readFileSync(nono)
	await ehz.sendMessage(from,{sticker: nah},{quoted: m})
	await fs.unlinkSync(stok)
	await fs.unlinkSync('out.png')
	}
	break
case 'tts':
	const gtts = require( 'node-gtts')
	function tts(text, lang = 'id') {
	// console.log(lang, text)
	return new Promise((resolve, reject) => {
	try {
	let tts = gtts(lang)
	let filePath =  (1 * new Date) + '.mp3'
	tts.save(filePath, text, () => {
	resolve(fs.readFileSync(filePath))
	fs.unlinkSync(filePath)
	})
	} catch (e) { reject(e) }
	})
	}
	
	const defaultLang = 'id'
	
	
	let lang = args[0]
	let text = args.slice(1).join(' ')
	if ((args[0] || '').length !== 2) {
	lang = defaultLang
	text = args.join(' ')
	}
	if (!text && m.quoted?.text) text = m.quoted.text
	
	let ras
	try { ras = await tts(text, lang) }
	catch (e) {
	m.reply(e + '')
	text = args.join(' ')
	if (!text) setReply( `Use example ${prefix}${command} en hello world`)
	ras = await tts(text, defaultLang)
	} finally {
	if (ras) ehz.sendMedia(from, ras, m, {caption: "Nih"})
	//conn.sendFile(m.chat, res, 'tts.opus', null, m, true)
	}
	
	break
case 'hentaivid':{
setReply(mess.wait)
async function hentai() {
return new Promise((resolve, reject) => {
const page = Math.floor(Math.random() * 1153)
axios.get('https://sfmcompile.club/page/'+page)
.then((data) => {
const $ = cheerio.load(data.data)
const hasil = []
$('#primary > div > div > ul > li > article').each(function (a, b) {
hasil.push({
title: $(b).find('header > h2').text(),
link: $(b).find('header > h2 > a').attr('href'),
 category: $(b).find('header > div.entry-before-title > span > span').text().replace('in ', ''),
share_count: $(b).find('header > div.entry-after-title > p > span.entry-shares').text(),
views_count: $(b).find('header > div.entry-after-title > p > span.entry-views').text(),
type: $(b).find('source').attr('type') || 'image/jpeg',
video_1: $(b).find('source').attr('src') || $(b).find('img').attr('data-src'),
video_2: $(b).find('video > a').attr('href') || ''
})
})
resolve(hasil)
})
})
}
let ah = await hentai()
let nano = await pickRandom(ah)
ehz.sendMessage(from,{caption: 'Dosa Tanggung  Sendiri Dah',video:{url: nano.video_1}},{quoted:m})


}
break     
case  'jjmeryani':{
setReply(mess.wait)
let kaydt = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/meryani.json')
let hayu = kaydt[Math.floor(Math.random() * kaydt.length)];
ehz.sendMessage(m.chat,{video:{url:hayu},caption:`nih kak🗿`},{quoted: m})
}
break 

// ===================PRimbon====== //
case 'bisakah':{
if (!isGroup) return m.reply('Kusus group')
const bisakah = body.slice(0)
const bisa =['BISA','Tidak Bisa','Oh tentu saja bisa dong','Udah dari lahir dia bisa kaya gitu kak 😂˜„','Oh tentu saja tidak bisa','Wuih bisa bisa','Ga mao jawab ah lu wibu','Tentu saja bisa eh tapi boong awokawok ','Engga engga dia ga bisa','Enggaklah','Aku ga mao jawbab 😆™‚','Rahasia dong','Ulangi Tod gua ga paham','Mana gua tau anjir']
const keh = bisa[Math.floor(Math.random() * bisa.length)]
ehz.sendMessage(from, { contextInfo: { externalAdReply: { showAdAttribution: true,
title: `${week} , ${calender}⌟`,previewType:"PHOTO",thumbnail: its,sourceUrl: `https://www.instagram.com/Rashyadhoanx`,}
}, text: '*Pertanyaan : '+bisakah+'*\n\n*Jawaban :* '+ keh }, { quoted: m })
}
break
case 'gimana':
case 'gimanadong':
case 'bagaimanakah':{
if (!isGroup) return m.reply('Kusus group')
const bagaimanakah = body.slice(0)
const bagai =['Kita Kenal?','Nanya Terus deh','Tidak Tahu','Gua tabok boleh ?','Cari Aja Sendiri','Kurang Tahu','Mana Saya Tahu, Saya kan ikan','Hah kamu tanya sama aku trus aku tanya ke siapa dong','Whahahaha ga tau 😑']
const mana = bagai[Math.floor(Math.random() * bagai.length)]
ehz.sendMessage(from, { contextInfo: { externalAdReply: { showAdAttribution: true,
title: `${week} , ${calender}ㅤㅤㅤㅤㅤㅤㅤㅤㅤ`,body:`⌜ ${ucapanWaktu} ⌟`,previewType:"PHOTO",thumbnail: its,sourceUrl: `https://www.instagram.com/Rashyadhoanx`,}
}, text: '*Pertanyaan : '+bagaimanakah+'*\n\n*Jawaban :* '+ mana}, { quoted: m })
}
break
case 'apakah':{
if (!isGroup) return m.reply('Kusus group')
const apakah = body.slice(0)
const apa =['iya dong jelas itu','Tidak lah','Oh tentu saja tidak','Ya mana saya tau kok tanya saya','Rahasia dong','ga usah di tanya emang udah kaya gitu dia','Au ah mending mandi','Bentar aku lagi berak','Knpa emang kamu suka sama dia yak ??','Haha mna mungkin 👻']
const kah = apa[Math.floor(Math.random() * apa.length)]
ehz.sendMessage(from, { contextInfo: { externalAdReply: { showAdAttribution: true,
title: `${week} , ${calender}ㅤㅤㅤㅤㅤㅤㅤㅤㅤ`,body:`⌜ ${ucapanWaktu} ⌟`,previewType:"PHOTO",thumbnail: its,sourceUrl: `wa.me/6281316643491`,}
}, text: '*Pertanyaan : '+apakah+'*\n\n*Jawaban :* '+ kah}, { quoted: m })
}
break
case 'kapankah':{
if (!isGroup) return m.reply('Kusus group')
const kapankah = body.slice(0)
const kapan =['Besok','Lusa','1 Hari Lagi','2 Hari Lagi','3 Hari Lagi','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','7 Bulan Lagi','8 Bulan Lagi','9 Bulan Lagi','10 Bulan Lagi','11 Bulan Lagi','1 Tahun lagi','2 Tahun lagi','3 Tahun lag0i','4 Tahun lagi','5 Tahun lagi','6 Tahun lagi','7 Tahun lagi','8 Tahun lagi','9 Tahun lagi','10 Tahun lagi']
const koh = kapan[Math.floor(Math.random() * kapan.length)]
ehz.sendMessage(from, { contextInfo: { externalAdReply: { showAdAttribution: true,
title: `${week} , ${calender}ㅤㅤㅤㅤㅤㅤㅤㅤㅤ`,body:`⌜ ${ucapanWaktu} ⌟`,previewType:"PHOTO",thumbnail: its,sourceUrl: `https://www.instagram.com/Rashyadhoanx`,}
}, text: '*Pertanyaan : '+kapankah+'*\n\n*Jawaban :* '+ koh}, { quoted: m })
}
break
    case 'watakcek': case 'cekwatak':
const watak = body.slice(0)
const wa =['Penyayang','Pemurah','Pemarah','Pemaaf','Penurut','Baik','Baperan','Baik Hati','penyabar','UwU','top deh, pokoknya','Suka Membantu']
const tak = wa[Math.floor(Math.random() * wa.length)]
ehz.sendMessage(from, { text: 'Pertanyaan : *'+watak+'*\n\nJawaban : '+ tak}, { quoted: fkontak })
break				
    case 'hobbycek': case 'cekhobby':
const hobby = body.slice(0)
const hob =['Memasak','Membantu Atok','Mabar','Nobar','Sosmedtan','Membantu Orang lain','Nonton Anime','Nonton Drakor','Naik Motor','Nyanyi','Menari','Bertumbuk','Menggambar','Foto fotoan Ga jelas','Maen Game','Berbicara Sendiri']
const by = hob[Math.floor(Math.random() * hob.length)]
ehz.sendMessage(from, { text: 'Pertanyaan : *'+hobby+'*\n\nJawaban : '+ by}, { quoted: fkontak })
break
case 'cebelapaimutciaku': case 'seberapaimutsiaku':{
if (!isGroup) return m.reply('Kusus group')
const edgar = body.slice(0)
const nanya =['*79%*\n\nImut Banget Loh Kawai><','*15%*\n\nKamu imut kata mamakmu:v🗿','*30%*\n\nMene Ketehe Kok Tanya saya\nMinimal Mandi🗿','*28%*\n\nIya deh Cipaling Imut;)','*100%*\n\nPap imutnya dulu dong:v😘']
const pret = nanya[Math.floor(Math.random() * nanya.length)]
ehz.sendMessage(from, { contextInfo: { externalAdReply: { showAdAttribution: true,
title: `RangelChan`,body:`⌜ ${ucapanWaktu} ⌟`,previewType:"PHOTO",thumbnail: its,sourceUrl: `https://www.instagram.com/Rashyadhoanx`,}
}, text: '*Pertanyaan : '+edgar+'*\n\n*Jawaban :* '+ pret}, { quoted: m })
}
break
    case 'cekmemek':
			case 'cekmeki':
				 if (!isGroup) return onlyGroup()
if (!q) return m.reply('tag temanmu!')
				const persengayy = body.slice(0)
          const gay = ["*Udah Ga Perawan:v*\n• Warna Item🙈\n• Bulu Lebat\n• Katanya Polos Ko Lima Jari Lolos Chuackk","*Masih Perawan*\n• Warna Pink🤤\n• Tidak Berbulu\n• Wah Yang ini Buat Owner Ku Aja😋","*Bjir Bau 😵‍💫*\n\n• Kang Colmek\n• Sangat Lebat:v\n• Ishh Sarang Jin Itu😵","*Masih Perawan*\n• Warna Putih Mati\n• Masih Polos\n• Sepertinya Anda Butuh Kehangatan Dari Owner ku🥸 ","*Meki nya Semu Coklat*\n • Korban Pemerkosaan 😑\n• Lu Sih Main Ma Kumpulan Cowo Sengklek\n• Sebaiknya Jan Terlalu Gegabah 🤧","*Normal Seperti Biasanya*\n• Wuanjay Ko Bulu Nya Pada Kriput🙈\n• Ternyata Oh Ternyata Kamu Suka Lesby🫤","*Bahaya Noh Gan*\n• Udah Kena Virus\n• Kalo wik wik Ntar Ke Patil Cowoknya\n😶‍🌫️Takut BerNanah Kelamin Ku ntarr😬","*Lah Ireng Amat bjirr*\n• Hati² Sama Ni Orang Beneran Dah\n• Jangankan Pria Hewan Pun Dia Layani🫣","*74%*\n*Astagfirullah Kabur Gan🏃🌬️*"]
				const kl = gay[Math.floor(Math.random() * gay.length)]
    ehz.sendMessage(from, { contextInfo: { externalAdReply: { showAdAttribution: true,
title: `${week} , ${calender}ㅤㅤㅤㅤㅤㅤㅤㅤㅤ`,body:`⌜ ${ucapanWaktu} ⌟`,previewType:"PHOTO",thumbnail: its,sourceUrl: `https://www.instagram.com/Rashyadhoanx`,}
}, text :'Hasil Dari: *'+persengayy+'*\n\nJawaban : '+kl}, { quoted: fkontak })
				break  

			case 'cekkontol':
				if (!isGroup) return onlyGroup()
if (!q) return setReply('Mana Nama?')
				
	const persenbucin = body.slice (0)
    const bucin =
          ["Hadehh🤦\n[ Dah Item Bauk Lagi ishh🤮 ]","9%\n\nMasih Kecil Ini Mah Ketutup Ama bulu komt nya🗿 Ae","Nakk Masih Kecil","28%\n\nYoalahh hmm","34%\n\nMayan Lah","48%\n\nGatau","59%\n\nBiasa Kang Coli Mah Tityd nya Item🗿","apacoba\nKasian Mana Masih Muda","itu tityd apa terong"," Ya Ampun"]
				const ehan = bucin[Math.floor(Math.random() * bucin.length)]
    ehz.sendMessage(from, { contextInfo: { externalAdReply: { showAdAttribution: true,
title: `${week} , ${calender}ㅤㅤㅤㅤㅤㅤㅤㅤㅤ`,body:`⌜ ${ucapanWaktu} ⌟`,previewType:"PHOTO",thumbnail: its,sourceUrl: `https://www.instagram.com/Rashyadhoanx`,}
}, 
text : 'cekkomtlo🗿: *'+persenbucin+'*\n\nJawaban : '+ ehan}, { quoted: fkontak })
				break 

  case 'cekme':{
if (!isGroup) return setReply(mess.only.group)
let ppimg = await ehz.profilePictureUrl(sender, 'image').catch(_ => 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg')
const sifat =['Baek','Jutek','Ngeselin','Bobrok','Pemarah','Sopan','Beban','Sangean','Cringe','Pembohong']
const hoby =['Memasak','Membantu Atok','Mabar','Nobar','Sosmedtan','Membantu Orang lain','Nonton Anime','Nonton Drakor','Naik Motor','Nyanyi','Menari','Bertumbuk','Menggambar','Foto fotoan Ga jelas','Maen Game','Berbicara Sendiri']
const bukcin =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
const arp =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
const cakep =['Iyaa cakep','Maaf Kak, Banyak² Perawatan Ya','Jelek ajg','Cakep banget😍','❌','✔️']
const wetak=['Penyayang','Pemurah','Pemarah','Pemaaf','Penurut','Baik','Baperan','Baik Hati','penyabar','UwU','top deh, pokoknya','Suka Membantu']
const baikk =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
const bhuruk =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
const cerdhas =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
const berhani =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
const mengheikan =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
const suka = ['Makan','Tidur','Main Game','Sesama Jenis','Binatang',`Seseorang Yang ${pushname} Sukai`,'Belajar','Ibadah','Diri Sendiri']
const sipat = sifat[Math.floor(Math.random() * sifat.length)]
const biho = hoby[Math.floor(Math.random() * hoby.length)]
const bhucin = bukcin[Math.floor(Math.random() * bukcin.length)]
const senga = arp[Math.floor(Math.random() * arp.length)]
const chakep = cakep[Math.floor(Math.random() * cakep.length)]
const watak = wetak[Math.floor(Math.random() * wetak.length)]
const baik = baikk[Math.floor(Math.random() * baikk.length)]
const burug = bhuruk[Math.floor(Math.random() * bhuruk.length)]
const cerdas = cerdhas[Math.floor(Math.random() * cerdhas.length)]
const berani = berhani[Math.floor(Math.random() * berhani.length)]
const takut = mengheikan[Math.floor(Math.random() * mengheikan.length)]
const gai = suka[Math.floor(Math.random() * suka.length)]

let its = await getBuffer (ppimg)
let teks = `─────〈〈 *PRIVATE CHECK* 〉〉─────

∘ *Nama :*  ${pushname}
∘ *Sifat :*  ${sipat}
∘ *Bucin :*  ${bhucin}%
∘ *Cakep :*  ${chakep}
∘ *Watak :*  ${watak}
∘ *Hobby :*  ${biho}
∘ *Ketakutan :*  ${takut}%
∘ *Keberanian :*  ${berani}%
∘ *Kecerdasan :*  ${cerdas}%
∘ *Akhlak Baik :*  ${baik}%
∘ *Akhlak Buruk :*  ${burug}%
∘ *Menyukai :* ${gai} `
ehz.sendMessage(from, { contextInfo: { externalAdReply: {showAdAttribution: true,
title: `${week} , ${calender}ㅤㅤㅤㅤㅤㅤㅤㅤㅤ`,body:`⌜ ${ucapanWaktu} ⌟`,previewType:"PHOTO",thumbnail: its,sourceUrl: `https://tinyurl.com/2p7fks3c`,}
}, image: its, caption: teks}, { quoted: m })
}

break
  case 'artinama': {
if (!q) return setReply( `Example : ${prefix + command} Rashya Dhoanx`)
let anu = await primbon.arti_nama(q)
if (anu.status == false) return m.reply(anu.message)
let teks = `
∘ *Nama :* ${anu.message.nama}
∘ *Arti :* ${anu.message.arti}
∘ *Catatan :* ${anu.message.catatan}`
setReply(teks)
}
break	 
    
 // ===================================== //
case 'artimimpi': case 'tafsirmimpi': {
if (!q) return setReply( `Example : ${prefix + command} belanja`)
let anu = await primbon.tafsir_mimpi(q)
if (anu.status == false) return m.reply(anu.message)
let teks = `
• *Mimpi :* ${anu.message.mimpi}
• *Arti :* ${anu.message.arti}
• *Solusi :* ${anu.message.solusi}`
setReply(teks)
}
break
 case 'pasangan': {
if (!q) return setReply( `Example : ${prefix + command} Rashya|Angel`)
let [nama1, nama2] = q.split`|`
let anu = await primbon.kecocokan_nama_pasangan(nama1, nama2)
if (anu.status == false) return m.reply(anu.message)
let teks = `
• *Nama Anda :* ${anu.message.nama_anda}
• *Nama Pasangan :* ${anu.message.nama_pasangan}
• *Sisi Positif :* ${anu.message.sisi_positif}
• *Sisi Negatif :* ${anu.message.sisi_negatif}`
setReply(teks)
}
break   
case 'ramalancinta': case 'ramalcinta': {
if (!q) return setReply( `Example : ${prefix + command} Rashya, 28, 6, 2004, angel, 16, 11, 2004`)
let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = q.split`,`
let anu = await primbon.ramalan_cinta(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
if (anu.status == false) return m.reply(anu.message)
let teks = `
• *Nama Anda :* ${anu.message.nama_anda.nama}
• *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}
• *Nama Pasangan :* ${anu.message.nama_pasangan.nama}
• *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}
• *Sisi Positif :* ${anu.message.sisi_positif}
• *Sisi Negatif :* ${anu.message.sisi_negatif}
• *Catatan :*
${anu.message.catatan}`
setReply(teks)
}
break   
case 'kecocokannama': 
case 'cocoknama': {
if (!q) return setReply( `Example : ${prefix + command} Rashya, 28, 6, 2004`)
let [nama, tgl, bln, thn] = q.split`,`
let anu = await primbon.kecocokan_nama(nama, tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
let teks = `
• *Nama :* ${anu.message.nama}
• *Lahir :* ${anu.message.tgl_lahir}
• *Life Path :* ${anu.message.life_path}
• *Destiny :* ${anu.message.destiny}
• *Destiny Desire :* ${anu.message.destiny_desire}
• *Personality :* ${anu.message.personality}
• *Persentase :* ${anu.message.persentase_kecocokan}`
setReply(teks)
}
break 
    case 'kecocokanpasangan':
case 'cocokpasangan':
case 'pasangan': {
if (!q) return setReply( `Example : ${prefix + command} Dika|Novia`)
let [nama1, nama2] = q.split`|`
let anu = await primbon.kecocokan_nama_pasangan(nama1, nama2)
if (anu.status == false) return m.reply(anu.message)
let teks = `
• *Nama Anda :* ${anu.message.nama_anda}
• *Nama Pasangan :* ${anu.message.nama_pasangan}
• *Sisi Positif :* ${anu.message.sisi_positif}
• *Sisi Negatif :* ${anu.message.sisi_negatif}`
setReply(teks)
}
break
case 'jadiannikah': {
if (!q) return setReply( `Example : ${prefix + command} 6, 12, 2020`)
let [tgl, bln, thn] = q.split`,`
let anu = await primbon.tanggal_jadian_pernikahan(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
let teks = `
• *Tanggal Pernikahan :* ${anu.message.tanggal}
• *karakteristik :* ${anu.message.karakteristik}`
setReply(teks)
}
break
case 'sifatusaha': {
if (!q) return setReply( `Example : ${prefix + command} 28, 12, 2021`)
let [tgl, bln, thn] = q.split`,`
let anu = await primbon.sifat_usaha_bisnis(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
let teks = `
• *Lahir :* ${anu.message.hari_lahir}
• *Usaha :* ${anu.message.usaha}`
setReply(teks)
}
break
    case 'rejeki': 
case 'rezeki': {
if (!q) return setReply( `Example : ${prefix + command} 7, 7, 2005`)
let [tgl, bln, thn] = q.split`,`
let anu = await primbon.rejeki_hoki_weton(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
let teks = `
• *Lahir :* ${anu.message.hari_lahir}
• *Rezeki :* ${anu.message.rejeki}
• *Catatan :* ${anu.message.catatan}`
setReply(teks)
}
break
case 'pekerjaan':  {
if (!q) return setReply( `Example : ${prefix + command}  7, 7, 2005`)
let [tgl, bln, thn] = q.split`,`
let anu = await primbon.pekerjaan_weton_lahir(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
let teks = `
• *Lahir :* ${anu.message.hari_lahir}
• *Pekerjaan :* ${anu.message.pekerjaan}
• *Catatan :* ${anu.message.catatan}`
setReply(teks)
}
break
case 'ramalnasib': 
case 'nasib': {
if (!q) return setReply( `Example : ${prefix + command} 7, 7, 2005`)
let [tgl, bln, thn] = q.split`,`
let anu = await primbon.ramalan_nasib(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
let teks = `
• *Analisa :* ${anu.message.analisa}
• *Angka Akar :* ${anu.message.angka_akar}
• *Sifat :* ${anu.message.sifat}
• *Elemen :* ${anu.message.elemen}
• *Angka Keberuntungan :* ${anu.message.angka_keberuntungan}`
setReply(teks)
}
break 
case 'penyakit': {
if (!q) return setReply( `Example : ${prefix + command} 7, 7, 2005`)
let [tgl, bln, thn] = q.split`,`
let anu = await primbon.cek_potensi_penyakit(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
let teks = `
• *Analisa :* ${anu.message.analisa}
• *Sektor :* ${anu.message.sektor}
• *Elemen :* ${anu.message.elemesektorn}
• *Catatan :* ${anu.message.catatan}`
setReply(teks)
}
break
case 'artitarot': 
case 'tarot': {
if (!q) return setReply( `Example : ${prefix + command} 7, 7, 2005`)
let [tgl, bln, thn] = q.split`,`
let anu = await primbon.arti_kartu_tarot(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
let teks = `
• *Lahir :* ${anu.message.tgl_lahir}
• *Simbol Tarot :* ${anu.message.simbol_tarot}
• *Arti :* ${anu.message.arti}
• *Catatan :* ${anu.message.catatan}`
setReply(teks)
}
break
case 'fengshui': {
if (!q) return setReply( `Example : ${prefix + command} Rangel, 1, 2005\n\nNote : ${prefix + command} Nama, gender, tahun lahir\nGender : 1 untuk laki-laki & 2 untuk perempuan`)
let [nama, gender, tahun] = q.split`,`
let anu = await primbon.perhitungan_feng_shui(nama, gender, tahun)
if (anu.status == false) return m.reply(anu.message)
let teks = `
• *Nama :* ${anu.message.nama} 
• *Lahir :* ${anu.message.tahun_lahir}
• *Gender :* ${anu.message.jenis_kelamin}
• *Angka Kua :* ${anu.message.angka_kua}
• *Kelompok :* ${anu.message.kelompok}
• *Karakter :* ${anu.message.karakter}
• *Sektor Baik :* ${anu.message.sektor_baik}
• *Sektor Buruk :* ${anu.message.sektor_buruk}`
setReply(teks)
}
break
case 'haribaik': {
if (!q) return setReply( `Example : ${prefix + command} 7, 7, 2005`)
let [tgl, bln, thn] = q.split`,`
let anu = await primbon.petung_hari_baik(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
let teks = `
• *Lahir :* ${anu.message.tgl_lahir}
•™*Kala Tinantang :* ${anu.message.kala_tinantang}
• *Info :* ${anu.message.info}
• *Catatan :* ${anu.message.catatan}`
setReply(teks)
}
break
case 'harisangar': 
case 'taliwangke': {
if (!q) return setReply( `Example : ${prefix + command} 7, 7, 2005`)
let [tgl, bln, thn] = q.split`,`
let anu = await primbon.hari_sangar_taliwangke(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
let teks = `
• *Lahir :* ${anu.message.tgl_lahir}
• *Hasil :* ${anu.message.result}
• *Info :* ${anu.message.info}
• *Catatan :* ${anu.message.catatan}`
setReply(teks)
}
break
case 'harisial': {
if (!q) return setReply( `Example : ${prefix + command} 7, 7, 2005`)
let [tgl, bln, thn] = q.split`,`
let anu = await primbon.primbon_hari_naas(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
let teks = `
• *Hari Lahir :* ${anu.message.hari_lahir}
• *Tanggal Lahir :* ${anu.message.tgl_lahir}
• *Hari Naas :* ${anu.message.hari_naas}
• *Info :* ${anu.message.catatan}
• *Catatan :* ${anu.message.info}`
setReply(teks)
}
break
case 'harinaga': {
if (!q) return setReply( `Example : ${prefix + command} 7, 7, 2005`)
let [tgl, bln, thn] = q.split`,`
let anu = await primbon.rahasia_naga_hari(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
let teks = `
• *Hari Lahir :* ${anu.message.hari_lahir}
• *Tanggal Lahir :* ${anu.message.tgl_lahir}
• *Arah Naga Hari :* ${anu.message.arah_naga_hari}
• *Catatan :* ${anu.message.catatan}`
setReply(teks)
}
break
case 'arahrejeki': 
case 'arahrezeki': {
if (!q) return setReply( `Example : ${prefix + command} 7, 7, 2005`)
let [tgl, bln, thn] = q.split`,`
let anu = await primbon.primbon_arah_rejeki(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
let teks = `
• *Hari Lahir :* ${anu.message.hari_lahir}
• *tanggal Lahir :* ${anu.message.tgl_lahir}
• *Arah Rezeki :* ${anu.message.arah_rejeki}
• *Catatan :* ${anu.message.catatan}`
setReply(teks)
}
break
case 'peruntungan': {
if (!q) return setReply( `Example : ${prefix + command} Rashya, 28, 6, 2004, 2022\n\nNote : ${prefix + command} Nama, tanggal lahir, bulan lahir, tahun lahir, untuk tahun`)
let [nama, tgl, bln, thn, untuk] = q.split`,`
let anu = await primbon.ramalan_peruntungan(nama, tgl, bln, thn, untuk)
if (anu.status == false) return m.reply(anu.message)
let teks = `
• *Nama :* ${anu.message.nama}
• *Lahir :* ${anu.message.tgl_lahir}
• *Peruntungan Tahun :* ${anu.message.peruntungan_tahun}
• *Hasil :* ${anu.message.result}
• *Catatan :* ${anu.message.catatan}`
}
break
case 'weton': 
case 'wetonjawa': {
if (!q) return setReply( `Example : ${prefix + command} 7, 7, 2005`)
let [tgl, bln, thn] = q.split`,`
let anu = await primbon.weton_jawa(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
let teks = `
• *Tanggal :* ${anu.message.tanggal}
• *Jumlah Neptu :* ${anu.message.jumlah_neptu}
• *Watak Hari :* ${anu.message.watak_hari}
• *Naga Hari :* ${anu.message.naga_hari}
• *Jam Baik :* ${anu.message.jam_baik}
• *Watak Kelahiran :* ${anu.message.watak_kelahiran}`
setReply(teks)
}
break
case 'karakter': {
if (!q) return setReply( `Example : ${prefix + command} Rashya, 28, 6, 2004`)
let [nama, tgl, bln, thn] = q.split`,`
let anu = await primbon.sifat_karakter_tanggal_lahir(nama, tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
let teks = `
• *Nama :* ${anu.message.nama}
• *Lahir :* ${anu.message.tgl_lahir}
• *Garis Hidup :* ${anu.message.garis_hidup}`
setReply(teks)
}
break
case 'keberuntungan': {
if (!q) return setReply( `Example : ${prefix + command} Rashya, 28, 6, 2004`)
let [nama, tgl, bln, thn] = q.split`,`
let anu = await primbon.potensi_keberuntungan(nama, tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
let teks = `
• *Nama :* ${anu.message.nama}
• *Lahir :* ${anu.message.tgl_lahir}
• *Hasil :* ${anu.message.result}`
setReply(teks)
}
break
case 'masasubur': {
if (!q) return setReply( `Example : ${prefix + command} 12, 1, 2022, 28\n\nNote : ${prefix + command} hari pertama menstruasi, siklus`)
let [tgl, bln, thn, siklus] = q.split`,`
let anu = await primbon.masa_subur(tgl, bln, thn, siklus)
if (anu.status == false) return m.reply(anu.message)
let teks = `
•  *Hasil :* ${anu.message.result}
•  *Catatan :* ${anu.message.catatan}`
setReply(teks)
}
break
  case 'zodiak': 
case 'zodiac': {
if (!q) return setReply( `Example : ${prefix + command} 7 7 2005`)
let zodiak = [
                    ["capricorn", new Date(1970, 0, 1)],
                    ["aquarius", new Date(1970, 0, 20)],
                    ["pisces", new Date(1970, 1, 19)],
                    ["aries", new Date(1970, 2, 21)],
                    ["taurus", new Date(1970, 3, 21)],
                    ["gemini", new Date(1970, 4, 21)],
                    ["cancer", new Date(1970, 5, 22)],
                    ["leo", new Date(1970, 6, 23)],
                    ["virgo", new Date(1970, 7, 23)],
                    ["libra", new Date(1970, 8, 23)],
                    ["scorpio", new Date(1970, 9, 23)],
                    ["sagittarius", new Date(1970, 10, 22)],
                    ["capricorn", new Date(1970, 11, 22)]
].reverse()
function getZodiac(month, day) {
let d = new Date(1970, month - 1, day)
return zodiak.find(([_,_d]) => d >= _d)[0]
}
let date = new Date(q)
if (date == 'Invalid Date') throw date
let d = new Date()
let [tahun, bulan, tanggal] = [d.getFullYear(), d.getMonth() + 1, d.getDate()]
let birth = [date.getFullYear(), date.getMonth() + 1, date.getDate()]
let zodiac = await getZodiac(birth[1], birth[2])
let anu = await primbon.zodiak(zodiac)
if (anu.status == false) return m.reply(anu.message)
let teks = `
∘ *Zodiak :* ${anu.message.zodiak}
∘ *Nomor :* ${anu.message.nomor_keberuntungan}
∘ *Aroma :* ${anu.message.aroma_keberuntungan}
∘ *Planet :* ${anu.message.planet_yang_mengitari}
∘ *Bunga :* ${anu.message.bunga_keberuntungan}
∘ *Warna :* ${anu.message.warna_keberuntungan} 
∘ *Batu :* ${anu.message.batu_keberuntungan}
∘ *Elemen :* ${anu.message.elemen_keberuntungan}
∘ *Pasangan Zodiak :* ${anu.message.pasangan_zodiak}
∘ *Catatan :* ${anu.message.catatan}`
setReply(teks)
}
break
   

case 'wangy':
              if (!q) return setReply('query')
              let qq = q.toUpperCase()
              let awikwok = `${qq} ${qq} ${qq} ❤️ ❤️ ❤️ WANGY WANGY WANGY WANGY HU HA HU HA HU HA, aaaah baunya rambut ${qq} wangyy aku mau nyiumin aroma wangynya ${qq} AAAAAAAAH ~ Rambutnya.... aaah rambutnya juga pengen aku elus-elus ~~ AAAAAH ${qq} keluar pertama kali di anime juga manis ❤️ ❤️ ❤️ banget AAAAAAAAH ${qq} AAAAA LUCCUUUUUUUUUUUUUUU............ ${qq} AAAAAAAAAAAAAAAAAAAAGH ❤️ ❤️ ❤️apa ? ${qq} itu gak nyata ? Cuma HALU katamu ? nggak, ngak ngak ngak ngak NGAAAAAAAAK GUA GAK PERCAYA ITU DIA NYATA NGAAAAAAAAAAAAAAAAAK PEDULI BANGSAAAAAT !! GUA GAK PEDULI SAMA KENYATAAN POKOKNYA GAK PEDULI. ❤️ ❤️ ❤️ ${qq} gw ... ${qq} di laptop ngeliatin gw, ${qq} .. kamu percaya sama aku ? aaaaaaaaaaah syukur ${q} aku gak mau merelakan ${qq} aaaaaah ❤️ ❤️ ❤️ YEAAAAAAAAAAAH GUA MASIH PUNYA ${qq} SENDIRI PUN NGGAK SAMA AAAAAAAAAAAAAAH`
              setReply(awikwok)
              break
//========= MENU SKULL =========//
case 'kalkulator':{
	let text12 = `
╭─────────────────✧
│• tambah
│• kali
│• bagi
│• kurang
╰─────────────────✧`
ehz.sendMessage(from, {text: text12}, {quoted: m})
}
break
case 'tambah':{
if (!q) return setReply(`Gunakan dengan cara ${command} *angka* *angka*\n\n_Contoh_\n\n${command} 1 2`)
var num_one = q.split(' ')[0]
var num_two = q.split(' ')[1]
if (!num_one) return setReply(`Gunakan dengan cara ${prefix+command} *angka* *angka*\n\n_Contoh_\n\n${prefix+command} 1 2`)
if (!num_two) return setReply(`Gunakan dengan cara ${prefix+command} *angka* *angka*\n\n_Contoh_\n\n${prefix+command} 1 2`)
var nilai_one = Number(num_one)
var nilai_two = Number(num_two)
setReply(`${nilai_one + nilai_two}`)
}
break
case 'kurang':{
if (!q) return setReply(`Gunakan dengan cara ${command} *angka* *angka*\n\n_Contoh_\n\n${command} 1 2`)
var num_one = q.split(' ')[0]
var num_two = q.split(' ')[1]
if (!num_one) return setReply(`Gunakan dengan cara ${prefix+command} *angka* *angka*\n\n_Contoh_\n\n${prefix+command} 1 2`)
if (!num_two) return setReply(`Gunakan dengan cara ${prefix+command} *angka* *angka*\n\n_Contoh_\n\n${prefix+command} 1 2`)
var nilai_one = Number(num_one)
var nilai_two = Number(num_two)
setReply(`yaitu ${nilai_one - nilai_two}`)
}
break
case 'kali':{
if (!q) return setReply(`Gunakan dengan cara ${command} *angka* *angka*\n\n_Contoh_\n\n${command} 1 2`)
var num_one = q.split(' ')[0]
var num_two = q.split(' ')[1]
if (!num_one) return setReply(`Gunakan dengan cara ${prefix+command} *angka* *angka*\n\n_Contoh_\n\n${prefix+command} 1 2`)
if (!num_two) return setReply(`Gunakan dengan cara ${prefix+command} *angka* *angka*\n\n_Contoh_\n\n${prefix+command} 1 2`)
var nilai_one = Number(num_one)
var nilai_two = Number(num_two)
setReply(`yaitu ${nilai_one * nilai_two}`)
}
break
case 'bagi':{
if (!q) return setReply(`Gunakan dengan cara ${prefix+command} *angka* *angka*\n\n_Contoh_\n\n${command} 1 2`)
var num_one = q.split(' ')[0]
var num_two = q.split(' ')[1]
if (!num_one) return setReply(`Gunakan dengan cara ${prefix+command} *angka* *angka*\n\n_Contoh_\n\n${prefix+command} 1 2`)
if (!num_two) return setReply(`Gunakan dengan cara ${prefix+command} *angka* *angka*\n\n_Contoh_\n\n${prefix+command} 1 2`)
var nilai_one = Number(num_one)
var nilai_two = Number(num_two)
setReply(`yaitu ${nilai_one / nilai_two}`)
}
break
//========== INFO BOT ============//
 case 'premium': case 'buyprem': {
let anu = `𝗨𝗦𝗘𝗥 𝗣𝗥𝗘𝗠𝗜𝗨𝗠

╭───❒「  *𝘉𝘶𝘺 𝘗𝘳𝘦𝘮* 」
│ ╭୧⍤⃝───────────┈◦•◦❥•◦
│ │•⟢.pengguna baru 10k
│ │•⟢.masa aktif 500 Hari 
│ │•⟢.pengguna bru 25k
│ │•⟢.masa aktip 1500 Hari
│ ꒰⚘݄꒱₊___________________˓˓ ⍥⃝⃝ ˒˒
╰─────────────────────⁛⸙
`+readmore+`
╭───❒「  *𝘍𝘪𝘵𝘶𝘳 𝘗𝘳𝘦𝘮* 」
│ ╭୧⍤⃝───────────┈◦•◦❥•◦
│ │•⟢.limit tanpa batas
│ │•⟢.Fitur premium Terbuka
│ │•⟢.Nsfw Terbuka 🙆
│ │•⟢.Dll
│ ꒰⚘݄꒱₊___________________˓˓ ⍥⃝⃝ ˒˒
╰─────────────────────⁛⸙

𝗡𝗢𝗧𝗘 : 

Kegunaannya untuk Fitur Premium
Limit tanpa batas (Unlimited) .

jika minat chat owner ini ${nomerOwner}
`
ehz.relayMessage(m.chat,  {
    requestPaymentMessage: {
      currencyCodeIso4217: 'INR',
      amount1000: 1234567,
      requestFrom: m.sender,
      noteMessage: {
      extendedTextMessage: {
      text: anu,
      contextInfo: {
      externalAdReply: {
      showAdAttribution: true
      }}}}}}, {})
      }
      break
 case 'ping':
            case 'botstatus':
            case 'statusbot': {
                const used = process.memoryUsage()
                const cpus = os.cpus().map(cpu => {
                    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
                    return cpu
                })
                const cpu = cpus.reduce((last, cpu, _, {
                    length
                }) => {
                    last.total += cpu.total
                    last.speed += cpu.speed / length
                    last.times.user += cpu.times.user
                    last.times.nice += cpu.times.nice
                    last.times.sys += cpu.times.sys
                    last.times.idle += cpu.times.idle
                    last.times.irq += cpu.times.irq
                    return last
                }, {
                    speed: 0,
                    total: 0,
                    times: {
                        user: 0,
                        nice: 0,
                        sys: 0,
                        idle: 0,
                        irq: 0
                    }
                })
                let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
                respon = `
Kecepatan Respon ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
`.trim()
                await ehz.sendMessage(m.chat, {
                    text: respon,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: 'STATUS SERVER',
                            body: `${latensi.toFixed(4)} Second`,
                            thumbnailUrl: 'https://telegra.ph/file/726d9c4068efaa72af0cd.jpg',
                            sourceUrl: '-',
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {
                    quoted: m
                })
            }
            break
case 'totalfitur':{ 
setReply(`_TOTAL FITUR BOT CASE SAAT INI ${totalFitur()} FITUR_`)
}
break
case 'runtime':{
setReply(`*Rangel Aktif* ${runtime(process.uptime())}`)
}
break
case 'owner': {
const repf = await ehz.sendMessage(from, { 
contacts: { 
displayName: `${list.length} Kontak`, 
contacts: list }, contextInfo: {
forwardingScore: 9999999, 
isForwarded: true,
mentionedJid: [sender]
}}, { quoted: m })
ehz.sendMessage(from, { text : `Hai Kak @${sender.split("@")[0]}, Hii itu nomor owner ku jan spam yak:)`, contextInfo:{
forwardingScore: 9999999, 
isForwarded: true,
mentionedJid:[sender]
}}, { quoted: repf })
}
break
//========= SETTINGS ==========//
 
case 'setnamebot':
	if (!isOwner) return onlyOwner()
	setReply(`Berhasil mengubah nama bot ke ${q}`)
	fake = `${q}`
	break
case 'setbio':
{
if (!isOwner && !itsMe) return setReply("Khusus Owner")
if (!q) return setReply(`Kirim perintah ${prefix+command} nama\n\nContoh : ${command} sedang berak`)
await ehz.updateProfileStatus(q)
await setReply(`Berhasil mengganti status bio ke *${q}*`)
}
break
/*case 'setppbot':
                if (!isOwner) return setReply(mess.owner)
                if (!quoted) return setReply(`Kirim/newReply Image Dengan Caption ${prefix + command}`)
                if (!/image/.test(mime)) return setReply(`Kirim/newReply Image Dengan Caption ${prefix + command}`)
                if (/webp/.test(mime)) return setReply(`Kirim/newReply Image Dengan Caption ${prefix + command}`)
                var medis = await ehz.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
                if (args[0] == 'full') {
                    var {
                        img
                    } = await generateProfilePicture(medis)
                    await ehz.query({
                        tag: 'iq',
                        attrs: {
                            to: botNumber,
                            type: 'set',
                            xmlns: 'w:profile:picture'
                        },
                        content: [{
                            tag: 'picture',
                            attrs: {
                                type: 'image'
                            },
                            content: img
                        }]
                    })
                    fs.unlinkSync(medis)
                    setReply(mess.succes)
                } else {
                    var memeg = await ehz.updateProfilePicture(botNumber, {
                        url: medis
                    })
                    fs.unlinkSync(medis)
                    setReply(mess.succes)
                }
                break*/

//======= MENU RANDOM =======//
case 'cecan': case 'cogan': case 'hacker': case 'pubg': case 'boneka':
if (!isGroup) return onlyGroup()
setReply(mess.wait)
ehz.sendMessage(from, { image: { url: `https://api.zahwazein.xyz/randomimage/${command}?apikey=${api.angel}` } })
break
case 'Rashya': case '@6281316643491': case '6281316643491':
let oah = ' Ada apa kak itu nomor ayang ku mmmm><'
setReply(oah)
break
case 'jam':
  const currentTime = new Date();
  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  const formattedTime = `${hours}:${minutes < 10 ? '0' + minutes : minutes}`;
  ehz.sendText(sender, `Sekarang pukul ${formattedTime} WIB.`);
  break;
case 'wattpad': {
if (!isGroup) return onlyGroup()
if (!q) return setReply(`Example : ${prefix + command} selingkuh`)
setReply(mess.wait)
let res = await fetch(`https://api.betabotz.org/api/webzone/wattpad?query=${q}&apikey=2fbgCgOB`)
let data = await res.json()
            let teks = `Wattpad\n\n`
            for (let i of data.result){
teks += `*Judul* : ${i.judul}\n`
teks += `*Dibaca* : ${i.dibaca}×\n`
teks += `*Divote* : ${i.divote}×\n`
teks += `*Thumb* : ${i.thumb}\n`
teks += `*Link* : ${i.link}\n\n`
            }
setReply(teks)
            }
            break
case 'playstore':{
if (!isGroup) return onlyGroup()
            if (!q) return setReply(`Example : ${prefix + command} clash of clans`)
            setReply(mess.wait)
            let res = await fetch(`https://api.betabotz.org/api/search/playstore?app=${q}&apikey=2fbgCgOB`)
            let data = await res.json()
            let teks = `⭔ Playstore Search From : ${q}\n\n`
            for (let i of data.result) {
            teks += `⭔ Name : ${i.nama}\n`
            teks += `⭔ Link : ${i.link}\n`
            teks += `⭔ Developer : ${i.developer}\n`
            teks += `⭔ Link Developer : ${i.link_dev}\n\n──────────────────────\n`
            }
            setReply(teks)
            }
            break
				
case 'brainly':{
			if (!q) return m.reply(`Example: ${prefix + command} siapakah sukarno`)
			m.reply(mess.wait)
			var { data } = await axios.get(`https://api.lolhuman.xyz/api/brainly?apikey=${api.Lol}&query=${q}`)
			var ti  = 'Beberapa Pembahasan Dari Brainly :\n\n'
			for (var x of data.result) {
				ti  += `==============================\n`
				ti  += `\`\`\`Pertanyaan :\`\`\`\n${x.question.content}\n\n`
				ti  += `\`\`\`Jawaban :\`\`\`\n${x.answer.content}\n`
				ti  += `==============================\n\n`
			}
			setReply(ti )
			}
			break
        case 'ppcp': case 'couple': case ' ppcouople': {
if (!isGroup) return onlyGroup()
                setReply(mess.wait)
                let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                ehz.sendMessage(m.chat, { image: { url: random.male }, caption: `Couple Male` }, { quoted: m })
                ehz.sendMessage(m.chat, { image: { url: random.female }, caption: `Couple Female` }, { quoted: m })
            }
	    break	    
        case 'pantun': {
if (!isGroup) return onlyGroup()
let zeltoria = await fetch(`https://api.lolhuman.xyz/api/random/pantun?apikey=${api.Lol}`)
let hasil = await zeltoria.json()
 setReply(`${hasil.result}`.trim())
 }
 break
 case 'dilanquote': {
if (!isGroup) return onlyGroup()
let ewe = await fetch(`https://api.lolhuman.xyz/api/quotes/dilan?apikey=${api.Lol}`)
let hasil = await ewe.json()
 setReply(`${hasil.result}`.trim())
 }
 break
case 'motivasi': {
if (!isGroup) return onlyGroup()
let zeltoria = await fetch(`https://api.lolhuman.xyz/api/random/katabijak?apikey=${api.Lol}`)
let hasil = await zeltoria.json()
 setReply(`${hasil.result}`.trim())
 }
 break
case 'katabijak': {
if (!isGroup) return onlyGroup()
let zeltoria = await fetch(`https://api.lolhuman.xyz/api/random/katabijak?apikey=${api.Lol}`)
let hasil = await zeltoria.json()
setReply(`${hasil.result}`.trim())
 }
 break
case 'truth': case 'dare': {
if (!isGroup) return onlyGroup()
let rangel = await fetch(`https://api.betabotz.org/api/random/${command}?apikey=2fbgCgOB`)
let hasil = await rangel.json()
 setReply(`${hasil.result}`.trim())
 }
 break
case 'infocuaca':{
			if (!q) return m.reply(`Example: ${prefix + command} Tasikmalaya`)
			setReply(mess.wait)
			var { data } = await axios.get(`https://api.lolhuman.xyz/api/cuaca/${q}?apikey=${api.Lol}`)
			var titttttttttt = `Tempat : ${data.result.tempat}\n`
			titttttttttt += `Cuaca : ${data.result.cuaca}\n`
			titttttttttt += `Angin : ${data.result.angin}\n`
			titttttttttt += `Description : ${data.result.description}\n`
			titttttttttt += `Kelembapan : ${data.result.kelembapan}\n`
			titttttttttt += `Suhu : ${data.result.suhu}\n`
			titttttttttt += `Udara : ${data.result.udara}\n`
			titttttttttt += `Permukaan laut : ${data.result.permukaan_laut}\n`
			ehz.sendMessage(m.chat, { location: { degreesLatitude: data.result.latitude, degreesLongitude: data.result.longitude } })
		 setReply(titttttttttt)
			}
			break
        case 'cekmember': {
  if (!m.isGroup) return setReply(mess.group)
  
  const participants = await ehz.groupMetadata(m.chat).then(metadata => metadata.participants);
  
  let countIndonesia = 0;
  let countMalaysia = 0;
  let countUSA = 0;
  let countOther = 0;
  
  participants.forEach(participant => {
    const phoneNumber = participant.id.split('@')[0];
    if (phoneNumber.startsWith("62")) {
      countIndonesia++;
    } else if (phoneNumber.startsWith("60")) {
      countMalaysia++;
    } else if (phoneNumber.startsWith("1")) {
      countUSA++;
    } else if (phoneNumber.startsWith("+1")) {
      countOther++;
    } else {
      countOther++;
    }
  });
  
  const replyMessage = `Jumlah Anggota Grup Berdasarkan Negara:\n\nAnggota Indonesia: ${countIndonesia} 🇮🇩\nAnggota Malaysia: ${countMalaysia} 🇲🇾\nAnggota USA + OTHER : ${countUSA} 🇺🇲\nAnggota Negara Lain: ${countOther} 🏳️`;
  setReply(replyMessage);
  break;
}
case 'asslamulaikum': case 'mikum': case 'samlekom' :{
let asm = fs.readFileSync('./Vnrangel/audio/walaikunsalam.mp3')
ehz.sendMessage(m.chat,{audio: asm, mimetype:'audio/mpeg', ptt:true,
contextInfo:{
externalAdReply:{
title: 'jangan lupa bernafas',
body: `Hai  ${ucapanWaktu} kak ${pushname}`,
thumbnail: fs.readFileSync('./media/thumb.jpeg'),
mediaType:2,
mediaUrl: 'https://telegra.ph/file/33d58a3a7b931d3902642.jpg', } },},{quoted:fkontak})               
}
break
case 'anjing': case 'babi': case 'setan': case 'monyet':{
 let xic = fs.readFileSync('./Vnrangel/audio/jangan toxic om.mp3')
 ehz.sendMessage(m.chat,{audio: xic,mimetype:'audio/mp4', ptt:true })
}
 break
 case 'bot' : {
 let bjir = fs.readFileSync('./Vnrangel/audio/ngomong apaan sih.mp3')
 ehz.sendMessage(m.chat,{audio: bjir,mimetype:'audio/mp4', ptt:true })
}
 break
 case 'memeindo':
                setReply(mess.wait)
                ehz.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/meme/memeindo?apikey=${api.Lol}`}, caption: `sangad Cringe Kaya idup Lo🗿`}, {quoted: m})
            break
case 'tiktokghea':
setReply(mess.wait)
var gheayubi = JSON.parse(fs.readFileSync('./HostMedia/tiktokvids/gheayubi.json'))
var hasil = pickRandom(gheayubi)
ehz.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'cosplayangel':
setReply(mess.wait)
var gheayubi = JSON.parse(fs.readFileSync('./HostMedia/tiktokvids/cosplayangel.json'))
var hasil = pickRandom(gheayubi)
ehz.sendMessage(m.chat, { caption: 'nih bang Rashya\ningat jangan Gamon yak\nAng3l udah pergi;)', video: { url: hasil.url }}, { quoted: m })
break
case 'tiktokbocil':
setReply(mess.wait)
var bocil = JSON.parse(fs.readFileSync('./HostMedia/tiktokvids/bocil.json'))
var hasil = pickRandom(bocil)
ehz.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'videosad':
setReply(mess.wait)
var ukhty = JSON.parse(fs.readFileSync('./HostMedia/tiktokvids/videosad.json'))
var hasil = pickRandom(ukhty)
ehz.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'wibuvid':
setReply(mess.wait)
var santuy = JSON.parse(fs.readFileSync('./HostMedia/tiktokvids/wibuvid.json'))
var hasil = pickRandom(santuy)
ehz.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'tiktokkayes':
setReply(mess.wait)
var kayes = JSON.parse(fs.readFileSync('./HostMedia/tiktokvids/kayes.json'))
var hasil = pickRandom(kayes)
ehz.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'tiktokpanrika':
setReply(mess.wait)
var rikagusriani = JSON.parse(fs.readFileSync('./HostMedia/tiktokvids/panrika.json'))
var hasil = pickRandom(rikagusriani)
ehz.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'videogalau':
setReply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./HostMedia/tiktokvids/galau.json'))
var hasil = pickRandom(notnot)
ehz.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break   
 // ============================ //
case 'chinese':
setReply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./HostMedia/tiktokpics/china.json'))
var hasil = pickRandom(notnot)
ehz.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'hijab':
setReply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./HostMedia/tiktokpics/hijab.json'))
var hasil = pickRandom(notnot)
ehz.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'indo':
setReply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./HostMedia/tiktokpics/indonesia.json'))
var hasil = pickRandom(notnot)
ehz.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'japanese':
setReply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./HostMedia/tiktokpics/japan.json'))
var hasil = pickRandom(notnot)
ehz.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'korean':
setReply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./HostMedia/tiktokpics/korea.json'))
var hasil = pickRandom(notnot)
ehz.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'malay':
setReply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./HostMedia/tiktokpics/malaysia.json'))
var hasil = pickRandom(notnot)
ehz.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'randomgirl':
setReply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./HostMedia/tiktokpics/random.json'))
var hasil = pickRandom(notnot)
ehz.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'randomboy':
setReply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./HostMedia/tiktokpics/random2.json'))
var hasil = pickRandom(notnot)
ehz.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'thai':
setReply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./HostMedia/tiktokpics/thailand.json'))
var hasil = pickRandom(notnot)
ehz.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'vietnamese':
setReply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./HostMedia/tiktokpics/vietnam.json'))
var hasil = pickRandom(notnot)
ehz.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break       
case 'openai':{
if (!isOwner && !isAdmins) return setReply(mess.only.admin)
 try {
if (global.keyopenai === '') return reply("Apikey belum diisi\n\nSilahkan isi terlebih dahulu apikeynya di file config.js\n\nApikeynya bisa dibuat di website: https://beta.openai.com/account/api-keys");
if (!text) return setReply(`Chat dengan AI.\n\nContoh:\n${command} Apa itu coding`)
const configuration = new Configuration({
apiKey: global.keyopenai,
});
const openai = new OpenAIApi(configuration);
const response = await openai.createCompletion({
model: "text-davinci-003",
prompt: text,
temperature: 0, // Nilai yang lebih tinggi berarti model akan mengambil lebih banyak risiko.
max_tokens: 2048, // Jumlah maksimum token yang dihasilkan dalam penyelesaian. Sebagian besar model memiliki panjang konteks 2048 token (kecuali untuk model terbaru, yang mendukung 4096).
top_p: 1, // alternatif untuk pengambilan sampel dengan suhu, disebut pengambilan sampel nukleus
frequency_penalty: 0.3, // Angka antara -2.0 dan 2.0. Nilai positif menghukum token baru berdasarkan frekuensi yang ada dalam teks sejauh ini, mengurangi kemungkinan model untuk mengulang baris yang sama kata demi kata.
presence_penalty: 0 // Angka antara -2.0 dan 2.0. Nilai positif menghukum token baru berdasarkan apakah mereka muncul dalam teks sejauh ini, meningkatkan kemungkinan model untuk membicarakan topik baru.
});
setReply(`${response.data.choices[0].text}`);
} catch (error) {
if (error.response) {
console.log(error.response.status);
console.log(error.response.data);
console.log(`${error.response.status}\n\n${error.response.data}`);
} else {
console.log(error);
setReply("Maaf, sepertinya ada yang error :"+ error.message);
}
}
}
break
//========= MENU STICKER ========//
case 'sticker': case 's': case 'stickergif': case 'sgif': {
if (!isGroup) return onlyGroup()
 if (!quoted) throw setReply(` reply Video/Image Dengan Caption ${prefix + command}`)
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await ehz.sendImageAsSticker(from, media, m, { packname: global.packName, author: global.authorName })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return setReply('Maksimal 10 detik!')
let media = await quoted.download()
let encmedia = await ehz.sendVideoAsSticker(from, media, m, { packname: global.packName, author: global.author })
await fs.unlinkSync(encmedia)
} else {
throw `Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`
}
}
break
case 'qc':{
if (!isGroup) return onlyGroup()
let teks = m.quoted && m.quoted.q ? m.quoted.text : q ? q : "";
if (!teks) return setReply (`Cara Penggunaan ${prefix}qc teks`)
const text = `${teks}`
const username = await ehz.getName(m.quoted ? m.quoted.sender : m.sender)
const avatar = await ehz.profilePictureUrl( m.quoted ? m.quoted.sender : m.sender,"image").catch(() =>`https://i0.wp.com/telegra.ph/file/134ccbbd0dfc434a910ab.png`)

const json = {
type: "quote",
format: "png",
backgroundColor: "#FFFFFF",
width: 700,
height: 580,
scale: 2,
"messages": [
{
"entities": [],
"avatar": true,
"from": {
"id": 1,
"name": username,
"photo": {
"url": avatar
}
},
"text": text,
"m.replyMessage": {}
}
 ],
};
axios
.post(
"https://bot.lyo.su/quote/generate",
json,
{
headers: { "Content-Type": "application/json" },
})
.then(async (res) => {
const buffer = Buffer.from(res.data.result.image, "base64");
let encmedia = await ehz.sendImageAsSticker(m.chat, buffer, m, { packname: global.packName, 
author: global.author, 
categories: ['🤩', '🎉'],
id: '12345',
quality: 100,
background: 'transparent'})
await fs.unlinkSync(encmedia)
})
}
break

//=================================================

case 'speed':
    setReply(`Speed: ${latensi.toFixed(4)} Second`)
    break

case 'proses':{
let reportzhir = args[0]
if (!reportzhir) return setReply(`Contoh:\n.proses panelku min`)
let dehhh = text.split('|')[0]
let text12 = `「 *Ada Pesanan Nih!* 」
*Pesanan:* ${dehhh}
*Dari:* @${sender.split('@')[0]}
Segera Diproses Agar Customer Tidak Kecewa,Dan Jangan Pernah Menipu!
Jika Sudah Ketik *.accpesanan* 62xxx`
setReply(`*「 Pesanan Diproses 」*\nPESANAN ANDA AKAN KAMI PROSES JADI DI MOHON UNTUK MENUNGGU SEBENTAR KAK`)
ehz.sendMessage(owner + "@s.whatsapp.net",{image: { url: `https://telegra.ph/file/df778c74a8f0417235acf.jpg`}, caption: text12, mentionedJid:[sender], quoted: m })
}
break
case 'accpesanan': {
if (!isOwner && !isAdmins) return setReply()
let zhirapsn = `「 *Pesanan Datang* 」
Pesanan Anda Sudah Datang,Harap Mengirim Screenshot Dan Mengatakan Done Untuk Bukti Bahwa Pesanan Telah Diterima

*Thanks For Order*`
let targetNumber = `${q.split(",")[0]}@s.whatsapp.net`;

  ehz.sendMessage(targetNumber, {
    text: `*${zhirapsn}*`,
    mentionesJid: [sender]
  }, {
    quoted: m
  }).then(() => {
    setReply(`Acc Pesanan berhasil!`);
  }).catch(() => {
    setReply(`Gagal mengirim pesan!`);
  });
}
break
//======== MENU OWNER ======//
 case 'ban':{
			let alasan = ""
			if (!isOwner)return setReply('hanya owner') 
			if (q.startsWith("+")) {
			let woke = q.replace(new RegExp("[()+-/ +/]", "gi"), "") 
			let Name = await ehz.getName(woke)
			if(cekBannedUser (woke, ban)) return setReply("Udah di ban kak")
			addBanned(Name,calender,woke,alasan, ban)          
			setReply( `Berhasil banned ${woke}`);
			} else  if(users){
			let alasan = mentionByReply? q : mentionByTag? q.split(" ")[1] : "" 
			if(alasan == undefined) alasan = "Tidak ada"
			let Nomer = `${users.split("@")[0]}`
			if(cekBannedUser (Nomer, ban)) return setReply("Udah di ban kak")
			let Name = await ehz.getName(users)
			//if(Nomer === ownerNumber[0]) return setReply("Ga mau") 
			addBanned(Name,calender,Nomer,alasan, ban)               
			setReply( `Berhasil banned ${users.split("@")[0]}`);
			} else setReply('Reply atau tag targetnya')
			}
			break
 case 'clearuser':

	if (!isOwner) return onlyOwner()

	setReply("Sukses clear all User")

	db.data.users = {}

	break 
case 'delsampah':{
	let path = require('path');
	let directoryPath = path.join();
	fs.readdir(directoryPath, async function (err, files) {
	if (err) {
	console.log('Unable to scan directory: ' + err);
	return setReply('Unable to scan directory: ' + err);
	 } 
	let filteredArray = await files.filter(item => item.endsWith("gif") || item.endsWith("png") || item.endsWith("mp3")  || item.endsWith("mp4") || item.endsWith("jpg") ||item.endsWith("webp") ||item.endsWith("webm") ||item.endsWith("opus")   )
	console.log(filteredArray.length); 
	let teks =`Terdeteksi ${filteredArray.length} file sampah\n\n`
	if(filteredArray.length == 0) return setReply(teks)
	filteredArray.map(function(e, i){
	teks += (i+1)+`. ${e}\n`
	})
	 
	setReply(teks) 
	
//	await sleep(2000)
	setReply("Menghapus file sampah...")
	await filteredArray.forEach(function (file) {
	fs.unlinkSync(file)
	});
	//await sleep(2000)
	setReply("Berhasil menghapus semua sampah")
	 
	});
	  }
	break
 case 'clearsesi':{
if (!itsMe && !isOwner) return setReply(mess.only.owner)
fs.readdir("./session", async function (err, files) {
if (err) {
console.log('Unable to scan directory: ' + err);
return setReply('Unable to scan directory: ' + err);
} 
let filteredArray = await files.filter(item => item.startsWith("pre-key") ||
item.startsWith("sender-key") || item.startsWith("session-")
   )
console.log(filteredArray.length); 
let teks =`Terdeteksi ${filteredArray.length} file kenangan\n\n`
if(filteredArray.length == 0) return setReply(teks)     
setReply(teks) 
await sleep(2000)
setReply("Menghapus file kenangan...")
await filteredArray.forEach(function (file) {
fs.unlinkSync(`./session/${file}`)
});
await sleep(2000)
setReply("Berhasil menghapus semua kenangan di folder session")     
});

}
break
case  'addcmdprem':{
	if (!isOwner) return onlyOwner()
	if(!q) return setReply(mess.query)
	if(checkDataId("premium", q,  DataId)) return setReply("Command sudah ada di database")
	if(!checkDataName("premium", q, DataId)) { await createDataId("premium", DataId) }
	addDataId(q, "premium", DataId)
	setReply(`Berhasil menambahkan ${q} ke daftar fitur premium`)
	}
	break
	  
	  case  'delcmdprem':
	  if(!q) return setReply(mess.query)
	  if (!isOwner) return onlyOwner() 
	  try {
	  if(!checkDataId("premium", q, DataId)) return setReply("Command tidak ada di database")
	  removeDataId ("premium", q, DataId)
	  setReply(`Berhasil menghapus ${q} ke daftar fitur premium`)
	  } catch (err){
	  console.log(err)
	  setReply(`${err}`)
	  }
	  break
	  
	case 'listcmdprem':{
	  if(!checkDataName("premium", q, DataId)) { await createDataId("premium", DataId) }
	  let nana = await DataId.filter(item => item.name == "premium" )
	  let teks ="List Command For Premium User\n\n"
	  let nunu = nana[0].id
	  for(let i of nunu){
		teks +=`• ${toFirstCase(i)}\n`   
		}    
	   teks +=`\n• Total: ${nunu.length}\n` 
	  setReply(teks)
	  }
	  break  
 case  'addcmdlimit':{
	if (!isOwner) return onlyOwner()
	if(!q) return setReply(mess.query)
	if(checkDataId("limit", q,  DataId)) return setReply("Command sudah ada di database")
	if(!checkDataName("limit", q, DataId)) { await createDataId("limit", DataId) }
	addDataId(q, "limit", DataId)
	setReply(`Berhasil menambahkan ${q} ke daftar fitur limit`)
	}
	break
	  
	  case  'delcmdlimit':
	  if(!q) return setReply(mess.query)
	  if (!isOwner) return onlyOwner() 
	  try {
	  if(!checkDataId("limit", q, DataId)) return setReply("Command tidak ada di database")
	  removeDataId ("limit", q, DataId)
	  setReply(`Berhasil menghapus ${q} ke daftar fitur limit`)
	  } catch (err){
	  console.log(err)
	  setReply(`${err}`)
	  }
	  break
	  
	case 'listcmdlimit':{
	  let nina = await DataId.filter(item => item.name == "limit" )
	  let teks ="List Commands For limit\n"
	  let nunu = nina[0].id
	  for(let i of nunu){
		teks +=`. ${i}\n`   
		}    
	  setReply(teks)
	  }
	  break
case  'addcmdowner':{
	if (!isOwner) return onlyOwner()
	if(!q) return setReply(mess.query)
	if(checkDataId("commands", q,  DataId)) return setReply("User sudah menjadi owner")
	if(!checkDataName("commands", q, DataId)) { await createDataId("commands", DataId) }
	addDataId(q, "commands", DataId)
	setReply(`Berhasil menambahkan ${q} ke daftar fitur owner`)
	}
	break
  case  'delcmdowner':
	  if(!q) return setReply(mess.query)
	  if (!isOwner) return onlyOwner() 
	  try {
	  if(!checkDataId("commands", q, DataId)) return setReply(`User bukan owner`)
	  removeDataId ("commands", q, DataId)
	  setReply(`Berhasil menghapus ${q} ke daftar fitur owner`)
	  } catch (err){
	  console.log(err)
	  setReply(`${err}`)
	  }
	  break
	
	  case 'listcmdowner':{
	  let nana = await DataId.filter(item => item.name == "commands" )
	  let teks ="List Commands For Owner\n"
	  let nunu = nana[0].id
	  for(let i of nunu){
		teks +=`. ${i}\n`   
		}    
	  setReply(teks)
	  }
	  break
case 'addprem':
		if (!isOwner) return setReply('husus owner:v')
		
		if (mentionByReply && isGroup) {
		if(!q) return setReply(`Penggunaan :\n${prefix}addprem\n\nPilih waktu\ns = detik\nh = jam\nd =hari`)      
		 //if(_prem.checkPremiumUser (mentionByReply, premium)) return setReply("User tersebut sudah di premium")   
		_prem.addPremiumUser (mentionByReply, q, premium)         
		 setReply(`Succes add premium ${mentionByReply.split("@")[0]}`)
		ehz.sendText(mentionByReply, `Halo kak aku *${fake}*\nkamu telah terdaftar sabagai user premium\nterimakasih sudah menggunakan ${fake}\n\nSilahkan ketik .cekprem untuk melihat expired premium kamu`)
		 } else if(mentionByTag && isGroup) { 
		let waktu = q.split(" ")[1]
		 //if(_prem.checkPremiumUser (mentionByTag, premium)) return setReply("User tersebut sudah di premium kak")   
		_prem.addPremiumUser (mentionByTag, waktu, premium)         
		await setReply(`Succses, silakan ketik ${prefix}listprem untuk melihat list premium`)
		ehz.sendText(mentionByTag, `Halo kak aku *${fake}*\nkamu telah terdaftar sabagai user premium\nterimakasih sudah menggunakan ${fake}\n\nSilahkan ketik .cekprem untuk melihat expired premium kamu`)
		   } else if(!isGroup){
		let usernya = q.split("|")[0].replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`
		let waktunya = q.split("|")[1]
		
		// if(_prem.checkPremiumUser (usernya, premium)) return setReply("User tersebut sudah di premium kak")   
		_prem.addPremiumUser (usernya, waktunya, premium)         
		await setReply(`Succses, silakan ketik ${prefix}listprem untuk melihat list premium`)
		ehz.sendText(usernya, `Halo kak aku *${fake}*\nkamu telah terdaftar sabagai user premium\nterimakasih sudah menggunakan ${fake}\n\nSilahkan ketik .cekprem untuk melihat expired premium kamu`)
		   } else setReply("Tag atau Reply usernya")
		break
case 'cekprem': case 'cekpremium':
			if (!isPremium && !isOwner) return setReply(`Kamu bukan user premium`)
			let cekvip = ms(_prem.getPremiumExpired(sender, premium) - Date.now())
			let premiumnya = `${cekvip.days} day(s) ${cekvip.hours} hour(s) ${cekvip.minutes} minute(s) ${cekvip.seconds} second(s)`
setReply(premiumnya)
			  break
 case 'addsewa':{
	 if(!isGroup){
	const rex1 = /chat.whatsapp.com\/([\w\d]*)/g;
	let LinkGc = q.split(" ")[0];
	let Second = q.split(" ")[1];
	  let code = LinkGc.match(rex1);
	if (code == null) return  setReply("No invite url detected.");
	
	let kode = code[0].replace("chat.whatsapp.com/", "");
	await ehz.groupAcceptInvite(kode)
	let { id, subject,creator,creation,desc,descId } = await ehz.groupGetInviteInfo(kode).catch(async () => {
	return setReply("Invalid invite url.");
	});
	setReply(`Sukses`)
	
	await _sewa.addSewaGroup(id, subject, LinkGc, Second, sewa)
	} else if(isGroup){
	if(!q) return setReply("Maukian angka 1m/1d/1h")
	if (isBotGroupAdmins) {
	let linkgc = await ehz.groupInviteCode(from)
	var yeh = `https://chat.whatsapp.com/${linkgc}`
	} else if(!isBotGroupAdmins){
	var yeh = `Botz Is Not Admin`
	} 
	_sewa.addSewaGroup(from, groupName, yeh, q, sewa)
	setReply("Berhasil Add Sewa ke group")
	}
	}
	break
 case 'listsewa': 
	let ordernye = `*List Sewa*\nJumlah : ${sewa.length}\n\n`
	for (let i of sewa){
	let cekvipp = ms(i.expired - Date.now())
	ordernye += `Group : ${i.group}\nID : ${i.id}\nExpired : ${cekvipp.days} hari ${cekvipp.hours} jam ${cekvipp.minutes} menit ${cekvipp.seconds} detik\nLink : ${i.linkgc}\n\n`             
	 } 
	ordernye += `© Rangel`
	setReply(ordernye)
	break
 case 'ceksewa': 
	case 'sewacek':
	if (!isGroup) return setReply(mess.only.group)
	if (!_sewa.checkSewaGroup(from, sewa)) return setReply(`Group ini tidak terdaftar dalam list sewabot. Ketik ${prefix}sewabot untuk info lebih lanjut`)
	let cekid = ms(_sewa.getSewaExpired(from, sewa) - Date.now())
	let sewenye = `「 *SEWA EXPIRE* 」
	*Group*: ${groupName}
	*ID*: ${from}
	*EXPIRE :* ${cekid.days} Hari, ${cekid.hours} Jam, ${cekid.minutes} Menit, ${cekid.seconds} Detik`
	setReply(sewenye)
	break
case 'getcase': case 'ambilcase':{
if (!isOwner) return setReply(mess.only.owner)
if (!q) return setReply('nama case?')
const getCase = (q) => {
return "case " + `'${q}'` + require('fs').readFileSync("Rashya.js").toString().split('case \''+ q +'\'')[1].split("break")[0]+"break"
} // (?); ngambil case
setReply(getCase(q))
}
break
case 'bcgc':{
if (!isOwner && !itsMe) return setReply('husus owner')
if (!q) return setReply('Teksnya?')
let getGroups = await ehz.groupFetchAllParticipating()
let groupss = Object.entries(getGroups).slice(0).map(entry => entry[1])
let anus = groupss.map(v => v.id)
if(isQuotedImage || isImage || isQuotedAudio || isVideo || isQuotedVideo) {
var alala = await ehz.downloadAndSaveMediaMessage(quoted,makeid(5))
}
setReply(`Mengirim Broadcast Ke ${anus.length} Chat, Waktu Selesai ${anus.length * 0.5 } detik`)

for (let i of anus) {
let text = `
*_Broadcast Group_*

––––––『 *MESSAGE* 』––––––

${q}

`

await sleep(1000)
let contextInfo = {
forwardingScore: 50,
isForwarded: true,
externalAdReply:{
showAdAttribution: true,
title: `tes`,
body:`bjkr`,
previewType:"PHOTO",
thumbnailUrl: 'https://telegra.ph/file/33d58a3a7b931d3902642.jpg'
}
}
if(isQuotedImage || isImage){
ehz.sendMessage(i,{contextInfo,image:fs.readFileSync(alala),caption:text})
} else if(isQuotedVideo || isVideo){
ehz.sendMessage(i,{contextInfo,video:fs.readFileSync(alala),caption:text})
} else if(isQuotedAudio){
ehz.sendMessage(i,{contextInfo,Audio:fs.readFileSync(alala)})
} else ehz.sendMessage(i,{contextInfo,text})
}
setReply(`Sukses Mengirim Broadcast Ke ${anus.length} Group`)
}
break
case 'dashboard':{
const getFolderSize = (await import("get-folder-size")).default;
let storage = await getFolderSize.loose('.');
let moduls = await getFolderSize.loose('./node_modules');
let session = await getFolderSize.loose('./session')
let databse = await getFolderSize.strict('./database/database.json');
for (let i of hitnya){
let cekvipp = ms(i.expired - Date.now())
var resetnye = `${cekvipp.hours} jam ${cekvipp.minutes} menit`
}

let teks =`
––––––『 *Dashboard* 』––––––
⭔ *Runtime* : ${runtime(process.uptime())}
⭔ *Reset* : ${resetnye}
⭔ *Total Hit* : ${getHit("run", hitnya)}
⭔ *Storage* : ${FileSize(storage)}
⭔ *Modules* : ${FileSize(moduls)}
⭔ *Session* : ${FileSize(session)}
⭔ *Database* : ${FileSize(databse)}
`
let fall ="––––––『 *Commands Today* 』––––––\n"
let totalFail =[]
let totalSuc = []
let total = 0
let tot = 0
await dash.map(async function(e, i){
fall += " ⭔ "+` *${e.cmd}* : ${e.succes+e.failed} \n`
await totalFail.push(e.failed)
await totalSuc.push(e.succes)
});

for(let i = 0; i < totalFail.length; i++){
total += totalFail[i]
}

for(let a = 0; a < totalSuc.length; a++){
tot += totalSuc[a]
}

let akoh = `Total : ${dash.length} used`
let tod ="––––––『 *Commands Failed* 』––––––\n"
let filteredArray = await dash.filter(item => item.failed > 0 )
await filteredArray.map(async function(e, i){
tod += " ⭔ "+` *${e.cmd}* : ${e.failed} \n`

});
let aw = `Total : ${filteredArray.length} failed`
let tekz = teks+"\n\n"+fall+"\n"+akoh+"\n\n"+"––––––『 *Commands Status* 』––––––\n"+" ⭔ *Succes* : "+tot+"\n"+" ⭔ *Failed* : "+total+"\n\n"+tod+"\n\n"


let link = 'https://telegra.ph/file/b659d66189445cab43a25.jpg'
//conn.sendAdReply(from,tekz,copyright,baileysVersion,link,{quoted:m})
setReply(tekz)
}
break
case 'addvn': {
                if (!isPremium) return setReply(mess.prem)
                if (args.length < 1) return setReply('Masukan Namanya?')
                if (VnRashya.includes(q)) return setReply("Nama Telah Di Pakai")
                let delb = await ehz.downloadAndSaveMediaMessage(quoted)
                VnRashya.push(q)
                await fsx.copy(delb, `./media/audio/${q}.mp3`)
                fs.writeFileSync('./src/media/vn.json', JSON.stringify(VnRashya))
                fs.unlinkSync(delb)
                setReply(`Sukses Menambahkan Audio\nUntuk Mengecek Ketik ${prefix}listvn`)
            }
            break
case 'delvn': {
                if (!isPremium) return setReply(mess.prem)
                if (args.length < 1) return setReply('Masukan Namanya')
                if (!VnRashya.includes(q)) return setReply("Nama Tidak Terdaftar Di Database")
                let wanu = VnRashya.indexOf(q)
                VnRashya.splice(wanu, 1)
                fs.writeFileSync('./src/media/vn.json', JSON.stringify(VnRashya))
                fs.unlinkSync(`./media/audio/${q}.mp3`)
                setReply(`Sukses Menghapus Audio ${q}`)
            }
            break
case 'listvn': {
                let teks = '┌──⭓「 *List Vn* 」\n│\n'
                for (let x of VnRashya) {
                    teks += `│⭔ ${x}\n`
                }
                teks += `│\n└────────────⭓\n\n*Total : ${VnRashya.length}*`
                setReply(teks)
            }
            break
case 'addimage': {
                if (!isPremium) return setReply(mess.prem)
                if (args.length < 1) return setReply('Nama Imagenya?')
                if (ImageRashya.includes(q)) return setReply("Nama Yang Kamu Masukan Sudah Terdaftar Di Dalam Database")
                let delb = await ehz.downloadAndSaveMediaMessage(quoted)
                ImageRashya.push(q)
                await fsx.copy(delb, `./media/image/${q}.jpg`)
                fs.writeFileSync('./src/media/image.json', JSON.stringify(ImageRashya))
                fs.unlinkSync(delb)
                setReply(`Sukses Menambahkan Image\nUntuk Cek Ketik ${prefix}listimage`)
            }
            break
case 'delimage': {
                if (!isPremium) return setReply(mess.prem)
                if (args.length < 1) return setReply('Masukan Nama Imagenya')
                if (!ImageRashya.includes(q)) return setReply("Nama Image Yang Kamu Masukan Tidak Terdaftar")
                let wanu = ImageRashya.indexOf(q)
                ImageRashya.splice(wanu, 1)
                fs.writeFileSync('./src/media/image.json', JSON.stringify(ImageRashya))
                fs.unlinkSync(`./media/image/${q}.jpg`)
                setReply(`Suksed Menghapus Image ${q}`)
            }
        break
case 'listimage': {
                let teks = '┌──⭓「 *List Image* 」\n│\n'
                for (let x of ImageRashya) {
                    teks += `│⭔ ${x}\n`
                }
                teks += `│\n└────────────⭓\n\n*Total : ${ImageRashya.length}*`
                setReply(teks)
            }
            break
        case 'addvideo': {
                if (!isPremium) return setReply(mess.prem)
                if (args.length < 1) return setReply('Nama Videonya?')
                if (VideoRashya.includes(q)) return setReply("Nama Yang Kamu Masukan Sudah Ada")
                let delb = await ehz.downloadAndSaveMediaMessage(quoted)
                VideoRashya.push(q)
                await fsx.copy(delb, `./media/video/${q}.mp4`)
                fs.writeFileSync('./src/media/video.json', JSON.stringify(VideoRashya))
                fs.unlinkSync(delb)
                setReply(`Success Menambahkan Video\nUntuk Melihat Ketik ${prefix}listvideo`)
            }
            break
case 'delvideo': {
                if (!isPremium) return setReply(mess.prem)
                if (args.length < 1) return setReply('Masukan Nama Video')
                if (!VideoRashya.includes(q)) return setReply("Nama Tidak Ada Di Dalam Database")
                let wanu = VideoRashya.indexOf(q)
                VideoRashya.splice(wanu, 1)
                fs.writeFileSync('./src/media/video.json', JSON.stringify(VideoRashya))
                fs.unlinkSync(`./media/video/${q}.mp4`)
                setReply(`Success Sukses Menghapus Video ${q}`)
            }
            break
case 'listvideo': {
                let teks = '┌──⭓「 *List Video* 」\n│\n'
                for (let x of VideoRashya) {
                    teks += `│⭔ ${x}\n`
                }
                teks += `│\n└────────────⭓\n\n*Total : ${VideoRashya.length}*`
                setReply(teks)
            }
            break
        case 'addsticker': {
                if (!isPremium) return setReply(mess.prem)
                if (args.length < 1) return setReply('Masukan Nama Stickernya?')
                if (StickerRashya.includes(q)) return setReply("Nama Telah Di Pakai")
                let delb = await ehz.downloadAndSaveMediaMessage(quoted)
                StickerRashya.push(q)
                await fsx.copy(delb, `./media/sticker/${q}.webp`)
                fs.writeFileSync('./src/media/sticker.json', JSON.stringify(StickerRashya))
                fs.unlinkSync(delb)
                setReply(`Sukses Menambahkan Sticker\nUntuk Mengecek Ketik ${prefix}liststicker`)
            }
            break
 case 'delsticker': {
                if (!isPremium) return setReply(mess.prem)
                if (args.length < 1) return setReply('Masukan Nama Stickernya')
                if (!StickerRashya.includes(q)) return setReply("Nama Tidak Terdaftar Di Database")
                let wanu = StickerRashya.indexOf(q)
                StickerRashya.splice(wanu, 1)
                fs.writeFileSync('./src/media/sticker.json', JSON.stringify(StickerRashya))
                fs.unlinkSync(`./media/sticker/${q}.webp`)
                setReply(`Sukses Menghapus Sticker ${q}`)
            }
            break
case 'liststicker': {
                let text = '┌──⭓「 *List Sticker* 」\n│\n'
                for (let x of StickerRashya) {
                    teks += `│⭔ ${x}\n`
                }
                teks += `│\n└────────────⭓\n\n*Total : ${StickerRashya.length}*`
                setReply(text)
            }
            break
case "pushmemek":{
if (!isOwner && !isAdmins) return m.reply(mess.only.admin)
if (isGroup) return m.reply(mess.only.private)
if (!text) return m.reply(`Penggunaan Salah Silahkan Gunakan Command Seperti Ini\n${prefix+command} idgroup|tekspushkontak\nUntuk Liat Id Group Silahkan Ketik listgc`)
m.reply(mess.wait)
const groupMetadataa = !isGroup? await ehz.groupMetadata(`${text.split("|")[0]}`).catch(e => {}) : ""
const participants = !isGroup? await groupMetadataa.participants : ""
const halls = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
global.tekspushkon = text.split("|")[1]
if (isContacts) return
for (let mem of halls) {
if (isContacts) return
contacts.push(mem)
fs.writeFileSync('./all/database/contacts.json', JSON.stringify(contacts))
if (/image/.test(mime)) {
media = await ehz.downloadAndSaveMediaMessage(quoted)
memk = await uptotelegra(media)
await ehz.sendMessage(mem, { image: { url: memk }, caption: global.tekspushkon })
await sleep(3000)
} else {
await ehz.sendMessage(mem, { text: global.tekspushkon })
await sleep(3000)
}
}
try {
const uniqueContacts = [...new Set(contacts)];
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN:WA[${createSerial(1)}] ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n");
return vcard; }).join("");
fs.writeFileSync("./all/database/contacts.vcf", vcardContent, "utf8");
} catch (err) {
m.reply(util.format(err))
} finally {
await ehz.sendMessage(from, { document: fs.readFileSync("./all/database/contacts.vcf"), fileName: "contacts.vcf", caption: "Nih Kak Tinggal Pencet File Di Atas Terus Save", mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
fs.writeFileSync("./all/database/contacts.json", JSON.stringify(contacts))
}
}
break

case 'sendkontak': case 'kontak':{
if (!isOwner && !isAdmins) return m.reply(mess.only.admin)
if (!isGroup) return m.reply(mess.only.group)
if (!m.mentionedJid[0]) return m.reply('Ex; .kontak @tag|nama')
let snTak = text.split(' ')[1] ? text.split(' ')[1] : 'Contact'
let snContact = {
	displayName: "Contact", contacts: [{displayName: snTak, vcard: "BEGIN:VCARD\nVERSION:3.0\nN:;"+snTak+";;;\nFN:"+snTak+"\nitem1.TEL;waid="+m.mentionedJid[0].split('@')[0]+":"+m.mentionedJid[0].split('@')[0]+"\nitem1.X-ABLabel:Ponsel\nEND:VCARD"}]
} // (?); send kontak
ehz.sendMessage(m.chat, {contacts: snContact}, {ephemeralExpiration: 86400})
}
break
case "savecontactid": {
if (!isOwner && !isAdmins) return m.reply(mess.only.admin)
if (isGroup) return m.reply(mess.only.private)
if (!text) return m.reply(`Penggunaan Salah Silahkan Gunakan Command Seperti Ini\n${prefix+command} idgroup\nUntuk Liat Id Group Silahkan Ketik listgc`)
await m.reply(mess.wait)
const groupMetadataa = !isGroup? await ehz.groupMetadata(`${text}`).catch(e => {}) : ""
const participants = !isGroup? await groupMetadataa.participants : ""
const halls = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
for (let mem of halls) {
if (isContacts) return
contacts.push(mem)
fs.writeFileSync('./all/database/contacts.json', JSON.stringify(contacts))
}
try {
const uniqueContacts = [...new Set(contacts)];
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN:WA[${createSerial(2)}] ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n");
return vcard; }).join("");
fs.writeFileSync("./all/database/contacts.vcf", vcardContent, "utf8");
} catch (err) {
(util.format(err))
} finally {
await ehz.sendMessage(from, { document: fs.readFileSync("./all/database/contacts.vcf"), fileName: "contacts.vcf", caption: "Sukses Tinggal Save Ya Kakak", mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
fs.writeFileSync("./all/database/contacts.json", JSON.stringify(contacts))
}
}
break
case 'adderror':
	{
	if (!q) return setReply(`Yang error apa bro ?\nContoh: ${prefix}adderror nosinya|menu`)
	if (!m.key.fromMe && !isOwner) return m.reply (mess.only.ownerB)
	let oke = q.split("|")[0]
	let oka = q.split("|")[1]
	addError(oke, oka, listerror)
	await setReply(`Sukses Menambahkan ${q} ke daftar error`)
	}
	break
 case 'clearerror':
	if (!isOwner) return onlyOwner()
	setReply("SukseS clear all error")
	clearAllError(listerror)
	break 
	
	case 'delerror':{
	if (!itsMe && !isOwner) return m.reply (mess.only.ownerB)
	listerror.splice(q, 1)
	fs.writeFileSync('./database/listerror.json', JSON.stringify(listerror))
	setReply( `Sukses menghapus ${q} di daftar error`)
	}
	break
	
	case 'listerror': {
	let errornye = `*List Error*\nJumlah : ${db.data.listerror.length}\n\n`
	for (let i of db.data.listerror){          
	errornye += `_*Command*_ : ${i.cmd}\n_*System Error*_ : ${i.error}\n\n*]─────────────────[*\n\n`             
	} 
	errornye += `© ${botName}`
	setReply(errornye)
	}
	break
case 'unbanwa': {
if (!isOwner && !isAdmins) return m.reply(mess.only.admin)
if (m.quoted || q) {
var tosend = m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (tosend === global.owner) return m.reply(`Tidak bisa verif My Creator!`)
var targetnya = tosend.split('@')[0]

try {
var axioss = require('axios')
let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "+")
form.append("phone_number", `+${targetnya}`,)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", `Kepada team WhatsApp
Akun whatsapp teman saya terkena blokir dan terdeteksi spam,mohon pulihkan akun WhatsApp ini [${targetnya}]`)
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19572.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1007965968")
form.append("__comment_req", "0")

let res = await axioss({
url,
method: "POST",
data: form,
headers: {
cookie
}

})
m.reply(`Harap Bersabar Dan Tunggu 1-24 Jam Proses unbanned Menggunakan Bot ZHIRA HOST⚡\nDilarang Spam Unbanned Agar Akun WhatsApp Anda Tidak Terkena Banned Permanent!`)
m.reply(mess.wait)
let payload = String(res.data)
if (payload.includes(`"payload":true`)) {
m.reply(`##- WhatsApp Support -##

Halo,

Terima kasih telah menghubungi kami.

Sistem kami menandai aktivitas akun Anda sebagai pelanggaran terhadap Ketentuan Layanan kami dan memblokir nomor telepon Anda. Kami sangat menghargai Anda sebagai pengguna. Mohon maaf atas kebingungan atau ketidaknyamanan yang disebabkan oleh masalah ini.

Kami telah menghapus pemblokiran setelah meninjau aktivitas akun Anda. Sekarang seharusnya Anda sudah memiliki akses ke WhatsApp.

Sebagai langkah selanjutnya, kami sarankan untuk mendaftarkan ulang nomor telepon Anda di WhatsApp untuk memastikan Anda memiliki akses.
Anda dapat mengunjungi situs web kami untuk mengunduh WhatsApp atau aplikasi WhatsApp Business.
Anda dapat mempelajari selengkapnya mengenai cara menggunakan WhatsApp secara bertanggung jawab di artikel Pusat Bantuan ini.

Catatan: Kami tidak menyediakan dukungan untuk aplikasi, perangkat, atau versi WhatsApp yang tidak didukung, atau perangkat yang di-jailbreak atau di-root. Pelajari selengkapnya mengenai sistem operasi yang didukung di artikel ini. Untuk informasi selengkapnya mengenai aplikasi tidak resmi dan alasan kami tidak mendukung aplikasi tersebut, silakan baca artikel ini.

--
Tim Dukungan WhatsApp

Silakan kunjungi Pusat Bantuan kami.`)
} else m.reply(util.format(res.data))
} catch (err) {m.reply(`${err}`)}
} else m.reply('Masukkan nomor target!')
}
break

case "public": {
if (!isOwner) return setReply(mess.only.owner)
ehz.public = true
setReply(`SUKSES MODE PUBLIC`)
}
break
case "self": {
if (!isOwner) return setReply(mess.only.owner)
ehz.public = false
setReply(`SUKSES MODE SELF✅`)
}
break

default:
//==============BATAS NYA==========//
//Auto Download Video IG
if(budy.startsWith("https://www.instagram.com/reel/") || budy.startsWith('https://www.instagram.com/p/')){
try{
let res = await fetchJson (`https://skizo.tech/api/igdl?url=${budy}&apikey=${api.ehz}`)
for (let i of res.media) {
await sleep (100)
ehz.sendMessage(m.chat, { react: { text: "⏳", key: m.key, }})
ehz.sendFile(from, i,'ig.mp4', `"*乂 Instagram Downloader*"\n\n${res.caption}`, m)
	}
} catch (err){ 
let res = await instagram3 (budy)
    for (let i of res) {
await sleep (2000)
ehz.sendMedia(from, i, m)
//conn.sendFile(from, i, dev)
		}
}
} 
//Auto Download Video Tiktok
if (budy.includes('https://vt.tiktok.com/') || budy.includes('https://www.tiktok.com/') || budy.includes('https://vm.tiktok.com/') ) {
try{
let res = await fetch(`https://skizo.tech/api/tiktok?url=${budy}&apikey=${api.ehz}`)
  let json = await res.json()
  let fbk = `*乂 Tiktok Downloader*\n\n*Name:* ${json.data.author.nickname}\n*Nickname:* @${json.data.author.unique_id}\n*ID:* ${json.data.id}\n*Description:* ${json.data.title}`
ehz.sendMessage(m.chat, { react: { text: "⏳", key: m.key, }})

  await ehz.sendMessage(m.chat, { video: { url: json.data.play }, caption: fbk }, { quoted: m })


} catch (err){ return
}
}
if (budy.startsWith('=>')) {
if (!isOwner) return m.reply('*khusus Premium*')
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)}
return m.reply(bang)}
try {
m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
m.reply(String(e))}}
if (budy.startsWith('>')) {
if (!isOwner) return m.reply('*khusus Premium*')
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await m.reply(evaled)
} catch (err) {
await m.reply(String(err))}}
if (budy.startsWith('$')) {
if (!isOwner) return m.reply('*khusus Premium*')
exec(budy.slice(2), (err, stdout) => {
if(err) return m.reply(err)
if (stdout) return m.reply(stdout)})}
//=================================================//
if (isCmd && budy.toLowerCase() != undefined) {
if (m.isBaileys) return
if (from.endsWith('broadcast')) return
let msgs = global.db.data.database
if (!(budy.toLowerCase() in msgs)) return
ehz.copyNForward(from, msgs[budy.toLowerCase()], true)}}
} catch (err) {
m.reply(util.format('_pelajari selengkapnya_ command tidak ada'))}}
// SEBELAH SINI NIH UBAH AJE🗿❌✔️❌✔️❌

//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.bgGreen(color("[  UPDATE ]", "black")),chalk.white(`${__filename}`) )
delete require.cache[file]
require(file)
  })
/*HANYA BOT YANG SUKA ERROR*/