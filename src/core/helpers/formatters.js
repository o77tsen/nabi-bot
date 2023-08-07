import { placeholderRegex } from "./regex.js";

/**
 * Replace placeholders in a string with given values
 *
 * @param {object} data - The object containing several data used as replacement values
 * @param {string} content - The string with placeholders to replace
 * @returns {string} A string will be replaced by corresponding values
 */
export const replacePlaceholders = (data, content) => {
	const placeholders = {
		// add placeholders
	};

	return content.replaceAll(
		placeholderRegex,
		(match, placeholder) => placeholders[placeholder] || match
	);
};

/**
 * Format shop items into an array of objects to add to embed fields
 *
 * @param {Array} items - The array of shop items to format
 * @returns {Array} An array of objects containing formatted shop item info
 */
export const formattedShop = (items) => {};
