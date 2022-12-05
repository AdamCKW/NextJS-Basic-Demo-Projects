import React from 'react';
import Link from 'next/link';
import { FaTimes } from 'react-icons/fa';
import { social, links } from '../data';
import { useGlobalContext } from '../components/context';

const Sidebar = () => {
    /* Destructuring the useGlobalContext() hook. */
    const { isSidebarOpen, closeSidebar } = useGlobalContext();

    return (
        <aside className={`sidebar ${isSidebarOpen && 'show-sidebar'}`}>
            <div className="sidebar-header">
                <picture>
                    <img src="./logo.svg" alt="coding addict" />
                </picture>

                <button className="close-btn" onClick={closeSidebar}>
                    <FaTimes />
                </button>
            </div>

            <ul className="links">
                {links?.map((link) => {
                    const { id, url, text, icon } = link;
                    return (
                        <li key={id}>
                            <Link href={url}>
                                {icon}
                                {text}
                            </Link>
                        </li>
                    );
                })}
            </ul>

            <ul className="social-icons">
                {social?.map((socials) => {
                    const { id, url, icon } = socials;
                    return (
                        <li key={id}>
                            <Link href={url}>{icon}</Link>
                        </li>
                    );
                })}
            </ul>
        </aside>
    );
};

export default Sidebar;
