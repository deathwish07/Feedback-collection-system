import mongoose from "mongoose";

const formSchema = new mongoose.Schema({
    userID:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    que1: {
        type: String,
        required: true
    },
    que2: {
        type: String,
        required: true
    },
    que3: {
        type: String,
        required: true
    },
    que4: {
        type: String,
        required: true
    },
    que5: {
        type: String,
        required: true
    }

});