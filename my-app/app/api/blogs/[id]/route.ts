import { deletePost, getById, updatePost } from "@/lib/data";
import { NextResponse } from "next/server";

export const GET = async (req: Request) => {
  // get a post by id

  try {
    const id = req.url.split("blogs/")[1];
    console.log(id);
    const post = getById(id);
    if (!post) {
      return NextResponse.json(
        {
          message: "ERROR",
        },
        {
          status: 404,
        }
      );
    }
    return NextResponse.json(
      {
        message: "OK, you see all posts",
        post,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: "ERROR",
        error,
      },
      {
        status: 500,
      }
    );
  }
};
export const PUT = async (req: Request) => {
  // update a post by id

  try {
    const { title, desc } = await req.json();
    const id = req.url.split("blogs/")[1];
    updatePost(id, title, desc);

    return NextResponse.json({ message: "OK" }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      {
        message: "Error",
        error,
      },
      {
        status: 500,
      }
    );
  }
};
export const DELETE = async (req: Request) => {
  // Delete post by id
    try {
        const id = req.url.split("blogs/")[1]
        deletePost(id)
        return NextResponse.json({
            message: "POST DELETED"
        }, {status:200})
    } catch (error) {
        return NextResponse.json({
            message: "ERROR", error
        },
        {
            status: 500
        }
    )
    }

};
