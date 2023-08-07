import { Guild } from "discord.js";
import { parseUser } from "../helpers/parsers.js";

Guild.prototype.isValidMember = async function isValidMember(memberId) {
	const userId = parseUser(memberId);
	if (!userId) {
		return false;
	}

	const member = await this.members.fetch(userId).catch(() => null);
	return member;
};
