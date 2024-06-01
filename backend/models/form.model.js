import mongoose from "mongoose";

const formSchema = new mongoose.Schema({
    user:{
        type: String,
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

const form = mongoose.model("form", formSchema)

export default form;