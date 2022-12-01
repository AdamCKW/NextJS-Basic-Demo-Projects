import Head from 'next/head';
import React, { useState } from 'react';
import SingleColor from './SingleColor';
import Values from 'values.js';

export default function Home() {
    const [color, setColor] = useState('');
    const [error, setError] = useState(false);
    const [list, setList] = useState(new Values('#f15025').all(10));

    /**
     * `handleSubmit` is a function that takes an event as an argument, prevents the default action of
     * the event, and then tries to create a new instance of the `Values` class with the `color`
     * variable as the argument. If the instance is created successfully, the `setList` function is
     * called with the `colors` variable as the argument. If the instance is not created successfully,
     * the `setError` function is called with the `true` boolean as the argument
     * @param e - the event object
     */
    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            let colors = new Values(color).all(10);
            setList(colors);
            setError(false);
        } catch (error) {
            setError(true);
        }
    };

    return (
        <div>
            <Head>
                <title>Color Generator Demo</title>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <section className="container">
                    <h3>color generator</h3>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            value={color}
                            name="color"
                            id="color"
                            onChange={(e) => {
                                setColor(e.target.value);
                            }}
                            placeholder="#f15025"
                            className={`${error ? 'error' : null}`}
                        />
                        <button className="btn" type="submit">
                            submit
                        </button>
                    </form>
                </section>

                {/* This is a section that is rendering a list of SingleColor components. The list is
                being mapped over and each item in the list is being passed to the SingleColor
                component as props. */}
                <section className="colors">
                    {list?.map((color, index) => {
                        return (
                            <SingleColor
                                key={index}
                                {...color}
                                index={index}
                                hex={color.hex}
                            />
                        );
                    })}
                </section>
            </main>
        </div>
    );
}