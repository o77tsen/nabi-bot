import { Events } from "discord.js";
import Event from "../../lib/structures/event.js";

export default class extends Event {
	constructor(client) {
		super(client, {
			name: Events.Warn,
			once: false,
		});
	}

	async run(info) {
		this.logger.warn(info);
	}
}
