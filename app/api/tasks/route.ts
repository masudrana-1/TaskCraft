import { NextResponse } from "next/server";


// create 
export async function POST(req: Request) {
    try {
        
    } catch (error) {
        console.log("ERROR CREATING TASKS:", error);
        return NextResponse.json({ error: "Error creating task", status: 500 });
    }
}

// Get 
export async function GET(req: Request) {
    try {
        
    } catch (error) {
        console.log("ERROR GETTING TASKS:", error);
        return NextResponse.json({ error: "Error getting task", status: 500 });
    }
}

// Update 
export async function PUT(req: Request) {
    try {
        
    } catch (error) {
        console.log("ERROR UPDATING TASKS:", error);
        return NextResponse.json({ error: "Error updating task", status: 500 });
    }
}

// Deleting
export async function DELETE(req: Request) {
    try {
        
    } catch (error) {
        console.log("ERROR DELETING TASKS:", error);
        return NextResponse.json({ error: "Error deleting task", status: 500 });
    }
}