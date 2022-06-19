import { useState, useEffect } from 'react'
import {API} from 'aws-amplify'
import {listPosts} from './../src/graphql/queries'

export default function Home() {
  
  const [posts,setPosts] = useState ([]) ;

useEffect(() => {fetchPosts()} , [])


async function fetchPosts() {
  const postData = await API.graphql({query:listPosts})

  setPosts (postData.data.listPosts.items)


}

  return (

    // <div className= "bg-black min-h-screen" >Hello
     <div >
        <h1 className="text-sky-400 text-7xl font-bold underline">
          Welcome to <a href="https://nextjs.org">Next.js Sunil App haha !</a>
        
        {
          posts.map ((post,index) => (<p key = {index}>   {post.title} </p>))
        }

        </h1>

        </div>
  )
}
