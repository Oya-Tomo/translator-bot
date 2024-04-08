import { CommandInteraction } from "discord.js";
import { translate } from "./translate";

export async function translateInteraction(
  interaction: CommandInteraction,
  lang: string
) {
  let text = interaction.options.get("text")?.value?.toString()!;
  let output = await translate(lang, text);
  await interaction.reply(`:pen_fountain:${text}\n:pen_ballpoint:${output}`);
}
