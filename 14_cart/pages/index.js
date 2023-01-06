import Head from 'next/head';
import { useGlobalContext } from '../components/context';

// components
import Navbar from './Navbar';
import CartContainer from './CartContainer';
// items

// import { Inter } from '@next/font/google';
// const inter = Inter({ subsets: ['latin'] });
// className={inter.className}

export default function Home() {
    const { loading } = useGlobalContext();

    if (loading) {
        return (
            <div className="loading">
                <h1>Loading...</h1>
            </div>
        );
    }

    return (
        <>
            <Head>
                <title>Cart Demo</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <Navbar />
                <CartContainer />
            </main>
        </>
    );
}