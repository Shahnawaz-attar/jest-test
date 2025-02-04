import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchPosts } from "./postsSliice"

const Posts = () => {
    const dispatch = useDispatch()
    const posts = useSelector((state) => state.posts.items)
    const status = useSelector((state) => state.posts.status)
    const error = useSelector((state) => state.posts.error)


    useEffect(()=>{
        if(status === "idle"){
            dispatch(fetchPosts())
        }

    },[status ,dispatch])

    let content;
    if(status ==="loading"){
        content = <p>Loading posts...</p>;

    }else if (status==="succeeded"){
        content = (
            <ul>
            {posts.slice(0, 10).map((post) => ( // Display first 10 posts
              <li key={post.id}>
                <strong>{post.title}</strong>
                <p>{post.body}</p>
              </li>
            ))}
          </ul>
        )
    }else if (status === 'failed') {
        content = <p>Error: {error}</p>;
      }

    return (
        <>
          <h2>Posts</h2>
          {content}
        </>
    )
}

export default Posts