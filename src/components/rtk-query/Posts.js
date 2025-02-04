import React from 'react'
import { useGetPostsQuery } from './api/apiSlice'

const Posts = () => {
    const {data : posts ,error,isLoading} = useGetPostsQuery()
    if (isLoading) return <p>Loading posts...</p>;
    if (error) return <p>Error fetching posts.</p>;



  return (
    <div>
      <h2>RTK Query Posts</h2>
      <ul>
        {posts.slice(0, 10).map((post) => (
          <li key={post.id}>
            <li postId={post.id}  >{post.title}</li>
          </li>
        ))}
      </ul>

    </div>
  )
}

export default Posts