import React, { useState, useEffect } from 'react';
import rgbToHex from './utils';

/**
 * It's a React component that takes in an array of rgb values, a weight, an index, and a hex value. It
 * then sets an alert state to false, and a rgbString state to the rgb values joined by commas. It then
 * sets a hexColor state to the rgb values converted to hex. It then sets an effect that sets the alert
 * state to false after 3 seconds. It then returns a styled article element that has a click handler
 * that sets the alert state to true, and copies the hex value to the clipboard
 * @returns A React component.
 */
const SingleColor = ({ rgb, weight, index, hex }) => {
    const [alert, setAlert] = useState(false);
    const rgbString = rgb?.join(',');
    const hexColor = rgbToHex(...(rgb || []));
    // or use hex

    useEffect(() => {
        const timeout = setTimeout(() => {
            setAlert(false);
        }, 3000);

        return () => {
            clearTimeout(timeout);
        };
    }, [alert]);

    return (
        <article
            className={`color ${index > 10 && 'color-light'}`}
            style={{ backgroundColor: `rgb(${rgbString})` }}
            onClick={() => {
                setAlert(true);
                navigator.clipboard.writeText(hex);
            }}
        >
            <p className="percent-value">{weight}%</p>
            <p className="color-value">{hexColor}</p>
            {alert && <p className="alert">copied to clipboard</p>}
        </article>
    );
};

export default SingleColor;
