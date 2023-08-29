import Link from "next/link"
import posts from "./posts"
import Layout from "../../components/layout"
export default function Posts() {
  return <Layout>
    <h1>POSTS EM DESTAQUE</h1>
    <ul>
      {posts.map((post, index) => <li key={index}>
        <h2>
          <Link href={`/posts/${post.slug}`}>{post.title}</Link>
        </h2>
      </li>)}
    </ul>
  </Layout>
}
