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


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348152828676";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_15_45_06_11_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjQsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMjQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMzksXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjAsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjE1LFxuICAgICAgICA3NCxcbiAgICAgICAgMjU1LFxuICAgICAgICA4NCxcbiAgICAgICAgMTgyLFxuICAgICAgICA5MSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTQ2LFxuICAgICAgICA5OCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMDIsXG4gICAgICAgIDM5LFxuICAgICAgICAyMSxcbiAgICAgICAgOTgsXG4gICAgICAgIDE4OCxcbiAgICAgICAgOCxcbiAgICAgICAgMjUxLFxuICAgICAgICAyNTMsXG4gICAgICAgIDc1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjIzLFxuICAgICAgICAzNyxcbiAgICAgICAgMTg1LFxuICAgICAgICAzMCxcbiAgICAgICAgMTM4LFxuICAgICAgICA4NCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNjYsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTE1LFxuICAgICAgICAxODAsXG4gICAgICAgIDMxLFxuICAgICAgICAxMzgsXG4gICAgICAgIDM4LFxuICAgICAgICAyMjUsXG4gICAgICAgIDQ3LFxuICAgICAgICAyNixcbiAgICAgICAgOTgsXG4gICAgICAgIDUyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDM4LFxuICAgICAgICA4MyxcbiAgICAgICAgNzYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTgyLFxuICAgICAgICAyNDksXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjIsXG4gICAgICAgIDIwMixcbiAgICAgICAgNDMsXG4gICAgICAgIDg2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAwLFxuICAgICAgICAyMTksXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNDIsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNyxcbiAgICAgICAgMjMsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMDgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjAsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgOTcsXG4gICAgICAgIDkxLFxuICAgICAgICAxNTEsXG4gICAgICAgIDk5LFxuICAgICAgICA4NSxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDk2LFxuICAgICAgICAxNzMsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNjksXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMjRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTE1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDI3LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMTMsXG4gICAgICAgIDIzMyxcbiAgICAgICAgOTQsXG4gICAgICAgIDEyNCxcbiAgICAgICAgOTEsXG4gICAgICAgIDIxLFxuICAgICAgICAyMDEsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTEsXG4gICAgICAgIDk2LFxuICAgICAgICAxMDIsXG4gICAgICAgIDM0LFxuICAgICAgICAxNDksXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjM4LFxuICAgICAgICA1NixcbiAgICAgICAgMTQwLFxuICAgICAgICAzLFxuICAgICAgICAxNTIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNTYsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNTIsXG4gICAgICAgIDMwLFxuICAgICAgICAyNixcbiAgICAgICAgODBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY0LFxuICAgICAgICAxMzYsXG4gICAgICAgIDgyLFxuICAgICAgICAxMDYsXG4gICAgICAgIDk1LFxuICAgICAgICAxMzIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTgxLFxuICAgICAgICA0NSxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMzcsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTUzLFxuICAgICAgICAyMzQsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMjUsXG4gICAgICAgIDYxLFxuICAgICAgICAzNixcbiAgICAgICAgMTYwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMzMsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjA3LFxuICAgICAgICA5MyxcbiAgICAgICAgMzIsXG4gICAgICAgIDI0NixcbiAgICAgICAgODIsXG4gICAgICAgIDkzLFxuICAgICAgICAxODcsXG4gICAgICAgIDc1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTYxLFxuICAgICAgICA1NyxcbiAgICAgICAgMTA0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE4LFxuICAgICAgICAxNjQsXG4gICAgICAgIDgsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNjUsXG4gICAgICAgIDk1LFxuICAgICAgICA0LFxuICAgICAgICAxNTYsXG4gICAgICAgIDEzMixcbiAgICAgICAgOCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNjQsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMzgsXG4gICAgICAgIDYxLFxuICAgICAgICAyMDMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNDUsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjQ0LFxuICAgICAgICA3MSxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDI1LFxuICAgICAgICAxNDMsXG4gICAgICAgIDk3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDcyLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxMjNcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDksXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA4MSxcbiAgICAgICAgICA4MlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ5LFxuICAgICAgICAyNDgsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNTMsXG4gICAgICAgIDQsXG4gICAgICAgIDk0LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMjcsXG4gICAgICAgIDgyLFxuICAgICAgICAxNTMsXG4gICAgICAgIDQwLFxuICAgICAgICA0MyxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMzYsXG4gICAgICAgIDIsXG4gICAgICAgIDYxLFxuICAgICAgICAxMDgsXG4gICAgICAgIDk1LFxuICAgICAgICAxMSxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNzksXG4gICAgICAgIDExOCxcbiAgICAgICAgODcsXG4gICAgICAgIDUzLFxuICAgICAgICA3OCxcbiAgICAgICAgNzMsXG4gICAgICAgIDIwLFxuICAgICAgICAxNyxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMTgsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjQ0LFxuICAgICAgICA4LFxuICAgICAgICAyMzYsXG4gICAgICAgIDY3LFxuICAgICAgICA0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTYyLFxuICAgICAgICA4MCxcbiAgICAgICAgMTE2LFxuICAgICAgICA4MSxcbiAgICAgICAgNTksXG4gICAgICAgIDExNyxcbiAgICAgICAgMTMwLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE5LFxuICAgICAgICAxMjAsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjQyLFxuICAgICAgICAzNyxcbiAgICAgICAgNzcsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTAyLFxuICAgICAgICAyNTMsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjgsXG4gICAgICAgIDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE4OCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJWVmRGV1FxTnpZRzdrYTZRWnIvTXhoNWxGQjBoTzZUMzV5UDVQNUk1bHlrPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDgxNTI4Mjg2NzZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjUwMDI5MzQzOUZDQkI5NjAyNzAwRDM1QjVCNUU2QTdGXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxODEyMDcwMVxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDgxNTI4Mjg2NzZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkVBRTdDMzBGQTcxNkY5OTM4ODA4MDc1NjM0ODBFODhGXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxODEyMDcwMlxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJzWDFIS000U1E5MmJNQy1zM05GdlVRXCIsXG4gIFwicGhvbmVJZFwiOiBcImRiYzk5ZmViLWVmOGEtNGYxYy1hMzA3LTVjMzRkZDk4ZTBhM1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA1MyxcbiAgICAgIDEwNixcbiAgICAgIDg0LFxuICAgICAgOSxcbiAgICAgIDE2LFxuICAgICAgMTM2LFxuICAgICAgOTEsXG4gICAgICAxMDksXG4gICAgICAxMTgsXG4gICAgICAxNTEsXG4gICAgICAxOTYsXG4gICAgICA1OCxcbiAgICAgIDYxLFxuICAgICAgMTQ3LFxuICAgICAgNDYsXG4gICAgICAxMixcbiAgICAgIDg1LFxuICAgICAgNTgsXG4gICAgICA0LFxuICAgICAgODFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjMwLFxuICAgICAgNjUsXG4gICAgICA1NixcbiAgICAgIDE0NSxcbiAgICAgIDE0NyxcbiAgICAgIDIxMSxcbiAgICAgIDExNCxcbiAgICAgIDE0MyxcbiAgICAgIDEyMyxcbiAgICAgIDE1OCxcbiAgICAgIDIwOCxcbiAgICAgIDUzLFxuICAgICAgMTE3LFxuICAgICAgMjUwLFxuICAgICAgMTUyLFxuICAgICAgMjM5LFxuICAgICAgMjA0LFxuICAgICAgMzEsXG4gICAgICAyMjYsXG4gICAgICAzNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJUR0E1NkNXUlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODE1MjgyODY3NjoxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiUHJpbm5jZSBHb2R3aW5cIixcbiAgICBcImxpZFwiOiBcIjEzNDM2ODQ3MTMzNDkyMzoxQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1BLcTB3d1E5K0doc3dZWUFTQUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiREw1dGpSdkNKQnQ3VFVhcFI5YWVwNFFMMWhYMEIvNHl2NkZBTmltcm9pcz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJLT3NURmRDaGc4cmJLeGJsY3AxQXlibXBUV2ZMVy93OXNibzJtbDFtWXVPUGhUV2h3a2dyWU85V0ZTMCtPYWVZUUlScVB0VEU4WThnQ1RKTzNZMVhCdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJncUFUMWwvKzBua1RSOGRkWUtZd1BHZE5sdWxhQW40a09UV3kyaWV3NGZSMkhhZjR6RGFINFlBaXNIb1JOYkdrUFlqbXFNWnRLajVqQ29VckNpM3lDUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MTUyODI4Njc2OjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgNDNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxODEyMDY5OSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQVBWdlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBUFZ2Lmpzb24iOiAie1wia2V5RGF0YVwiOlwidVRwUUJLc1d6NlpidTRnRGVraVA1QzN4N2JBQVFOeFpHdUNYZkE4bUhRZz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyNjUzMTE4NixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzE4MTIwNzAyMDYxXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


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
