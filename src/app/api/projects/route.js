// import { connectionSrt } from "@/lib/db"
import mongoose from "mongoose"
import { NextResponse } from "next/server";
import  Project  from "../../../lib/model/project"



///////////////////////////////////////////////////////




const dbUrl = 'mongodb://127.0.0.1:27017/projectsbids';




mongoose.connect(dbUrl , {
    useNewUrlParser: true,

    useunifiedTopology: true

});

main().then (() => {
  console.log("CONNECTION  database OPEN")
}) 

main().catch(err => 
  {
    console.log("Oh NO ERROR")
    console.log(err)
  });

async function main() {
  await mongoose.connect(dbUrl);

}










///////////////////////////////////////////////////////////

export async function GET(){
    
    // await mongoose.connect(connectionSrt);
    const data = await Project.find()
    // console.log("caled mecaled mecaled mecaled mecaled mecaled mecaled mecaled mecaled me")
    // console.log(data , "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")
    return NextResponse.json({result: data , success: true})
}




export async function POST(request){
    const payload = await request.json();
    // await mongoose.connect(connectionSrt);
    let project = new Project(payload);
    const result = await project.save();
    return NextResponse.json({result , success:true})
}