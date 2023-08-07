import { memberMentionRegex } from "./regex.js";

export const parseUser = (input) => {
	const mentionMatch = input.match(memberMentionRegex);
	if (!mentionMatch) {
		return null;
	}

	const userId = mentionMatch[1];
	return userId;
};
