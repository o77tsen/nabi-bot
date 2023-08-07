import path from "node:path";
import process from "node:process";
import { URL, fileURLToPath, pathToFileURL } from "node:url";
import chalk from "chalk";
import { REST, Routes } from "discord.js";
import { globby } from "globby";
import "dotenv/config";

const token = process.env.CLIENT_TOKEN;
const clientId = process.env.CLIENT_ID;

const main = fileURLToPath(new URL("../src/main.js", import.meta.url));
const directory = `${path.dirname(main) + path.sep}`.replace("\\", "/");

const commands = [];

await globby(`${directory}interactions/*.js`).then(async (files) => {
	for (const file of files) {
		const { default: interaction } = await import(pathToFileURL(file));
		commands.push(interaction);
	}
});

const rest = new REST({ version: "10" }).setToken(token);

try {
	console.log(
		`${chalk.gray("Started refreshing application (/) commands...")}`
	);

	await rest.put(Routes.applicationCommands(clientId), {
		body: [...commands],
	});

	console.log(
		`${chalk.cyan("Successfully reloaded application (/) commands!")}`
	);
} catch (error) {
	console.error(`${chalk.red(`${error.name}: ${error.stack}`)}`);
}
