
import Addlink from "./mycompo/page";

import mongoose from "mongoose";
import  Project  from "../../lib/model/project";


const getProjects = async()=>{
    let data = await fetch("http://localhost:3001/api/projects")

    
    data = await data.json();

    // console.log(data.result , "fffffffffffffffffffffffffffffffffffffff")

    if(data.success){
        return data.result
    }
    else{
        return {success: false}
    }

} 




export default async function Page()
{
    let projects = await getProjects();

    // console.log(projects)

    return(
        <div>
            <h1>
                Projects List
                
            </h1>
            <h3>----------------------------</h3>

            
            { <div>
                {(
                    projects.map((item) => (
                        <div key={item._id}>
                            <h1>Title:              {item.title}</h1>
                            <h2>Description :       {item.description}</h2>
                            <h2>Content Type :      {item.contentType}</h2>
                            <h2>Target Audience:    {item.targetAudience}</h2>
                            <h2>Budget:             {item.budget}</h2>
                            <h2>Deadline:           {item.deadline}</h2>
                            <h2>Bids:               {item.bids}</h2>

                            {
                                // console.log(item.bids , "BIDSBIDSBIDSBIDSBIDSBIDSBIDSBIDSBIDS")
                                
                                    item.bids.map((bid, index) => (
                                        <div key={index}>
                                            <h3>Bid Amount: {bid.amount}</h3>
                                            <h3>Bid Time: {bid.time}</h3>
                                        </div>
                                    ))
                            }

                            <Addlink id={item._id}/>
                            {/* <Link href={"projects/"+item._id}>Add Bid</Link> */}

                            <h1>---------------------------------------------------------------</h1>
                            
                        </div>
                    ))
                ) }
            </div> }
        </div>
    )
}