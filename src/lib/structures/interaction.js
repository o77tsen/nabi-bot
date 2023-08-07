/* eslint-disable no-unused-vars */
import chalk from "chalk";
import { PermissionsBitField } from "discord.js";

export default class Interaction {
	constructor(client, name, options = {}) {
		this.client = client;
		this.name = options.name || [name];
		this.description =
			options.description || "No further information provided.";
	}

	async run(interaction, args) {
		throw new Error(
			`${chalk.yellow(
				`(/) Command ${this.name} doesn't provide a run method.`
			)}`
		);
	}
}
