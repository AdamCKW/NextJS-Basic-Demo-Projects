import Head from 'next/head';
import Loading from './Loading';
import React, { useState, useEffect } from 'react';
import Tours from './Tours';

const url = 'https://course-api.com/react-tours-project';

/**
 * It fetches the tours from the API, and then renders them
 */
export default function Home() {
    /* Creating two state variables, loading and tours, and setting their initial values to true and an
    empty array, respectively. */
    const [loading, setLoading] = useState(true);
    const [tours, setTours] = useState([]);

    /**
     * It takes an id as an argument, and returns a new array of tours that does not include the tour
     * with the id that was passed in
     * @param id - the id of the tour to remove
     */
    const removeTour = (id) => {
        const newTours = tours.filter((tour) => tour.id !== id);
        setTours(newTours);
    };

    /**
     * We're using the `fetch` API to make a request to the `url` variable, which is the endpoint we
     * created in the previous step. We're then using the `setTours` function to update the `tours`
     * state variable with the data we get back from the API
     */
    const fetchTours = async () => {
        setLoading(true);
        try {
            const response = await fetch(url);
            const tours = await response.json();
            setLoading(false);
            setTours(tours);
        } catch (error) {
            setLoading(false);
            console.log(error);
        }
    };

    /* It's a React hook that runs the `fetchTours` function when the component is mounted. */
    useEffect(() => {
        fetchTours();
    }, []);

    /* It's checking if the `loading` state variable is true, and if it is, it renders the `Loading`
    component. */
    if (loading) {
        return (
            <main>
                <Loading />
            </main>
        );
    }

    /* It's checking if the `tours` state variable is empty, and if it is, it renders a message
    saying that there are no tours, and a button that calls the `fetchTours` function when it's
    clicked. */
    if (tours.length === 0) {
        return (
            <main>
                <div className="title">
                    <h2>no tours</h2>
                    <button className="btn" onClick={fetchTours}>
                        refresh
                    </button>
                </div>
            </main>
        );
    }

    /* It's returning the `Head` component, which is used to add metadata to the page, and the
    `Tours` component, which is used to render the tours. */
    return (
        <>
            <Head>
                <title>Tours Demo</title>
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <Tours tours={tours} removeTour={removeTour} />
            </main>
        </>
    );
}
