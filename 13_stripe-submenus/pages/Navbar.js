import React from 'react';
import Link from 'next/link';
import { FaBars } from 'react-icons/fa';
import { useGlobalContext } from '../components/context';

const Navbar = () => {
    /* Destructuring the useGlobalContext() hook. */
    const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext();

    /**
     * When the user clicks on a button, get the button's position and pass it to the openSubmenu
     * function.
     * @param e - the event object
     */
    const displaySubmenu = (e) => {
        /* Getting the text content of the button that was clicked. */
        const page = e.target.textContent;
        /* Getting the position of the button that was clicked. */
        const tempBtn = e.target.getBoundingClientRect();
        /* Getting the center of the button that was clicked. */
        const center = (tempBtn.left + tempBtn.right) / 2;
        /* Getting the bottom position of the button that was clicked. */
        const bottom = tempBtn.bottom - 3;

        /* Calling the openSubmenu function and passing in the page and the center and bottom values. */
        openSubmenu(page, { center, bottom });
    };

    /**
     * If the target of the click event does not have the class 'link-btn', then close the submenu.
     * @param e - the event object
     */
    const handleSubmenu = (e) => {
        if (!e.target.classList.contains('link-btn')) {
            closeSubmenu();
        }
    };

    return (
        <nav className="nav" onMouseOver={handleSubmenu}>
            <div className="nav-center">
                <div className="nav-header">
                    {/* Navigation Bar Logo */}
                    <picture>
                        <img
                            className="nav-logo"
                            src="/images/logo.svg"
                            alt="stripe logo"
                        />
                    </picture>

                    <button className="btn toggle-btn" onClick={openSidebar}>
                        <FaBars />
                    </button>
                </div>

                {/* Navigation Bar Links */}
                <ul className="nav-links">
                    <li>
                        <button
                            className="link-btn"
                            onMouseOver={displaySubmenu}
                        >
                            products
                        </button>
                    </li>

                    <li>
                        <button
                            className="link-btn"
                            onMouseOver={displaySubmenu}
                        >
                            developers
                        </button>
                    </li>

                    <li>
                        <button
                            className="link-btn"
                            onMouseOver={displaySubmenu}
                        >
                            company
                        </button>
                    </li>
                </ul>

                <button className="btn signin-btn">Sign in</button>
            </div>
        </nav>
    );
};

export default Navbar;
