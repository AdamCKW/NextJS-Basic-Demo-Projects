import Head from 'next/head';
import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from '../data';

/* Creating an array of all the categories in the data.json file. */
const allCategories = ['all', ...new Set(items?.map((item) => item.category))];

/**
 * We're using the useState hook to set the initial state of the menuItems and categories variables,
 * then we're using the filterItems function to filter the menuItems based on the category that's
 * passed in
 * @returns The return statement is returning the JSX that will be rendered to the screen.
 */
export default function Home() {
    const [menuItems, setMenuItems] = useState(items);
    const [categories, setCategories] = useState(allCategories);

    /**
     * If the category is 'all', then set the menu items to the original items array. Otherwise, filter
     * the items array and set the menu items to the filtered array
     * @param category - The category that the user clicked on.
     * @returns the newItems array.
     */
    const filterItems = (category) => {
        if (category === 'all') {
            setMenuItems(items);
            return;
        }

        const newItems = items.filter((item) => item.category === category);
        setMenuItems(newItems);
    };

    return (
        <div>
            <Head>
                <title>Create Next App</title>
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
                <section className="menu section">
                    <div className="title">
                        <h2>our menu</h2>
                        <div className="underline"></div>
                    </div>
                    <Categories
                        categories={categories}
                        filterItems={filterItems}
                    />
                    <Menu items={menuItems} />
                </section>
            </main>

            <footer></footer>
        </div>
    );
}