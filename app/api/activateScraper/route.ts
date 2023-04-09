import { adminDB } from "@/firebaseAdmin";
import admin from "firebase-admin";
import { NextRequest, NextResponse } from "next/server";
import { type } from "os";

type Body = {
    search: string; 
}

export async function POST(req:Request, res:Response) {
    try{

        const res = await req.json();
        const search = res.search;
        console.log("Q1");
        
        const response = await fetch(`https://api.brightdata.com/dca/trigger?collector=c_lg6v4phh2e087gtnhp&queue_next=1`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${process.env.BRIGHTDATA_API_KEY}`
            },
            body: JSON.stringify({
                "search":search,
            })
        });
        console.log("Q2");
        const data = await response.json();
        console.log("DATA IS -> ", data);
        const { collection_id, start_eta} = data;
        await adminDB.collection('searches').doc(collection_id).set({
            search,
        start_eta,
        status: 'pending',
        updatedAt: start_eta
    })
    return NextResponse.json({ collection_id,start_eta },{ status: 200})
    }
    catch(err:any){
        console.log("ERROR IS -> ", err);
        return NextResponse.json({ err },{ status: 500})
    }
}