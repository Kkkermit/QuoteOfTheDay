const { SlashCommandBuilder, EmbedBuilder } = require ('discord.js');
const pfp = require('../../pfp.json')

module.exports = {
    data: new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Replys with pong'),
    
    async execute(interaction) {
       
        const pongbed = new EmbedBuilder()
        .setTitle('Pong!')
        .setThumbnail(`${pfp}`)

        await interaction.reply({ embeds: [pongbed]})
    }
}