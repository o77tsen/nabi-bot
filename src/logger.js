import process from "node:process";
import pino, { transport, multistream } from "pino";

const level = process.env.NODE_ENV === "production" ? "debug" : "trace";

const logger = pino(
	{
		level,
	},
	multistream([
		{
			stream: transport({
				target: "pino-pretty",
				options: {
					ignore: "pid,hostname",
					colorize: true,
					levelFirst: true,
					customColors: "info:green,warn:yellow,error:red",
					translateTime: "SYS:ddd,mm/dd/yy,h:MM:ss",
					singleLine: false,
				},
			}),
		},
	])
);

export default {
	log: (content) => logger.log(content),
	info: (content) => logger.info(content),
	warn: (content) => logger.warn(content),
	error: (content) => logger.error(content),
	debug: (content) => logger.debug(content),
};
