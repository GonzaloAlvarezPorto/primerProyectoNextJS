import React, { Suspense } from 'react'
import PostPages from '@/app/posts/page';


const loadPost = async (id) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  const data = await res.json();
  return data;
}

const Page = async ({ params }) => {

  const post = await loadPost(params.id);

  return (
    <div>
      <h3>
        Post Page {post.id} {post.title}
      </h3>
      <p>
        {post.body}
      </p>

      <hr />
      <h3>Otras publicaciones</h3>
      <Suspense fallback={<div>Cargando publicaciones...</div>}>
        <PostPages/>
      </Suspense>
    </div>
  )
}

export default Page