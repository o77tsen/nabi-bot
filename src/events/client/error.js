import process from "node:process";
import { Events } from "discord.js";
import Event from "../../lib/structures/event.js";

export default class extends Event {
	constructor(client) {
		super(client, {
			name: Events.Error,
			once: false,
		});
	}

	async run() {
		process.on("unhandledRejection", (reason) => {
			this.logger.error(`Uncaught Rejection/Catch\n${reason.stack}`);
		});

		process.on("uncaughtException", (err, origin) => {
			this.logger.error(`Uncaught Exception/Catch\n${err.stack} - ${origin}`);
		});

		process.on("uncaughtExceptionMonitor", (err, origin) => {
			this.logger.error(
				`Uncaught Exception/Catch (MONITOR)\n${err.stack} - ${origin}`
			);
		});
	}
}
