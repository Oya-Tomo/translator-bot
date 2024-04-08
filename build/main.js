"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bot = void 0;
const discord_js_1 = require("discord.js");
const interactions_1 = require("./interactions");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.bot = new discord_js_1.Client({
    intents: ["MessageContent", "Guilds", "GuildMembers", "GuildMessages"],
});
const commands = [
    new discord_js_1.SlashCommandBuilder().setName("ping").setDescription("Is the bot awake?"),
    new discord_js_1.SlashCommandBuilder()
        .setName("ja2en")
        .setDescription("Japanese to English")
        .addStringOption((option) => option.setName("text").setDescription("text to translate")),
    new discord_js_1.SlashCommandBuilder()
        .setName("en2ja")
        .setDescription("English to Japanese")
        .addStringOption((option) => option.setName("text").setDescription("text to translate")),
];
exports.bot.once("ready", () => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    yield ((_a = exports.bot.application) === null || _a === void 0 ? void 0 : _a.commands.set(commands, "904327215024599051"));
    console.log("[INFO] logged in");
}));
exports.bot.on("messageCreate", (message) => __awaiter(void 0, void 0, void 0, function* () {
    if (message.author.bot)
        return;
}));
exports.bot.on("interactionCreate", (interaction) => __awaiter(void 0, void 0, void 0, function* () {
    if (interaction.isCommand()) {
        if (interaction.commandName === "ja2en") {
            yield (0, interactions_1.translateInteraction)(interaction, "en");
        }
        else if (interaction.commandName === "en2ja") {
            yield (0, interactions_1.translateInteraction)(interaction, "ja");
        }
    }
    else {
        return;
    }
}));
let token;
function loadConfig() {
    token = process.env.token;
}
loadConfig();
exports.bot.login(token);
