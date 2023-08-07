import { Events } from "discord.js";
import Event from "../../lib/structures/event.js";
import { resolveButtonMatch } from "../../utils/buttonUtils.js";

export default class extends Event {
    constructor(client) {
        super(client, {
            name: Events.InteractionCreate,
            once: false,
        });
    }

    async run(interaction) {
        if (!interaction.isButton()) {
            return;
        }

        const componentId = interaction.customId;
        const components = this.client.components;

        for (const [name, component] of components) {
            const matchMode = component.match.toLowerCase();
            const matched = resolveButtonMatch(componentId, name, matchMode);

            if (matched) {
                try {
                    await component.run(interaction);
                } catch (error) {
                    this.logger.error(error, error.message);
                }
            }
        }
    }
}