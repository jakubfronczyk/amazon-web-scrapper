// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { adminDb } from "../../firebaseAdmin";
import admin from "firebase-admin";

type Data = {
    collection_id: string;
    start_eta: number;
};

type Error = {
    error: string;
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data | Error>
) {
    try {
        const { search } = req.body;

        console.log("Search is >> ", search);

        const response = await fetch(
            `https://api.brightdata.com/dca/trigger?collector=c_leylhdk31lvk91s6ik&queue_next=1`,
            {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${process.env.BRIGHTDATA_API_KEY}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ search }),
            }
        );

        const data = await response.json();
        console.log("Data is >>> ", data);

        const { collection_id, start_eta } = data;

        await adminDb.collection("searches").doc(collection_id).set({
            search,
            start_eta,
            status: "pending",
            updatedAt: admin.firestore.Timestamp.now(),
        });

        res.status(200).json({
            collection_id,
            start_eta,
        });
    } catch (err: any) {
        console.log("Error is >>> ", err);
        return res.status(500).json({ error: err.message });
    }
}
