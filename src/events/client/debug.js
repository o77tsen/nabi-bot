import { Events } from "discord.js";
import Event from "../../lib/structures/event.js";

export default class extends Event {
	constructor(client) {
		super(client, {
			name: Events.Debug,
			once: false,
		});
	}

	async run(info) {
		if (!this.client.debug) return;

		this.logger.debug(info);
	}
}
