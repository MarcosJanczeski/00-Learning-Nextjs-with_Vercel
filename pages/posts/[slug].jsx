//import { useRouter } from "next/router"
//import posts from "./posts"
//import Link from "next/link"
import Head from "next/head";
import Layout from "../../components/layout"
import { getAllPostIds, getPostData } from '../../lib/posts'
import Date from "../../components/date";
import utilStyles from '../../styles/utils.module.css'

export default function Post({ postData }) {//postData de getStaticProps
  return <Layout>
    <Head>
      <title>{postData.title}</title>
    </Head>
    <article>
      <h1 className={utilStyles.headingXl}>{postData.title}</h1>
      <div className={utilStyles.lightText}>
        <Date dateString={postData.date} />
      </div>
      <br />
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </article>
  </Layout>
  /* 
  const post = posts.find(post => post.slug === useRouter().query.slug)
  return <Layout>
  <h3>{post.title}</h3>
  <p>{post.content}</p>
  <small>{post.author}</small><br /><br />
  <Link href='/posts'>← Back to posts</Link><br /><br />
  </Layout>
  */
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.slug)
  return {
    props: {
      postData
    }
  }
}
