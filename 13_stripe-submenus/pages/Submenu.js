import Link from 'next/link';
import React, { useState, useRef, useEffect } from 'react';
import { useGlobalContext } from '../components/context';

const Submenu = () => {
    /* Destructuring the useGlobalContext() hook. */
    const {
        isSubmenuOpen,
        location,
        page: { page, links },
    } = useGlobalContext();

    /* Creating a reference to the submenu element. */
    const container = useRef(null);

    /* Setting the initial state of the columns variable to 'col-2'. */
    const [columns, setColumns] = useState('col-2');

    /* Setting the initial state of the columns variable to 'col-2'. */
    useEffect(() => {
        setColumns('col-2');
        /* Creating a reference to the submenu element. */
        const submenu = container.current;
        /* Destructuring the location object. */
        const { center, bottom } = location;
        /* Setting the left position of the submenu. */
        submenu.style.left = `${center}px`;
        /* Setting the top position of the submenu. */
        submenu.style.top = `${bottom}px`;

        /* Setting the number of columns based on the number of links. */
        if (links?.length > 3) {
            setColumns('col-4');
        } else if (links?.length === 3) {
            setColumns('col-3');
        }
    }, [location]);

    return (
        <aside
            className={`submenu ${isSubmenuOpen ? 'show' : ''}`}
            ref={container}
        >
            <h4>{page}</h4>
            <div className={`submenu-center ${columns}`}>
                {links?.map((link, index) => {
                    const { label, icon, url } = link;
                    return (
                        <Link href={url} key={index} legacyBehavior>
                            <a>
                                {icon}
                                {label}
                            </a>
                        </Link>
                    );
                })}
            </div>
        </aside>
    );
};

export default Submenu;
