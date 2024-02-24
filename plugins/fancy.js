/* Copyright (C) 2022 Sourav KL11.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
Raganork MD - Sourav KL11
*/
const fancy = require('./misc/fancy');
require('../main').Module({
     pattern: 'fancy ?(.*)',
     fromMe: require('../config').MODE == 'private',
     use: 'utility',
     desc: 'Creates fancy text fonts'
 }, (async (message, match) => {
     if (!match[1] && !message.reply_message.message) return await message.sendReply('ʀᴇᴘʟʏ ᴛᴏ ᴀ ᴛᴇxᴛ ᴏʀ ᴛʏᴘᴇ ᴛᴇxᴛ ᴀғᴛᴇʀ ᴄᴏᴍᴍᴀɴᴅ ᴡɪᴛʜ ᴀ ɴᴜᴍᴇʀɪᴄ ᴄᴏᴅᴇ.\nᴇxᴀᴍᴘʟᴇ: .fancy 10 Hello\n                      .fancy Hello Brother\n                      .fancy <reply> 29\n\n'+String.fromCharCode(8206).repeat(4001)+fancy.list('Fancy Text Here',fancy));
    const id = match[1].match(/\d/g)?.join('')
     try {
        if (id === undefined && !message.reply_message){
            return await message.sendReply(fancy.list(match[1],fancy));
        }
        return await message.sendReply(fancy.apply(fancy[parseInt(id)-1],message.reply_message.text || match[1].replace(id,'')))    
    } catch {
        return await message.sendReply('ɴᴏ sᴜᴄʜ sᴛʏʟᴇ :(')
     }
 }))
