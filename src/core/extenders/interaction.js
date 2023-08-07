import { CommandInteraction, ButtonInteraction } from "discord.js";
import { replacePlaceholders } from "../helpers/formatters.js";

CommandInteraction.prototype.res = async function res(msg) {
	return this.reply({
		content: replacePlaceholders(this, msg),
		ephemeral: true,
	});
};

ButtonInteraction.prototype.res = async function res(msg) {
	return this.reply({
		content: replacePlaceholders(this, msg),
		ephemeral: true,
	});
};
