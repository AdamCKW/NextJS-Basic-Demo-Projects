import Head from 'next/head';
import React, { useState } from 'react';
import data from '../data';
import SingleQuestion from './Question';

/**
 * We're using the useState hook to set the initial state of the questions to the data we imported from
 * the data.js file. Then we're mapping over the questions and returning a SingleQuestion component for
 * each question
 * @returns The question and answer are being returned.
 */
export default function Home() {
    const [questions, setQuestions] = useState(data);

    return (
        <>
            <Head>
                <title>Accordion Demo</title>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <div className="container">
                    <h3>questions and answers about login</h3>
                    <section className="info">
                        {questions?.map((questions) => {
                            return (
                                <SingleQuestion
                                    key={questions?.id}
                                    {...questions}
                                />
                            );
                        })}
                    </section>
                </div>
            </main>
        </>
    );
}
