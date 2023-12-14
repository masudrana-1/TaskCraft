import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import prisma from "@/app/utils/connect";



// Deleting
export async function DELETE(req: Request, {params}: {params: {id: string}}) {
    try {
        const { userId } = auth();
        const { id } = params;

        if (!userId) {
            return NextResponse.json({ error: "Unauthorized", status: 401 })
        }

        const task = await prisma.task.findMany({
            where: {
                id,
            }
        })

        console.log("TASK DELETED:", task)

        return NextResponse.json(task)

    } catch (error) {
        console.log("ERROR DELETING TASKS:", error);
        return NextResponse.json({ error: "Error deleting task", status: 400 });
    }
}