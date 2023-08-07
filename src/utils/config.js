import process from "node:process";

export const defaultPermissions = ["SendMessages", "ViewChannel"];
export const mongoURI = process.env.MONGO_URI;
export const developer = process.env.DEVELOPER_ID;
export const token = process.env.CLIENT_TOKEN;
