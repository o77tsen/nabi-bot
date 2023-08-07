import { Events, ActivityType } from "discord.js";
import Event from "../../lib/structures/event.js";

export default class extends Event {
	constructor(client) {
		super(client, {
			name: Events.ClientReady,
			once: false,
		});
	}

	async run() {
		this.logger.log(`${this.client.user.username} is ready!`);
		this.client.user.setPresence({
			activities: [
				{
					type: ActivityType.Listening,
					name: "spacey",
				},
			],
			status: "idle",
		});
	}
}
