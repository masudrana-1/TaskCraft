import prisma from "@/app/utils/connect";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

// create
export async function POST(req: Request) {
  try {
    const { userId } = auth();

    if (!userId) {
      return NextResponse.json({
        error: "Unauthorized",
        status: 401,
      });
    }

    const {title, description, date, completed, important,} = await req.json();

    // console.log(
    //   title,
    //   description,
    //   date,
    //   important,
    //   completed,
    //   important
    // );

    if (!title || !description || !date) {
      return NextResponse.json({
        error: "Missing required fields",
        status: 400,
      });
    }

    if (title.length < 3) {
      return NextResponse.json({
        error: "Title must be at least 3 characters long",
        status: 400,
      });
    }

    // create task
    const task = await prisma.task.create({
      data: {
        title,
        description,
        date,
        isCompleted: completed,
        isImportant: important,
        userId,
      },
    });

    return NextResponse.json(task);
  } catch (error) {
    console.log("ERROR CREATING TASKS:", error);
    return NextResponse.json({
      error: "Error creating task",
      status: 400,
    });
  }
}

// Get
export async function GET(req: Request) {
  try {
    const { userId } = auth();

    if (!userId) {
      return NextResponse.json({
        error: "Unauthorized",
        status: 401,
      });
    }

    const tasks = await prisma.task.findMany({
      where: {
        userId,
      },
    });

    // console.log("TASKS", tasks);

    return NextResponse.json(tasks);
  } catch (error) {
    console.log("ERROR GETTING TASKS:", error);
    return NextResponse.json({
      error: "Error getting task",
      status: 400,
    });
  }
}

// Update
// export async function PUT(req: Request) {
//   try {
//     const { userId } = auth();
//     const { isCompleted, id } = await req.json();

//     if (!userId) {
//       return NextResponse.json({
//         error: "Unauthorized",
//         status: 401,
//       });
//     }

//     const task = await prisma.task.update({
//       where: {
//         id,
//       },
//       data: {
//         isCompleted,
//       },
//     });

//     console.log("Task Updated:", task);

//     return NextResponse.json(task);


//   } catch (error) {
//     console.log("ERROR UPDATING TASKS:", error);
//     return NextResponse.json({
//       error: "Error updating task",
//       status: 400,
//     });
//   }
// }

export async function PUT(req: Request) {
  try {
    const { userId } = auth();

    if (!userId) {
      return NextResponse.json({
        error: "Unauthorized",
        status: 401,
      });
    }

    // Check if request body is empty
    const requestData = await req.json();
    if (!requestData) {
      console.error("Empty request body");
      return NextResponse.json({
        error: "Empty request body",
        status: 400,
      });
    }

    const { isCompleted, id } = requestData;

    // console.log("Received data:", requestData);

    const task = await prisma.task.update({
      where: {
        id,
      },
      data: {
        isCompleted,
      },
    });

    console.log("Task Updated:", task);

    return NextResponse.json(task);
  } catch (error) {
    console.error("ERROR UPDATING TASKS:", error);
    return NextResponse.json({
      error: "Error updating task",
      status: 400,
    });
  }
}
