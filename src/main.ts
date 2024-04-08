import { Client, Interaction, Message, SlashCommandBuilder } from "discord.js";
import { translateInteraction } from "./interactions";
import express from "express";

import dotenv from "dotenv";
dotenv.config();

export const bot = new Client({
  intents: ["MessageContent", "Guilds", "GuildMembers", "GuildMessages"],
});

const commands = [
  new SlashCommandBuilder().setName("ping").setDescription("Is the bot awake?"),
  new SlashCommandBuilder()
    .setName("ja2en")
    .setDescription("Japanese to English")
    .addStringOption((option) =>
      option.setName("text").setDescription("text to translate")
    ),
  new SlashCommandBuilder()
    .setName("en2ja")
    .setDescription("English to Japanese")
    .addStringOption((option) =>
      option.setName("text").setDescription("text to translate")
    ),
];

bot.once("ready", async () => {
  await bot.application?.commands.set(commands, "904327215024599051");
  console.log("[INFO] logged in");
});

bot.on("messageCreate", async (message: Message) => {
  if (message.author.bot) return;
});

bot.on("interactionCreate", async (interaction: Interaction) => {
  if (interaction.isCommand()) {
    if (interaction.commandName === "ja2en") {
      await translateInteraction(interaction, "en");
    } else if (interaction.commandName === "en2ja") {
      await translateInteraction(interaction, "ja");
    }
  } else {
    return;
  }
});

let token: string | undefined;

function loadConfig() {
  token = process.env.token;
}

loadConfig();

bot.login(token);

const server = express();

server.get("/healthz", (req, res) => {
  res.status(200).send("OK");
});

server.listen(process.env.port, () => {
  console.log("[INFO] start server");
});
