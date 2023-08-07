import process from "node:process";
import Redis from "ioredis";

/**
 * Cache Manager
 */
class Cache {
	constructor() {
		// Create new Redis client
		this.redis = new Redis(process.env.REDIS_URI);
	}

	/**
	 * Get the value for specified key from cache
	 *
	 * @param {string} key - The key to retrieve the value from
	 * @returns {Promise<key>} A promise that resolves with the value or null if no key is found
	 * @throws {Error} Error handler to catch error while getting data from cache
	 */
	async get(key) {}

	/**
	 * Set the value for specified key in the cache
	 *
	 * @param {string} key - The key to set the value in cache
	 * @param {any} value - The value to be stored in cache. Value will be JSON stringified before storage
	 * @param {number} ttl - Optional time-to-live in seconds for cahce entry
	 * @throws {Error} Error handler to catch error while setting data to cache
	 */
	async set(key, value, ttl = 0) {}

	/**
	 * Delete value for the specified key from cache
	 *
	 * @param {string} key - The key to delete from cache
	 * @throws {Error} Error handler to catch error while deleting data from cache
	 */
	async delete(key) {}

	/**
	 * Clear all data from cache
	 *
	 * @throws {Error} Error handler to catch error while clearing data from cache
	 */
	async clear() {}

	/**
	 * Quit Redis connection
	 *
	 * @throws {Error} Error handler to catch error while trying to quit Redis connection
	 */
	async quit() {}
}

export default new Cache();
