// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

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

    res.status(200).json({
        collection_id: "1234",
        start_eta: 1234,
    });
}
