import React, { useState } from 'react';

/**
 * It's a function that takes in an object with the properties of id, image, info, price, and name, and
 * returns a JSX element that displays the image, name, price, and info of the tour.
 * @returns A React component.
 */
const Tour = ({ id, image, info, price, name, removeTour }) => {
    /* It's a React hook that allows us to use state in a functional component. */
    const [readMore, setReadMore] = useState(false);
    const shortenInfo = readMore ? info : `${info?.substring(0, 200)}...`;

    return (
        <article className="single-tour">
            <img src={image} alt={name} />
            <footer>
                <div className="tour-info">
                    <h4>{name}</h4>
                    <h4 className="tour-price">${price}</h4>
                </div>
                {/* It's a ternary operator that checks if the readMore state is true. If it is, it
                displays the info. If it isn't, it displays the first 200 characters of the info and
                adds an ellipsis. It also has a button that toggles the readMore state. */}
                <p>
                    {shortenInfo}
                    <button onClick={() => setReadMore(!readMore)}>
                        {readMore ? 'show less' : 'read more'}
                    </button>
                </p>

                <button className="delete-btn" onClick={() => removeTour(id)}>
                    not interested
                </button>
            </footer>
        </article>
    );
};

export default Tour;
