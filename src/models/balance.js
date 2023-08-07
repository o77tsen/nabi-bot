import { Schema, SchemaTypes, model } from "mongoose";

export default model(
	"balance",
	new Schema({
		userId: { type: SchemaTypes.String, unique: true },
		guildId: { type: SchemaTypes.String },
		money: { type: SchemaTypes.Number, default: 0 },
		items: { type: [Object], default: [] },
	})
);
