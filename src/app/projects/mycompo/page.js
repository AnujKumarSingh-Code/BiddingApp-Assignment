"use client";
import Link from "next/link";

export default function Addlink(props) {
    return (
        <div>
            <Link href={"projects/" + props.id}>Add Bid</Link>
        </div>
    );
}
