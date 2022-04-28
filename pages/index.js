import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../components/Layout";
import utilStyle from "../styles/utils.module.css";

export default function Home() {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className={utilStyle.headingMd}>
                <p>[my blog post site]</p>
                
                <h2>
                    <Link href="/posts/first-post">
              <a>
                put your first post hire please
                        </a>
                    </Link>
                </h2>
            </section>
        </Layout>
    );
}
