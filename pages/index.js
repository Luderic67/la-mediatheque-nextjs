import Head from 'next/head'
import {Bebas_Neue, Quicksand} from "next/font/google";

const bebasNeue = Bebas_Neue({
    weight: '400',
    subsets: ['latin'],
});
const quicksand = Quicksand({
    weight: '400',
    subsets: ['latin'],
});

export default function Home() {
    return (
        <div className={quicksand.className}>
            <Head>
                <title>LaMediatheque</title>
                <meta name="description"
                      content="LaMediatheque est un site de critique d'oeuvre multimedia et de création de watch list"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main style={{
                width: "100vw",
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                background: "black"
            }}>
                <div style={{display: "flex",}}>
                    <span
                        style={{
                            fontSize: 14,
                            lineHeight: "12px",
                            display: "inline-block",
                            paddingRight: ".2rem",
                            color: "white"
                        }}
                    >La</span>
                    <span
                        style={{
                            fontSize: 30,
                            display: "inline-block",
                            lineHeight: "24px",
                            color: "white"
                        }}
                        className={bebasNeue.className}
                    >MEDIATHEQUE</span>
                </div>
                <p style={{color: "white", marginTop: "2rem", fontSize: 12}}>Les travaux ont repris, des news seront
                    bientôt disponibles !</p>
            </main>
        </div>
    )
}
