import React from 'react';
import Link from 'next/link';
import { FaTimes } from 'react-icons/fa';
import sublinks from '../data';
import { useGlobalContext } from '../components/context';

/**
 * It's a sidebar that displays a list of links
 * @returns The Sidebar component is being returned.
 */

const Sidebar = () => {
    const { isSidebarOpen, closeSidebar } = useGlobalContext();

    return (
        <aside className={`sidebar-wrapper ${isSidebarOpen ? 'show' : ''}`}>
            <div className="sidebar">
                <button className="close-btn" onClick={closeSidebar}>
                    <FaTimes />
                </button>

                <div className="sidebar-links">
                    {sublinks?.map((item, index) => {
                        const { links, page } = item;
                        return (
                            // The type of sublinks
                            <article key={index}>
                                <h4>{page}</h4>

                                {/* Links Inside the Sublinks */}
                                <div className="sidebar-sublinks">
                                    {links?.map((link, index) => {
                                        const { url, icon, label } = link;
                                        return (
                                            <Link
                                                key={index}
                                                href={url}
                                                legacyBehavior
                                            >
                                                <a>
                                                    {icon}
                                                    {label}
                                                </a>
                                            </Link>
                                        );
                                    })}
                                </div>
                            </article>
                        );
                    })}
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
