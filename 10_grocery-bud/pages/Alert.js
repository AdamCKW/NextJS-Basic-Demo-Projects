import React, { useEffect } from 'react';

/**
 * The useEffect hook is called when the component is mounted and when the list prop changes. If the
 * list prop changes, the useEffect hook is called again and the timeout is cleared and a new timeout
 * is set.
 * @returns A function that takes in a parameter of type, msg, removeAlert, and list.
 */
const Alert = ({ type, msg, removeAlert, list }) => {
    useEffect(() => {
        const timeout = setTimeout(() => {
            removeAlert();
        }, 3000);

        return () => clearTimeout(timeout);
    }, [list]);
    return <p className={`alert alert-${type}`}>{msg}</p>;
};

export default Alert;
