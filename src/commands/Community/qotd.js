const { SlashCommandBuilder, EmbedBuilder, User } = require('discord.js')
const pfp = require('../../pfp.json')

module.exports = {
    data: new SlashCommandBuilder()
    .setName('qotd')
    .setDescription('Creates a quote of the day!')
    .addStringOption(option => option.setName('quote').setDescription('Enter the quote').setRequired(true)),
    async execute(interaction, client) {

        const { options } = interaction;
        const quote = options.getString('quote');

        const quotebed = new EmbedBuilder()
        .setAuthor({ name: '💬 QuoteOfTheDay'})
        .setTitle("Today's quote of the day is...")
        .setDescription(`> **${quote}**`)
        .setFooter({ text: '💬 QuoteOfTheDay | By Kkermt.'})
        .setThumbnail(`${pfp}`)

        await interaction.reply({embeds: [quotebed]})
    }
}