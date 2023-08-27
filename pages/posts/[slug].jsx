import { useRouter } from "next/router"
import posts from "./posts"
import Link from "next/link"

export default function Post() {
  const post = posts.find(post => post.slug === useRouter().query.slug)
  return <>
    <h3>{post.title}</h3>
    <p>{post.content}</p>
    <small>{post.author}</small><br /><br />
    <Link href='/posts'>BACK TO POSTS</Link><br /><br />
    <Link href='/'>BACK TO HOME</Link>
  </>
}