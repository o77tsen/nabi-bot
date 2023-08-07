import { getBalance } from "../../core/index.js";
import Command from "../../lib/structures/interaction.js";

export default class extends Command {
	constructor(...args) {
		super(...args, {
			name: "balance",
		});
	}

	async run(interaction) {
		const data = await getBalance(interaction.user.id);

		await interaction.res(`{user_name}, your balance is ${data} coins!`);
	}
}
