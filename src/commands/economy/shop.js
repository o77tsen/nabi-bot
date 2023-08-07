import { EmbedBuilder } from "discord.js";
import { formattedShop } from "../../../core/index.js";
import Command from "../../../lib/structures/interaction.js";
import { buildActionRows } from "../../../utils/buttonUtils.js";
import { shopItems } from "../../../utils/constants.js";

export default class extends Command {
	constructor(...args) {
		super(...args, {
			name: "shop",
		});
	}

	async run(interaction) {
		const embed = new EmbedBuilder()
			.setTitle(`${interaction.guild.name}'s Fruit Shop`)
			.setDescription(
				"Purchase a fruit from the shop by clicking on its respective button"
			)
			.addFields(formattedShop(shopItems))
			.setThumbnail(interaction.guild.iconURL())
			.setFooter({
				text: interaction.user.username,
				iconURL: interaction.user.displayAvatarURL(),
			})
			.setColor("#83d8ff")
			.setTimestamp();
		return interaction.reply({
			embeds: [embed],
			components: buildActionRows(shopItems, 5),
			ephemeral: true,
		});
	}
}
