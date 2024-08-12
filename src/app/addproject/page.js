"use client"
import { useState } from "react";

export default function Page(){

    const [title , settitle] = useState();
    const [description , setdescription] = useState();
    const [contentType , setcontentType] = useState();
    const [targetAudience , settargetAudience] = useState();
    const [budget , setbudget] = useState();
    const [deadline , setdeadline] = useState();


    const addProject= async()=>
        {
          let result = await fetch("http://localhost:3001/api/projects",{
            method:"POST",
            body:JSON.stringify({title, description , contentType , targetAudience , budget , deadline})
        })
            result = await result.json();
            
            console.log(result)

            if(result.success)
            {
                alert("New Project Added")
            }
            
        }


    return(
        <div>


            <h1>
                Add Projects
            </h1>
            <container>
                <form >

                <input placeholder="title" onChange={(e)=>settitle(e.target.value)} required /><br></br>
                <input placeholder='description' onChange={(e)=>setdescription(e.target.value)} required /><br></br>
                <input placeholder="contentType" onChange={(e)=>setcontentType(e.target.value)} required /><br></br>
                <input placeholder="targetAudience" onChange={(e)=>settargetAudience(e.target.value)} required /><br></br>
                <input type="number" placeholder="budget" onChange={(e)=>setbudget(e.target.value)} required /><br></br>
                <input type="date" placeholder="deadline" onChange={(e)=>setdeadline(e.target.value)} required /><br></br>


                <button onClick={addProject} >Creat Project</button>
            </form>
            </container>





        </div>
    )
}















