"use client"

import Link from 'next/link'
import { useParams } from 'next/navigation'
import React from 'react'

const PostCard = ({post}) => {

  const params = useParams();
  console.log(params);
  
  return (
    <div>
       <Link href={`/posts/${post.id}`}> <h3>
            {post.id}. {post.title}
        </h3>
        </Link>
        <p>{post.body}</p>
        <button onClick={() => {
            alert(`Click funcionando para ${post.id}`)
        }}>Click</button>
    </div>
  )
}

export default PostCard