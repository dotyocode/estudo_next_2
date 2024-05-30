import { NextResponse } from "next/server";

let tarefas = ["comprar coca", "estudar"];

export async function GET(req: Request) {
    return NextResponse.json(tarefas);
  }

  export async function POST(req: Request) {
    const data = await req.json();
    tarefas.push(data.name)
    return NextResponse.json(tarefas)
  }


  export async function PUT(req: Request) {
    const {searchParams} = new URL(req.url)
    const index = searchParams.get("index")

    const data = await req.json();
    tarefas[Number(index)] = data.name;

    return NextResponse.json(tarefas)
  }

  export async function DELETE(req: Request) {
    const {searchParams} = new URL(req.url)
    const index = searchParams.get("index")

    const data = await req.json();
    tarefas.splice(Number(index), 1)

    return NextResponse.json(tarefas)
  }
