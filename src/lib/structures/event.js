/* eslint-disable no-unused-vars */
import chalk from "chalk";
import logger from "../../logger.js";

export default class Event {
	constructor(client, options) {
		this.client = client;
		this.name = options.name;
		this.type = options.once ? "once" : "on";
		this.emitter =
			(typeof options.emitter === "string"
				? Reflect.get(this.client, options.emitter)
				: options.emitter) ?? this.client;
		this.logger = logger;
	}

	async run(...args) {
		throw new Error(
			`${chalk.red(`Event ${this.name} does not provide a run method.`)}`
		);
	}
}
