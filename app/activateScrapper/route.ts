import { NextApiRequest } from "next";

export async function POST(req: Request) {
    console.log("Submitting");
    const search = await req.body;

    console.log("Search is >> ", search);
}
