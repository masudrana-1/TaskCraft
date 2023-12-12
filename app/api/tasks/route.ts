import prisma from "@/app/utils/connect";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";


// create 
export async function POST(req: Request) {
    try {

        const { userId } = auth();

        if (!userId) {
            return NextResponse.json({ error: "Unauthorized", status: 401 })
        }

        const { title, description, date, completed, important } = await req.json();
        if (!title || !description || !date) {
            return NextResponse.json({
                error: "Missing required fields",
                status: 400,
            });
        }

        // if (title.length > 3) {
        //     return NextResponse.json({
        //         error: "Title must be at least 3 characters long",
        //         status: 400,
        //     });
        // }

        const localDate = new Date();
        const localDateString = localDate.toLocaleString('en-US', { timeZone: 'Asia/Dhaka' });
        const isoDateString = localDate.toISOString();

        // create task 
        const task = await prisma.task.create({
            data: {
                title,
                description,
                date: isoDateString,
                isCompleted: Boolean(completed),
                isImportant: Boolean(important),
                userId,
            }
        });
        return NextResponse.json(task)

        console.log("Task created", task);

        
    } catch (error) {
        console.log("ERROR CREATING TASKS:", error);
        return NextResponse.json({ error: "Error creating task", status: 400 });
    }
}

// Get 
export async function GET(req: Request) {
    try {
        
    } catch (error) {
        console.log("ERROR GETTING TASKS:", error);
        return NextResponse.json({ error: "Error getting task", status: 400 });
    }
}

// Update 
export async function PUT(req: Request) {
    try {
        
    } catch (error) {
        console.log("ERROR UPDATING TASKS:", error);
        return NextResponse.json({ error: "Error updating task", status: 400 });
    }
}

// Deleting
export async function DELETE(req: Request) {
    try {
        
    } catch (error) {
        console.log("ERROR DELETING TASKS:", error);
        return NextResponse.json({ error: "Error deleting task", status: 400 });
    }
}