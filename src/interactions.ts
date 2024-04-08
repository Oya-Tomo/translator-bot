import { CommandInteraction } from "discord.js";
import { translate } from "./translate";

export async function translateInteraction(
  interaction: CommandInteraction,
  lang: string
) {
  await interaction.reply("Work In Progress");
  let text = interaction.options.get("text")?.value?.toString()!;
  let output = await translate(lang, text);
  await interaction.editReply(
    `:pen_fountain:${text}\n:pen_ballpoint:${output}`
  );
}
