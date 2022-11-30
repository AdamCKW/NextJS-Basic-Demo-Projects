import Head from 'next/head';
import React, { useState } from 'react';
import { data } from '../data';
import List from './List';

/**
 * It's a React component that renders a list of people with birthdays today
 * @returns The return statement is returning a React element.
 */
export default function Home() {
    /* It's a React hook that allows us to use state in a functional component. */
    const [people, setPeople] = useState(data);
    return (
        <>
            <div>
                <Head>
                    <meta
                        name="viewport"
                        content="initial-scale=1.0, width=device-width"
                    />
                    <title>Birthday Reminder</title>
                </Head>
            </div>

            <main>
                <section className="container">
                    <h3>{people.length} birthdays today</h3>
                    <List people={people} />
                    <button onClick={() => setPeople([])}>clear all</button>
                </section>
            </main>
        </>
    );
}
