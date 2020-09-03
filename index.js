var PORT = process.env.PORT || 5000;
const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const client = new Discord.Client();

client.once('ready', () => {
    console.log('Ready')
    client.user.setActivity('Eating Your Family', { type: "WATCHING"}).catch(console.error);
})
client.login(token);


client.on('message', message => {
    console.log(message.content);
})

client.on('message', msg=>{
    if(msg.content == "test"){
        msg.reply('test1');
    }
})
