const mongoose = require("mongoose");
const ScoresSchema = new mongoose.Schema(
    {
        date: {
						type: Date,
						default: Date.now
        },
        url: {
            type: String
        },
        score: {
            type: Object
        }
    }
);

module.exports = mongoose.model("Score", ScoresSchema);