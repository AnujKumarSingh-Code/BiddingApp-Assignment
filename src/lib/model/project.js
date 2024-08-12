import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
    title: String,
    description: String,
    contentType: String,
    targetAudience: String,
    budget: Number,
    deadline: String,
    bids: [{
        amount: Number,
        time: Number
    }]
});

const Project = mongoose.models.projects || mongoose.model("projects", projectSchema);

export default Project