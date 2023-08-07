import Balance from "../../models/balance.js";

export const getBalance = async (userId) => {
    try {
        const data = await Balance.findOne({ userId }).lean();

        return data ? data.money : "0";
    } catch (error) {
        console.error(error.message);
        return null;
    }
};

export const updateUser = async (userId, amount, items) => {
    try {
        const updateData = await Balance.findOneAndUpdate(
            { userId },
            {
                $inc: { money: amount },
                $push: { items }
            },
            {
                upsert: true,
                new: true,
            }
        );

        return { money: updateData.money };
    } catch (error) {
        console.error(error.message);
        return null;
    }
};
