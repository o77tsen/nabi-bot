import chalk from "chalk";
import {
	Client,
	Collection,
	GatewayIntentBits,
	Partials,
	AllowedMentionsTypes,
} from "discord.js";
import Util from "./structures/util.js";

export default class BaseClient extends Client {
	constructor(options = {}) {
		super({
			intents: [
				GatewayIntentBits.Guilds,
				GatewayIntentBits.GuildMembers,
				GatewayIntentBits.GuildMessages,
				GatewayIntentBits.MessageContent,
			],
			partials: [Partials.GuildMember, Partials.Message],
			allowedMentions: {
				parse: [AllowedMentionsTypes.User, AllowedMentionsTypes.Role],
				repliedUser: false,
			},
		});

		this.validate(options);

		this.interactions = new Collection();
		this.components = new Collection();
		this.events = new Collection();
		this.utils = new Util(this);
	}

	async validate(options) {
		if (typeof options !== "object")
			throw new TypeError(
				`${chalk.yellow("Options should be a type of Object.")}`
			);

		if (!options.token)
			throw new Error(
				`${chalk.red("A token is required for the client to initialise.")}`
			);
		this.token = options.token;
	}

	async init(token = this.token) {
		await this.utils.loadInteractions();
		await this.utils.loadComponents();
		await this.utils.loadEvents();
		await this.utils.loadDatabase();
		await super.login(token);
	}
}
