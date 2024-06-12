import {db}from "@/app/lib/db"
import { Snippet } from "@prisma/client"

export async function readAllSnippet(){
   return await db.snippet.findMany() 
}

export async function createSnippet(body: Omit<Snippet, "id">) {
    try {
      const snippetCreated = await db.snippet.create({ data: body });
      return snippetCreated;
    } catch (err) {
      return {
        error: true,
        status: 500,
        message:
          "Something went wrong creating the snippet " + (err as Error).message,
      };
    }
  }