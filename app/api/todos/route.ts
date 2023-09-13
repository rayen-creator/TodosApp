import { NextResponse } from "next/server";

//dummy data
let todos = [
    {
        id: 1,
        name: "get groceries",
    },
    {
        id: 2,
        name: "do homework",
    }, {
        id: 3,
        name: "go to gym",
    }
];

export async function GET() {
    return NextResponse.json({ todos });
}

export async function DELETE(request:any) {
    const data=await request.json();
    todos = todos.filter(todo => todo.id!== data.id);
    return NextResponse.json({todos});
}

export async function POST(request:any){
    const data=await request.json();
    todos.push(data);
    return NextResponse.json({todos});
}