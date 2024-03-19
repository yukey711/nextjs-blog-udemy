import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import Layout, { siteTitle } from "@/components/Layout";
import utilStyles from "../styles/utils.module.css";
import { getPostsData } from "@/lib/post";

// SSGの場合
export async function getStaticProps(){
  const allPostsData = getPostsData();
  console.log(allPostsData);
  return{
    props:{
      allPostsData,
    }
  }
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <p>私は日本人です。ただいまネクストのべんきょうをしています。できる限り頑張ります。よろしくお願いします。</p>
        <h2>📝エンジニアの記録</h2>
      </section>
      <section>
        <div className={styles.grid}>
          {allPostsData.map(({id, title, date, thumbnail }) => (
              <article key={id}>
              <Link href={`/posts/${id}`}>
                <img src={`${thumbnail}`} alt=""
                    className={styles.thumbnailImage}
                />

              </Link>
              <Link legacyBehavior href={`/posts/${id}`}>
                <a href="" className={utilStyles.boldText}>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>{date}</small>
            </article>
          ))}
          
        </div>
      </section>
      
    </Layout>
  );
}
