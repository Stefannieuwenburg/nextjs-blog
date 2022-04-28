import Head from "next/head";
import Script from "next/script";
import Link from "next/link";
import Layout from "../../components/Layout"



export default function FirstPost() {
    return (
        <>
            <Layout>
            <Head>
                <title>first post</title>
            </Head>
            <Script
                src="https://connect.facebook.net/en_US/sdk.js"
                strategy="lazyOnload"
                onLoad={() =>
                    console.log(
                        `script loaded correctly, window.FB has been populated`
                    )
                }
            />
            <h1>First Post</h1>
            <h2>
                <Link href="/">
                    <a>Back to home page</a>
                </Link>
            </h2>
            </Layout>
        </>
    );
}
