import React from 'react';
import Tour from './Tour';

/**
 * It takes in an array of tours and a function to remove a tour, and returns a section with a title
 * and a div containing a Tour component for each tour in the array.
 * @returns An array of Tour components.
 */
const Tours = ({ tours, removeTour }) => {
    return (
        <section>
            <div className="title">
                <h2>our tours</h2>
                <div className="underline"></div>
            </div>
            <div>
                {tours?.map((tour) => {
                    return (
                        <Tour
                            key={tour.id}
                            {...tour}
                            removeTour={removeTour}
                        ></Tour>
                    );
                })}
            </div>
        </section>
    );
};

export default Tours;
