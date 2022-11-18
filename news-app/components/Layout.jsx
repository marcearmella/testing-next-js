import Head from 'next/head';

export default function Layout({children, title = 'News App'}){
    return(
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content="proyect to learn about Next js" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <header>
                🗞 News
            </header>
            <main>
                {children}
            </main>
            <style jsx>{`
                header{
                    padding: 20px;
                }
            `}</style>
        </>
    );
}