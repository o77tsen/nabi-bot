import Event from "../../lib/structures/event.js";

export default class extends Event {
	constructor(client) {
		super(client, {
			name: "rateLimited",
			once: false,
			emitter: "rest",
		});
	}

	async run(data) {
		const rateLimitData = [
			`Route: ${data.route}`,
			`Hash: ${data.hash}`,
			`Method: ${data.method}`,
			`Limit: ${data.limit}`,
			`Timeout: ${data.timeToReset}ms`,
			`Global: ${data.global}`,
		].join("\n");

		this.logger.warn(`Client is being Rate Limited.\n${rateLimitData}`);
	}
}
