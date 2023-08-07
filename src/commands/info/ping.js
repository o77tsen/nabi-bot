import Command from "../../../lib/structures/interaction.js";

export default class extends Command {
	constructor(...args) {
		super(...args, {
			name: "ping",
		});
	}

	async run(interaction) {
		await interaction.reply({
			content: `**Pong!** \`${this.client.ws.ping}ms\``,
			ephemeral: true,
		});
	}
}
