import { Events } from "discord.js";
import Event from "../../lib/structures/event.js";

export default class extends Event {
	constructor(client) {
		super(client, {
			name: Events.GuildUnavailable,
			once: false,
		});
	}

	async run(guild) {
		this.logger.warn(`Guild ${guild.name} is unavailable.`);
	}
}
