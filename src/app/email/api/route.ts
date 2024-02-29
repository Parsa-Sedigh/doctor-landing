import {NextRequest} from "next/server";

export async function POST(req: NextRequest) {
    console.log('req: ', req.body)

    return Response.json({status: "ok"});
}
