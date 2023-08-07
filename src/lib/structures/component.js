/* eslint-disable no-unused-vars */
import chalk from "chalk";

export default class Component {
	constructor(client, name, options = {}) {
		this.client = client;
		this.name = options.name || name;
		this.match = options.match || "exact";
	}

	async run(interaction) {
		throw new Error(
			`${chalk.yellow(`Component ${this.name} doesn't provide a run method.`)}`
		);
	}
}
