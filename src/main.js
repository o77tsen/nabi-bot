import "dotenv/config";

import "./core/extenders/message.js";
import "./core/extenders/interaction.js";
import "./core/extenders/guild.js";

import Client from "./lib/baseClient.js";
import * as Config from "./utils/config.js";

const client = new Client(Config);

client.init();
