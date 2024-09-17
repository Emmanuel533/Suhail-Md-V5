const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "2348060533690" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348060533690";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text"  // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_10_02_09_17_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAzMSxcbiAgICAgICAgMjMsXG4gICAgICAgIDU5LFxuICAgICAgICAyOSxcbiAgICAgICAgMTMzLFxuICAgICAgICA2NixcbiAgICAgICAgMjAwLFxuICAgICAgICAxMDAsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNzIsXG4gICAgICAgIDM2LFxuICAgICAgICA4MCxcbiAgICAgICAgNCxcbiAgICAgICAgMTA2LFxuICAgICAgICA3NyxcbiAgICAgICAgMjAzLFxuICAgICAgICAyNDcsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNjgsXG4gICAgICAgIDE0NCxcbiAgICAgICAgOTEsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxOSxcbiAgICAgICAgMTEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNTcsXG4gICAgICAgIDY0LFxuICAgICAgICAxMDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjUsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTM4LFxuICAgICAgICAzNCxcbiAgICAgICAgNjgsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTEyLFxuICAgICAgICA5OSxcbiAgICAgICAgMzgsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTA1LFxuICAgICAgICA2NixcbiAgICAgICAgMjE2LFxuICAgICAgICAxNixcbiAgICAgICAgMjcsXG4gICAgICAgIDYwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTExLFxuICAgICAgICAyMTIsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjEsXG4gICAgICAgIDEwNSxcbiAgICAgICAgODgsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjgsXG4gICAgICAgIDI2LFxuICAgICAgICAyMDcsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNjMsXG4gICAgICAgIDU4LFxuICAgICAgICAxMTJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNCxcbiAgICAgICAgNjUsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjExLFxuICAgICAgICAxMDYsXG4gICAgICAgIDYzLFxuICAgICAgICAyMjksXG4gICAgICAgIDY0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDM4LFxuICAgICAgICA1OCxcbiAgICAgICAgMTE1LFxuICAgICAgICAyNSxcbiAgICAgICAgOSxcbiAgICAgICAgNTIsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMDUsXG4gICAgICAgIDQ2LFxuICAgICAgICAxODMsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjE1LFxuICAgICAgICA2OCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNTksXG4gICAgICAgIDcwLFxuICAgICAgICAxMzEsXG4gICAgICAgIDExMCxcbiAgICAgICAgOCxcbiAgICAgICAgNTgsXG4gICAgICAgIDcxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDUwLFxuICAgICAgICAzNixcbiAgICAgICAgNCxcbiAgICAgICAgMjQxLFxuICAgICAgICA0NCxcbiAgICAgICAgNCxcbiAgICAgICAgOTUsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNDcsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjM3LFxuICAgICAgICAyNTUsXG4gICAgICAgIDc0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDYsXG4gICAgICAgIDkyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMzQsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNzYsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTE4LFxuICAgICAgICA4NSxcbiAgICAgICAgMTA4LFxuICAgICAgICA3NyxcbiAgICAgICAgNzcsXG4gICAgICAgIDI0NixcbiAgICAgICAgMzMsXG4gICAgICAgIDIzMCxcbiAgICAgICAgOTBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMjEsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMjksXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTczLFxuICAgICAgICAxNTIsXG4gICAgICAgIDgyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMjYsXG4gICAgICAgIDE0MSxcbiAgICAgICAgOTgsXG4gICAgICAgIDQ5LFxuICAgICAgICA2OSxcbiAgICAgICAgMzEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjQyLFxuICAgICAgICA2NyxcbiAgICAgICAgODIsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTE3LFxuICAgICAgICA4OCxcbiAgICAgICAgODMsXG4gICAgICAgIDQwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTEwLFxuICAgICAgICA4NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2MSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMzIsXG4gICAgICAgIDU4LFxuICAgICAgICAxNzIsXG4gICAgICAgIDc2LFxuICAgICAgICAxMzgsXG4gICAgICAgIDI2LFxuICAgICAgICAyNyxcbiAgICAgICAgNjIsXG4gICAgICAgIDcyLFxuICAgICAgICA3NSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjExLFxuICAgICAgICAxMjIsXG4gICAgICAgIDE5LFxuICAgICAgICAyNDksXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxODksXG4gICAgICAgIDc2LFxuICAgICAgICAzNSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxOTMsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjAxLFxuICAgICAgICA2MSxcbiAgICAgICAgMTM5LFxuICAgICAgICA2NSxcbiAgICAgICAgODdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAzNixcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAyNixcbiAgICAgICAgICA2MixcbiAgICAgICAgICA0NSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDg5XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDExMSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICA4OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTQxLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTM2LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTc4LFxuICAgICAgICA2MyxcbiAgICAgICAgMTgsXG4gICAgICAgIDMsXG4gICAgICAgIDE1NCxcbiAgICAgICAgOTAsXG4gICAgICAgIDc4LFxuICAgICAgICAxMixcbiAgICAgICAgNjEsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAzNyxcbiAgICAgICAgNjEsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTksXG4gICAgICAgIDI0MixcbiAgICAgICAgMjEsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMSxcbiAgICAgICAgMjMsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNzAsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMzEsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMzUsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMyxcbiAgICAgICAgMTU3LFxuICAgICAgICA0OSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNTYsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMzgsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTM2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDUzLFxuICAgICAgICAxMjUsXG4gICAgICAgIDgzLFxuICAgICAgICAxMzcsXG4gICAgICAgIDk2LFxuICAgICAgICAyNDYsXG4gICAgICAgIDgyLFxuICAgICAgICAxODEsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjI4LFxuICAgICAgICA3OSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNDksXG4gICAgICAgIDE3NCxcbiAgICAgICAgOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTI2LFxuICBcImFkdlNlY3JldEtleVwiOiBcIndMLzV1cWpURGgxMUp2Z0QvMlF3NXpNOUJXQ015OUZCdS9VZGFUY2NwSWc9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIldQUDRSZzNIUk9TeHprSjh5Sy1Xc3dcIixcbiAgXCJwaG9uZUlkXCI6IFwiMjhiNzhmMjQtZjMxNi00Y2UzLWExZWYtZmI2ZDE4N2ViY2EwXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIwNCxcbiAgICAgIDk2LFxuICAgICAgODgsXG4gICAgICAyMzMsXG4gICAgICA5MCxcbiAgICAgIDE2NSxcbiAgICAgIDI5LFxuICAgICAgMTcxLFxuICAgICAgNjksXG4gICAgICA1NCxcbiAgICAgIDEyLFxuICAgICAgMzksXG4gICAgICAxODEsXG4gICAgICAxMjMsXG4gICAgICAxMTYsXG4gICAgICAzNCxcbiAgICAgIDk3LFxuICAgICAgMTQzLFxuICAgICAgOTIsXG4gICAgICAxMzJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTM3LFxuICAgICAgMTA2LFxuICAgICAgOCxcbiAgICAgIDkyLFxuICAgICAgMjMxLFxuICAgICAgMTk1LFxuICAgICAgMTU1LFxuICAgICAgMTQyLFxuICAgICAgMjAyLFxuICAgICAgMzcsXG4gICAgICAxMjIsXG4gICAgICA3NixcbiAgICAgIDE2MCxcbiAgICAgIDE5LFxuICAgICAgMzYsXG4gICAgICAyOSxcbiAgICAgIDY5LFxuICAgICAgOTMsXG4gICAgICAzMixcbiAgICAgIDIwOVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI4RFFYSDE5U1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODA2MDUzMzY5MDoxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNTY2NzIyNzAwNjU4MjM6MUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKbVFrY2tGRUpLbnBiY0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInpJOVZsbU1YT2RzL085ZmtLanFLNmYzaXVhODBuNWVIYzhDOXFtUVJ0V3c9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwidUdaZnAwZW9RdnBUdEN5VE5qaXlFREQxaXlJOUpHUS9ra3ppUzdLR25YRW4ya25Nd2pPZDlBZTMycGNWUWc3ekhsdElFdVM4aHhmRkdSbUZ3OUs4Qnc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiTDd5bEo3Vk5KYzlaWGhHUmFDTDR3ZE84cStkMHhMSDhreGplWGFLYTF2ZVp2NlYzYzIzUGxZOGdRdlpUQi9Bd1h0T041QllENklaSExLSmN6cUQ5Q1E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODA2MDUzMzY5MDoxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTA4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjY1NjczMTlcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.9",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
