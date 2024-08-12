
import mongoose from "mongoose";
import { NextResponse } from "next/server";
import Project from "../../../../lib/model/project";

////////////////////////////////////////////////////////////////////////////////////
const dbUrl = 'mongodb://127.0.0.1:27017/projectsbids';


mongoose.connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

async function main() {
    await mongoose.connect(dbUrl);
    console.log("Database connection established");
}

main().catch(err => {
    console.log("Database connection error", err);
});



/////////////////////////////////////////////////////////////////////

export async function PATCH(request, context) {
    const projectId = context.params.projectid;
    const newBid = await request.json();
    // console.log(projectId , "PATCHPATCHPATCHPATCHPATCHPATCHPATCH")
    const project = await Project.findById(projectId);
    project.bids.push(newBid);
    await project.save();

    return NextResponse.json({ success: true, result: project });
    
}




export async function GET(request, context) {
    const projectId = context.params.projectid;
    // console.log(projectId , "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")
    const project = await Project.findById(projectId);
    return NextResponse.json({ success: true, result: project });
   
}
