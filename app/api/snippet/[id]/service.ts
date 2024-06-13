import { Language, Snippet, Technology } from "@prisma/client";
import { db } from "@/app/lib/db";
import { z } from "zod";
import { auth } from "@clerk/nextjs/server";


const updateSnippetSchema = z.object({
  title : z.string().optional(),
  content: z.string().optional(),
  language:z.nativeEnum(Language).optional(),
  technology:z.nativeEnum(Technology).optional()
}).refine((data) => Object.keys(data).length > 0)

export async function updateSnippet(
  id: number,
  body: Partial<Omit<Snippet, "id">>
) {
  try {
    if(!auth().userId){return {error:true,status:401,message:"you must be signed in"}}
    updateSnippetSchema.parse(body)
    const updatedSnippet = await db.snippet.update({
      data: body,
      where: { id },
    });
    return updatedSnippet;
  } catch (err) {
    return {
      error: true,
      status: 500,
      message:
        "Something went wrong updating the snippet " + (err as Error).message,
    };
  }
}


const deleteSnippetSchema = z.number()

export async function deleteSnippet(id: number) {
  if(!auth().userId){return {error:true,status:401,message:"you must be signed in"}}
  try {
    deleteSnippetSchema.parse(id)
    const deletedSnippet = await db.snippet.delete({
      where: { id },
    });
    return deletedSnippet;
  } catch (err) {
    return {
      error: true,
      status: 500,
      message:
        "Something went wrong deleting the snippet " + (err as Error).message,
    };
  }
}