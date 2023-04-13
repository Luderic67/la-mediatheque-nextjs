import Head from 'next/head';
import Link from "next/link";

export default function Home() {
    return (
        <>
            <Head>
                <title>LaMediatheque - Signin</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <div>Signin</div>
                <Link href={'/'}>Back to home</Link>
            </main>
        </>
    )
}
