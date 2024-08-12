"use client";
import { useEffect, useState } from "react";

export default function Page(props) {
    const [amount, setAmount] = useState("");
    const [time, setTime] = useState("");
    const [bidsArray, setBids] = useState([]);

    useEffect(() => {
        getProjectDetails();
    }, []);

    const getProjectDetails = async () => {

        const projectId = props.params.editproject;
        let projectData = await fetch(`http://localhost:3001/api/projects/${projectId}`);

        projectData = await projectData.json();
        console.log(projectData , "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")

        if (projectData.success) {
            setBids(projectData.result.bids);
        } else {
            console.error("Failed to fetch project details");
        }
    };

    const addBid = async (e) => {
        e.preventDefault();
        const projectId = props.params.editproject;
        
        const newBid = {
            amount: Number(amount),
            time: Number(time)
    };

        let response = await fetch(`http://localhost:3001/api/projects/${projectId}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newBid)
        });

        response = await response.json();

        if (response.success) {
            alert("Bid has been added");
            setBids([...bidsArray, newBid]);
        } else {
            console.error("Failed to add bid");
        }
    };

    return (
        <div>
            <h1>Add Bid</h1>
            <div>
                <form onSubmit={addBid}>
                    <input
                        placeholder="Amount"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                    />
                    <br />
                    <input
                        placeholder="Time"
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                    />
                    <button type="submit">Add Bid</button>
                </form>
            </div>
        </div>
    );
}
