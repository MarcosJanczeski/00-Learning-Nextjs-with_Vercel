import Link from "next/link"
import posts from "./posts"
export default function Posts() {
  return <>
    <h1>POSTS EM DESTAQUE</h1>
    <ul>
      {posts.map((post, index) => <li key={index}>
        <h2>
          <Link href={`/posts/${post.slug}`}>{post.title}</Link>
        </h2>
      </li>)}
    </ul>
    <Link href='/'>BACK TO HOME</Link>
  </>
}
