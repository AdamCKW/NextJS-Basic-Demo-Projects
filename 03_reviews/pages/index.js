import Head from 'next/head';
import Review from './Review';

/**
 * The function returns a JSX element that contains a head element, a main element, and a section
 * element
 * @returns The return statement is returning the JSX code that is being written.
 */
export default function Home() {
    return (
        <>
            <Head>
                <title>Reviews Demo</title>
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <section className="container">
                    <div className="title">
                        <h2>
                            our reviews
                            <div className="underline"></div>
                        </h2>
                    </div>
                    <Review />
                </section>
            </main>
        </>
    );
}
