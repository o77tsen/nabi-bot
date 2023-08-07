import { Events } from "discord.js";
import Event from "../../lib/structures/event.js";

export default class extends Event {
	constructor(client) {
		super(client, {
			name: Events.InteractionCreate,
			once: false,
		});
	}

	async run(interaction) {
		if (
			!interaction.isChatInputCommand() &&
			!interaction.isCommand() &&
			!interaction.isMessageContextMenuCommand()
		) {
			return;
		}

		if (!interaction.inCachedGuild()) {
			return;
		}

		const command = this.client.interactions.get(interaction.commandName);
		if (!command) return;

		if (command) {
			try {
				await command.run(interaction);
			} catch (error) {
				this.logger.error(error, error.message);
			}
		}
	}
}
