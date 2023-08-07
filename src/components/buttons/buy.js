import { getBalance, updateUser } from "../../core/index.js";
import Component from "../../lib/structures/component.js";
import { shopItems } from "../../utils/constants.js";

export default class extends Component {
	constructor(...args) {
		super(...args, {
			name: "buy",
			match: "startswith"
		});
	}

	async run(interaction) {
		const balance = await getBalance(interaction.user.id);

		const shopItem = interaction.customId.replace("buy-", "");
		const itemData = shopItems.find((item) => item.name === shopItem);

		if (balance < itemData.price) {
			return interaction.reply({ content: "You don't have enough coins to purchase this item!" });
		} else {
			const updatedUser = await updateUser(interaction.user.id, -itemData.price, itemData);

			return interaction.res(`Successfully purchased ${itemData.name} for ${itemData.price} coins!\nYour balance is now ${updatedUser.money} coins.`);
		}
	}
}